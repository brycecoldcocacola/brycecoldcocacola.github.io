import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// Master-Maps style Blue Marble textures (served via jsDelivr with CORS so
// WebGL can sample them): 4096 day / night + ocean specular.
const BASE = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r185/examples/textures/planets/';
// Higher-resolution cloud layer (4K, CORS-enabled) — crisper than the 1K
// clouds that ship with the three.js examples.
const CLOUD_URL = 'https://cdn.jsdelivr.net/gh/turban/webgl-earth@master/images/fair_clouds_4k.png';

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
  // Specular map doubles as an ocean mask: ~1 over water, 0 over land.
  float ocean = texture2D(uSpec, vUv).r;

  float nDotL = dot(n, uSunDir);
  // Soft day/night terminator with a gentle wrap so the shading feels diffuse.
  float dayLight = smoothstep(-0.18, 0.34, nDotL);

  // --- Night side: deep blue-black with glowing city lights ---
  vec3 nightCol = night.rgb * 1.9;
  nightCol += vec3(0.012, 0.016, 0.042);   // faint ambient so water isn't pure black

  // --- Day side: diffuse lighting, deep-blue oceans, natural land ---
  vec3 dayCol = day.rgb;
  float water = clamp(ocean * day.r * 1.5, 0.0, 0.85);
  dayCol = mix(dayCol, dayCol * vec3(0.34, 0.55, 0.95), water);
  dayCol *= 1.1;
  // Soft wrap lighting: a touch of light bleeds past the terminator.
  float wrap = clamp((nDotL + 0.25) / 1.25, 0.0, 1.0);
  dayCol *= mix(0.42, 1.0, wrap);

  vec3 base = mix(nightCol, dayCol, dayLight);

  // Subtle warm sunset band across the terminator.
  float term = smoothstep(-0.12, 0.06, nDotL) * (1.0 - smoothstep(0.06, 0.26, nDotL));
  base += vec3(0.35, 0.15, 0.04) * term * 0.55;

  // --- Soft sun glint on ocean: moderately broad, kept dim so bloom stays small ---
  vec3 halfVec = normalize(uSunDir + viewDir);
  float ndh = max(dot(n, halfVec), 0.0);
  float glint = pow(ndh, 90.0) * 0.45;
  base += vec3(1.0, 0.98, 0.92) * glint * ocean * dayLight;

  // Fresnel blue limb tint, brighter on the sunlit limb.
  float fres = pow(1.0 - max(dot(viewDir, n), 0.0), 4.0);
  float sunLimb = clamp(dot(n, uSunDir), 0.0, 1.0);
  base += vec3(0.16, 0.42, 1.0) * fres * (0.15 + 0.85 * sunLimb) * 0.9;

  gl_FragColor = vec4(base, 1.0);
}
`;

// ── Cloud shader: sun-lit opaque-where-thick layer, fading out at the limb ──
const cloudVertex = `
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

const cloudFragment = `
uniform sampler2D uClouds;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec4 c = texture2D(uClouds, vUv);
  vec3 n = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float light = smoothstep(-0.18, 0.35, dot(n, uSunDir));
  vec3 col = vec3(1.0) * (0.06 + 0.94 * light);
  // Ease alpha toward the limb so the shell never hard-edges against space.
  float rim = smoothstep(0.0, 0.30, max(dot(viewDir, n), 0.0));
  gl_FragColor = vec4(col, c.a * rim);
}
`;

// ── Atmosphere shader (tight soft limb glow) ──
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
uniform float uStrength;
uniform vec3 uColor;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 n = normalize(vNormal);
  // BackSide shell: -dot(n,viewDir) is 0 at the outer silhouette and grows
  // toward the planet limb (which the opaque planet then occludes). So intensity
  // ramps up inward and fades to exactly 0 at the outer edge -> a soft halo
  // hugging the planet with no hard ring.
  float t = clamp(-dot(n, viewDir), 0.0, 1.0);
  float fresnel = pow(t, 1.7);
  // Sun-exposed limbs glow warmer/brighter; night-side halo is dim but present.
  float sun = clamp(dot(n, uSunDir), 0.0, 1.0);
  float intensity = fresnel * (0.18 + 0.82 * pow(sun, 0.6)) * uStrength;
  gl_FragColor = vec4(uColor * intensity, intensity);
}
`;

// ── Meteor: a round glowing head + long dissipating additive trail ──────────
class Meteor {
  constructor({ r, inc, node, speed, phase, color, tail }, sprite) {
    this.radius = r;
    this.inc = inc;
    this.node = node;
    this.speed = speed;
    this.phase = phase;
    this.color = color;
    this.tail = tail;
    this.samples = 96;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.samples * 3);
    const colors = new Float32Array(this.samples * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.line.frustumCulled = false;

    // Round head sprite so it never renders as a square point.
    this.head = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3)),
      new THREE.PointsMaterial({
        size: 0.12, sizeAttenuation: true, transparent: true, depthWrite: false,
        blending: THREE.AdditiveBlending, map: sprite, color: color, alphaTest: 0.02,
      }),
    );
    this.head.frustumCulled = false;
  }

  posAt(t, out) {
    const theta = this.phase + t * this.speed;
    const x = Math.cos(theta) * this.radius;
    const y = Math.sin(theta) * this.radius;
    const ci = Math.cos(this.inc), si = Math.sin(this.inc);
    const y2 = y * ci, z2 = y * si;
    const cn = Math.cos(this.node), sn = Math.sin(this.node);
    return out.set(x * cn + z2 * sn, y2, -x * sn + z2 * cn);
  }

  update(t) {
    const posAttr = this.line.geometry.getAttribute('position');
    const colAttr = this.line.geometry.getAttribute('color');
    const tmp = new THREE.Vector3();
    for (let i = 0; i < this.samples; i++) {
      const tt = t - (i / (this.samples - 1)) * this.tail;
      this.posAt(tt, tmp);
      posAttr.setXYZ(i, tmp.x, tmp.y, tmp.z);
      const f = Math.pow(1 - i / this.samples, 2.2);
      colAttr.setXYZ(i, this.color.r * f * 1.4, this.color.g * f * 1.4, this.color.b * f * 1.4);
    }
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    this.posAt(t, tmp);
    const hAttr = this.head.geometry.getAttribute('position');
    hAttr.setXYZ(0, tmp.x, tmp.y, tmp.z);
    hAttr.needsUpdate = true;
  }

  dispose() {
    this.line.geometry.dispose();
    this.line.material.dispose();
    this.head.geometry.dispose();
    this.head.material.dispose();
  }
}

// ── Shared radial-gradient sprite (round soft head) ─────────────────────────
function makeHeadSprite() {
  const s = 64;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
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
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);

    // Bloom post-processing: only bright areas (sun-glint, cloud tops, lit limb)
    // bloom, giving the dreamy atmospheric glow of the three.js Earth demos.
    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.3,  // strength
      0.45, // radius
      0.92, // threshold – keep dark space from blooming
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Light roughly from the camera direction so the facing hemisphere is lit,
    // with a little tilt for a soft terminator.
    // Sun comes in low from the left, almost in-plane, so the right limb falls
    // into night (with city lights) — matching the reference lighting.
    const sunDir = new THREE.Vector3(-0.95, -0.08, 0.22).normalize();

    // ── Point-cloud stars ──
    const starCount = 11000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 500 + Math.random() * 600;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 1.0, sizeAttenuation: true, transparent: true, opacity: 0.9, depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ── Globe group, pushed back and to the right. Pulling the planet deeper
    //    into the scene keeps the 4K texture at a smaller on-screen footprint
    //    (and grazing angle), so the texture's limits aren't apparent when it
    //    fills the frame on a 27" monitor. ──
    const earthGroup = new THREE.Group();
    earthGroup.position.set(1.95, 0.05, -1.2);
    scene.add(earthGroup);

    const loadTex = (url, opts = {}) => new Promise((res) => {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(url, (t) => {
        if (opts.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 8;
        res(t);
      }, undefined, () => res(null));
    });

    // Inner spin group: the globe and clouds spin here while the atmosphere
    // shells stay anchored to the un-rotating outer group, so the halo never
    // smears as the planet turns.
    const spinGroup = new THREE.Group();
    earthGroup.add(spinGroup);

    const earthGeo = new THREE.SphereGeometry(1.78, 128, 64);
    const globeMat = new THREE.ShaderMaterial({
      vertexShader: globeVertex,
      fragmentShader: globeFragment,
      uniforms: {
        uDay: { value: null },
        uNight: { value: null },
        uSpec: { value: null },
        uSunDir: { value: sunDir },
      },
    });
    const globeMesh = new THREE.Mesh(earthGeo, globeMat);
    spinGroup.add(globeMesh);

    // Cloud layer rides just above the surface and drifts under its own rate.
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertex,
      fragmentShader: cloudFragment,
      uniforms: {
        uClouds: { value: null },
        uSunDir: { value: sunDir },
      },
      transparent: true,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(new THREE.SphereGeometry(1.805, 96, 48), cloudMat);
    spinGroup.add(cloudMesh);

    // Single atmosphere shell anchored to the un-rotating earthGroup. The glow
    // itself comes from bloom post-processing, so this shell only tints the
    // limb a soft blue (no stacked rings).
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: atmosFragment,
      uniforms: { uSunDir: { value: sunDir }, uStrength: { value: 0.85 }, uColor: { value: new THREE.Color(0.22, 0.46, 1.0) } },
      transparent: true, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.96, 64, 32), atmosMat));

    // ── Meteor trails — orbiting the globe's actual centre ──
    const sprite = makeHeadSprite();
    const meteorGroup = new THREE.Group();
    meteorGroup.position.copy(earthGroup.position);
    scene.add(meteorGroup);

    // Orbital field: a mix of low passes hugging the globe and high, wide orbits
    // whose far sides reach into the empty space on the left of the page.
    const meteorDefs = [
      // Low, tight passes that clearly hug the planet.
      { r: 1.9, inc: 0.55, node: 0.20, speed: 0.10, phase: 0.0, color: new THREE.Color('#ffd9a0'), tail: 9 },
      { r: 1.97, inc: -0.90, node: 1.10, speed: -0.085, phase: 2.1, color: new THREE.Color('#a0d4ff'), tail: 11 },
      { r: 2.03, inc: 1.30, node: -0.60, speed: 0.07, phase: 4.2, color: new THREE.Color('#ffe0c0'), tail: 13 },
      { r: 2.08, inc: 0.25, node: -1.60, speed: 0.095, phase: 1.1, color: new THREE.Color('#ff9e80'), tail: 8 },
      { r: 2.13, inc: -1.60, node: 2.40, speed: -0.065, phase: 5.4, color: new THREE.Color('#9ee8ff'), tail: 12 },
      { r: 2.18, inc: 0.85, node: 0.05, speed: 0.055, phase: 3.0, color: new THREE.Color('#ffe6b0'), tail: 14 },
      { r: 1.86, inc: 2.10, node: 1.70, speed: 0.115, phase: 0.6, color: new THREE.Color('#ffc0d0'), tail: 7 },
      { r: 2.24, inc: 0.15, node: 2.05, speed: -0.09, phase: 4.8, color: new THREE.Color('#ff8a8a'), tail: 10 },
      // Mid-range orbits.
      { r: 2.45, inc: -0.35, node: 3.10, speed: 0.05, phase: 1.7, color: new THREE.Color('#c7b0ff'), tail: 15 },
      { r: 2.62, inc: 1.05, node: -1.20, speed: 0.045, phase: 2.8, color: new THREE.Color('#bfe6ff'), tail: 16 },
      { r: 2.80, inc: -0.65, node: 0.75, speed: -0.04, phase: 5.0, color: new THREE.Color('#ffe0a8'), tail: 17 },
      // High, wide orbits reaching far out to fill the left of the viewport.
      { r: 3.05, inc: 0.45, node: -0.35, speed: 0.034, phase: 0.9, color: new THREE.Color('#ffd0b0'), tail: 18 },
      { r: 3.25, inc: -1.25, node: 1.85, speed: -0.03, phase: 3.6, color: new THREE.Color('#a8c8ff'), tail: 19 },
      { r: 3.45, inc: 1.55, node: -2.05, speed: 0.026, phase: 4.9, color: new THREE.Color('#d8c0ff'), tail: 20 },
      { r: 3.65, inc: -0.20, node: 2.75, speed: 0.022, phase: 1.4, color: new THREE.Color('#ffe8c8'), tail: 22 },
      { r: 3.90, inc: 0.95, node: -1.75, speed: -0.02, phase: 5.8, color: new THREE.Color('#aee0ff'), tail: 24 },
    ];
    const meteors = meteorDefs.map((d) => new Meteor(d, sprite));
    meteors.forEach((m) => {
      m.line.frustumCulled = false;
      m.head.frustumCulled = false;
      meteorGroup.add(m.line);
      meteorGroup.add(m.head);
    });

    // Load Blue Marble textures, then swap into uniforms.
    let disposed = false;
    Promise.all([
      loadTex(BASE + 'earth_day_4096.jpg'),
      loadTex(BASE + 'earth_night_4096.jpg'),
      loadTex(BASE + 'earth_specular_2048.jpg'),
      loadTex(CLOUD_URL),
    ]).then(([day, night, spec, clouds]) => {
      if (disposed) return;
      if (day) globeMat.uniforms.uDay.value = day;
      if (night) globeMat.uniforms.uNight.value = night;
      if (spec) globeMat.uniforms.uSpec.value = spec;
      if (clouds) cloudMat.uniforms.uClouds.value = clouds;
    });

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
      spin.rotY += dt * 0.015;
      if (!dragging) {
        spin.velX *= 0.97;
        spin.velY *= 0.97;
        spin.rotY += spin.velY;
        spin.rotX += spin.velX;
        spin.rotX = Math.max(-0.6, Math.min(0.6, spin.rotX));
      }
      spinGroup.rotation.set(spin.rotX, spin.rotY, 0);
      // Spin the satellite / meteor trails with the planet so the whole system
      // turns as one. The atmosphere halo stays anchored to the sun direction.
      meteorGroup.rotation.set(spin.rotX, spin.rotY, 0);
      // The starfield turns with everything else so the whole scene reacts to drag.
      starField.rotation.set(spin.rotX, spin.rotY, 0);
      // Clouds drift a touch faster than the surface for parallax.
      cloudMesh.rotation.y += dt * 0.006;

      // Meteor trails.
      meteors.forEach((m) => m.update(elapsed));

      composer.render();
    }

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
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
          ['uDay', 'uNight', 'uSpec'].forEach((u) => {
            if (m.uniforms && m.uniforms[u] && m.uniforms[u].value) m.uniforms[u].value.dispose?.();
          });
          m.dispose();
        });
      });
      sprite.dispose();
      bloomPass.dispose?.();
      composer.dispose?.();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
