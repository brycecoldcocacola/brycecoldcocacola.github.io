import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Master-Maps style Blue Marble textures (served via jsDelivr with CORS so
// WebGL can sample them): 4096 day / night + ocean specular.
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
  float dayLight = smoothstep(-0.16, 0.28, nDotL);

  // Lit hemisphere uses the (bright) day map; night side glows with city lights.
  vec3 base = night.rgb * 1.8 + 0.05;
  base = mix(base, day.rgb * 1.25, dayLight);

  // Subtle warm band across the terminator.
  float term = smoothstep(-0.28, -0.04, nDotL) * (1.0 - smoothstep(0.06, 0.30, nDotL));
  base += vec3(0.28, 0.11, 0.03) * term * 0.30;

  // Soft ocean sheen (kept low so it never blows out to white).
  vec3 halfVec = normalize(uSunDir + viewDir);
  float spec = pow(max(dot(n, halfVec), 0.0), 40.0) * 0.08 * ocean * dayLight;
  base += vec3(0.85, 0.78, 0.6) * spec;

  // Very faint limb tint, no hard outline.
  float fres = pow(1.0 - max(dot(viewDir, n), 0.0), 4.0) * 0.05;
  base += vec3(0.22, 0.42, 0.85) * fres * (0.30 + dayLight);

  gl_FragColor = vec4(base, 1.0);
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
  float fresnel = pow(1.0 - dot(n, viewDir), 5.0);
  float sunFacing = max(dot(n, uSunDir), 0.0);
  float intensity = fresnel * (0.05 + sunFacing) * uStrength;
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
        transparent: true,
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
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Light roughly from the camera direction so the facing hemisphere is lit,
    // with a little tilt for a soft terminator.
    const sunDir = new THREE.Vector3(-1.1, 0.45, 1.5).normalize();

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
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Globe group, centred to the right so it bleeds off-edge behind text ──
    const earthGroup = new THREE.Group();
    earthGroup.position.set(1.55, 0, 0);
    scene.add(earthGroup);

    const loadTex = (url) => new Promise((res) => {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; res(t); }, undefined, () => res(null));
    });

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
    earthGroup.add(globeMesh);

    // Atmosphere shells (tight rim glow + soft outer halo).
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: atmosFragment,
      uniforms: { uSunDir: { value: sunDir }, uStrength: { value: 0.7 }, uColor: { value: new THREE.Color(0.28, 0.52, 1.0) } },
      transparent: true, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.82, 64, 32), atmosMat));

    const outerAtmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosVertex,
      fragmentShader: atmosFragment,
      uniforms: { uSunDir: { value: sunDir }, uStrength: { value: 0.25 }, uColor: { value: new THREE.Color(0.18, 0.45, 0.95) } },
      transparent: true, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.1, 64, 32), outerAtmosMat));

    // ── Meteor trails — orbiting the globe's actual centre ──
    const sprite = makeHeadSprite();
    const meteorGroup = new THREE.Group();
    meteorGroup.position.copy(earthGroup.position);
    scene.add(meteorGroup);

    const meteorDefs = [
      { r: 1.95, inc: 0.55, node: 0.20, speed: 0.10, phase: 0.0, color: new THREE.Color('#ffd9a0'), tail: 9 },
      { r: 2.08, inc: -0.90, node: 1.10, speed: -0.085, phase: 2.1, color: new THREE.Color('#a0d4ff'), tail: 11 },
      { r: 2.22, inc: 1.30, node: -0.60, speed: 0.07, phase: 4.2, color: new THREE.Color('#ffe0c0'), tail: 13 },
      { r: 2.02, inc: 0.25, node: -1.60, speed: 0.095, phase: 1.1, color: new THREE.Color('#ff9e80'), tail: 8 },
      { r: 2.15, inc: -1.60, node: 2.40, speed: -0.065, phase: 5.4, color: new THREE.Color('#9ee8ff'), tail: 12 },
      { r: 2.30, inc: 0.85, node: 0.05, speed: 0.055, phase: 3.0, color: new THREE.Color('#ffe6b0'), tail: 14 },
      { r: 1.9, inc: 2.10, node: 1.70, speed: 0.115, phase: 0.6, color: new THREE.Color('#ffc0d0'), tail: 7 },
      { r: 2.40, inc: -0.35, node: 3.10, speed: 0.05, phase: 1.7, color: new THREE.Color('#c7b0ff'), tail: 15 },
      { r: 2.12, inc: 0.15, node: 2.05, speed: -0.09, phase: 4.8, color: new THREE.Color('#ff8a8a'), tail: 10 },
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
    ]).then(([day, night, spec]) => {
      if (disposed) return;
      if (day) globeMat.uniforms.uDay.value = day;
      if (night) globeMat.uniforms.uNight.value = night;
      if (spec) globeMat.uniforms.uSpec.value = spec;
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
      earthGroup.rotation.set(spin.rotX, spin.rotY, 0);

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
          ['uDay', 'uNight', 'uSpec'].forEach((u) => {
            if (m.uniforms && m.uniforms[u] && m.uniforms[u].value) m.uniforms[u].value.dispose?.();
          });
          m.dispose();
        });
      });
      sprite.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
