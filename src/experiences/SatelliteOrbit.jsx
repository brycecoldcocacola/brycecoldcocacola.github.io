import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './SatelliteOrbit.scss';

export default function SatelliteOrbit() {
  const mountRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = Math.max(300, Math.min(width * 0.6, 500));

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 2, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x333344, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x4488ff, 0.3);
    rimLight.position.set(-3, -1, -3);
    scene.add(rimLight);

    // Stars
    const starCount = 800;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, sizeAttenuation: true });
    scene.add(new THREE.Points(starGeo, starMat));

    // Earth
    const earthGroup = new THREE.Group();

    const earthGeo = new THREE.SphereGeometry(1.5, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x2255aa,
      emissive: 0x112244,
      emissiveIntensity: 0.15,
      shininess: 25,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earth);

    // Continents hint — slightly larger green spheres clustered
    const continentMat = new THREE.MeshPhongMaterial({
      color: 0x33aa55,
      emissive: 0x113311,
      emissiveIntensity: 0.1,
      transparent: true,
      opacity: 0.7,
    });
    const continentPositions = [
      [0.3, 0.6, 1.35], [-0.5, 0.3, 1.38], [0.1, -0.4, 1.42],
      [-0.8, -0.6, 1.2], [0.7, -0.7, 1.15], [-0.2, 0.9, 1.3],
    ];
    continentPositions.forEach(([x, y, z]) => {
      const cGeo = new THREE.SphereGeometry(0.25 + Math.random() * 0.3, 12, 12);
      const c = new THREE.Mesh(cGeo, continentMat);
      c.position.set(x, y, z);
      earthGroup.add(c);
    });

    // Atmosphere glow
    const atmosGeo = new THREE.SphereGeometry(1.58, 64, 64);
    const atmosMat = new THREE.MeshPhongMaterial({
      color: 0x6699ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    });
    earthGroup.add(new THREE.Mesh(atmosGeo, atmosMat));

    scene.add(earthGroup);

    // Orbit ring (subtle)
    const orbitRadius = 3;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(128);
    const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints.map(p => new THREE.Vector3(p.x, 0, p.y)));
    const orbitLineMat = new THREE.LineBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.2 });
    const orbitLine = new THREE.Line(orbitLineGeo, orbitLineMat);
    orbitLine.rotation.x = Math.PI * 0.15;
    scene.add(orbitLine);

    // Satellite
    const satGroup = new THREE.Group();

    // Body
    const satBodyGeo = new THREE.BoxGeometry(0.12, 0.12, 0.18);
    const satBodyMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 80 });
    const satBody = new THREE.Mesh(satBodyGeo, satBodyMat);
    satGroup.add(satBody);

    // Solar panels
    const panelGeo = new THREE.BoxGeometry(0.35, 0.01, 0.1);
    const panelMat = new THREE.MeshPhongMaterial({ color: 0x2233aa, emissive: 0x112266, emissiveIntensity: 0.2 });
    const panelL = new THREE.Mesh(panelGeo, panelMat);
    panelL.position.x = -0.22;
    satGroup.add(panelL);
    const panelR = new THREE.Mesh(panelGeo, panelMat);
    panelR.position.x = 0.22;
    satGroup.add(panelR);

    // Antenna
    const antennaGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.15);
    const antennaMat = new THREE.MeshPhongMaterial({ color: 0x888888 });
    const antenna = new THREE.Mesh(antennaGeo, antennaMat);
    antenna.position.y = 0.12;
    satGroup.add(antenna);
    const dishGeo = new THREE.SphereGeometry(0.04, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const dish = new THREE.Mesh(dishGeo, antennaMat);
    dish.position.y = 0.2;
    dish.rotation.x = Math.PI;
    satGroup.add(dish);

    scene.add(satGroup);

    // Animation
    let animationId;
    let prevTime = performance.now();

    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = (performance.now() - prevTime) / 1000;
      prevTime = performance.now();

      // Rotate earth slowly
      earthGroup.rotation.y += time * 0.08;

      // Orbit satellite
      const angle = time * 0.5;
      const tilt = Math.PI * 0.15;
      satGroup.position.x = Math.cos(angle) * orbitRadius;
      satGroup.position.z = Math.sin(angle) * orbitRadius;
      satGroup.position.y = Math.sin(angle * 2) * 0.15;
      satGroup.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();
    setLoaded(true);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = Math.max(300, Math.min(w * 0.6, 500));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      satBodyGeo.dispose();
      satBodyMat.dispose();
      panelGeo.dispose();
      panelMat.dispose();
      antennaGeo.dispose();
      antennaMat.dispose();
      dishGeo.dispose();
    };
  }, []);

  return (
    <div className="satellite-orbit" ref={mountRef}>
      {!loaded && <div className="orbit-loading">Loading visualization...</div>}
    </div>
  );
}
