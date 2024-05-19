"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/visualiser",{

/***/ "./src/components/CraneVisualisation.tsx":
/*!***********************************************!*\
  !*** ./src/components/CraneVisualisation.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position = {\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    }, width = \"800px\", height = \"600px\" } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const fixedCraneDimensions = {\n        origin: {\n            x: 0,\n            y: 0,\n            z: 0\n        },\n        column: {\n            diameter: 0.1,\n            height: 2\n        },\n        arm1: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm2: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm3: {\n            length: 0.4,\n            width: 0.05,\n            height: 0.05\n        },\n        gripper: {\n            length: 0.1,\n            width: 0.02,\n            height: 0.02\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(position); // Log to check if position updates are received\n        if (mountRef.current) {\n            const width = mountRef.current.clientWidth;\n            const height = mountRef.current.clientHeight;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x333333); // Dark background for the 3D scene\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);\n            // Set the camera position to be offset along the x-axis and above the column\n            camera.position.set(5, 3, 0);\n            camera.lookAt(0, 1, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(width, height);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Add GridHelper\n            const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(10, 10);\n            scene.add(gridHelper);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z);\n            // allow column to rotate about y (by angle alpha)\n            column.rotation.y = position.alpha;\n            column.position.y = fixedCraneDimensions.column.height / 2;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            // arm 1 is z units along the column\n            arm1.position.y = position.z;\n            arm1.rotation.z = Math.PI / 2;\n            arm1.position.x = fixedCraneDimensions.arm1.length / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = arm1.position.y - fixedCraneDimensions.arm2.height;\n            const pivotX = -fixedCraneDimensions.arm2.length; // Halfway along arm1\n            const pivotY = 0; // Same height as arm1\n            const pivotZ = 0; // No change in the z-axis\n            // Translate arm2 to the pivot point\n            arm2.position.set(pivotX, pivotY, pivotZ);\n            // Apply rotation around the pivot point\n            arm2.rotation.x = position.beta;\n            // Translate arm2 back from the pivot point\n            arm2.position.sub(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(pivotX, pivotY, pivotZ));\n            arm2.position.y = -fixedCraneDimensions.arm1.length;\n            arm2.position.x = -fixedCraneDimensions.arm1.height;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 0;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            // Translate the crane to the calculated position\n            gripper.position.x = position.x;\n            gripper.position.y = position.y;\n            gripper.position.z = position.z;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            // arm2.add(arm3);\n            // arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            // Handle window resize\n            const handleResize = ()=>{\n                const width = mountRef.current.clientWidth;\n                const height = mountRef.current.clientHeight;\n                renderer.setSize(width, height);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n                window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width,\n                height\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 145,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUIsR0FBRyxDQUFDL0I7WUFDVkEsT0FBTytCLEdBQUcsQ0FBQzdCO1lBQ1hBLEtBQUs2QixHQUFHLENBQUMzQjtZQUNULGtCQUFrQjtZQUNsQixxQkFBcUI7WUFHckIsTUFBTWlELFVBQVU7Z0JBQ2RDLHNCQUFzQkQ7Z0JBQ3RCNUIsU0FBU0MsTUFBTSxJQUFJLGlGQUFpRjtnQkFDcEdOLFNBQVNtQyxNQUFNLENBQUMzQyxPQUFPSTtZQUN6QjtZQUVBcUM7WUFFQSx1QkFBdUI7WUFDdkIsTUFBTUcsZUFBZTtnQkFDbkIsTUFBTTdELFFBQVFFLFNBQVNZLE9BQU8sQ0FBQ0MsV0FBVztnQkFDMUMsTUFBTWQsU0FBU0MsU0FBU1ksT0FBTyxDQUFDRSxZQUFZO2dCQUM1Q1MsU0FBU0UsT0FBTyxDQUFDM0IsT0FBT0M7Z0JBQ3hCb0IsT0FBT3lDLE1BQU0sR0FBRzlELFFBQVFDO2dCQUN4Qm9CLE9BQU8wQyxzQkFBc0I7WUFDL0I7WUFFQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7WUFFbEMsT0FBTztnQkFDTCxJQUFJM0QsU0FBU1ksT0FBTyxFQUFFO29CQUNwQlosU0FBU1ksT0FBTyxDQUFDb0QsV0FBVyxDQUFDekMsU0FBU0ksVUFBVTtnQkFDbEQ7Z0JBQ0FtQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTjtZQUN2QztRQUNGO0lBQ0YsR0FBRztRQUFDdEU7UUFBYUM7S0FBUyxHQUFHLHdEQUF3RDtJQUVyRixxQkFDRSw4REFBQzRFO1FBQUlDLFdBQVU7UUFBdUJDLE9BQU87WUFBRXRFLE9BQU87WUFBUUMsUUFBUTtRQUFPO2tCQUMzRSw0RUFBQ21FO1lBQUlHLEtBQUtyRTtZQUFVb0UsT0FBTztnQkFBRXRFO2dCQUFPQztZQUFPOzs7Ozs7Ozs7OztBQUdqRDtHQS9JTVg7S0FBQUE7QUFpSk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmFuZVZpc3VhbGlzYXRpb24udHN4Pzg4NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnO1xuXG5jb25zdCBDcmFuZVZpc3VhbGl6YXRpb24gPSAoeyBjcmFuZVBhcmFtcywgcG9zaXRpb24gPSB7IHo6IDAsIGFscGhhOiAwLCBiZXRhOiAwLCBnYW1tYTogMCwgZzogMCwgeDogMCwgeTogMCB9LCB3aWR0aCA9IFwiODAwcHhcIiwgaGVpZ2h0ID0gXCI2MDBweFwiIH0pID0+IHtcbiAgY29uc3QgbW91bnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGZpeGVkQ3JhbmVEaW1lbnNpb25zID0ge1xuICAgIG9yaWdpbjogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXG4gICAgY29sdW1uOiB7IGRpYW1ldGVyOiAwLjEsIGhlaWdodDogMiB9LFxuICAgIGFybTE6IHsgbGVuZ3RoOiAxLCB3aWR0aDogMC4xLCBoZWlnaHQ6IDAuMSB9LFxuICAgIGFybTI6IHsgbGVuZ3RoOiAxLCB3aWR0aDogMC4xLCBoZWlnaHQ6IDAuMSB9LFxuICAgIGFybTM6IHsgbGVuZ3RoOiAwLjQsIHdpZHRoOiAwLjA1LCBoZWlnaHQ6IDAuMDUgfSxcbiAgICBncmlwcGVyOiB7IGxlbmd0aDogMC4xLCB3aWR0aDogMC4wMiwgaGVpZ2h0OiAwLjAyIH0sXG4gIH07XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTsgLy8gTG9nIHRvIGNoZWNrIGlmIHBvc2l0aW9uIHVwZGF0ZXMgYXJlIHJlY2VpdmVkXG4gICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDMzMzMzMyk7IC8vIERhcmsgYmFja2dyb3VuZCBmb3IgdGhlIDNEIHNjZW5lXG5cbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgNzUsXG4gICAgICAgIHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgMC4xLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgICAgLy8gU2V0IHRoZSBjYW1lcmEgcG9zaXRpb24gdG8gYmUgb2Zmc2V0IGFsb25nIHRoZSB4LWF4aXMgYW5kIGFib3ZlIHRoZSBjb2x1bW5cbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoNSwgMywgMCk7IFxuICAgICAgY2FtZXJhLmxvb2tBdCgwLCAxLCAwKTtcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIG1vdW50UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDApO1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMCwgMSwgMCk7XG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xuICAgICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgICAvLyBBZGQgR3JpZEhlbHBlclxuICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKDEwLCAxMCk7XG4gICAgICBzY2VuZS5hZGQoZ3JpZEhlbHBlcik7XG5cbiAgICAgIC8vIENyYW5lIENvbXBvbmVudHNcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHg3Nzc3ZmYgfSk7XG5cbiAgICAgIC8vIENvbHVtblxuICAgICAgY29uc3QgY29sdW1uR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uZGlhbWV0ZXIsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5kaWFtZXRlciwgZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmhlaWdodCwgMzIpO1xuICAgICAgY29uc3QgY29sdW1uID0gbmV3IFRIUkVFLk1lc2goY29sdW1uR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGNvbHVtbi5wb3NpdGlvbi5zZXQoZml4ZWRDcmFuZURpbWVuc2lvbnMub3JpZ2luLngsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLm9yaWdpbi55LCBmaXhlZENyYW5lRGltZW5zaW9ucy5vcmlnaW4ueik7IFxuICAgICAgLy8gYWxsb3cgY29sdW1uIHRvIHJvdGF0ZSBhYm91dCB5IChieSBhbmdsZSBhbHBoYSlcbiAgICAgIGNvbHVtbi5yb3RhdGlvbi55ID0gcG9zaXRpb24uYWxwaGE7XG4gICAgICBjb2x1bW4ucG9zaXRpb24ueSA9IGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5oZWlnaHQgLyAyO1xuXG4gICAgICAvLyBBcm0gMVxuICAgICAgY29uc3QgYXJtMUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEud2lkdGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEubGVuZ3RoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0xID0gbmV3IFRIUkVFLk1lc2goYXJtMUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAvLyBhcm0gMSBpcyB6IHVuaXRzIGFsb25nIHRoZSBjb2x1bW5cbiAgICAgIGFybTEucG9zaXRpb24ueSA9IHBvc2l0aW9uLno7XG4gICAgICBhcm0xLnJvdGF0aW9uLnogPSBNYXRoLlBJLzI7XG4gICAgICBhcm0xLnBvc2l0aW9uLnggPSBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCAvIDI7XG5cbiAgICAgIC8vIEFybSAyXG4gICAgICBjb25zdCBhcm0yR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi53aWR0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTIgPSBuZXcgVEhSRUUuTWVzaChhcm0yR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTIucG9zaXRpb24ueSA9IGFybTEucG9zaXRpb24ueSAtIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIuaGVpZ2h0O1xuXG4gICAgICBjb25zdCBwaXZvdFggPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGg7IC8vIEhhbGZ3YXkgYWxvbmcgYXJtMVxuICAgICAgY29uc3QgcGl2b3RZID0gMDsgLy8gU2FtZSBoZWlnaHQgYXMgYXJtMVxuICAgICAgY29uc3QgcGl2b3RaID0gMDsgLy8gTm8gY2hhbmdlIGluIHRoZSB6LWF4aXNcblxuICAgICAgLy8gVHJhbnNsYXRlIGFybTIgdG8gdGhlIHBpdm90IHBvaW50XG4gICAgICBhcm0yLnBvc2l0aW9uLnNldChwaXZvdFgsIHBpdm90WSwgcGl2b3RaKTtcbiAgICAgIC8vIEFwcGx5IHJvdGF0aW9uIGFyb3VuZCB0aGUgcGl2b3QgcG9pbnRcbiAgICAgIGFybTIucm90YXRpb24ueCA9IHBvc2l0aW9uLmJldGE7XG4gICAgICAvLyBUcmFuc2xhdGUgYXJtMiBiYWNrIGZyb20gdGhlIHBpdm90IHBvaW50XG4gICAgICBhcm0yLnBvc2l0aW9uLnN1YihuZXcgVEhSRUUuVmVjdG9yMyhwaXZvdFgsIHBpdm90WSwgcGl2b3RaKSk7XG4gICAgICBhcm0yLnBvc2l0aW9uLnkgPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5sZW5ndGg7XG4gICAgICBhcm0yLnBvc2l0aW9uLnggPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5oZWlnaHQ7XG5cbiAgICAgIC8vIEFybSAzXG4gICAgICBjb25zdCBhcm0zR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy53aWR0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5sZW5ndGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTMgPSBuZXcgVEhSRUUuTWVzaChhcm0zR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTMucG9zaXRpb24ueSA9IDA7XG5cblxuICAgICAgLy8gR3JpcHBlclxuICAgICAgY29uc3QgZ3JpcHBlckdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIud2lkdGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIubGVuZ3RoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLmhlaWdodCk7XG4gICAgICBjb25zdCBncmlwcGVyID0gbmV3IFRIUkVFLk1lc2goZ3JpcHBlckdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICBcblxuICAgICAgLy8gVHJhbnNsYXRlIHRoZSBjcmFuZSB0byB0aGUgY2FsY3VsYXRlZCBwb3NpdGlvblxuICAgICAgZ3JpcHBlci5wb3NpdGlvbi54ID0gcG9zaXRpb24ueDtcbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueSA9IHBvc2l0aW9uLnk7XG4gICAgICBncmlwcGVyLnBvc2l0aW9uLnogPSBwb3NpdGlvbi56O1xuXG4gICAgICAvLyBBZGRpbmcgb2JqZWN0cyB0byB0aGUgc2NlbmVcbiAgICAgIHNjZW5lLmFkZChjb2x1bW4pO1xuICAgICAgY29sdW1uLmFkZChhcm0xKTtcbiAgICAgIGFybTEuYWRkKGFybTIpO1xuICAgICAgLy8gYXJtMi5hZGQoYXJtMyk7XG4gICAgICAvLyBhcm0zLmFkZChncmlwcGVyKTtcblxuXG4gICAgICBjb25zdCBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpOyAvLyBvbmx5IHJlcXVpcmVkIGlmIGNvbnRyb2xzLmVuYWJsZURhbXBpbmcgb3IgY29udHJvbHMuYXV0b1JvdGF0ZSBhcmUgc2V0IHRvIHRydWVcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfTtcblxuICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBtb3VudFJlZi5jdXJyZW50LnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtjcmFuZVBhcmFtcywgcG9zaXRpb25dKTsgLy8gUmUtcnVuIHRoaXMgZWZmZWN0IGlmIGNyYW5lUGFyYW1zIG9yIHBvc2l0aW9uIGNoYW5nZXNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXNlci1jb250YWluZXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICA8ZGl2IHJlZj17bW91bnRSZWZ9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyYW5lVmlzdWFsaXphdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIkNyYW5lVmlzdWFsaXphdGlvbiIsImNyYW5lUGFyYW1zIiwicG9zaXRpb24iLCJ6IiwiYWxwaGEiLCJiZXRhIiwiZ2FtbWEiLCJnIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIm1vdW50UmVmIiwiZml4ZWRDcmFuZURpbWVuc2lvbnMiLCJvcmlnaW4iLCJjb2x1bW4iLCJkaWFtZXRlciIsImFybTEiLCJsZW5ndGgiLCJhcm0yIiwiYXJtMyIsImdyaXBwZXIiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2NlbmUiLCJTY2VuZSIsImJhY2tncm91bmQiLCJDb2xvciIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic2V0IiwibG9va0F0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwidXBkYXRlIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsImFkZCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwibWF0ZXJpYWwiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiY29sb3IiLCJjb2x1bW5HZW9tZXRyeSIsIkN5bGluZGVyR2VvbWV0cnkiLCJNZXNoIiwicm90YXRpb24iLCJhcm0xR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIk1hdGgiLCJQSSIsImFybTJHZW9tZXRyeSIsInBpdm90WCIsInBpdm90WSIsInBpdm90WiIsInN1YiIsIlZlY3RvcjMiLCJhcm0zR2VvbWV0cnkiLCJncmlwcGVyR2VvbWV0cnkiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});