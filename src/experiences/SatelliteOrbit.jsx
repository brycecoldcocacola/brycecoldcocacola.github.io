import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SatelliteOrbit({ className = '' }) {
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
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 2, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

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
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 120;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, sizeAttenuation: true });
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

    // Continents hint
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

    // Orbit ring
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

    const satBodyGeo = new THREE.BoxGeometry(0.12, 0.12, 0.18);
    const satBodyMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 80 });
    satGroup.add(new THREE.Mesh(satBodyGeo, satBodyMat));

    const panelGeo = new THREE.BoxGeometry(0.35, 0.01, 0.1);
    const panelMat = new THREE.MeshPhongMaterial({ color: 0x2233aa, emissive: 0x112266, emissiveIntensity: 0.2 });
    const panelL = new THREE.Mesh(panelGeo, panelMat);
    panelL.position.x = -0.22;
    satGroup.add(panelL);
    const panelR = new THREE.Mesh(panelGeo, panelMat);
    panelR.position.x = 0.22;
    satGroup.add(panelR);

    scene.add(satGroup);

    // Animation
    let prevTime = performance.now();

    function animate() {
      animRef.current = requestAnimationFrame(animate);
      const time = (performance.now() - prevTime) / 1000;
      prevTime = performance.now();

      earthGroup.rotation.y += time * 0.08;

      const angle = time * 0.5;
      satGroup.position.x = Math.cos(angle) * orbitRadius;
      satGroup.position.z = Math.sin(angle) * orbitRadius;
      satGroup.position.y = Math.sin(angle * 2) * 0.15;
      satGroup.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Intersection observer to pause when off-screen
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
      earthGeo.dispose();
      earthMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div className={`satellite-orbit ${className}`} ref={mountRef} />
  );
}
