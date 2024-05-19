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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position = {\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    }, width = \"800px\", height = \"600px\" } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const fixedCraneDimensions = {\n        origin: {\n            x: 0,\n            y: 0,\n            z: 0\n        },\n        column: {\n            diameter: 0.1,\n            height: 2\n        },\n        arm1: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm2: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm3: {\n            length: 0.4,\n            width: 0.05,\n            height: 0.05\n        },\n        gripper: {\n            length: 0.1,\n            width: 0.02,\n            height: 0.02\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(position); // Log to check if position updates are received\n        if (mountRef.current) {\n            const width = mountRef.current.clientWidth;\n            const height = mountRef.current.clientHeight;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x333333); // Dark background for the 3D scene\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);\n            // Set the camera position to be offset along the x-axis and above the column\n            camera.position.set(5, 3, 0);\n            camera.lookAt(0, 1, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(width, height);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Add GridHelper\n            const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(10, 10);\n            scene.add(gridHelper);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z);\n            // allow column to rotate about y (by angle alpha)\n            column.rotation.y = position.alpha;\n            column.position.y = fixedCraneDimensions.column.height / 2;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            // arm 1 is z units along the column\n            arm1.position.y = position.z;\n            // it can rotate about the z axis by angle beta\n            arm1.rotation.y = position.beta;\n            arm1.rotation.z = Math.PI / 2;\n            arm1.position.x = fixedCraneDimensions.arm1.length / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = arm1.position.y - arm2.geometry.parameters.width / 2;\n            // arm 2 can rotate about the z axis by angle gamma\n            arm2.rotation.y = position.gamma;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = arm2.position.y - 2;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            // Translate the crane to the calculated position\n            gripper.position.x = position.x;\n            gripper.position.y = position.y;\n            gripper.position.z = position.z;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            // arm2.add(arm3);\n            // arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            // Handle window resize\n            const handleResize = ()=>{\n                const width = mountRef.current.clientWidth;\n                const height = mountRef.current.clientHeight;\n                renderer.setSize(width, height);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n                window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width,\n                height\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 135,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNZLE9BQU8sQ0FBQ0UsWUFBWTtnQkFDNUNTLFNBQVNFLE9BQU8sQ0FBQzNCLE9BQU9DO2dCQUN4Qm9CLE9BQU9zQyxNQUFNLEdBQUczRCxRQUFRQztnQkFDeEJvQixPQUFPdUMsc0JBQXNCO1lBQy9CO1lBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVKO1lBRWxDLE9BQU87Z0JBQ0wsSUFBSXhELFNBQVNZLE9BQU8sRUFBRTtvQkFDcEJaLFNBQVNZLE9BQU8sQ0FBQ2lELFdBQVcsQ0FBQ3RDLFNBQVNJLFVBQVU7Z0JBQ2xEO2dCQUNBZ0MsT0FBT0csbUJBQW1CLENBQUMsVUFBVU47WUFDdkM7UUFDRjtJQUNGLEdBQUc7UUFBQ25FO1FBQWFDO0tBQVMsR0FBRyx3REFBd0Q7SUFFckYscUJBQ0UsOERBQUN5RTtRQUFJQyxXQUFVO1FBQXVCQyxPQUFPO1lBQUVuRSxPQUFPO1lBQVFDLFFBQVE7UUFBTztrQkFDM0UsNEVBQUNnRTtZQUFJRyxLQUFLbEU7WUFBVWlFLE9BQU87Z0JBQUVuRTtnQkFBT0M7WUFBTzs7Ozs7Ozs7Ozs7QUFHakQ7R0FySU1YO0tBQUFBO0FBdUlOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3JhbmVWaXN1YWxpc2F0aW9uLnRzeD84ODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcblxuY29uc3QgQ3JhbmVWaXN1YWxpemF0aW9uID0gKHsgY3JhbmVQYXJhbXMsIHBvc2l0aW9uID0geyB6OiAwLCBhbHBoYTogMCwgYmV0YTogMCwgZ2FtbWE6IDAsIGc6IDAsIHg6IDAsIHk6IDAgfSwgd2lkdGggPSBcIjgwMHB4XCIsIGhlaWdodCA9IFwiNjAwcHhcIiB9KSA9PiB7XG4gIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmaXhlZENyYW5lRGltZW5zaW9ucyA9IHtcbiAgICBvcmlnaW46IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgIGNvbHVtbjogeyBkaWFtZXRlcjogMC4xLCBoZWlnaHQ6IDIgfSxcbiAgICBhcm0xOiB7IGxlbmd0aDogMSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjEgfSxcbiAgICBhcm0yOiB7IGxlbmd0aDogMSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjEgfSxcbiAgICBhcm0zOiB7IGxlbmd0aDogMC40LCB3aWR0aDogMC4wNSwgaGVpZ2h0OiAwLjA1IH0sXG4gICAgZ3JpcHBlcjogeyBsZW5ndGg6IDAuMSwgd2lkdGg6IDAuMDIsIGhlaWdodDogMC4wMiB9LFxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7IC8vIExvZyB0byBjaGVjayBpZiBwb3NpdGlvbiB1cGRhdGVzIGFyZSByZWNlaXZlZFxuICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCB3aWR0aCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHgzMzMzMzMpOyAvLyBEYXJrIGJhY2tncm91bmQgZm9yIHRoZSAzRCBzY2VuZVxuXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICAgIDc1LFxuICAgICAgICB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgIDAuMSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICAgIC8vIFNldCB0aGUgY2FtZXJhIHBvc2l0aW9uIHRvIGJlIG9mZnNldCBhbG9uZyB0aGUgeC1heGlzIGFuZCBhYm92ZSB0aGUgY29sdW1uXG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDUsIDMsIDApOyBcbiAgICAgIGNhbWVyYS5sb29rQXQoMCwgMSwgMCk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICBtb3VudFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBjb250cm9scy51cGRhdGUoKTtcblxuICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC41KTtcbiAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDAsIDEsIDApO1xuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgICAgLy8gQWRkIEdyaWRIZWxwZXJcbiAgICAgIGNvbnN0IGdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigxMCwgMTApO1xuICAgICAgc2NlbmUuYWRkKGdyaWRIZWxwZXIpO1xuXG4gICAgICAvLyBDcmFuZSBDb21wb25lbnRzXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4Nzc3N2ZmIH0pO1xuXG4gICAgICAvLyBDb2x1bW5cbiAgICAgIGNvbnN0IGNvbHVtbkdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmRpYW1ldGVyLCBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uZGlhbWV0ZXIsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5oZWlnaHQsIDMyKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBUSFJFRS5NZXNoKGNvbHVtbkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBjb2x1bW4ucG9zaXRpb24uc2V0KGZpeGVkQ3JhbmVEaW1lbnNpb25zLm9yaWdpbi54LCBmaXhlZENyYW5lRGltZW5zaW9ucy5vcmlnaW4ueSwgZml4ZWRDcmFuZURpbWVuc2lvbnMub3JpZ2luLnopOyBcbiAgICAgIC8vIGFsbG93IGNvbHVtbiB0byByb3RhdGUgYWJvdXQgeSAoYnkgYW5nbGUgYWxwaGEpXG4gICAgICBjb2x1bW4ucm90YXRpb24ueSA9IHBvc2l0aW9uLmFscGhhO1xuICAgICAgY29sdW1uLnBvc2l0aW9uLnkgPSBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uaGVpZ2h0IC8gMjtcblxuICAgICAgLy8gQXJtIDFcbiAgICAgIGNvbnN0IGFybTFHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLndpZHRoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5oZWlnaHQpO1xuICAgICAgY29uc3QgYXJtMSA9IG5ldyBUSFJFRS5NZXNoKGFybTFHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgLy8gYXJtIDEgaXMgeiB1bml0cyBhbG9uZyB0aGUgY29sdW1uXG4gICAgICBhcm0xLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi56O1xuICAgICAgLy8gaXQgY2FuIHJvdGF0ZSBhYm91dCB0aGUgeiBheGlzIGJ5IGFuZ2xlIGJldGFcbiAgICAgIGFybTEucm90YXRpb24ueSA9IHBvc2l0aW9uLmJldGE7XG4gICAgICBhcm0xLnJvdGF0aW9uLnogPSBNYXRoLlBJLzI7XG4gICAgICBhcm0xLnBvc2l0aW9uLnggPSBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCAvIDI7XG5cbiAgICAgIC8vIEFybSAyXG4gICAgICBjb25zdCBhcm0yR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi53aWR0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMi5sZW5ndGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTIgPSBuZXcgVEhSRUUuTWVzaChhcm0yR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTIucG9zaXRpb24ueSA9IGFybTEucG9zaXRpb24ueSAtIGFybTIuZ2VvbWV0cnkucGFyYW1ldGVycy53aWR0aCAvIDI7XG4gICAgICAvLyBhcm0gMiBjYW4gcm90YXRlIGFib3V0IHRoZSB6IGF4aXMgYnkgYW5nbGUgZ2FtbWFcbiAgICAgIGFybTIucm90YXRpb24ueSA9IHBvc2l0aW9uLmdhbW1hO1xuXG4gICAgICAvLyBBcm0gM1xuICAgICAgY29uc3QgYXJtM0dlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMud2lkdGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoLCBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0zLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0zID0gbmV3IFRIUkVFLk1lc2goYXJtM0dlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0zLnBvc2l0aW9uLnkgPSBhcm0yLnBvc2l0aW9uLnkgLSAyO1xuXG4gICAgICAvLyBHcmlwcGVyXG4gICAgICBjb25zdCBncmlwcGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci53aWR0aCwgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5sZW5ndGgsIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGdyaXBwZXIgPSBuZXcgVEhSRUUuTWVzaChncmlwcGVyR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgIFxuXG4gICAgICAvLyBUcmFuc2xhdGUgdGhlIGNyYW5lIHRvIHRoZSBjYWxjdWxhdGVkIHBvc2l0aW9uXG4gICAgICBncmlwcGVyLnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgZ3JpcHBlci5wb3NpdGlvbi55ID0gcG9zaXRpb24ueTtcbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueiA9IHBvc2l0aW9uLno7XG5cbiAgICAgIC8vIEFkZGluZyBvYmplY3RzIHRvIHRoZSBzY2VuZVxuICAgICAgc2NlbmUuYWRkKGNvbHVtbik7XG4gICAgICBjb2x1bW4uYWRkKGFybTEpO1xuICAgICAgYXJtMS5hZGQoYXJtMik7XG4gICAgICAvLyBhcm0yLmFkZChhcm0zKTtcbiAgICAgIC8vIGFybTMuYWRkKGdyaXBwZXIpO1xuXG5cbiAgICAgIGNvbnN0IGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7IC8vIG9ubHkgcmVxdWlyZWQgaWYgY29udHJvbHMuZW5hYmxlRGFtcGluZyBvciBjb250cm9scy5hdXRvUm90YXRlIGFyZSBzZXQgdG8gdHJ1ZVxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlKCk7XG5cbiAgICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gbW91bnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIG1vdW50UmVmLmN1cnJlbnQucmVtb3ZlQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NyYW5lUGFyYW1zLCBwb3NpdGlvbl0pOyAvLyBSZS1ydW4gdGhpcyBlZmZlY3QgaWYgY3JhbmVQYXJhbXMgb3IgcG9zaXRpb24gY2hhbmdlc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxpc2VyLWNvbnRhaW5lclwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgIDxkaXYgcmVmPXttb3VudFJlZn0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JhbmVWaXN1YWxpemF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiQ3JhbmVWaXN1YWxpemF0aW9uIiwiY3JhbmVQYXJhbXMiLCJwb3NpdGlvbiIsInoiLCJhbHBoYSIsImJldGEiLCJnYW1tYSIsImciLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW91bnRSZWYiLCJmaXhlZENyYW5lRGltZW5zaW9ucyIsIm9yaWdpbiIsImNvbHVtbiIsImRpYW1ldGVyIiwiYXJtMSIsImxlbmd0aCIsImFybTIiLCJhcm0zIiwiZ3JpcHBlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzY2VuZSIsIlNjZW5lIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJzZXQiLCJsb29rQXQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiY29udHJvbHMiLCJ1cGRhdGUiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiYWRkIiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJtYXRlcmlhbCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImNvbHVtbkdlb21ldHJ5IiwiQ3lsaW5kZXJHZW9tZXRyeSIsIk1lc2giLCJyb3RhdGlvbiIsImFybTFHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiTWF0aCIsIlBJIiwiYXJtMkdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJwYXJhbWV0ZXJzIiwiYXJtM0dlb21ldHJ5IiwiZ3JpcHBlckdlb21ldHJ5IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImhhbmRsZVJlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});