import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CraneVisualization = ({ craneParams, position = { z: 0, alpha: 0, beta: 0, gamma: 0, g: 0, x: 0, y: 0 }, width = "800px", height = "600px" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  const fixedCraneDimensions = {
    origin: { x: 0, y: 0, z: 0 },
    column: { diameter: 0.1, height: 2 },
    arm1: { length: 1, width: 0.1, height: 0.1 },
    arm2: { length: 1, width: 0.1, height: 0.1 },
    arm3: { length: 0.4, width: 0.05, height: 0.05 },
    gripper: { length: 0.1, width: 0.02, height: 0.02 },
  };


  useEffect(() => {
    console.log(position); // Log to check if position updates are received
    if (mountRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x333333); // Dark background for the 3D scene

      const camera = new THREE.PerspectiveCamera(
        75,
        width / height,
         0.1,
        1000
      );
      // Set the camera position to be offset along the x-axis and above the column
      camera.position.set(5, 3, 0); 
      camera.lookAt(0, 1, 0);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const light = new THREE.AmbientLight(0x404040);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 0);
      scene.add(light);
      scene.add(directionalLight);

      // Crane Components
      const material = new THREE.MeshLambertMaterial({ color: 0x7777ff });

      // Column
      const columnGeometry = new THREE.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);
      const column = new THREE.Mesh(columnGeometry, material);
      column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z); 
      // allow column to rotate about y (by angle alpha)
      column.rotation.y = position.alpha;

      // Arm 1
      const arm1Geometry = new THREE.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);
      const arm1 = new THREE.Mesh(arm1Geometry, material);
      // arm 1 is z units along the column
      arm1.position.y = position.z;
      // it can rotate about the z axis by angle beta
      arm1.rotation.y = position.beta;
      arm1.rotation.z = Math.PI/2;

      // Arm 2
      const arm2Geometry = new THREE.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);
      const arm2 = new THREE.Mesh(arm2Geometry, material);
      arm2.position.y = arm1.position.y;

      // arm 2 can rotate about the z axis by angle gamma
      arm2.rotation.y = position.gamma;

      // Arm 3
      const arm3Geometry = new THREE.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);
      const arm3 = new THREE.Mesh(arm3Geometry, material);
      arm3.position.y = arm2.position.y - 2;

      // Gripper
      const gripperGeometry = new THREE.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);
      const gripper = new THREE.Mesh(gripperGeometry, material);
   

      // Translate the crane to the calculated position
      gripper.position.x = position.x;
      gripper.position.y = position.y;
      gripper.position.z = position.z;

      // Adding objects to the scene
      scene.add(column);
      column.add(arm1);
      arm1.add(arm2);
      arm2.add(arm3);
      // arm3.add(gripper);


      const animate = function () {
        requestAnimationFrame(animate);
        controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [craneParams, position]); // Re-run this effect if craneParams or position changes

  return (
    <div className="visualiser-container" style={{ width: "100%", height: "100%" }}>
      <div ref={mountRef} style={{ width, height }} />
    </div>
  );
};

export default CraneVisualization;
