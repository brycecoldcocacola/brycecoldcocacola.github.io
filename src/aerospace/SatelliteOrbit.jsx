import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Simplex-like 3D noise for GLSL (simplified)
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  // Permutations
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  // mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// Fractal Brownian Motion for layered detail
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  
  // Layer 1: Large continent-scale features
  value += snoise(p * frequency) * amplitude;
  frequency *= 2.0;
  amplitude *= 0.5;
  
  // Layer 2: Medium detail (peninsulas, bays)
  value += snoise(p * frequency) * amplitude;
  frequency *= 2.0;
  amplitude *= 0.5;
  
  // Layer 3: Fine detail (coastal irregularities)
  value += snoise(p * frequency) * amplitude;
  frequency *= 2.0;
  amplitude *= 0.25;
  
  return value;
}

float cloudNoise(vec2 uv, float time) {
  vec3 p = vec3(uv * 4.0, time * 0.02);
  float n = snoise(p) * 0.6;
  n += snoise(p * 2.0 + 17.0) * 0.3;
  n += snoise(p * 4.0 + 37.0) * 0.1;
  
  // Shape into cloud-like patterns
  float mask = smoothstep(-0.1, 0.5, n);
  return mask;
}

float coastNoise(vec2 uv) {
  vec3 p = vec3(uv * 6.0 + vec2(7.0, 13.0));
  float n = snoise(p) * 0.4;
  n += snoise(p * 3.0 + 5.0) * 0.3;
  n += snoise(p * 7.0 + 19.0) * 0.2;
  return smoothstep(-0.15, 0.3, n);
}

// Latitude-based features (ice caps)
float latitudeFeature(float y) {
  float absY = abs(y);
  // Ice caps at high latitudes (> ~70 degrees, i.e., > 0.95 on sphere)
  float ice = smoothstep(0.88, 1.0, absY);
  return ice;
}

// Elevation-based coloring helper
vec3 getTerrainColor(float elevation, vec2 uv, float latAbs) {
  // Ocean (low elevation)
  if (elevation < -0.05) {
    // Deep ocean gets slightly darker at poles
    float depth = smoothstep(-0.4, 0.0, elevation);
    vec3 deepOcean = vec3(0.02, 0.08, 0.25);
    vec3 shallowWater = vec3(0.12, 0.28, 0.52);
    return mix(deepOcean, shallowWater, depth);
  }
  
  // Land
  float landElev = smoothstep(-0.05, 0.3, elevation);
  
  vec3 greenLowland = vec3(0.18, 0.38, 0.15);    // Lush lowlands (tropics)
  vec3 brownHighland = vec3(0.45, 0.38, 0.22);   // Highland/temperate
  vec3 desertColor = vec3(0.76, 0.66, 0.43);     // Desert (dry zones)
  vec3 snowHighland = vec3(0.85, 0.85, 0.88);    // Mountain tops
  
  // Base land color based on latitude and elevation
  vec3 base;
  if (latAbs < 0.4) {
    // Tropics: mostly green
    base = mix(greenLowland, brownHighland, landElev * 0.7);
    // Some desert near tropics edges
    float dryness = smoothstep(0.25, 0.5, latAbs) * (1.0 - smoothstep(0.4, 0.6, latAbs));
    base = mix(base, desertColor, dryness * 0.3);
  } else if (latAbs < 0.7) {
    // Temperate: green to brown
    float tempGreen = smoothstep(0.5, 0.8, 1.0 - latAbs);
    base = mix(greenLowland * 0.9 + vec3(0.1, 0.05, 0.0), brownHighland, 1.0 - tempGreen);
  } else {
    // Polar: brown to snow
    float polarFactor = smoothstep(0.7, 0.95, latAbs);
    base = mix(brownHighland * 0.6 + vec3(-0.02, 0.01, -0.02), snowHighland, polarFactor);
  }
  
  // Add elevation detail
  float detail = smoothstep(0.15, 0.4, elevation);
  base = mix(base, snowHighland * 0.7 + vec3(0.1, 0.08, 0.05), detail * 0.6);
  
  return base;
}

// Vertex shader passes through normal for fragment processing
varying vec3 vNormal;
varying vec2 vUv;
void main() {
  vNormal = normalize(normalMatrix * normal);
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// ── Earth surface shader ──
const earthVertexShader = `
varying vec3 vWorldPos;
varying vec2 vUv;
void main() {
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const earthFragmentShader = `
varying vec3 vNormal;
varying vec2 vUv;
uniform float uTime;

${noiseGLSL}

void main() {
  // Convert UV to a point on the sphere for noise (avoids pole artifacts)
  vec3 norm = normalize(vNormal);
  
  // FBM for continent shapes
  float elevation = fbm(norm * 1.2 + vec3(0.5, 0.2, 0.8));
  
  // Blend between two noise layers to create more realistic coastlines
  float e2 = fbm(norm * 1.2 + vec3(-0.3, 0.7, 1.2));
  elevation = mix(elevation, e2, 0.4);
  
  // Latitude for ice caps and climate zones
  float latAbs = abs(vNormal.y);
  
  // Get terrain color based on elevation and latitude
  vec3 surfaceColor = getTerrainColor(elevation, vUv, latAbs);
  
  // Apply ice cap overlay
  float iceCap = latitudeFeature(norm.y);
  vec3 iceColor = vec3(0.92, 0.94, 0.96);
  surfaceColor = mix(surfaceColor, iceColor, iceCap);
  
  // Add subtle specular for ocean (water reflection)
  float isOcean = smoothstep(-0.1, -0.05, elevation);
  vec3 lightDir = normalize(vec3(8.0, 4.0, 6.0));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normalize(vNormal), halfDir), 0.0), 40.0);
  surfaceColor += vec3(0.3, 0.35, 0.4) * spec * isOcean;
  
  // Subtle ambient occlusion at edges (Fresnel darkening on the terminator side)
  float terminator = dot(normalize(vNormal), normalize(vec3(-1.0, -0.2, -0.8)));
  float shadow = smoothstep(0.0, -0.5, terminator);
  surfaceColor *= mix(1.0, 0.4, shadow);
  
  gl_FragColor = vec4(surfaceColor, 1.0);
}
`;

// ── Cloud shader ──
const cloudVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const cloudFragmentShader = `
varying vec2 vUv;
uniform float uTime;

${noiseGLSL}

void main() {
  // Create swirling cloud patterns using layered noise
  vec3 p = vec3(vUv * 4.5, uTime * 0.015);
  
  float n = snoise(p) * 0.6;
  n += snoise(p * 2.0 + vec3(7.0, 3.0, 0.0)) * 0.3;
  n += snoise(p * 4.0 + vec3(13.0, 5.0, 0.0)) * 0.1;
  
  // Shape into realistic cloud formations
  float cloud = smoothstep(0.05, 0.5, n);
  
  // Fade near poles (less cloud cover in polar regions)
  float latFade = smoothstep(0.9, 0.7, abs(vUv.y - 0.5));
  
  gl_FragColor = vec4(1.0, 1.0, 1.0, cloud * 0.35 * latFade);
}
`;

export default function SatelliteOrbit() {
  const mountRef = useRef(null);
  const animRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 3, 7);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // ── Stars ──
    const starCount = 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 400 + Math.random() * 600;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.8, sizeAttenuation: true, transparent: true, opacity: 0.9,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Earth with procedural shader (realistic continents!) ──
    const earthGroup = new THREE.Group();

    // Procedural Earth sphere using custom shader
    const earthGeo = new THREE.SphereGeometry(2, 128, 64);
    const earthMat = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: { uTime: { value: 0 } },
    });
    earthGroup.add(new THREE.Mesh(earthGeo, earthMat));

    // Cloud layer (also procedural shader)
    const cloudGeo = new THREE.SphereGeometry(2.06, 64, 32);
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertexShader,
      fragmentShader: cloudFragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    earthGroup.add(clouds);

    // ── Atmosphere glow (Fresnel shader) ──
    const atmosGeo = new THREE.SphereGeometry(2.35, 64, 32);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPositionView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vPositionView = -mvPos.xyz;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPositionView;
        void main() {
          float fresnel = 1.0 - dot(normalize(vNormal), normalize(vPositionView));
          fresnel = pow(fresnel, 2.5);
          vec3 atmosColor = mix(vec3(0.2, 0.4, 0.9), vec3(0.4, 0.7, 1.0), fresnel);
          gl_FragColor = vec4(atmosColor, fresnel * 0.5);
        }
      `,
      transparent: true, side: THREE.BackSide, depthWrite: false,
    });
    earthGroup.add(new THREE.Mesh(atmosGeo, atmosMat));

    scene.add(earthGroup);

    // ── Orbit Ring (subtle dashed) ──
    const orbitRadius = 4.2;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(128);
    const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints.map(p => new THREE.Vector3(p.x, 0, p.y)));
    const orbitMaterial = new THREE.LineDashedMaterial({
      color: 0x4488ff, transparent: true, opacity: 0.15, dashSize: 0.2, gapSize: 0.3,
    });
    scene.add(new THREE.Line(orbitLineGeo, orbitMaterial));

    // ── Satellite ──
    const satGroup = new THREE.Group();

    const bodyMat = new THREE.MeshPhongMaterial({ color: 0x888899, shininess: 60 });
    const panelMat = new THREE.MeshPhongMaterial({ color: 0x1a1a6e, emissive: 0x1122aa, emissiveIntensity: 0.3, shininess: 90 });

    satGroup.add(new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.25), bodyMat));
    const panelL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.01, 0.12), panelMat);
    panelL.position.x = -0.3;
    satGroup.add(panelL);
    const panelR = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.01, 0.12), panelMat);
    panelR.position.x = 0.3;
    satGroup.add(panelR);

    // Antenna dish
    const antennaBase = new THREE.CylinderGeometry(0.01, 0.01, 0.15, 8);
    satGroup.add(new THREE.Mesh(antennaBase, new THREE.MeshPhongMaterial({ color: 0xcccccc })).translateY(0.15));

    const dishGeo = new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const dish = new THREE.Mesh(dishGeo, new THREE.MeshPhongMaterial({ color: 0xeeeeee, side: THREE.DoubleSide }));
    dish.position.y = 0.22;
    dish.rotation.x = Math.PI;
    satGroup.add(dish);

    scene.add(satGroup);

    // ── Lights (for satellite only, earth uses its own shader) ──
    scene.add(new THREE.AmbientLight(0x223344, 0.4));
    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    sunLight.position.set(8, 4, 6);
    scene.add(sunLight);
    scene.add(new THREE.DirectionalLight(0x334466, 0.15).translate(-5, -2, -4));

    // ── Animation ──
    let prevTime = performance.now();

    function animate() {
      animRef.current = requestAnimationFrame(animate);
      const time = (performance.now() - prevTime) / 1000;
      prevTime = performance.now();

      // Rotate Earth slowly
      earthGroup.rotation.y += time * 0.03;

      // Clouds rotate slightly faster for parallax effect
      clouds.rotation.y += time * 0.04;

      // Update shader uniforms
      earthMat.uniforms.uTime.value = time;
      cloudMat.uniforms.uTime.value = time;

      // Satellite orbit
      const angle = time * 0.3;
      satGroup.position.x = Math.cos(angle) * orbitRadius;
      satGroup.position.z = Math.sin(angle) * orbitRadius;
      satGroup.position.y = Math.sin(time * 0.6) * 0.4;

      const lookTarget = new THREE.Vector3(0, 0, 0);
      satGroup.lookAt(lookTarget);
      satGroup.rotation.z += Math.sin(time * 1.5) * 0.1;

      renderer.render(scene, camera);
    }

    animate();

    // ── Resize handler ──
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Pause when off-screen ──
    let visible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!visible && entries[0].isIntersecting) { animate(); visible = true; }
        else if (visible && !entries[0].isIntersecting) { cancelAnimationFrame(animRef.current); animRef.current = null; visible = false; }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (container && renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
