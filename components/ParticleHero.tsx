'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const count = 2500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const cyan = Math.random() > 0.5;
      colors[i * 3]     = cyan ? 0.13 : 0.51;
      colors[i * 3 + 1] = cyan ? 0.83 : 0.55;
      colors[i * 3 + 2] = cyan ? 0.93 : 0.97;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.018, vertexColors: true, transparent: true, opacity: 0.85 });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const hp1: THREE.Vector3[] = [], hp2: THREE.Vector3[] = [];
    for (let i = 0; i < 300; i++) {
      const t = (i / 300) * Math.PI * 6 - Math.PI * 3;
      hp1.push(new THREE.Vector3(Math.cos(t) * 1.2, t * 0.25, Math.sin(t) * 1.2));
      hp2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 1.2, t * 0.25, Math.sin(t + Math.PI) * 1.2));
    }
    const h1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(hp1), new THREE.LineBasicMaterial({ color: 0x22D3EE, transparent: true, opacity: 0.3 }));
    const h2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(hp2), new THREE.LineBasicMaterial({ color: 0x818CF8, transparent: true, opacity: 0.3 }));
    scene.add(h1); scene.add(h2);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => { mx = (e.clientX / W - 0.5) * 0.8; my = (e.clientY / H - 0.5) * 0.8; };
    window.addEventListener('mousemove', onMouse);

    let id: number;
    const animate = () => {
      id = requestAnimationFrame(animate);
      particles.rotation.y += 0.0004;
      particles.rotation.x += 0.0001;
      h1.rotation.y += 0.004; h2.rotation.y += 0.004;
      camera.position.x += (mx - camera.position.x) * 0.03;
      camera.position.y += (-my - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
