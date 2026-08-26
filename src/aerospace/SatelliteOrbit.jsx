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

    // Renderer with antialiasing and tone mapping
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // ── Lights ──
    const ambientLight = new THREE.AmbientLight(0x223344, 0.4);
    scene.add(ambientLight);

    // Main sunlight from one direction
    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    sunLight.position.set(8, 4, 6);
    scene.add(sunLight);

    // Subtle fill light from the dark side (moonlight reflection)
    const fillLight = new THREE.DirectionalLight(0x334466, 0.15);
    fillLight.position.set(-5, -2, -4);
    scene.add(fillLight);

    // ── Stars ──
    const starCount = 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 400 + Math.random() * 600;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
      starSizes[i] = 0.5 + Math.random() * 1.5;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Earth Group ──
    const earthGroup = new THREE.Group();

    // Ocean base sphere with realistic blue
    const earthGeo = new THREE.SphereGeometry(2, 128, 64);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x1a5276,
      emissive: 0x0a1f33,
      emissiveIntensity: 0.1,
      shininess: 30,
      specular: 0x4488aa,
    });
    const earth = new THREE.Mesh(earthGeo, oceanMat);
    earthGroup.add(earth);

    // Procedural continent patches using displaced spheres for a stylized look
    const continents = [
      // North America
      { pos: [-0.6, 0.75, 1.38], scale: 0.45 },
      { pos: [-0.9, 0.55, 1.25], scale: 0.3 },
      { pos: [-0.3, 0.9, 1.32], scale: 0.2 },
      // South America
      { pos: [-0.4, -0.7, 1.3], scale: 0.35 },
      { pos: [-0.25, -0.85, 1.2], scale: 0.25 },
      // Europe
      { pos: [0.45, 0.65, 1.37], scale: 0.2 },
      { pos: [0.3, 0.75, 1.32], scale: 0.15 },
      // Africa
      { pos: [0.3, -0.15, 1.4], scale: 0.4 },
      { pos: [0.4, -0.5, 1.38], scale: 0.3 },
      // Asia
      { pos: [0.9, 0.6, 1.25], scale: 0.5 },
      { pos: [0.7, 0.85, 1.3], scale: 0.25 },
      { pos: [1.05, 0.3, 1.22], scale: 0.25 },
      // Australia
      { pos: [1.15, -0.7, 1.18], scale: 0.2 },
      // Antarctica hint
      { pos: [0, -1.3, 0.6], scale: 0.6 },
    ];

    const landMat = new THREE.MeshPhongMaterial({
      color: 0x2d5a27,
      emissive: 0x112211,
      emissiveIntensity: 0.05,
      transparent: true,
      opacity: 0.85,
    });

    const desertMat = new THREE.MeshPhongMaterial({
      color: 0xc4a35a,
      emissive: 0x1a1508,
      emissiveIntensity: 0.05,
      transparent: true,
      opacity: 0.7,
    });

    continents.forEach(({ pos, scale }) => {
      const cGeo = new THREE.SphereGeometry(scale, 16, 12);
      const mat = (pos[1] < -0.5 || pos[1] > 0.8) ? desertMat : landMat;
      const continent = new THREE.Mesh(cGeo, mat);
      // Push outward so it sits on the sphere surface
      const dir = new THREE.Vector3(pos[0], pos[1], pos[2]).normalize();
      continent.position.copy(dir.multiplyScalar(2.05));
      earthGroup.add(continent);
    });

    // Ice caps (white)
    const iceGeo = new THREE.SphereGeometry(2.07, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.12);
    const iceMat = new THREE.MeshPhongMaterial({
      color: 0xeeeeff,
      transparent: true,
      opacity: 0.8,
    });
    earthGroup.add(new THREE.Mesh(iceGeo, iceMat));

    // South pole ice
    const southIceGeo = new THREE.SphereGeometry(2.07, 64, 32, 0, Math.PI * 2, Math.PI * 0.88, Math.PI * 0.12);
    earthGroup.add(new THREE.Mesh(southIceGeo, iceMat));

    // ── Clouds (semi-transparent rotating sphere) ──
    const cloudGeo = new THREE.SphereGeometry(2.04, 64, 32);
    const clouds = [];
    for (let i = 0; i < 80; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.06 + Math.random() * 0.15;
      const cloudMat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.2,
        depthWrite: false,
      });
      const cloudGeoSmall = new THREE.SphereGeometry(0.12 + Math.random() * 0.25, 8, 6);
      const cloud = new THREE.Mesh(cloudGeoSmall, cloudMat);
      cloud.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      clouds.push(cloud);
    }
    const cloudGroup = new THREE.Group();
    clouds.forEach(c => cloudGroup.add(c));
    earthGroup.add(cloudGroup);

    // ── Atmosphere glow (Fresnel-like shell) ──
    const atmosGeo = new THREE.SphereGeometry(2.3, 64, 32);
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
          gl_FragColor = vec4(atmosColor, fresnel * 0.6);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    earthGroup.add(atmosphere);

    scene.add(earthGroup);

    // ── Orbit Ring (subtle) ──
    const orbitRadius = 4.2;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(128);
    const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints.map(p => new THREE.Vector3(p.x, 0, p.y)));

    // Dashed orbit line
    const orbitMaterial = new THREE.LineDashedMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.15,
      dashSize: 0.2,
      gapSize: 0.3,
    });
    const orbitLine = new THREE.Line(orbitLineGeo, orbitMaterial);
    orbitLine.computeLineDistances();
    orbitLine.rotation.x = Math.PI * 0.18;
    scene.add(orbitLine);

    // ── Satellite (more detailed) ──
    const satGroup = new THREE.Group();

    // Main body
    const bodyGeo = new THREE.BoxGeometry(0.15, 0.15, 0.25);
    const bodyMat = new THREE.MeshPhongMaterial({ color: 0x888899, shininess: 60 });
    satGroup.add(new THREE.Mesh(bodyGeo, bodyMat));

    // Solar panels (left)
    const panelGeo = new THREE.BoxGeometry(0.45, 0.01, 0.12);
    const panelMat = new THREE.MeshPhongMaterial({
      color: 0x1a1a6e,
      emissive: 0x1122aa,
      emissiveIntensity: 0.3,
      shininess: 90,
    });
    const panelL = new THREE.Mesh(panelGeo, panelMat);
    panelL.position.set(-0.3, 0, 0);
    satGroup.add(panelL);

    // Solar panels (right)
    const panelR = new THREE.Mesh(panelGeo, panelMat);
    panelR.position.set(0.3, 0, 0);
    satGroup.add(panelR);

    // Antenna dish on top
    const antennaBase = new THREE.CylinderGeometry(0.01, 0.01, 0.15, 8);
    const antennaMat = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    const antennaMesh = new THREE.Mesh(antennaBase, antennaMat);
    antennaMesh.position.y = 0.15;
    satGroup.add(antennaMesh);

    // Dish
    const dishGeo = new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const dishMat = new THREE.MeshPhongMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
    const dish = new THREE.Mesh(dishGeo, dishMat);
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

      // Earth rotation
      earthGroup.rotation.y += time * 0.05;

      // Clouds rotate slightly faster for parallax effect
      cloudGroup.rotation.y += time * 0.06;

      // Satellite orbit
      const angle = time * 0.3;
      satGroup.position.x = Math.cos(angle) * orbitRadius;
      satGroup.position.z = Math.sin(angle) * orbitRadius;
      satGroup.position.y = Math.sin(angle * 2) * 0.4;

      // Satellite always faces Earth center but has slight wobble
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
        if (!visible && entries[0].isIntersecting) {
          animate();
          visible = true;
        } else if (visible && !entries[0].isIntersecting) {
          cancelAnimationFrame(animRef.current);
          animRef.current = null;
          visible = false;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="satellite-orbit" />;
}
