import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SatelliteField } from './SatelliteField.js';

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

  // --- Soft, tight sun glint on ocean only (kept dim so it never blows out) ---
  vec3 halfVec = normalize(uSunDir + viewDir);
  float ndh = max(dot(n, halfVec), 0.0);
  float glint = pow(ndh, 220.0) * 0.22;
  base += vec3(1.0, 0.97, 0.88) * glint * ocean * dayLight;

  // --- Atmospheric limb: a thin, saturated-BLUE fresnel rim that hugs the
  //     planet silhouette. Baked into the globe (no separate shell) so it can
  //     never leak outward. Kept dim and saturated so it stays below the bloom
  //     threshold and never blooms into a white halo. ---
  float fres = pow(1.0 - max(dot(viewDir, n), 0.0), 4.5);
  // Light wraps over the lit limb and fades toward the night side.
  float dayLimb = smoothstep(-0.30, 0.5, dot(n, uSunDir));
  vec3 atmoCol = mix(vec3(0.04, 0.16, 0.45), vec3(0.18, 0.46, 1.0), dayLimb);
  base += atmoCol * fres * (0.18 + 0.82 * dayLimb) * 0.55;

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

// ── Atmospheric halo: a camera-facing additive billboard centred on the planet.
//    The opaque globe occludes the billboard's inner disk, so only the soft
//    outer halo outside the silhouette is visible. Because it always faces the
//    camera it can NEVER leak as an off-axis ring (the failure mode of a
//    BackSide shell seen off-centre). Sun-side brightness is driven by each
//    halo pixel's world-space direction from the planet centre. ──
const haloVertex = `
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const haloFragment = `
uniform vec3 uSunDir;
uniform vec3 uPlanetCenter;
uniform float uPlanetR;   // planet radius in world units
uniform float uHaloR;     // outer halo radius (plane half-size)
uniform float uStrength;
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  // Radial distance from the billboard centre, in plane-normalised units.
  vec2 p = vUv * 2.0 - 1.0;
  float d = length(p);
  float edge = uPlanetR / uHaloR;          // where the planet silhouette sits
  // Soft outward falloff: full at the limb, fading to zero at the outer edge.
  float glow = smoothstep(1.0, edge, d);
  glow *= glow;                            // tighten toward the planet
  // Sun-side modulation: brighter where the halo pixel points toward the sun.
  vec3 offDir = normalize(vWorldPos - uPlanetCenter);
  float sun = dot(offDir, uSunDir);
  float mod_ = 0.22 + 0.78 * smoothstep(-0.55, 0.55, sun);
  vec3 col = mix(vec3(0.05, 0.22, 0.6), vec3(0.35, 0.62, 1.0), smoothstep(-0.3, 0.6, sun));
  float a = glow * mod_ * uStrength;
  gl_FragColor = vec4(col, a);
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

    // ── Real-time solar position ──────────────────────────────────────────────
    // The shader compares world-space surface normals to a world-space sun
    // direction. We compute the subsolar point from UTC, convert it to a
    // direction in the globe's LOCAL frame, then rotate into world space using
    // the globe's current rotation each frame. This keeps the terminator locked
    // to real geography and consistent when the user drags.
    const sunDir = new THREE.Vector3();          // world-space, updated each frame
    const sunLocal = new THREE.Vector3();        // globe-local, recomputed every ~30s

    function computeSubsolarDirection(date) {
      const dayOfYear = Math.floor(
        (date - new Date(Date.UTC(date.getUTCFullYear(), 0, 0))) / 86400000
      );
      // Solar declination (degrees) — Cooper's approximation
      const declDeg = 23.44 * Math.sin((2 * Math.PI / 365) * (dayOfYear - 81));
      // Subsolar longitude: degrees where solar noon occurs
      const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
      const lonDeg = 15 * (12 - utcHours); // positive = East

      const declRad = THREE.MathUtils.degToRad(declDeg);
      const lonRad = THREE.MathUtils.degToRad(lonDeg);

      // Map (lat, lon) to unit-sphere direction matching Three.js SphereGeometry UV:
      //   lon=0° → +X, lon=90°E → -Z, lat=90°N → +Y
      sunLocal.set(
        Math.cos(declRad) * Math.cos(lonRad),
        Math.sin(declRad),
        -Math.cos(declRad) * Math.sin(lonRad)
      ).normalize();
    }

    computeSubsolarDirection(new Date());

    // ── Point-cloud stars ──
    const starCount = 8000;
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
    // Push the planet back and centre it vertically so the whole sphere is
    // framed at roughly 2/3 of the viewport height (satellites included) rather
    // than bleeding off the edges. The extra distance also hides texture pixel
    // limits on a 27" monitor.
    earthGroup.position.set(1.6, 0.0, -3.2);
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

    // Soft outward atmospheric halo (camera-facing additive billboard). Added
    // to earthGroup so it follows the planet; re-oriented toward the camera
    // every frame in animate(). Rendered after the (opaque) globe so depth
    // hides its inner disk, leaving only the halo beyond the silhouette.
    const PLANET_R = 1.78;
    const HALO_R = PLANET_R * 1.06;
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: haloVertex,
      fragmentShader: haloFragment,
      uniforms: {
        uSunDir: { value: sunDir },
        uPlanetCenter: { value: earthGroup.position.clone() },
        uPlanetR: { value: PLANET_R },
        uHaloR: { value: HALO_R },
        uStrength: { value: 0.42 },
      },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const haloMesh = new THREE.Mesh(new THREE.PlaneGeometry(HALO_R * 2, HALO_R * 2), haloMat);
    haloMesh.renderOrder = 2;
    earthGroup.add(haloMesh);

    // ── Real satellite constellation, orbiting the globe's actual centre ──
    // A group centred on the planet that follows the user's drag rotation; the
    // SatelliteField adds a GMST-counter-rotated child inside so live SGP4
    // positions and full-orbit rings stay glued together (see that module).
    const satGroup = new THREE.Group();
    satGroup.position.copy(earthGroup.position);
    scene.add(satGroup);
    const satField = new SatelliteField(satGroup);

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
    // Start with Americas facing viewer (matching real-time sun for US viewers)
    const spin = { rotX: 0.12, rotY: 0, velX: 0, velY: 0 };
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastMoveTime = 0;

    const canvas = renderer.domElement;
    canvas.style.touchAction = 'none';
    canvas.style.cursor = 'grab';

    const onPointerDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMoveTime = performance.now();
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
      lastMoveTime = performance.now();
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
      // If the mouse was stationary for >80ms before release, kill momentum
      // so the globe doesn't suddenly spin from stale velocity.
      if (performance.now() - lastMoveTime > 80) {
        spin.velX = 0;
        spin.velY = 0;
      }
      canvas.style.cursor = 'grab';
    };
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    // ── Animation ──
    let prevTime = performance.now();
    let running = true;
    let lastSunUpdate = 0;

    // Reusable objects to avoid per-frame allocation.
    const rotMatrix = new THREE.Matrix4();
    const rotMatrixInner = new THREE.Matrix4();

    function animate() {
      if (!running) return;
      animRef.current = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;

      // Update sun direction every 30 seconds to track real-time solar motion.
      if (now - lastSunUpdate > 30000) {
        computeSubsolarDirection(new Date());
        lastSunUpdate = now;
      }

      if (!dragging) {
        spin.velX *= 0.97;
        spin.velY *= 0.97;
        spin.rotY += spin.velY;
        spin.rotX += spin.velX;
        spin.rotX = Math.max(-0.6, Math.min(0.6, spin.rotX));
      } else {
        // During drag, rapidly decay velocity each frame so that if the pointer
        // stops moving before release, velocity is already near-zero.
        spin.velX *= 0.6;
        spin.velY *= 0.6;
      }

      spinGroup.rotation.set(spin.rotX, spin.rotY, 0);
      // Real satellite orbits follow the globe's drag rotation.
      satGroup.rotation.set(spin.rotX, spin.rotY, 0);
      // Starfield follows user drag only — no idle spin.
      starField.rotation.set(spin.rotX, spin.rotY, 0);
      // Clouds drift a touch faster than the surface for parallax.
      cloudMesh.rotation.y += dt * 0.006;
      // Keep the halo billboard square to the camera.
      haloMesh.quaternion.copy(camera.quaternion);

      // Transform the globe-local sun direction into world space using the
      // globe's current rotation. This locks the terminator to the globe
      // geometry: dragging the globe rotates both the surface normals AND the
      // sun direction by the same rotation, so the day/night boundary appears
      // fixed relative to the map.
      rotMatrix.makeRotationX(spin.rotX);
      rotMatrixInner.makeRotationY(spin.rotY);
      rotMatrix.multiply(rotMatrixInner);
      sunDir.copy(sunLocal).applyMatrix4(rotMatrix).normalize();

      // Advance satellite heads/trails along their cached orbit paths.
      satField.update();

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
      satField.dispose();
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
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Force-release the underlying WebGL context. Without this, browsers
      // hold the context open until GC and a remount (React StrictMode or
      // HMR) can exhaust the per-page context limit and trigger:
      //   "A WebGL context could not be created. Reason: Web page caused
      //    context loss and was blocked"
      try {
        renderer.forceContextLoss?.();
      } catch {
        /* no-op */
      }
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
