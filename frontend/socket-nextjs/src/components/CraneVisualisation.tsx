import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CraneVisualization = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  // define the crane dimensions and position
  const crane = {
    origin: { x: 0, y: 0, z: 0 },
    column: {diameter: 0.1, height: 2},
    arm1: {length: 0.5, width: 0.1, height: 0.1},
    arm2: {length: 1, width: 0.1, height: 0.1},
    arm3: {length: 0.4, width: 0.05, height: 0.05},
    gripper: {length: 0.1, width: 0.02, height: 0.02},
    kinematics: {z:0,alpha:0, beta:0, gamma:0} 
  }


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

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const light = new THREE.AmbientLight(0x404040);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 0);
      scene.add(light);
      scene.add(directionalLight);

      // Crane Components
      const material = new THREE.MeshLambertMaterial({ color: 0x7777ff });

      // Base
      // const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
      // const base = new THREE.Mesh(baseGeometry, material);
      // base.rotation.x = Math.PI / 2;

      // Column
      const columnGeometry = new THREE.CylinderGeometry(crane.column.diameter, crane.column.diameter, crane.column.height, 32);
      const column = new THREE.Mesh(columnGeometry, material);
      column.position.y = 1;

      // Arm 1
      const arm1Geometry = new THREE.BoxGeometry(crane.arm1.width, crane.arm1.length, crane.arm1.height);
      const arm1 = new THREE.Mesh(arm1Geometry, material);
      arm1.position.y = 1;
      arm1.position.x = 0.5;
      arm1.rotation.x = Math.PI / 2;

      // Arm 2
      const arm2Geometry = new THREE.BoxGeometry(crane.arm2.width, crane.arm2.length, crane.arm2.height);
      const arm2 = new THREE.Mesh(arm2Geometry, material);
      arm2.position.y = 1;
      arm2.position.x = 0;

      // Arm 3
      const arm3Geometry = new THREE.CylinderGeometry(crane.arm3.width, crane.arm3.width, crane.arm3.length, 32);
      const arm3 = new THREE.Mesh(arm3Geometry, material);
      arm3.position.y = 1;
      arm3.position.x = 0;
      arm3.rotation.z = Math.PI / 2;

      // Gripper
      const gripperGeometry = new THREE.BoxGeometry(crane.gripper.width, crane.gripper.length, crane.gripper.height);
      const gripper = new THREE.Mesh(gripperGeometry, material);
      gripper.position.x = 1;


      // Adding objects to the scene
      scene.add(column);
      column.add(arm1);
      arm1.add(arm2);
      arm2.add(arm3);
      arm3.add(gripper);


      const animate = function () {
        requestAnimationFrame(animate);
        controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true
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

  return <div ref={mountRef} style={{ width: "50%", height: "50%" }} />;
};

export default CraneVisualization;
