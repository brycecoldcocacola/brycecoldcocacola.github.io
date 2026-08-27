import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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

    // ── Lights ──
    const ambientLight = new THREE.AmbientLight(0x223344, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    sunLight.position.set(8, 4, 6);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x334466, 0.15);
    fillLight.position.set(-5, -2, -4);
    scene.add(fillLight);

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

    // ── Helpers ──
    function latLonToVec3(lat, lon, radius) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // ── Earth Group ──
    const earthGroup = new THREE.Group();

    // Ocean sphere
    const earthGeo = new THREE.SphereGeometry(2, 128, 64);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x1a5276, emissive: 0x0a1f33, emissiveIntensity: 0.1, shininess: 30, specular: 0x4488aa,
    });
    earthGroup.add(new THREE.Mesh(earthGeo, oceanMat));

    // ── Continent patches (flat rings on sphere surface) ──
    const landMat = new THREE.MeshPhongMaterial({
      color: 0x3a7a35, emissive: 0x112211, emissiveIntensity: 0.05, transparent: true, opacity: 0.9, side: THREE.DoubleSide,
    });

    // Each continent: [lat center, lon center, radius on sphere, shape roughness]
    const continents = [
      // North America (spread out properly)
      { lat: 50, lon: -100, r: 0.7 },   // Central NA
      { lat: 40, lon: -80, r: 0.35 },   // Eastern US
      { lat: 65, lon: -140, r: 0.4 },   // Western Canada/Alaska
      { lat: 25, lon: -100, r: 0.3 },   // Mexico
      { lat: 18, lon: -75, r: 0.15 },   // Caribbean

      // South America
      { lat: -5, lon: -60, r: 0.45 },   // Northern SA (Brazil)
      { lat: -20, lon: -55, r: 0.35 },  // Eastern Brazil
      { lat: -35, lon: -70, r: 0.3 },   // Southern Chile/Argentina
      { lat: -10, lon: -78, r: 0.2 },   // Western SA (Peru/Ecuador)

      // Europe
      { lat: 50, lon: 10, r: 0.3 },     // Central Europe
      { lat: 60, lon: 15, r: 0.2 },     // Scandinavia
      { lat: 40, lon: -5, r: 0.15 },    // Iberian Peninsula

      // Africa
      { lat: 5, lon: 20, r: 0.4 },      // Central Africa
      { lat: 20, lon: 10, r: 0.3 },     // North Africa (Sahara)
      { lat: -25, lon: 28, r: 0.25 },   // Southern Africa

      // Asia
      { lat: 45, lon: 90, r: 0.5 },     // Central Asia/Siberia
      { lat: 35, lon: 105, r: 0.35 },   // China
      { lat: 25, lon: 70, r: 0.25 },    // India
      { lat: 35, lon: 140, r: 0.2 },    // Japan

      // Australia
      { lat: -25, lon: 135, r: 0.35 },  // Central Australia

      // Greenland
      { lat: 72, lon: -42, r: 0.2 },

      // Antarctica (ring at bottom)
      { lat: -80, lon: 0, r: 0.6 },
    ];

    continents.forEach(({ lat, lon, r }) => {
      const pos = latLonToVec3(lat, lon, 2.05);
      const ringGeo = new THREE.RingGeometry(r * 0.4, r, 24);
      const patch = new THREE.Mesh(ringGeo, landMat);
      // Position at the correct point on sphere surface
      patch.position.copy(pos);
      // Orient to face outward from sphere center
      patch.lookAt(new THREE.Vector3(0, 0, 0));
      earthGroup.add(patch);
    });

    // ── Ice caps (flat rings) ──
    const iceMat = new THREE.MeshPhongMaterial({
      color: 0xeeeeff, emissive: 0x222233, emissiveIntensity: 0.1,
      transparent: true, opacity: 0.85, side: THREE.DoubleSide,
    });

    // North pole ice
    const northIce = new THREE.Mesh(new THREE.RingGeometry(0, 0.4, 32), iceMat);
    northIce.position.set(0, 2.07, 0);
    northIce.rotation.x = -Math.PI / 2;
    earthGroup.add(northIce);

    // South pole ice (larger ring)
    const southIce = new THREE.Mesh(new THREE.RingGeometry(0, 0.7, 32), iceMat);
    southIce.position.set(0, -2.07, 0);
    southIce.rotation.x = Math.PI / 2;
    earthGroup.add(southIce);

    // ── Clouds (flat patches scattered across sphere) ──
    const cloudMat = new THREE.MeshPhongMaterial({
      color: 0xffffff, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false,
    });

    for (let i = 0; i < 120; i++) {
      const lat = Math.random() * 160 - 80; // -80 to +80
      const lon = Math.random() * 360 - 180;
      const pos = latLonToVec3(lat, lon, 2.08);
      const size = 0.05 + Math.random() * 0.2;

      const cloudPatch = new THREE.Mesh(new THREE.RingGeometry(0, size, 16), cloudMat.clone());
      cloudPatch.position.copy(pos);
      cloudPatch.lookAt(new THREE.Vector3(0, 0, 0));
      earthGroup.add(cloudPatch);
    }

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
    const orbitLine = new THREE.Line(orbitLineGeo, orbitMaterial);
    orbitLine.computeLineDistances();
    orbitLine.rotation.x = Math.PI * 0.18;
    scene.add(orbitLine);

    // ── Satellite ──
    const satGroup = new THREE.Group();

    const bodyGeo = new THREE.BoxGeometry(0.15, 0.15, 0.25);
    const bodyMat = new THREE.MeshPhongMaterial({ color: 0x888899, shininess: 60 });
    satGroup.add(new THREE.Mesh(bodyGeo, bodyMat));

    const panelGeo = new THREE.BoxGeometry(0.45, 0.01, 0.12);
    const panelMat = new THREE.MeshPhongMaterial({ color: 0x1a1a6e, emissive: 0x1122aa, emissiveIntensity: 0.3, shininess: 90 });
    satGroup.add(new THREE.Mesh(panelGeo, panelMat).translateX(-0.3));
    const panelR = new THREE.Mesh(panelGeo, panelMat);
    panelR.position.x = 0.3;
    satGroup.add(panelR);

    // Antenna
    const antennaBase = new THREE.CylinderGeometry(0.01, 0.01, 0.15, 8);
    const antennaMesh = new THREE.Mesh(antennaBase, new THREE.MeshPhongMaterial({ color: 0xcccccc }));
    antennaMesh.position.y = 0.15;
    satGroup.add(antennaMesh);

    const dishGeo = new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const dish = new THREE.Mesh(dishGeo, new THREE.MeshPhongMaterial({ color: 0xeeeeee, side: THREE.DoubleSide }));
    dish.position.y = 0.22;
    dish.rotation.x = Math.PI;
    satGroup.add(dish);

    scene.add(satGroup);

    // ── Animation ──
    let prevTime = performance.now();

    function animate() {
      animRef.current = requestAnimationFrame(animate);
      const time = (performance.now() - prevTime) / 1000;
      prevTime = performance.now();

      earthGroup.rotation.y += time * 0.05;
      satGroup.position.x = Math.cos(time * 0.3) * orbitRadius;
      satGroup.position.z = Math.sin(time * 0.3) * orbitRadius;
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
