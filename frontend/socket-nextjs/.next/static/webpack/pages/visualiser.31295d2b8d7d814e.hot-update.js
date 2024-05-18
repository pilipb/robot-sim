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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mountRef.current) {\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0xeeeeee);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            camera.position.set(0, 5, 0);\n            camera.lookAt(0, 0, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Base  \n            const baseGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(0.5, 0.5, 0.2, 32);\n            const base = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(baseGeometry, material);\n            base.position.set(craneParams.origin.x, craneParams.origin.y, craneParams.origin.z);\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(craneParams.column.diameter, craneParams.column.diameter, craneParams.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(craneParams.origin.x, craneParams.origin.y + 1, craneParams.origin.z); // Positioned 1 unit above the base along y-axis\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.arm1.width, craneParams.arm1.length, craneParams.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            arm1.position.y = 1;\n            arm1.position.x = 0.5;\n            arm1.rotation.x = Math.PI / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.arm2.width, craneParams.arm2.length, craneParams.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = 1;\n            arm2.position.x = 0;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(craneParams.arm3.width, craneParams.arm3.width, craneParams.arm3.length, 32);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 1;\n            arm3.position.x = 0;\n            arm3.rotation.z = Math.PI / 2;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.gripper.width, craneParams.gripper.length, craneParams.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            // Translate the crane to the calculated position\n            gripper.position.x = position.x;\n            gripper.position.y = position.y;\n            gripper.position.z = position.z;\n            // Adding objects to the scene\n            scene.add(base);\n            base.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width: \"50%\",\n                height: \"50%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUQSxPQUFPYixHQUFHLENBQUNrQjtZQUNYQSxLQUFLbEIsR0FBRyxDQUFDeUI7WUFDVEEsS0FBS3pCLEdBQUcsQ0FBQzJCO1lBQ1RBLEtBQUszQixHQUFHLENBQUM2QjtZQUdULE1BQU1DLFVBQVU7Z0JBQ2RDLHNCQUFzQkQ7Z0JBQ3RCcEMsU0FBU0MsTUFBTSxJQUFJLGlGQUFpRjtnQkFDcEdOLFNBQVMyQyxNQUFNLENBQUN0RCxPQUFPSTtZQUN6QjtZQUVBZ0Q7WUFFQSxPQUFPO2dCQUNMLElBQUl0RCxTQUFTQyxPQUFPLEVBQUU7b0JBQ3BCRCxTQUFTQyxPQUFPLENBQUN3RCxXQUFXLENBQUM1QyxTQUFTSSxVQUFVO2dCQUNsRDtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNuQjtRQUFhQztLQUFTLEdBQUcsd0RBQXdEO0lBRXJGLHFCQUNFLDhEQUFDMkQ7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUUsS0FBSzVEO1lBQVU2RCxPQUFPO2dCQUFFbEIsT0FBTztnQkFBT0osUUFBUTtZQUFNOzs7Ozs7Ozs7OztBQUcvRDtHQXZHTTFDO0tBQUFBO0FBeUdOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3JhbmVWaXN1YWxpc2F0aW9uLnRzeD84ODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcblxuY29uc3QgQ3JhbmVWaXN1YWxpemF0aW9uID0gKHsgY3JhbmVQYXJhbXMsIHBvc2l0aW9uIH0pID0+IHtcbiAgY29uc3QgbW91bnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4ZWVlZWVlKTtcblxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICA3NSxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIDAuMSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNSwgMCk7XG4gICAgICBjYW1lcmEubG9va0F0KDAsIDAsIDApO1xuXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgbW91bnRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgY29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuNSk7XG4gICAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgwLCAxLCAwKTtcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAgIC8vIENyYW5lIENvbXBvbmVudHNcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHg3Nzc3ZmYgfSk7XG5cbiAgICAgIC8vIEJhc2UgIFxuICAgICAgY29uc3QgYmFzZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC41LCAwLjUsIDAuMiwgMzIpO1xuICAgICAgY29uc3QgYmFzZSA9IG5ldyBUSFJFRS5NZXNoKGJhc2VHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgYmFzZS5wb3NpdGlvbi5zZXQoY3JhbmVQYXJhbXMub3JpZ2luLngsIGNyYW5lUGFyYW1zLm9yaWdpbi55LCBjcmFuZVBhcmFtcy5vcmlnaW4ueik7XG5cbiAgICAgIC8vIENvbHVtblxuICAgICAgY29uc3QgY29sdW1uR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjcmFuZVBhcmFtcy5jb2x1bW4uZGlhbWV0ZXIsIGNyYW5lUGFyYW1zLmNvbHVtbi5kaWFtZXRlciwgY3JhbmVQYXJhbXMuY29sdW1uLmhlaWdodCwgMzIpO1xuICAgICAgY29uc3QgY29sdW1uID0gbmV3IFRIUkVFLk1lc2goY29sdW1uR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGNvbHVtbi5wb3NpdGlvbi5zZXQoY3JhbmVQYXJhbXMub3JpZ2luLngsIGNyYW5lUGFyYW1zLm9yaWdpbi55ICsgMSwgY3JhbmVQYXJhbXMub3JpZ2luLnopOyAvLyBQb3NpdGlvbmVkIDEgdW5pdCBhYm92ZSB0aGUgYmFzZSBhbG9uZyB5LWF4aXNcblxuICAgICAgLy8gQXJtIDFcbiAgICAgIGNvbnN0IGFybTFHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShjcmFuZVBhcmFtcy5hcm0xLndpZHRoLCBjcmFuZVBhcmFtcy5hcm0xLmxlbmd0aCwgY3JhbmVQYXJhbXMuYXJtMS5oZWlnaHQpO1xuICAgICAgY29uc3QgYXJtMSA9IG5ldyBUSFJFRS5NZXNoKGFybTFHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgYXJtMS5wb3NpdGlvbi55ID0gMTtcbiAgICAgIGFybTEucG9zaXRpb24ueCA9IDAuNTtcbiAgICAgIGFybTEucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuXG4gICAgICAvLyBBcm0gMlxuICAgICAgY29uc3QgYXJtMkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGNyYW5lUGFyYW1zLmFybTIud2lkdGgsIGNyYW5lUGFyYW1zLmFybTIubGVuZ3RoLCBjcmFuZVBhcmFtcy5hcm0yLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0yID0gbmV3IFRIUkVFLk1lc2goYXJtMkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0yLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgYXJtMi5wb3NpdGlvbi54ID0gMDtcblxuICAgICAgLy8gQXJtIDNcbiAgICAgIGNvbnN0IGFybTNHZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGNyYW5lUGFyYW1zLmFybTMud2lkdGgsIGNyYW5lUGFyYW1zLmFybTMud2lkdGgsIGNyYW5lUGFyYW1zLmFybTMubGVuZ3RoLCAzMik7XG4gICAgICBjb25zdCBhcm0zID0gbmV3IFRIUkVFLk1lc2goYXJtM0dlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0zLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgYXJtMy5wb3NpdGlvbi54ID0gMDtcbiAgICAgIGFybTMucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xuXG4gICAgICAvLyBHcmlwcGVyXG4gICAgICBjb25zdCBncmlwcGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoY3JhbmVQYXJhbXMuZ3JpcHBlci53aWR0aCwgY3JhbmVQYXJhbXMuZ3JpcHBlci5sZW5ndGgsIGNyYW5lUGFyYW1zLmdyaXBwZXIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGdyaXBwZXIgPSBuZXcgVEhSRUUuTWVzaChncmlwcGVyR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgIFxuXG4gICAgICAvLyBUcmFuc2xhdGUgdGhlIGNyYW5lIHRvIHRoZSBjYWxjdWxhdGVkIHBvc2l0aW9uXG4gICAgICBncmlwcGVyLnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgZ3JpcHBlci5wb3NpdGlvbi55ID0gcG9zaXRpb24ueTtcbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueiA9IHBvc2l0aW9uLno7XG5cbiAgICAgIC8vIEFkZGluZyBvYmplY3RzIHRvIHRoZSBzY2VuZVxuICAgICAgc2NlbmUuYWRkKGJhc2UpO1xuICAgICAgYmFzZS5hZGQoY29sdW1uKTtcbiAgICAgIGNvbHVtbi5hZGQoYXJtMSk7XG4gICAgICBhcm0xLmFkZChhcm0yKTtcbiAgICAgIGFybTIuYWRkKGFybTMpO1xuICAgICAgYXJtMy5hZGQoZ3JpcHBlcik7XG5cblxuICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjb250cm9scy51cGRhdGUoKTsgLy8gb25seSByZXF1aXJlZCBpZiBjb250cm9scy5lbmFibGVEYW1waW5nIG9yIGNvbnRyb2xzLmF1dG9Sb3RhdGUgYXJlIHNldCB0byB0cnVlXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBtb3VudFJlZi5jdXJyZW50LnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NyYW5lUGFyYW1zLCBwb3NpdGlvbl0pOyAvLyBSZS1ydW4gdGhpcyBlZmZlY3QgaWYgY3JhbmVQYXJhbXMgb3IgcG9zaXRpb24gY2hhbmdlc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxpc2VyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiByZWY9e21vdW50UmVmfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmFuZVZpc3VhbGl6YXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJDcmFuZVZpc3VhbGl6YXRpb24iLCJjcmFuZVBhcmFtcyIsInBvc2l0aW9uIiwibW91bnRSZWYiLCJjdXJyZW50Iiwic2NlbmUiLCJTY2VuZSIsImJhY2tncm91bmQiLCJDb2xvciIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0IiwibG9va0F0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwidXBkYXRlIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsImFkZCIsIm1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiYmFzZUdlb21ldHJ5IiwiQ3lsaW5kZXJHZW9tZXRyeSIsImJhc2UiLCJNZXNoIiwib3JpZ2luIiwieCIsInkiLCJ6IiwiY29sdW1uR2VvbWV0cnkiLCJjb2x1bW4iLCJkaWFtZXRlciIsImhlaWdodCIsImFybTFHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiYXJtMSIsIndpZHRoIiwibGVuZ3RoIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJhcm0yR2VvbWV0cnkiLCJhcm0yIiwiYXJtM0dlb21ldHJ5IiwiYXJtMyIsImdyaXBwZXJHZW9tZXRyeSIsImdyaXBwZXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwicmVtb3ZlQ2hpbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});