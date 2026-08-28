import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ── GLSL noise ──
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

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

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
}

// 6-octave FBM for richer terrain
float fbm(vec3 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    value += snoise(p * frequency) * amplitude;
    frequency *= 2.1;
    amplitude *= 0.48;
  }
  return value;
}

// Domain warping for more organic shapes
float warpedFbm(vec3 p) {
  vec3 q = p * 1.0;
  float w1 = snoise(q * 0.8 + vec3(1.7, 4.2, 2.1)) * 0.4;
  float w2 = snoise(q * 0.8 + vec3(8.3, 2.5, 6.1)) * 0.4;
  vec3 warped = p + vec3(w1, w2, w1 * w2) * 0.5;
  return fbm(warped, 6);
}
`;

// ── Earth shader ──
const earthVertexShader = `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewDir;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  vViewDir = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const earthFragmentShader = `
uniform vec3 uSunDir;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewDir;

${noiseGLSL}

void main() {
  vec3 n = normalize(vNormal);

  // Elevation with domain warping for organic continents
  float e1 = fbm(n * 1.1 + vec3(0.3, 0.7, 0.5), 5);
  float e2 = fbm(n * 2.3 + vec3(-1.2, 0.4, 2.1), 4);
  float elevation = e1 + e2 * 0.3;

  // Sharpen coastlines
  float coast = smoothstep(-0.02, 0.04, elevation);

  // Latitude
  float latAbs = abs(n.y);

  // ── Ocean ──
  vec3 deepOcean = vec3(0.008, 0.04, 0.12);
  vec3 shallowOcean = vec3(0.04, 0.14, 0.28);
  float oceanDepth = smoothstep(-0.5, -0.02, elevation);
  vec3 oceanColor = mix(deepOcean, shallowOcean, oceanDepth);

  // ── Land biomes ──
  float landDetail = smoothstep(0.04, 0.25, elevation);
  float mountains = smoothstep(0.25, 0.55, elevation);

  // Moisture noise for biome variation
  float moisture = snoise(n * 3.2 + vec3(5.1, 2.3, 7.8)) * 0.5 + 0.5;

  vec3 tropical = vec3(0.08, 0.28, 0.06);
  vec3 temperate = vec3(0.12, 0.22, 0.08);
  vec3 arid = vec3(0.38, 0.30, 0.14);
  vec3 tundra = vec3(0.25, 0.27, 0.24);
  vec3 snow = vec3(0.72, 0.74, 0.78);

  // Tropical/temperate band (equator to mid-lat)
  vec3 landBase = mix(tropical, temperate, smoothstep(0.15, 0.45, latAbs));
  // Arid zones (around 25-40 degrees)
  float aridBand = smoothstep(0.25, 0.38, latAbs) * (1.0 - smoothstep(0.45, 0.6, latAbs));
  float dryness = (1.0 - moisture) * aridBand;
  landBase = mix(landBase, arid, dryness * 0.7);
  // Tundra / polar
  landBase = mix(landBase, tundra, smoothstep(0.6, 0.8, latAbs));
  // Mountains → snow
  landBase = mix(landBase, snow, mountains);
  // Snow caps at high elevation regardless of latitude
  float snowCap = smoothstep(0.35, 0.6, elevation);
  landBase = mix(landBase, snow, snowCap * (1.0 - smoothstep(0.0, 0.3, latAbs)));

  // Blend land/ocean
  vec3 surfaceColor = mix(oceanColor, landBase, coast);

  // ── Ice caps ──
  float iceCap = smoothstep(0.82, 0.95, latAbs);
  vec3 iceColor = vec3(0.85, 0.88, 0.92);
  surfaceColor = mix(surfaceColor, iceColor, iceCap);

  // ── Lighting ──
  float nDotL = dot(n, uSunDir);
  float dayLight = smoothstep(-0.15, 0.2, nDotL);
  float terminator = smoothstep(-0.05, 0.15, nDotL);

  // Ambient (dark side not fully black)
  vec3 ambient = surfaceColor * 0.04;

  // Diffuse
  vec3 diffuse = surfaceColor * max(nDotL, 0.0) * 0.9;

  // Specular on ocean only
  vec3 halfVec = normalize(uSunDir + vViewDir);
  float spec = pow(max(dot(n, halfVec), 0.0), 80.0);
  float oceanMask = 1.0 - coast;
  vec3 specular = vec3(0.6, 0.7, 0.9) * spec * oceanMask * dayLight * 0.8;

  vec3 lit = ambient + diffuse + specular;

  // ── Night side city lights (on land, dark side) ──
  float nightMask = 1.0 - terminator;
  float cityNoise = snoise(n * 28.0 + vec3(1.3, 5.7, 3.2));
  float cityMask = smoothstep(0.7, 0.85, cityNoise) * coast;
  // Concentrate near coasts (where elevation is low land)
  float nearCoast = smoothstep(0.12, 0.04, elevation) * coast;
  cityMask = max(cityMask * 0.6, nearCoast * smoothstep(0.55, 0.75, cityNoise));
  vec3 cityLight = vec3(1.0, 0.85, 0.5) * cityMask * nightMask * 0.4;

  // Terminator warmth
  float termWarmth = smoothstep(0.0, 0.12, nDotL) * (1.0 - smoothstep(0.12, 0.3, nDotL));
  vec3 termColor = vec3(0.35, 0.12, 0.04) * termWarmth * 0.3 * coast;

  gl_FragColor = vec4(lit + cityLight + termColor, 1.0);
}
`;

// ── Cloud shader ──
const cloudVertexShader = `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const cloudFragmentShader = `
uniform float uTime;
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

${noiseGLSL}

void main() {
  vec3 n = normalize(vNormal);
  // Scroll clouds slowly
  vec3 p = n * 2.5 + vec3(uTime * 0.008, 0.0, uTime * 0.003);

  float n1 = snoise(p) * 0.5;
  float n2 = snoise(p * 2.1 + vec3(3.7, 1.2, 5.4)) * 0.3;
  float n3 = snoise(p * 4.3 + vec3(8.1, 6.3, 2.7)) * 0.15;
  float n4 = snoise(p * 8.7 + vec3(2.2, 9.5, 4.1)) * 0.05;

  float cloudDensity = n1 + n2 + n3 + n4;

  // Shape clouds - use smoothstep for fluffy edges
  float cloud = smoothstep(0.1, 0.55, cloudDensity);

  // Reduce clouds near poles
  float latFade = smoothstep(0.9, 0.75, abs(n.y));
  cloud *= latFade;

  // Cloud lighting
  float nDotL = dot(n, uSunDir);
  float cloudLight = smoothstep(-0.1, 0.3, nDotL);

  // Cloud color: white lit, grey shadowed
  vec3 cloudColor = mix(vec3(0.35, 0.38, 0.45), vec3(1.0, 0.98, 0.95), cloudLight);

  // Cloud shadows on earth (handled via opacity)
  float alpha = cloud * 0.5;

  gl_FragColor = vec4(cloudColor, alpha);
}
`;

// ── Atmosphere shaders ──
const atmosVertexShader = `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const atmosFragmentShader = `
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);

  // Fresnel - how much we look through atmosphere
  float fresnel = 1.0 - dot(n, viewDir);
  fresnel = pow(fresnel, 3.5);

  // Sun-facing glow (stronger where sun hits atmosphere)
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float limbGlow = fresnel * (0.3 + sunFacing * 0.7);

  // Blue-dominant atmospheric scattering
  vec3 atmosColor = vec3(0.2, 0.5, 1.0) * limbGlow;

  // Warm band near terminator (subtle sunset)
  float nDotL = dot(n, uSunDir);
  float termBand = smoothstep(-0.05, 0.15, nDotL) * (1.0 - smoothstep(0.15, 0.4, nDotL));
  vec3 sunsetColor = vec3(1.0, 0.4, 0.15) * termBand * fresnel * 0.6;

  vec3 finalColor = atmosColor + sunsetColor;

  gl_FragColor = vec4(finalColor, fresnel * 0.7);
}
`;

// Outer glow (larger sphere, very soft)
const outerAtmosFragmentShader = `
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);

  float fresnel = 1.0 - dot(n, viewDir);
  fresnel = pow(fresnel, 2.0);

  // Very soft outer glow
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float intensity = fresnel * (0.05 + sunFacing * 0.12);

  vec3 glowColor = vec3(0.15, 0.4, 0.9) * intensity;

  gl_FragColor = vec4(glowColor, intensity * 0.5);
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
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 2000);
    camera.position.set(0, 1.5, 6.5);
    camera.lookAt(0, -0.2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Sun direction
    const sunDir = new THREE.Vector3(1.0, 0.3, 0.6).normalize();

    // ── Stars ──
    const starCount = 4000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 500 + Math.random() * 500;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
      starSizes[i] = Math.random() * 1.5 + 0.3;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.7, sizeAttenuation: true, transparent: true, opacity: 0.85,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Earth ──
    const earthGroup = new THREE.Group();

    const earthGeo = new THREE.SphereGeometry(2.2, 128, 64);
    const earthMat = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uSunDir: { value: sunDir },
      },
    });
    earthGroup.add(new THREE.Mesh(earthGeo, earthMat));

    // Clouds
    const cloudGeo = new THREE.SphereGeometry(2.25, 96, 48);
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertexShader,
      fragmentShader: cloudFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: sunDir },
      },
      transparent: true,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    earthGroup.add(clouds);

    // Inner atmosphere (tight glow on the limb)
    const atmosGeo = new THREE.SphereGeometry(2.32, 64, 32);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertexShader,
      fragmentShader: atmosFragmentShader,
      uniforms: { uSunDir: { value: sunDir } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(atmosGeo, atmosMat));

    // Outer atmosphere (softer, wider glow)
    const outerAtmosGeo = new THREE.SphereGeometry(2.6, 64, 32);
    const outerAtmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertexShader,
      fragmentShader: outerAtmosFragmentShader,
      uniforms: { uSunDir: { value: sunDir } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(outerAtmosGeo, outerAtmosMat));

    earthGroup.position.y = -0.3;
    scene.add(earthGroup);

    // ── Orbit ring ──
    const orbitRadius = 3.6;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(128);
    const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints.map(p => new THREE.Vector3(p.x, 0, p.y)));
    const orbitMaterial = new THREE.LineDashedMaterial({
      color: 0xe8b36b, transparent: true, opacity: 0.15, dashSize: 0.2, gapSize: 0.4,
    });
    const orbitLine = new THREE.Line(orbitLineGeo, orbitMaterial);
    orbitLine.computeLineDistances();
    orbitLine.position.y = -0.3;
    scene.add(orbitLine);

    // ── Satellite ──
    const satGroup = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.4, metalness: 0.8 });
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a8e, emissive: 0x112266, emissiveIntensity: 0.4, roughness: 0.3, metalness: 0.6 });

    satGroup.add(new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.22), bodyMat));
    const panelL = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.008, 0.11), panelMat);
    panelL.position.x = -0.28;
    satGroup.add(panelL);
    const panelR = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.008, 0.11), panelMat);
    panelR.position.x = 0.28;
    satGroup.add(panelR);

    const dishMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.5 });
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 8), dishMat);
    antenna.position.y = 0.14;
    satGroup.add(antenna);

    const dishGeo = new THREE.SphereGeometry(0.05, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const dish = new THREE.Mesh(dishGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.6 }));
    dish.position.y = 0.2;
    dish.rotation.x = Math.PI;
    satGroup.add(dish);

    scene.add(satGroup);

    // Lights for satellite
    scene.add(new THREE.AmbientLight(0x223355, 0.3));
    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.0);
    sunLight.position.copy(sunDir).multiplyScalar(100);
    scene.add(sunLight);

    // ── Animation ──
    const start = performance.now();
    let prevTime = performance.now();
    let running = true;

    function animate() {
      if (!running) return;
      animRef.current = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;
      const elapsed = (now - start) / 1000;

      earthGroup.rotation.y += dt * 0.02;
      clouds.rotation.y += dt * 0.028;

      cloudMat.uniforms.uTime.value = elapsed;

      // Satellite orbit
      const angle = elapsed * 0.25;
      satGroup.position.set(
        Math.cos(angle) * orbitRadius,
        Math.sin(elapsed * 0.5) * 0.3 - 0.3,
        Math.sin(angle) * orbitRadius,
      );
      satGroup.lookAt(0, -0.3, 0);
      satGroup.rotation.z = Math.sin(elapsed * 1.2) * 0.08;

      renderer.render(scene, camera);
    }

    animate();

    // ── Resize ──
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Pause off-screen ──
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          running = true;
          prevTime = performance.now();
          animate();
        } else {
          running = false;
          if (animRef.current) cancelAnimationFrame(animRef.current);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => {
      running = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
        materials.forEach((m) => m && m.dispose());
      });
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
