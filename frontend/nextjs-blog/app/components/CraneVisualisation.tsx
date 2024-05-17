/** @client */

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CraneVisualization = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mountRef.current) {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xeeeeee);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(5, 5, 5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const light = new THREE.AmbientLight(0x404040);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 0);
      scene.add(light);
      scene.add(directionalLight);

      // Crane Components
      const material = new THREE.MeshLambertMaterial({ color: 0x7777ff });

      // Base
      const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
      const base = new THREE.Mesh(baseGeometry, material);
      base.rotation.x = Math.PI / 2;

      // Column
      const columnGeometry = new THREE.BoxGeometry(0.1, 2, 0.1);
      const column = new THREE.Mesh(columnGeometry, material);
      column.position.y = 1;

      // Arm
      const armGeometry = new THREE.BoxGeometry(0.05, 1, 0.1);
      const arm = new THREE.Mesh(armGeometry, material);
      arm.position.y = 1;
      arm.position.x = 0.5;

      // Elbow Joint
      const elbowGeometry = new THREE.SphereGeometry(0.1, 32, 16);
      const elbow = new THREE.Mesh(elbowGeometry, material);
      elbow.position.x = 1;
      elbow.position.y = 1;

      // Wrist
      const wristGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 32);
      const wrist = new THREE.Mesh(wristGeometry, material);
      wrist.position.x = 1;
      wrist.position.y = 1.2;
      wrist.rotation.z = Math.PI / 2;

      // Gripper
      const gripperGeometry = new THREE.BoxGeometry(0.1, 0.02, 0.02);
      const gripper = new THREE.Mesh(gripperGeometry, material);
      gripper.position.x = 1.4;

      // Adding objects to the scene
      scene.add(base);
      base.add(column);
      column.add(arm);
      arm.add(elbow);
      elbow.add(wrist);
      wrist.add(gripper);

      const animate = function () {
        requestAnimationFrame(animate);
        // You can add animation logic here
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default CraneVisualization;
