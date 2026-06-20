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

    // ---- Circular sprite (fixes square particles) ----
    const cv = document.createElement('canvas');
    cv.width = 64; cv.height = 64;
    const ctx2d = cv.getContext('2d')!;
    const grad = ctx2d.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0,   'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1,   'rgba(255,255,255,0)');
    ctx2d.fillStyle = grad;
    ctx2d.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(cv);

    // ---- Particles ----
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const isCyan = Math.random() > 0.5;
      // Darker colours visible on white bg (#0891B2 cyan / #6366F1 indigo)
      colors[i * 3]     = isCyan ? 0.03 : 0.39;
      colors[i * 3 + 1] = isCyan ? 0.57 : 0.40;
      colors[i * 3 + 2] = isCyan ? 0.70 : 0.95;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      map: sprite,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // ---- Double helix ----
    const hp1: THREE.Vector3[] = [];
    const hp2: THREE.Vector3[] = [];
    for (let i = 0; i < 300; i++) {
      const t = (i / 300) * Math.PI * 6 - Math.PI * 3;
      hp1.push(new THREE.Vector3(Math.cos(t) * 1.2, t * 0.25, Math.sin(t) * 1.2));
      hp2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 1.2, t * 0.25, Math.sin(t + Math.PI) * 1.2));
    }
    const h1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(hp1),
      new THREE.LineBasicMaterial({ color: 0x0891B2, transparent: true, opacity: 0.2 })
    );
    const h2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(hp2),
      new THREE.LineBasicMaterial({ color: 0x6366F1, transparent: true, opacity: 0.2 })
    );
    scene.add(h1);
    scene.add(h2);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / W - 0.5) * 0.8;
      my = (e.clientY / H - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', onMouse);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0004;
      particles.rotation.x += 0.0001;
      h1.rotation.y += 0.004;
      h2.rotation.y += 0.004;
      camera.position.x += (mx - camera.position.x) * 0.03;
      camera.position.y += (-my - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      sprite.dispose();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
