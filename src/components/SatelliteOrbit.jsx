import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Master-Maps style Blue Marble textures (served via jsDelivr with CORS so
// WebGL can sample them). Day = surface, night = city lights, spec = ocean mask.
const BASE = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r185/examples/textures/planets/';

// ── Globe shader: Lambert day / night-lights blend + ocean specular + rim ──
const globeVertex = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const globeFragment = `
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uSpec;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 n = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);

  vec4 day = texture2D(uDay, vUv);
  vec4 night = texture2D(uNight, vUv);
  float ocean = texture2D(uSpec, vUv).r;

  float nDotL = dot(n, uSunDir);
  float dayLight = smoothstep(-0.12, 0.18, nDotL);

  vec3 base = night.rgb * 1.4;
  base = mix(base, day.rgb, dayLight);

  // Warm sunset band across the terminator.
  float term = smoothstep(-0.35, 0.0, nDotL) * (1.0 - smoothstep(0.0, 0.22, nDotL));
  base += vec3(0.55, 0.22, 0.06) * term * 0.4 * ocean;
  base += vec3(0.45, 0.18, 0.05) * term * 0.18 * (1.0 - ocean);

  // Glossy ocean specular only on lit water.
  vec3 halfVec = normalize(uSunDir + viewDir);
  float spec = pow(max(dot(n, halfVec), 0.0), 70.0);
  base += vec3(1.0, 0.96, 0.85) * spec * ocean * dayLight;

  // Faint cool rim light on the limb.
  float rim = pow(1.0 - max(dot(viewDir, n), 0.0), 3.0);
  base += vec3(0.25, 0.5, 1.0) * rim * 0.18;

  gl_FragColor = vec4(base, 1.0);
}
`;

// ── Clouds shader: lit/dark grey, alpha from texture ──
const cloudVertex = `
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const cloudFragment = `
uniform sampler2D uClouds;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec4 c = texture2D(uClouds, vUv);
  float nDotL = dot(normalize(vNormal), uSunDir);
  float light = 0.35 + 0.65 * smoothstep(-0.4, 0.4, nDotL);
  vec3 col = vec3(light * 1.05, light, light * 0.98);
  gl_FragColor = vec4(col, c.a * 0.9);
}
`;

// ── Atmosphere shader (limb glow) ──
const atmosVertex = `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const atmosFragment = `
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);

  float fresnel = 1.0 - dot(n, viewDir);
  fresnel = pow(fresnel, 3.5);

  float sunFacing = max(dot(n, uSunDir), 0.0);
  float limbGlow = fresnel * (0.35 + sunFacing * 0.65);

  vec3 atmosColor = vec3(0.22, 0.5, 1.0) * limbGlow;

  float nDotL = dot(n, uSunDir);
  float termBand = smoothstep(-0.05, 0.15, nDotL) * (1.0 - smoothstep(0.15, 0.45, nDotL));
  vec3 sunsetColor = vec3(1.0, 0.4, 0.15) * termBand * fresnel * 0.6;

  vec3 finalColor = atmosColor + sunsetColor;
  gl_FragColor = vec4(finalColor, fresnel * 0.7);
}
`;

const outerAtmosFragment = `
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);

  float fresnel = pow(1.0 - dot(n, viewDir), 2.0);
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float intensity = fresnel * (0.06 + sunFacing * 0.14);

  vec3 glowColor = vec3(0.15, 0.4, 0.9) * intensity;
  gl_FragColor = vec4(glowColor, intensity * 0.55);
}
`;

// ── Procedural seamless sphere noise → used as fallback earth textures. ──
function makeValueNoise3(seed) {
  const hash = (x, y, z) => {
    let h = (x * 374761393 + y * 668265263 + z * 1274126155) ^ (seed * 1103515245);
    h = (h ^ (h >>> 13)) * 1274126155;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  };
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + (b - a) * t;
  const value = (x, y, z) => {
    const i = Math.floor(x), j = Math.floor(y), k = Math.floor(z);
    const fx = fade(x - i), fy = fade(y - j), fz = fade(z - k);
    const v000 = hash(i, j, k), v100 = hash(i + 1, j, k);
    const v010 = hash(i, j + 1, k), v110 = hash(i + 1, j + 1, k);
    const v001 = hash(i, j, k + 1), v101 = hash(i + 1, j, k + 1);
    const v011 = hash(i, j + 1, k + 1), v111 = hash(i + 1, j + 1, k + 1);
    return lerp(
      lerp(lerp(v000, v100, fx), lerp(v010, v110, fx), fy),
      lerp(lerp(v001, v101, fx), lerp(v011, v111, fx), fy),
      fz,
    );
  };
  return function fbm(x, y, z, octaves = 5) {
    let v = 0, amp = 0.5, f = 1;
    for (let i = 0; i < octaves; i++) {
      v += value(x * f, y * f, z * f) * amp;
      f *= 2.05; amp *= 0.5;
    }
    return v;
  };
}

// Equirectangular UV → unit-sphere direction (so noise tiles seamlessly).
function equirectDir(u, v) {
  const theta = u * Math.PI * 2 - Math.PI * 0.5;
  const phi = v * Math.PI;
  const s = Math.sin(phi), c = Math.cos(phi);
  return [Math.cos(theta) * s, c, Math.sin(theta) * s];
}

function makeEarthDayTexture() {
  const fbm = makeValueNoise3(7);
  const fbm2 = makeValueNoise3(41);
  const w = 1024, h = 512;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [nx, ny, nz] = equireDir((x + 0.5) / w, (y + 0.5) / h);
      const e = fbm(nx * 1.6 + 0.5, ny * 1.6, nz * 1.6, 6) - 0.32;
      const idx = (y * w + x) << 2;
      const absLat = Math.abs(ny);
      if (e < 0.0) {
        const depth = Math.min(1, Math.max(0, -e / 0.5));
        const r = 6 + 18 * (1 - depth), g = 34 + 50 * (1 - depth), b = 70 + 60 * (1 - depth);
        img.data[idx] = r; img.data[idx + 1] = g; img.data[idx + 2] = b; img.data[idx + 3] = 255;
        continue;
      }
      const moist = fbm2(nx * 2.2 + 3.1, ny * 2.2 + 1.4, nz * 2.2 + 6.0, 4);
      let r, g, b;
      if (absLat > 0.72 || e > 0.34) { r = 215; g = 220; b = 228; } // snow
      else if (moist < 0.42 && absLat > 0.18 && absLat < 0.45) { r = 150; g = 124; b = 70; } // desert
      else { const t = Math.min(1, e / 0.3); r = 30 + t * 40; g = 90 + t * 50; b = 34 + t * 24; }
      img.data[idx] = r; img.data[idx + 1] = g; img.data[idx + 2] = b; img.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeEarthNightTexture() {
  const fbm = makeValueNoise3(21);
  const w = 1024, h = 512;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [nx, ny, nz] = equireDir((x + 0.5) / w, (y + 0.5) / h);
      const e = fbm(nx * 1.6 + 0.5, ny * 1.6, nz * 1.6, 6) - 0.32;
      const idx = (y * w + x) << 2;
      img.data[idx] = 1; img.data[idx + 1] = 2; img.data[idx + 2] = 6; img.data[idx + 3] = 255;
      if (e > 0.0) {
        const cluster = fbm(nx * 9.0 + 2.0, ny * 9.0 + 4.0, nz * 9.0 + 1.0, 4);
        const near = Math.min(1, Math.max(0, 1 - e / 0.06));
        const city = Math.max(0, cluster - 0.55) * (0.4 + near * 0.6) * 2.2;
        if (city > 0) {
          img.data[idx] = Math.min(255, city * 255);
          img.data[idx + 1] = Math.min(220, city * 170);
          img.data[idx + 2] = Math.min(180, city * 90);
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeEarthSpecTexture() {
  const fbm = makeValueNoise3(7);
  const w = 1024, h = 512;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [nx, ny, nz] = equireDir((x + 0.5) / w, (y + 0.5) / h);
      const e = fbm(nx * 1.6 + 0.5, ny * 1.6, nz * 1.6, 6) - 0.32;
      const idx = (y * w + x) << 2;
      const v = e < 0 ? 255 : 0;
      img.data[idx] = v; img.data[idx + 1] = v; img.data[idx + 2] = v; img.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  return t;
}

function makeCloudTexture() {
  const fbm = makeValueNoise3(99);
  const w = 1024, h = 512;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [nx, ny, nz] = equireDir((x + 0.5) / w, (y + 0.5) / h);
      const dens = fbm(nx * 2.4 + 7.0, ny * 2.4 + 2.0, nz * 2.4 + 5.0, 6);
      const cloud = Math.min(1, Math.max(0, (dens - 0.46) * 2.6)) * Math.min(1, Math.max(0.2, 1 - (Math.abs(ny) - 0.7) * 2));
      const idx = (y * w + x) << 2;
      img.data[idx] = img.data[idx + 1] = img.data[idx + 2] = 255;
      img.data[idx + 3] = cloud * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Small helper so the equirect mapping is used consistently.
function equireDir(u, v) {
  return equirectDir(u, v);
}

export default function SatelliteOrbit() {
  const mountRef = useRef(null);
  const animRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 2000);
    camera.position.set(0, 1.5, 6.5);
    camera.lookAt(0, -0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const sunDir = new THREE.Vector3(1.0, 0.3, 0.6).normalize();

    // ── Point-cloud stars ──
    const starCount = 4000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 500 + Math.random() * 500;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.7, sizeAttenuation: true, transparent: true, opacity: 0.85,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Globe group (rotated by drag + slow spin) ──
    const globeGroup = new THREE.Group();

    // Procedural fallback textures so a planet is always visible (e.g. offline).
    const fallbackDay = makeEarthDayTexture();
    const fallbackNight = makeEarthNightTexture();
    const fallbackSpec = makeEarthSpecTexture();
    const fallbackCloud = makeCloudTexture();

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    const loadTex = (url) => new Promise((res) => {
      loader.load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; res(t); }, undefined, () => res(null));
    });

    let globeMat = null;
    let clouds = null;
    const earthGroup = new THREE.Group();
    earthGroup.position.y = -0.3;
    scene.add(earthGroup);

    // Placeholder globe shown while textures stream in.
    const earthGeo = new THREE.SphereGeometry(2.2, 128, 64);
    const earthMat = new THREE.ShaderMaterial({
      vertexShader: globeVertex,
      fragmentShader: globeFragment,
      uniforms: {
        uDay: { value: fallbackDay },
        uNight: { value: fallbackNight },
        uSpec: { value: fallbackSpec },
        uSunDir: { value: sunDir },
      },
    });
    globeMat = earthMat;
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Clouds.
    const cloudGeo = new THREE.SphereGeometry(2.28, 96, 48);
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertex,
      fragmentShader: cloudFragment,
      uniforms: {
        uClouds: { value: fallbackCloud },
        uSunDir: { value: sunDir },
      },
      transparent: true,
      depthWrite: false,
    });
    clouds = new THREE.Mesh(cloudGeo, cloudMat);
    earthGroup.add(clouds);

    // Atmosphere (tight limb glow + soft outer halo).
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: atmosFragment,
      uniforms: { uSunDir: { value: sunDir } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.34, 64, 32), atmosMat));

    const outerAtmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: outerAtmosFragment,
      uniforms: { uSunDir: { value: sunDir } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.7, 64, 32), outerAtmosMat));

    // ── Orbit ring ──
    const orbitRadius = 3.6;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(128);
    const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints.map((p) => new THREE.Vector3(p.x, 0, p.y)));
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

    scene.add(new THREE.AmbientLight(0x223355, 0.3));
    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.0);
    sunLight.position.copy(sunDir).multiplyScalar(100);
    scene.add(sunLight);

    // ── Drag-to-spin state ──
    const spin = { rotX: 0.08, rotY: -0.5, velX: 0, velY: 0 };
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const canvas = renderer.domElement;
    canvas.style.touchAction = 'none';
    canvas.style.cursor = 'grab';

    const onPointerDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      spin.velX = 0;
      spin.velY = 0;
      canvas.style.cursor = 'grabbing';
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      const k = 0.006;
      spin.rotY += dx * k;
      spin.rotX += dy * k;
      spin.rotX = Math.max(-0.6, Math.min(0.6, spin.rotX));
      spin.velY = dx * k;
      spin.velX = dy * k;
    };
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      canvas.style.cursor = 'grab';
    };
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    // ── Load textures, then swap into uniforms ──
    let disposed = false;
    Promise.all([
      loadTex(BASE + 'earth_atmos_2048.jpg'),
      loadTex(BASE + 'earth_lights_2048.png'),
      loadTex(BASE + 'earth_specular_2048.jpg'),
      loadTex(BASE + 'earth_clouds_1024.png'),
    ]).then(([day, night, spec, cloud]) => {
      if (disposed) return;
      if (day) globeMat.uniforms.uDay.value = day;
      if (night) globeMat.uniforms.uNight.value = night;
      if (spec) globeMat.uniforms.uSpec.value = spec;
      if (cloud) cloudMat.uniforms.uClouds.value = cloud;
    });

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

      // Slow base spin blended into user drag inertia.
      spin.rotY += dt * 0.04;
      if (!dragging) {
        spin.velX *= 0.95;
        spin.velY *= 0.95;
        spin.rotY += spin.velY;
        spin.rotX += spin.velX;
        spin.rotX = Math.max(-0.6, Math.min(0.6, spin.rotX));
      }
      earthGroup.rotation.set(spin.rotX, spin.rotY, 0);
      if (clouds) clouds.rotation.y += dt * 0.01;

      // Satellite orbit.
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

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

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
      disposed = true;
      running = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
        materials.forEach((m) => {
          if (!m) return;
          ['uDay', 'uNight', 'uSpec', 'uClouds'].forEach((u) => {
            if (m.uniforms && m.uniforms[u] && m.uniforms[u].value) m.uniforms[u].value.dispose?.();
          });
          m.dispose();
        });
      });
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
