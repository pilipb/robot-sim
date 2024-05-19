import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface CraneDimensions {
  origin: { x: number; y: number; z: number };
  column: { diameter: number; height: number };
  arm1: { length: number; width: number; height: number };
  arm2: { length: number; width: number; height: number };
  arm3: { length: number; width: number; height: number };
  gripper: { length: number; width: number; height: number };
}

const fixedCraneDimensions: CraneDimensions = {
  origin: { x: 0, y: 0, z: 0 },
  column: { diameter: 0.1, height: 2 },
  arm1: { length: 1, width: 0.1, height: 0.1 },
  arm2: { length: 1, width: 0.1, height: 0.1 },
  arm3: { length: 0.4, width: 0.05, height: 0.05 },
  gripper: { length: 0.1, width: 0.02, height: 0.02 },
};

const CraneVisualization = ({ craneParams, position = { z: 0, alpha: 0, beta: 0, gamma: 0, g: 0, x: 0, y: 0 }, width = "800px", height = "600px" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(position); // Log to check if position updates are received
    if (mountRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x333333); // Dark background for the 3D scene

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
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

      // Add GridHelper
      const gridHelper = new THREE.GridHelper(10, 10);
      scene.add(gridHelper);

      // Crane Components
      const material = new THREE.MeshLambertMaterial({ color: 0x7777ff });

      // Column
      const columnGeometry = new THREE.CylinderGeometry(
        fixedCraneDimensions.column.diameter,
        fixedCraneDimensions.column.diameter,
        fixedCraneDimensions.column.height,
        32
      );
      const column = new THREE.Mesh(columnGeometry, material);
      column.position.set(
        fixedCraneDimensions.origin.x,
        fixedCraneDimensions.origin.y,
        fixedCraneDimensions.origin.z
      );
      // allow column to rotate about y (by angle alpha)
      column.rotation.y = position.alpha;
      column.position.y = fixedCraneDimensions.column.height / 2;

      // Arm 1
      const arm1Geometry = new THREE.BoxGeometry(
        fixedCraneDimensions.arm1.width,
        fixedCraneDimensions.arm1.length,
        fixedCraneDimensions.arm1.height
      );
      const arm1 = new THREE.Mesh(arm1Geometry, material);
      // arm 1 is z units along the column
      arm1.position.y = position.z;
      arm1.rotation.z = Math.PI / 2;
      arm1.position.x = fixedCraneDimensions.arm1.length / 2;

      // Arm 2
      const arm2Geometry = new THREE.BoxGeometry(
        fixedCraneDimensions.arm2.width,
        fixedCraneDimensions.arm2.length,
        fixedCraneDimensions.arm2.height
      );
      const arm2 = new THREE.Mesh(arm2Geometry, material);

      // Move the geometry so the end of the arm is at the origin
      arm2Geometry.translate(0, -fixedCraneDimensions.arm2.length / 2, 0);

      // Now apply the rotation
      arm2.rotation.x = position.beta;

      // Position the arm2 relative to arm1
      arm2.position.y = -fixedCraneDimensions.arm1.length / 2;
      arm2.position.x = -fixedCraneDimensions.arm1.height;

      // Arm 3
      const arm3Geometry = new THREE.BoxGeometry(
        fixedCraneDimensions.arm3.width,
        fixedCraneDimensions.arm3.length,
        fixedCraneDimensions.arm3.height
      );
      const arm3 = new THREE.Mesh(arm3Geometry, material);

      // Move the geometry so the end of the arm is at the origin
      arm3Geometry.translate(0, -fixedCraneDimensions.arm3.length / 2, 0);

      // Now apply the rotation
      arm3.rotation.x = position.gamma;
      arm3.position.y = -fixedCraneDimensions.arm2.length;
      arm3.position.x = -fixedCraneDimensions.arm2.height / 2 - fixedCraneDimensions.arm3.height / 2;
      arm3.position.z = 0;

      // Gripper consisting of two vertical blocks
      const gripperBlock1Geometry = new THREE.BoxGeometry(
        fixedCraneDimensions.gripper.width,
        fixedCraneDimensions.gripper.length,
        fixedCraneDimensions.gripper.height
      );
      const gripperBlock2Geometry = new THREE.BoxGeometry(
        fixedCraneDimensions.gripper.width,
        fixedCraneDimensions.gripper.length,
        fixedCraneDimensions.gripper.height
      );

      const gripperBlock1 = new THREE.Mesh(gripperBlock1Geometry, material);
      const gripperBlock2 = new THREE.Mesh(gripperBlock2Geometry, material);

    
      gripperBlock1Geometry.translate(0, -fixedCraneDimensions.gripper.length / 2, 0);
      gripperBlock2Geometry.translate(
        0,
        -fixedCraneDimensions.gripper.length / 2,
        0
      );
      // Now apply the rotation
      gripperBlock1.rotation.z = Math.PI / 2;
      gripperBlock2.rotation.z = Math.PI / 2;

      // Position blocks vertically and slightly apart
      gripperBlock1.position.y = -fixedCraneDimensions.arm3.length + position.g;
      gripperBlock1.position.x = -fixedCraneDimensions.gripper.height - fixedCraneDimensions.arm3.height;

      gripperBlock2.position.y = -fixedCraneDimensions.arm3.length;
      gripperBlock2.position.x = -fixedCraneDimensions.gripper.height - fixedCraneDimensions.arm3.height;

      // Adding objects to the scene
      scene.add(column);
      column.add(arm1);
      arm1.add(arm2);
      arm2.add(arm3);
      arm3.add(gripperBlock1);
      arm3.add(gripperBlock2);

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

      window.addEventListener("resize", handleResize);

      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener("resize", handleResize);
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
