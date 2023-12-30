import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export default function Model() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new THREE.PointLight(0x1a6fb0, 20, 1000); // Create a white point light
    light.position.set(-2, 6, -2);
    light.castShadow = true;
    light.target = camera;
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      "/scene.gltf",
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      animate();
    }

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <main ref={mountRef} className="absolute z-10">
      Model
    </main>
  );
}
