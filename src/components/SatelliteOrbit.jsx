import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Master-Maps style Blue Marble textures (served via jsDelivr with CORS so
// WebGL can sample them). Day = surface, night = city lights, spec = ocean mask.
const BASE = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r185/examples/textures/planets/';

// ── Globe shader: soft wrap-lighting day / night-lights blend, gentle sheen ──
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
  float dayLight = smoothstep(-0.18, 0.25, nDotL);

  vec3 base = night.rgb * 0.9;
  base = mix(base, day.rgb, dayLight);

  // Subtle warm band across the terminator.
  float term = smoothstep(-0.28, -0.04, nDotL) * (1.0 - smoothstep(0.06, 0.30, nDotL));
  base += vec3(0.28, 0.11, 0.03) * term * 0.25;

  // Soft ocean sheen (kept low so it never blows out to white).
  vec3 halfVec = normalize(uSunDir + viewDir);
  float spec = pow(max(dot(n, halfVec), 0.0), 40.0) * 0.10 * ocean * dayLight;
  base += vec3(0.85, 0.78, 0.6) * spec;

  // Very faint limb tint, no hard outline.
  float fres = pow(1.0 - max(dot(viewDir, n), 0.0), 4.0) * 0.06;
  base += vec3(0.22, 0.42, 0.85) * fres * (0.35 + dayLight);

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
  float light = 0.32 + 0.68 * smoothstep(-0.4, 0.45, nDotL);
  vec3 col = vec3(light * 1.05, light, light * 0.98);
  gl_FragColor = vec4(col, c.a * 0.85);
}
`;

// ── Atmosphere shader (soft limb glow, no strong ring) ──
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

  float fresnel = pow(1.0 - dot(n, viewDir), 4.0);
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float intensity = fresnel * (0.04 + sunFacing * 0.10);

  vec3 atmosColor = vec3(0.28, 0.52, 1.0) * intensity;
  gl_FragColor = vec4(atmosColor, intensity);
}
`;

const outerAtmosFragment = `
uniform vec3 uSunDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);

  float fresnel = pow(1.0 - dot(n, viewDir), 2.5);
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float intensity = fresnel * (0.03 + sunFacing * 0.09);

  vec3 glowColor = vec3(0.18, 0.45, 0.95) * intensity;
  gl_FragColor = vec4(glowColor, intensity * 0.5);
}
`;

// ── Meteor-style satellite: a glowing head + a dissipating trail ──
class Meteor {
  constructor(radius, inclination, node, speed, phase, color) {
    this.radius = radius;
    this.inc = inclination;
    this.node = node;
    this.speed = speed;
    this.phase = phase;
    this.color = color;
    this.history = [];
    this.trailLen = 46;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.trailLen * 3);
    const colors = new Float32Array(this.trailLen * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.line.frustumCulled = false;

    this.head = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3)),
      new THREE.PointsMaterial({ color: color, size: 0.09, sizeAttenuation: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
  }

  posAt(t, out) {
    const theta = this.phase + t * this.speed;
    const x = Math.cos(theta) * this.radius;
    const y = Math.sin(theta) * this.radius;
    const ci = Math.cos(this.inc), si = Math.sin(this.inc);
    const y2 = y * ci, z2 = y * si;
    const cn = Math.cos(this.node), sn = Math.sin(this.node);
    out.set(x * cn + z2 * sn, y2, -x * sn + z2 * cn);
    return out;
  }

  update(t) {
    const p = this.posAt(t, new THREE.Vector3());
    this.history.unshift(p);
    if (this.history.length > this.trailLen) this.history.pop();

    const posAttr = this.line.geometry.getAttribute('position');
    const colAttr = this.line.geometry.getAttribute('color');
    const n = this.history.length;
    for (let i = 0; i < this.trailLen; i++) {
      const v = i < n ? this.history[i] : p;
      posAttr.setXYZ(i, v.x, v.y, v.z);
      const t2 = i / this.trailLen;
      const fade = i < n ? Math.pow(1 - t2, 2.2) : 0;
      colAttr.setXYZ(i, this.color.r * fade, this.color.g * fade, this.color.b * fade);
    }
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    this.head.geometry.getAttribute('position').setXYZ(0, p.x, p.y, p.z);
    this.head.geometry.getAttribute('position').needsUpdate = true;
  }

  dispose() {
    this.line.geometry.dispose();
    this.line.material.dispose();
    this.head.geometry.dispose();
    this.head.material.dispose();
  }
}

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
      const [nx, ny, nz] = equirectDir((x + 0.5) / w, (y + 0.5) / h);
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
      const [nx, ny, nz] = equirectDir((x + 0.5) / w, (y + 0.5) / h);
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
      const [nx, ny, nz] = equirectDir((x + 0.5) / w, (y + 0.5) / h);
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
      const [nx, ny, nz] = equirectDir((x + 0.5) / w, (y + 0.5) / h);
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

export default function SatelliteOrbit() {
  const mountRef = useRef(null);
  const animRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    camera.position.set(0, 0.15, 4.1);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const sunDir = new THREE.Vector3(1.0, 0.35, 0.55).normalize();

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

    // Procedural fallback textures so a planet is always visible (e.g. offline).
    const fallbackDay = makeEarthDayTexture();
    const fallbackNight = makeEarthNightTexture();
    const fallbackSpec = makeEarthSpecTexture();
    const fallbackCloud = makeCloudTexture();

    const earthGroup = new THREE.Group();
    earthGroup.position.set(1.55, 0, 0);
    scene.add(earthGroup);

    const loadTex = (url) => new Promise((res) => {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; res(t); }, undefined, () => res(null));
    });

    // Globe.
    const earthGeo = new THREE.SphereGeometry(2.2, 128, 64);
    const globeMat = new THREE.ShaderMaterial({
      vertexShader: globeVertex,
      fragmentShader: globeFragment,
      uniforms: {
        uDay: { value: fallbackDay },
        uNight: { value: fallbackNight },
        uSpec: { value: fallbackSpec },
        uSunDir: { value: sunDir },
      },
    });
    earthGroup.add(new THREE.Mesh(earthGeo, globeMat));

    // Clouds.
    const cloudGeo = new THREE.SphereGeometry(2.28, 96, 48);
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertex,
      fragmentShader: cloudFragment,
      uniforms: { uClouds: { value: fallbackCloud }, uSunDir: { value: sunDir } },
      transparent: true,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
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
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.33, 64, 32), atmosMat));

    const outerAtmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: outerAtmosFragment,
      uniforms: { uSunDir: { value: sunDir } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.6, 64, 32), outerAtmosMat));

    // ── Meteor-style satellites ──
    const meteorDefs = [
      { r: 2.45, inc: 0.55, node: 0.2, speed: 0.35, phase: 0.0, color: new THREE.Color('#ffd9a0') },
      { r: 2.62, inc: -0.9, node: 1.1, speed: -0.28, phase: 2.1, color: new THREE.Color('#a0d4ff') },
      { r: 2.85, inc: 1.3, node: -0.6, speed: 0.22, phase: 4.2, color: new THREE.Color('#ffe0c0') },
    ];
    const meteors = meteorDefs.map((d) => new Meteor(d.r, d.inc, d.node, d.speed, d.phase, d.color));
    meteors.forEach((m) => { m.line.frustumCulled = false; scene.add(m.line); scene.add(m.head); });

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

    // ── Load Blue Marble textures, then swap into uniforms ──
    let disposed = false;
    Promise.all([
      loadTex(BASE + 'earth_atmos_2048.jpg'),
      loadTex(BASE + 'earth_lights_2048.png'),
      loadTex(BASE + 'earth_specular_2048.jpg'),
      loadTex(BASE + 'earth_clouds_1024.png'),
    ]).then(([day, night, spec, cloud]) => {
      if (disposed) return;
      if (day) { globeMat.uniforms.uDay.value.dispose?.(); globeMat.uniforms.uDay.value = day; }
      if (night) { globeMat.uniforms.uNight.value.dispose?.(); globeMat.uniforms.uNight.value = night; }
      if (spec) { globeMat.uniforms.uSpec.value.dispose?.(); globeMat.uniforms.uSpec.value = spec; }
      if (cloud) { cloudMat.uniforms.uClouds.value.dispose?.(); cloudMat.uniforms.uClouds.value = cloud; }
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
      clouds.rotation.y += dt * 0.01;

      // Meteor trails.
      meteors.forEach((m) => m.update(elapsed));

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
      meteors.forEach((m) => m.dispose());
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
