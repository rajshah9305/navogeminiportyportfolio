"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Check if there's already a canvas (strict mode double invocation)
    if (container.childNodes.length === 0) {
      container.appendChild(renderer.domElement);
    }

    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      
      void main() {
        vNormal = normal;
        vPosition = position;
        
        vec3 pos = position;
        float noise = sin(pos.x * 2.0 + uTime) * cos(pos.y * 2.0 + uTime) * 0.1;
        pos += normal * noise;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform vec3 color1;
      uniform vec3 color2;
      
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = dot(viewDir, vNormal);
        fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
        fresnel = pow(fresnel, 3.0);
        
        float mixVal = (vPosition.y + 2.0) / 4.0;
        vec3 baseColor = mix(color1, color2, mixVal);
        
        vec3 finalColor = baseColor + (vec3(0.6, 0.8, 1.0) * fresnel * 0.5);
        
        gl_FragColor = vec4(finalColor, 0.7 * fresnel + 0.1);
      }
    `;

    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        color1: { value: new THREE.Color('#0f172a') },
        color2: { value: new THREE.Color('#3b82f6') }
      },
      transparent: true,
      wireframe: false
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = window.innerWidth > 768 ? 3 : 0;
    sphere.position.y = window.innerWidth > 768 ? 0 : 2;
    scene.add(sphere);

    const wireMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.05 });
    const wireSphere = new THREE.Mesh(geometry, wireMat);
    wireSphere.scale.set(1.01, 1.01, 1.01);
    wireSphere.position.copy(sphere.position);
    scene.add(wireSphere);

    let targetY = 0;
    const onScroll = () => {
      targetY = window.scrollY * 0.001;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      material.uniforms.uTime.value = time * 0.5;
      
      sphere.rotation.y = time * 0.1;
      sphere.rotation.x = time * 0.05;
      wireSphere.rotation.copy(sphere.rotation);
      
      sphere.position.y += ((window.innerWidth > 768 ? 0 : 2) - targetY - sphere.position.y) * 0.05;
      wireSphere.position.copy(sphere.position);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      sphere.position.x = window.innerWidth > 768 ? 3 : 0;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
      
      geometry.dispose();
      material.dispose();
      wireMat.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="canvas-container" ref={containerRef}></div>;
}
