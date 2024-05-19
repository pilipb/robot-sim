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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst fixedCraneDimensions = {\n    origin: {\n        x: 0,\n        y: 0,\n        z: 0\n    },\n    column: {\n        diameter: 0.1,\n        height: 2\n    },\n    arm1: {\n        length: 1,\n        width: 0.1,\n        height: 0.1\n    },\n    arm2: {\n        length: 1,\n        width: 0.1,\n        height: 0.1\n    },\n    arm3: {\n        length: 0.4,\n        width: 0.05,\n        height: 0.05\n    },\n    gripper: {\n        length: 0.1,\n        width: 0.02,\n        height: 0.02\n    }\n};\nconst CraneVisualization = (param)=>{\n    let { craneParams, position = {\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    }, width = \"800px\", height = \"600px\" } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(position); // Log to check if position updates are received\n        if (mountRef.current) {\n            const width = mountRef.current.clientWidth;\n            const height = mountRef.current.clientHeight;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x333333); // Dark background for the 3D scene\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);\n            // Set the camera position to be offset along the x-axis and above the column\n            camera.position.set(5, 3, 0);\n            camera.lookAt(0, 1, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(width, height);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Add GridHelper\n            const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(10, 10);\n            scene.add(gridHelper);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z);\n            // allow column to rotate about y (by angle alpha)\n            column.rotation.y = position.alpha;\n            column.position.y = fixedCraneDimensions.column.height / 2;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            // arm 1 is z units along the column\n            arm1.position.y = position.z;\n            arm1.rotation.z = Math.PI / 2;\n            arm1.position.x = fixedCraneDimensions.arm1.length / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            // Move the geometry so the end of the arm is at the origin\n            arm2Geometry.translate(0, -fixedCraneDimensions.arm2.length / 2, 0);\n            // Now apply the rotation\n            arm2.rotation.x = position.beta;\n            // Position the arm2 relative to arm1\n            arm2.position.y = -fixedCraneDimensions.arm1.length / 2;\n            arm2.position.x = -fixedCraneDimensions.arm1.height;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            // Move the geometry so the end of the arm is at the origin\n            arm3Geometry.translate(0, -fixedCraneDimensions.arm3.length / 2, 0);\n            // Now apply the rotation\n            arm3.rotation.x = position.gamma;\n            arm3.position.y = -fixedCraneDimensions.arm2.length;\n            arm3.position.x = -fixedCraneDimensions.arm2.height / 2 - fixedCraneDimensions.arm3.height / 2;\n            arm3.position.z = 0;\n            // Gripper consisting of two vertical blocks\n            const gripperBlock1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripperBlock2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripperBlock1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperBlock1Geometry, material);\n            const gripperBlock2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperBlock2Geometry, material);\n            gripperBlock1Geometry.translate(0, -fixedCraneDimensions.gripper.length / 2, 0);\n            gripperBlock2Geometry.translate(0, -fixedCraneDimensions.gripper.length / 2, 0);\n            // Now apply the rotation\n            gripperBlock1.rotation.z = Math.PI / 2;\n            gripperBlock2.rotation.z = Math.PI / 2;\n            // Position blocks vertically and slightly apart\n            gripperBlock1.position.y = -fixedCraneDimensions.arm3.length / 2;\n            gripperBlock1.position.x = -fixedCraneDimensions.gripper.height - fixedCraneDimensions.arm3.height;\n            gripperBlock2.position.y = -fixedCraneDimensions.arm3.length;\n            gripperBlock2.position.x = -fixedCraneDimensions.gripper.height - fixedCraneDimensions.arm3.height;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripperBlock1);\n            arm3.add(gripperBlock2);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            // Handle window resize\n            const handleResize = ()=>{\n                const width = mountRef.current.clientWidth;\n                const height = mountRef.current.clientHeight;\n                renderer.setSize(width, height);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n                window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width,\n                height\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 195,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 194,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BHTixTQUFTa0MsTUFBTSxDQUFDMUMsT0FBT0k7WUFDekI7WUFFQW9DO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU1HLGVBQWU7Z0JBQ25CLE1BQU01RCxRQUFRVyxTQUFTRyxPQUFPLENBQUNDLFdBQVc7Z0JBQzFDLE1BQU1sQixTQUFTYyxTQUFTRyxPQUFPLENBQUNFLFlBQVk7Z0JBQzVDUyxTQUFTRSxPQUFPLENBQUMzQixPQUFPSDtnQkFDeEJ3QixPQUFPd0MsTUFBTSxHQUFHN0QsUUFBUUg7Z0JBQ3hCd0IsT0FBT3lDLHNCQUFzQjtZQUMvQjtZQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtZQUVsQyxPQUFPO2dCQUNMLElBQUlqRCxTQUFTRyxPQUFPLEVBQUU7b0JBQ3BCSCxTQUFTRyxPQUFPLENBQUNtRCxXQUFXLENBQUN4QyxTQUFTSSxVQUFVO2dCQUNsRDtnQkFDQWtDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVOO1lBQ3ZDO1FBQ0Y7SUFDRixHQUFHO1FBQUN2RDtRQUFhQztLQUFTLEdBQUcsd0RBQXdEO0lBRXJGLHFCQUNFLDhEQUFDNkQ7UUFBSUMsV0FBVTtRQUF1QkMsT0FBTztZQUFFckUsT0FBTztZQUFRSCxRQUFRO1FBQU87a0JBQzNFLDRFQUFDc0U7WUFBSUcsS0FBSzNEO1lBQVUwRCxPQUFPO2dCQUFFckU7Z0JBQU9IO1lBQU87Ozs7Ozs7Ozs7O0FBR2pEO0dBL0tNTztLQUFBQTtBQWlMTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvbi50c3g/ODg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5cbmludGVyZmFjZSBDcmFuZURpbWVuc2lvbnMge1xuICBvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHo6IG51bWJlciB9O1xuICBjb2x1bW46IHsgZGlhbWV0ZXI6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgYXJtMTogeyBsZW5ndGg6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgYXJtMjogeyBsZW5ndGg6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgYXJtMzogeyBsZW5ndGg6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgZ3JpcHBlcjogeyBsZW5ndGg6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbn1cblxuY29uc3QgZml4ZWRDcmFuZURpbWVuc2lvbnM6IENyYW5lRGltZW5zaW9ucyA9IHtcbiAgb3JpZ2luOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgY29sdW1uOiB7IGRpYW1ldGVyOiAwLjEsIGhlaWdodDogMiB9LFxuICBhcm0xOiB7IGxlbmd0aDogMSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjEgfSxcbiAgYXJtMjogeyBsZW5ndGg6IDEsIHdpZHRoOiAwLjEsIGhlaWdodDogMC4xIH0sXG4gIGFybTM6IHsgbGVuZ3RoOiAwLjQsIHdpZHRoOiAwLjA1LCBoZWlnaHQ6IDAuMDUgfSxcbiAgZ3JpcHBlcjogeyBsZW5ndGg6IDAuMSwgd2lkdGg6IDAuMDIsIGhlaWdodDogMC4wMiB9LFxufTtcblxuY29uc3QgQ3JhbmVWaXN1YWxpemF0aW9uID0gKHsgY3JhbmVQYXJhbXMsIHBvc2l0aW9uID0geyB6OiAwLCBhbHBoYTogMCwgYmV0YTogMCwgZ2FtbWE6IDAsIGc6IDAsIHg6IDAsIHk6IDAgfSwgd2lkdGggPSBcIjgwMHB4XCIsIGhlaWdodCA9IFwiNjAwcHhcIiB9KSA9PiB7XG4gIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTsgLy8gTG9nIHRvIGNoZWNrIGlmIHBvc2l0aW9uIHVwZGF0ZXMgYXJlIHJlY2VpdmVkXG4gICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDMzMzMzMyk7IC8vIERhcmsgYmFja2dyb3VuZCBmb3IgdGhlIDNEIHNjZW5lXG5cbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAvLyBTZXQgdGhlIGNhbWVyYSBwb3NpdGlvbiB0byBiZSBvZmZzZXQgYWxvbmcgdGhlIHgtYXhpcyBhbmQgYWJvdmUgdGhlIGNvbHVtblxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCg1LCAzLCAwKTtcbiAgICAgIGNhbWVyYS5sb29rQXQoMCwgMSwgMCk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICBtb3VudFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBjb250cm9scy51cGRhdGUoKTtcblxuICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC41KTtcbiAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDAsIDEsIDApO1xuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgICAgLy8gQWRkIEdyaWRIZWxwZXJcbiAgICAgIGNvbnN0IGdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigxMCwgMTApO1xuICAgICAgc2NlbmUuYWRkKGdyaWRIZWxwZXIpO1xuXG4gICAgICAvLyBDcmFuZSBDb21wb25lbnRzXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4Nzc3N2ZmIH0pO1xuXG4gICAgICAvLyBDb2x1bW5cbiAgICAgIGNvbnN0IGNvbHVtbkdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5kaWFtZXRlcixcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmRpYW1ldGVyLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uaGVpZ2h0LFxuICAgICAgICAzMlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBUSFJFRS5NZXNoKGNvbHVtbkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBjb2x1bW4ucG9zaXRpb24uc2V0KFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5vcmlnaW4ueCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMub3JpZ2luLnksXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLm9yaWdpbi56XG4gICAgICApO1xuICAgICAgLy8gYWxsb3cgY29sdW1uIHRvIHJvdGF0ZSBhYm91dCB5IChieSBhbmdsZSBhbHBoYSlcbiAgICAgIGNvbHVtbi5yb3RhdGlvbi55ID0gcG9zaXRpb24uYWxwaGE7XG4gICAgICBjb2x1bW4ucG9zaXRpb24ueSA9IGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5oZWlnaHQgLyAyO1xuXG4gICAgICAvLyBBcm0gMVxuICAgICAgY29uc3QgYXJtMUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLndpZHRoLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5oZWlnaHRcbiAgICAgICk7XG4gICAgICBjb25zdCBhcm0xID0gbmV3IFRIUkVFLk1lc2goYXJtMUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAvLyBhcm0gMSBpcyB6IHVuaXRzIGFsb25nIHRoZSBjb2x1bW5cbiAgICAgIGFybTEucG9zaXRpb24ueSA9IHBvc2l0aW9uLno7XG4gICAgICBhcm0xLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcbiAgICAgIGFybTEucG9zaXRpb24ueCA9IGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEubGVuZ3RoIC8gMjtcblxuICAgICAgLy8gQXJtIDJcbiAgICAgIGNvbnN0IGFybTJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi53aWR0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY29uc3QgYXJtMiA9IG5ldyBUSFJFRS5NZXNoKGFybTJHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgICAvLyBNb3ZlIHRoZSBnZW9tZXRyeSBzbyB0aGUgZW5kIG9mIHRoZSBhcm0gaXMgYXQgdGhlIG9yaWdpblxuICAgICAgYXJtMkdlb21ldHJ5LnRyYW5zbGF0ZSgwLCAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGggLyAyLCAwKTtcblxuICAgICAgLy8gTm93IGFwcGx5IHRoZSByb3RhdGlvblxuICAgICAgYXJtMi5yb3RhdGlvbi54ID0gcG9zaXRpb24uYmV0YTtcblxuICAgICAgLy8gUG9zaXRpb24gdGhlIGFybTIgcmVsYXRpdmUgdG8gYXJtMVxuICAgICAgYXJtMi5wb3NpdGlvbi55ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEubGVuZ3RoIC8gMjtcbiAgICAgIGFybTIucG9zaXRpb24ueCA9IC1maXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmhlaWdodDtcblxuICAgICAgLy8gQXJtIDNcbiAgICAgIGNvbnN0IGFybTNHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy53aWR0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5sZW5ndGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY29uc3QgYXJtMyA9IG5ldyBUSFJFRS5NZXNoKGFybTNHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgICAvLyBNb3ZlIHRoZSBnZW9tZXRyeSBzbyB0aGUgZW5kIG9mIHRoZSBhcm0gaXMgYXQgdGhlIG9yaWdpblxuICAgICAgYXJtM0dlb21ldHJ5LnRyYW5zbGF0ZSgwLCAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5sZW5ndGggLyAyLCAwKTtcblxuICAgICAgLy8gTm93IGFwcGx5IHRoZSByb3RhdGlvblxuICAgICAgYXJtMy5yb3RhdGlvbi54ID0gcG9zaXRpb24uZ2FtbWE7XG4gICAgICBhcm0zLnBvc2l0aW9uLnkgPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGg7XG4gICAgICBhcm0zLnBvc2l0aW9uLnggPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5oZWlnaHQgLyAyIC0gZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5oZWlnaHQgLyAyO1xuICAgICAgYXJtMy5wb3NpdGlvbi56ID0gMDtcblxuICAgICAgLy8gR3JpcHBlciBjb25zaXN0aW5nIG9mIHR3byB2ZXJ0aWNhbCBibG9ja3NcbiAgICAgIGNvbnN0IGdyaXBwZXJCbG9jazFHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci53aWR0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5sZW5ndGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY29uc3QgZ3JpcHBlckJsb2NrMkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLndpZHRoLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLmxlbmd0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGdyaXBwZXJCbG9jazEgPSBuZXcgVEhSRUUuTWVzaChncmlwcGVyQmxvY2sxR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGNvbnN0IGdyaXBwZXJCbG9jazIgPSBuZXcgVEhSRUUuTWVzaChncmlwcGVyQmxvY2syR2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgIFxuICAgICAgZ3JpcHBlckJsb2NrMUdlb21ldHJ5LnRyYW5zbGF0ZSgwLCAtZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5sZW5ndGggLyAyLCAwKTtcbiAgICAgIGdyaXBwZXJCbG9jazJHZW9tZXRyeS50cmFuc2xhdGUoXG4gICAgICAgIDAsXG4gICAgICAgIC1maXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLmxlbmd0aCAvIDIsXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICAvLyBOb3cgYXBwbHkgdGhlIHJvdGF0aW9uXG4gICAgICBncmlwcGVyQmxvY2sxLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcbiAgICAgIGdyaXBwZXJCbG9jazIucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xuXG4gICAgICAvLyBQb3NpdGlvbiBibG9ja3MgdmVydGljYWxseSBhbmQgc2xpZ2h0bHkgYXBhcnRcbiAgICAgIGdyaXBwZXJCbG9jazEucG9zaXRpb24ueSA9IC1maXhlZENyYW5lRGltZW5zaW9ucy5hcm0zLmxlbmd0aCAvIDI7XG4gICAgICBncmlwcGVyQmxvY2sxLnBvc2l0aW9uLnggPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5oZWlnaHQgLSBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0zLmhlaWdodDtcblxuICAgICAgZ3JpcHBlckJsb2NrMi5wb3NpdGlvbi55ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoO1xuICAgICAgZ3JpcHBlckJsb2NrMi5wb3NpdGlvbi54ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0IC0gZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5oZWlnaHQ7XG5cbiAgICAgIC8vIEFkZGluZyBvYmplY3RzIHRvIHRoZSBzY2VuZVxuICAgICAgc2NlbmUuYWRkKGNvbHVtbik7XG4gICAgICBjb2x1bW4uYWRkKGFybTEpO1xuICAgICAgYXJtMS5hZGQoYXJtMik7XG4gICAgICBhcm0yLmFkZChhcm0zKTtcbiAgICAgIGFybTMuYWRkKGdyaXBwZXJCbG9jazEpO1xuICAgICAgYXJtMy5hZGQoZ3JpcHBlckJsb2NrMik7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7IC8vIG9ubHkgcmVxdWlyZWQgaWYgY29udHJvbHMuZW5hYmxlRGFtcGluZyBvciBjb250cm9scy5hdXRvUm90YXRlIGFyZSBzZXQgdG8gdHJ1ZVxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlKCk7XG5cbiAgICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgbW91bnRSZWYuY3VycmVudC5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtjcmFuZVBhcmFtcywgcG9zaXRpb25dKTsgLy8gUmUtcnVuIHRoaXMgZWZmZWN0IGlmIGNyYW5lUGFyYW1zIG9yIHBvc2l0aW9uIGNoYW5nZXNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXNlci1jb250YWluZXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICA8ZGl2IHJlZj17bW91bnRSZWZ9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyYW5lVmlzdWFsaXphdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImZpeGVkQ3JhbmVEaW1lbnNpb25zIiwib3JpZ2luIiwieCIsInkiLCJ6IiwiY29sdW1uIiwiZGlhbWV0ZXIiLCJoZWlnaHQiLCJhcm0xIiwibGVuZ3RoIiwid2lkdGgiLCJhcm0yIiwiYXJtMyIsImdyaXBwZXIiLCJDcmFuZVZpc3VhbGl6YXRpb24iLCJjcmFuZVBhcmFtcyIsInBvc2l0aW9uIiwiYWxwaGEiLCJiZXRhIiwiZ2FtbWEiLCJnIiwibW91bnRSZWYiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2NlbmUiLCJTY2VuZSIsImJhY2tncm91bmQiLCJDb2xvciIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic2V0IiwibG9va0F0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwidXBkYXRlIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsImFkZCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwibWF0ZXJpYWwiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiY29sb3IiLCJjb2x1bW5HZW9tZXRyeSIsIkN5bGluZGVyR2VvbWV0cnkiLCJNZXNoIiwicm90YXRpb24iLCJhcm0xR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIk1hdGgiLCJQSSIsImFybTJHZW9tZXRyeSIsInRyYW5zbGF0ZSIsImFybTNHZW9tZXRyeSIsImdyaXBwZXJCbG9jazFHZW9tZXRyeSIsImdyaXBwZXJCbG9jazJHZW9tZXRyeSIsImdyaXBwZXJCbG9jazEiLCJncmlwcGVyQmxvY2syIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImhhbmRsZVJlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});