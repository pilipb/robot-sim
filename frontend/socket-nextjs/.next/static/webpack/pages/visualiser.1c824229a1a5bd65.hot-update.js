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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position = {\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    }, width = \"800px\", height = \"600px\" } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const fixedCraneDimensions = {\n        origin: {\n            x: 0,\n            y: 0,\n            z: 0\n        },\n        column: {\n            diameter: 0.1,\n            height: 2\n        },\n        arm1: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm2: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm3: {\n            length: 0.4,\n            width: 0.05,\n            height: 0.05\n        },\n        gripper: {\n            length: 0.1,\n            width: 0.02,\n            height: 0.02\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(position); // Log to check if position updates are received\n        if (mountRef.current) {\n            const width = mountRef.current.clientWidth;\n            const height = mountRef.current.clientHeight;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x333333); // Dark background for the 3D scene\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);\n            // Set the camera position to be offset along the x-axis and above the column\n            camera.position.set(5, 3, 0);\n            camera.lookAt(0, 1, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(width, height);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Add GridHelper\n            const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(10, 10);\n            scene.add(gridHelper);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z);\n            // allow column to rotate about y (by angle alpha)\n            column.rotation.y = position.alpha;\n            column.position.y = fixedCraneDimensions.column.height / 2;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            // arm 1 is z units along the column\n            arm1.position.y = position.z;\n            // it can rotate about the z axis by angle beta\n            arm1.rotation.y = position.beta;\n            arm1.rotation.z = Math.PI / 2;\n            arm1.position.x = fixedCraneDimensions.arm1.length / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = arm1.position.y - fixedCraneDimensions.arm2.height;\n            // arm 2 can rotate about the z axis by angle gamma\n            arm2.rotation.y = position.gamma;\n            arm2.position.y = -fixedCraneDimensions.arm1.length;\n            arm2.position.x = 0;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 0;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            // Translate the crane to the calculated position\n            gripper.position.x = position.x;\n            gripper.position.y = position.y;\n            gripper.position.z = position.z;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            // arm2.add(arm3);\n            // arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            // Handle window resize\n            const handleResize = ()=>{\n                const width = mountRef.current.clientWidth;\n                const height = mountRef.current.clientHeight;\n                renderer.setSize(width, height);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n                window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width,\n                height\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 138,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNeEQsUUFBUUUsU0FBU1ksT0FBTyxDQUFDQyxXQUFXO2dCQUMxQyxNQUFNZCxTQUFTQyxTQUFTWSxPQUFPLENBQUNFLFlBQVk7Z0JBQzVDUyxTQUFTRSxPQUFPLENBQUMzQixPQUFPQztnQkFDeEJvQixPQUFPb0MsTUFBTSxHQUFHekQsUUFBUUM7Z0JBQ3hCb0IsT0FBT3FDLHNCQUFzQjtZQUMvQjtZQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtZQUVsQyxPQUFPO2dCQUNMLElBQUl0RCxTQUFTWSxPQUFPLEVBQUU7b0JBQ3BCWixTQUFTWSxPQUFPLENBQUMrQyxXQUFXLENBQUNwQyxTQUFTSSxVQUFVO2dCQUNsRDtnQkFDQThCLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVOO1lBQ3ZDO1FBQ0Y7SUFDRixHQUFHO1FBQUNqRTtRQUFhQztLQUFTLEdBQUcsd0RBQXdEO0lBRXJGLHFCQUNFLDhEQUFDdUU7UUFBSUMsV0FBVTtRQUF1QkMsT0FBTztZQUFFakUsT0FBTztZQUFRQyxRQUFRO1FBQU87a0JBQzNFLDRFQUFDOEQ7WUFBSUcsS0FBS2hFO1lBQVUrRCxPQUFPO2dCQUFFakU7Z0JBQU9DO1lBQU87Ozs7Ozs7Ozs7O0FBR2pEO0dBeElNWDtLQUFBQTtBQTBJTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvbi50c3g/ODg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5cbmNvbnN0IENyYW5lVmlzdWFsaXphdGlvbiA9ICh7IGNyYW5lUGFyYW1zLCBwb3NpdGlvbiA9IHsgejogMCwgYWxwaGE6IDAsIGJldGE6IDAsIGdhbW1hOiAwLCBnOiAwLCB4OiAwLCB5OiAwIH0sIHdpZHRoID0gXCI4MDBweFwiLCBoZWlnaHQgPSBcIjYwMHB4XCIgfSkgPT4ge1xuICBjb25zdCBtb3VudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZml4ZWRDcmFuZURpbWVuc2lvbnMgPSB7XG4gICAgb3JpZ2luOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICBjb2x1bW46IHsgZGlhbWV0ZXI6IDAuMSwgaGVpZ2h0OiAyIH0sXG4gICAgYXJtMTogeyBsZW5ndGg6IDEsIHdpZHRoOiAwLjEsIGhlaWdodDogMC4xIH0sXG4gICAgYXJtMjogeyBsZW5ndGg6IDEsIHdpZHRoOiAwLjEsIGhlaWdodDogMC4xIH0sXG4gICAgYXJtMzogeyBsZW5ndGg6IDAuNCwgd2lkdGg6IDAuMDUsIGhlaWdodDogMC4wNSB9LFxuICAgIGdyaXBwZXI6IHsgbGVuZ3RoOiAwLjEsIHdpZHRoOiAwLjAyLCBoZWlnaHQ6IDAuMDIgfSxcbiAgfTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocG9zaXRpb24pOyAvLyBMb2cgdG8gY2hlY2sgaWYgcG9zaXRpb24gdXBkYXRlcyBhcmUgcmVjZWl2ZWRcbiAgICBpZiAobW91bnRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MzMzMzMzKTsgLy8gRGFyayBiYWNrZ3JvdW5kIGZvciB0aGUgM0Qgc2NlbmVcblxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICA3NSxcbiAgICAgICAgd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAwLjEsXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICAvLyBTZXQgdGhlIGNhbWVyYSBwb3NpdGlvbiB0byBiZSBvZmZzZXQgYWxvbmcgdGhlIHgtYXhpcyBhbmQgYWJvdmUgdGhlIGNvbHVtblxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCg1LCAzLCAwKTsgXG4gICAgICBjYW1lcmEubG9va0F0KDAsIDEsIDApO1xuXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgbW91bnRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgY29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuNSk7XG4gICAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgwLCAxLCAwKTtcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAgIC8vIEFkZCBHcmlkSGVscGVyXG4gICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAsIDEwKTtcbiAgICAgIHNjZW5lLmFkZChncmlkSGVscGVyKTtcblxuICAgICAgLy8gQ3JhbmUgQ29tcG9uZW50c1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDc3NzdmZiB9KTtcblxuICAgICAgLy8gQ29sdW1uXG4gICAgICBjb25zdCBjb2x1bW5HZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5kaWFtZXRlciwgZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmRpYW1ldGVyLCBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uaGVpZ2h0LCAzMik7XG4gICAgICBjb25zdCBjb2x1bW4gPSBuZXcgVEhSRUUuTWVzaChjb2x1bW5HZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgY29sdW1uLnBvc2l0aW9uLnNldChmaXhlZENyYW5lRGltZW5zaW9ucy5vcmlnaW4ueCwgZml4ZWRDcmFuZURpbWVuc2lvbnMub3JpZ2luLnksIGZpeGVkQ3JhbmVEaW1lbnNpb25zLm9yaWdpbi56KTsgXG4gICAgICAvLyBhbGxvdyBjb2x1bW4gdG8gcm90YXRlIGFib3V0IHkgKGJ5IGFuZ2xlIGFscGhhKVxuICAgICAgY29sdW1uLnJvdGF0aW9uLnkgPSBwb3NpdGlvbi5hbHBoYTtcbiAgICAgIGNvbHVtbi5wb3NpdGlvbi55ID0gZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmhlaWdodCAvIDI7XG5cbiAgICAgIC8vIEFybSAxXG4gICAgICBjb25zdCBhcm0xR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS53aWR0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5sZW5ndGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTEgPSBuZXcgVEhSRUUuTWVzaChhcm0xR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIC8vIGFybSAxIGlzIHogdW5pdHMgYWxvbmcgdGhlIGNvbHVtblxuICAgICAgYXJtMS5wb3NpdGlvbi55ID0gcG9zaXRpb24uejtcbiAgICAgIC8vIGl0IGNhbiByb3RhdGUgYWJvdXQgdGhlIHogYXhpcyBieSBhbmdsZSBiZXRhXG4gICAgICBhcm0xLnJvdGF0aW9uLnkgPSBwb3NpdGlvbi5iZXRhO1xuICAgICAgYXJtMS5yb3RhdGlvbi56ID0gTWF0aC5QSS8yO1xuICAgICAgYXJtMS5wb3NpdGlvbi54ID0gZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5sZW5ndGggLyAyO1xuXG4gICAgICAvLyBBcm0gMlxuICAgICAgY29uc3QgYXJtMkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIud2lkdGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIubGVuZ3RoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0yLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0yID0gbmV3IFRIUkVFLk1lc2goYXJtMkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0yLnBvc2l0aW9uLnkgPSBhcm0xLnBvc2l0aW9uLnkgLSBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0yLmhlaWdodDtcbiAgICAgIC8vIGFybSAyIGNhbiByb3RhdGUgYWJvdXQgdGhlIHogYXhpcyBieSBhbmdsZSBnYW1tYVxuICAgICAgYXJtMi5yb3RhdGlvbi55ID0gcG9zaXRpb24uZ2FtbWE7XG4gICAgICBhcm0yLnBvc2l0aW9uLnkgPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5sZW5ndGg7XG4gICAgICBhcm0yLnBvc2l0aW9uLnggPSAwO1xuXG4gICAgICAvLyBBcm0gM1xuICAgICAgY29uc3QgYXJtM0dlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMud2lkdGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0zLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0zID0gbmV3IFRIUkVFLk1lc2goYXJtM0dlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0zLnBvc2l0aW9uLnkgPSAwO1xuXG5cbiAgICAgIC8vIEdyaXBwZXJcbiAgICAgIGNvbnN0IGdyaXBwZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLndpZHRoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLmxlbmd0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5oZWlnaHQpO1xuICAgICAgY29uc3QgZ3JpcHBlciA9IG5ldyBUSFJFRS5NZXNoKGdyaXBwZXJHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgXG5cbiAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgY3JhbmUgdG8gdGhlIGNhbGN1bGF0ZWQgcG9zaXRpb25cbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICBncmlwcGVyLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xuICAgICAgZ3JpcHBlci5wb3NpdGlvbi56ID0gcG9zaXRpb24uejtcblxuICAgICAgLy8gQWRkaW5nIG9iamVjdHMgdG8gdGhlIHNjZW5lXG4gICAgICBzY2VuZS5hZGQoY29sdW1uKTtcbiAgICAgIGNvbHVtbi5hZGQoYXJtMSk7XG4gICAgICBhcm0xLmFkZChhcm0yKTtcbiAgICAgIC8vIGFybTIuYWRkKGFybTMpO1xuICAgICAgLy8gYXJtMy5hZGQoZ3JpcHBlcik7XG5cblxuICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjb250cm9scy51cGRhdGUoKTsgLy8gb25seSByZXF1aXJlZCBpZiBjb250cm9scy5lbmFibGVEYW1waW5nIG9yIGNvbnRyb2xzLmF1dG9Sb3RhdGUgYXJlIHNldCB0byB0cnVlXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgbW91bnRSZWYuY3VycmVudC5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbY3JhbmVQYXJhbXMsIHBvc2l0aW9uXSk7IC8vIFJlLXJ1biB0aGlzIGVmZmVjdCBpZiBjcmFuZVBhcmFtcyBvciBwb3NpdGlvbiBjaGFuZ2VzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbGlzZXItY29udGFpbmVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgPGRpdiByZWY9e21vdW50UmVmfSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmFuZVZpc3VhbGl6YXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJDcmFuZVZpc3VhbGl6YXRpb24iLCJjcmFuZVBhcmFtcyIsInBvc2l0aW9uIiwieiIsImFscGhhIiwiYmV0YSIsImdhbW1hIiwiZyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJtb3VudFJlZiIsImZpeGVkQ3JhbmVEaW1lbnNpb25zIiwib3JpZ2luIiwiY29sdW1uIiwiZGlhbWV0ZXIiLCJhcm0xIiwibGVuZ3RoIiwiYXJtMiIsImFybTMiLCJncmlwcGVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjZW5lIiwiU2NlbmUiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInNldCIsImxvb2tBdCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJjb250cm9scyIsInVwZGF0ZSIsImxpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJhZGQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsIm1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiY29sdW1uR2VvbWV0cnkiLCJDeWxpbmRlckdlb21ldHJ5IiwiTWVzaCIsInJvdGF0aW9uIiwiYXJtMUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJNYXRoIiwiUEkiLCJhcm0yR2VvbWV0cnkiLCJhcm0zR2VvbWV0cnkiLCJncmlwcGVyR2VvbWV0cnkiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});