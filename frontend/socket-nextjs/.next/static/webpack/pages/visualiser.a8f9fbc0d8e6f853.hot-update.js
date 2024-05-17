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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // define the crane dimensions and position\n    // const crane = {\n    //   origin: { x: 0, y: 0, z: 0 },\n    //   column: {diameter: 0.1, height: 2},\n    //   arm1: {length: 0.5, width: 0.1, height: 0.1},\n    //   arm2: {length: 1, width: 0.1, height: 0.1},\n    //   arm3: {length: 0.4, width: 0.05, height: 0.05},\n    //   gripper: {length: 0.1, width: 0.02, height: 0.02},\n    //   kinematics: {z:0,alpha:0, beta:0, gamma:0} \n    // }\n    const [crane, setCrane] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(craneParams);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mountRef.current) {\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0xeeeeee);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            camera.position.set(5, 5, 5);\n            camera.lookAt(0, 0, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Base\n            // const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);\n            // const base = new THREE.Mesh(baseGeometry, material);\n            // base.rotation.x = Math.PI / 2;\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(crane.column.diameter, crane.column.diameter, crane.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.y = 1;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.arm1.width, crane.arm1.length, crane.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            arm1.position.y = 1;\n            arm1.position.x = 0.5;\n            arm1.rotation.x = Math.PI / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.arm2.width, crane.arm2.length, crane.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = 1;\n            arm2.position.x = 0;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(crane.arm3.width, crane.arm3.width, crane.arm3.length, 32);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 1;\n            arm3.position.x = 0;\n            arm3.rotation.z = Math.PI / 2;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.gripper.width, crane.gripper.length, crane.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            gripper.position.x = 1;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n            };\n        }\n    }, [\n        crane\n    ]); // Add crane to dependency array to re-render on change\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width: \"50%\",\n                height: \"50%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"0YQ00Mfx2JHcZye2FGwCAnmeegw=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3NELFdBQVcsQ0FBQ3pDLFNBQVNJLFVBQVU7Z0JBQ2xEO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ25CO0tBQU0sR0FBRyx1REFBdUQ7SUFFcEUscUJBQ0UsOERBQUN5RDtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJRSxLQUFLNUQ7WUFBVTZELE9BQU87Z0JBQUVwQixPQUFPO2dCQUFPTixRQUFRO1lBQU07Ozs7Ozs7Ozs7O0FBRy9EO0dBaEhNckM7S0FBQUE7QUFrSE4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmFuZVZpc3VhbGlzYXRpb24udHN4Pzg4NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnO1xuXG5jb25zdCBDcmFuZVZpc3VhbGl6YXRpb24gPSAoeyBjcmFuZVBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBkZWZpbmUgdGhlIGNyYW5lIGRpbWVuc2lvbnMgYW5kIHBvc2l0aW9uXG4gIC8vIGNvbnN0IGNyYW5lID0ge1xuICAvLyAgIG9yaWdpbjogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXG4gIC8vICAgY29sdW1uOiB7ZGlhbWV0ZXI6IDAuMSwgaGVpZ2h0OiAyfSxcbiAgLy8gICBhcm0xOiB7bGVuZ3RoOiAwLjUsIHdpZHRoOiAwLjEsIGhlaWdodDogMC4xfSxcbiAgLy8gICBhcm0yOiB7bGVuZ3RoOiAxLCB3aWR0aDogMC4xLCBoZWlnaHQ6IDAuMX0sXG4gIC8vICAgYXJtMzoge2xlbmd0aDogMC40LCB3aWR0aDogMC4wNSwgaGVpZ2h0OiAwLjA1fSxcbiAgLy8gICBncmlwcGVyOiB7bGVuZ3RoOiAwLjEsIHdpZHRoOiAwLjAyLCBoZWlnaHQ6IDAuMDJ9LFxuICAvLyAgIGtpbmVtYXRpY3M6IHt6OjAsYWxwaGE6MCwgYmV0YTowLCBnYW1tYTowfSBcbiAgLy8gfVxuXG4gIGNvbnN0IFtjcmFuZSwgc2V0Q3JhbmVdID0gdXNlU3RhdGUoY3JhbmVQYXJhbXMpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW91bnRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHhlZWVlZWUpO1xuXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICAgIDc1LFxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgMC4xLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCg1LCA1LCA1KTtcbiAgICAgIGNhbWVyYS5sb29rQXQoMCwgMCwgMCk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICBtb3VudFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBjb250cm9scy51cGRhdGUoKTtcblxuICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC41KTtcbiAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDAsIDEsIDApO1xuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgICAgLy8gQ3JhbmUgQ29tcG9uZW50c1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDc3NzdmZiB9KTtcblxuICAgICAgLy8gQmFzZVxuICAgICAgLy8gY29uc3QgYmFzZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC41LCAwLjUsIDAuMiwgMzIpO1xuICAgICAgLy8gY29uc3QgYmFzZSA9IG5ldyBUSFJFRS5NZXNoKGJhc2VHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgLy8gYmFzZS5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG5cbiAgICAgIC8vIENvbHVtblxuICAgICAgY29uc3QgY29sdW1uR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjcmFuZS5jb2x1bW4uZGlhbWV0ZXIsIGNyYW5lLmNvbHVtbi5kaWFtZXRlciwgY3JhbmUuY29sdW1uLmhlaWdodCwgMzIpO1xuICAgICAgY29uc3QgY29sdW1uID0gbmV3IFRIUkVFLk1lc2goY29sdW1uR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGNvbHVtbi5wb3NpdGlvbi55ID0gMTtcblxuICAgICAgLy8gQXJtIDFcbiAgICAgIGNvbnN0IGFybTFHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShjcmFuZS5hcm0xLndpZHRoLCBjcmFuZS5hcm0xLmxlbmd0aCwgY3JhbmUuYXJtMS5oZWlnaHQpO1xuICAgICAgY29uc3QgYXJtMSA9IG5ldyBUSFJFRS5NZXNoKGFybTFHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgYXJtMS5wb3NpdGlvbi55ID0gMTtcbiAgICAgIGFybTEucG9zaXRpb24ueCA9IDAuNTtcbiAgICAgIGFybTEucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuXG4gICAgICAvLyBBcm0gMlxuICAgICAgY29uc3QgYXJtMkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGNyYW5lLmFybTIud2lkdGgsIGNyYW5lLmFybTIubGVuZ3RoLCBjcmFuZS5hcm0yLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0yID0gbmV3IFRIUkVFLk1lc2goYXJtMkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0yLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgYXJtMi5wb3NpdGlvbi54ID0gMDtcblxuICAgICAgLy8gQXJtIDNcbiAgICAgIGNvbnN0IGFybTNHZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGNyYW5lLmFybTMud2lkdGgsIGNyYW5lLmFybTMud2lkdGgsIGNyYW5lLmFybTMubGVuZ3RoLCAzMik7XG4gICAgICBjb25zdCBhcm0zID0gbmV3IFRIUkVFLk1lc2goYXJtM0dlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0zLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgYXJtMy5wb3NpdGlvbi54ID0gMDtcbiAgICAgIGFybTMucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xuXG4gICAgICAvLyBHcmlwcGVyXG4gICAgICBjb25zdCBncmlwcGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoY3JhbmUuZ3JpcHBlci53aWR0aCwgY3JhbmUuZ3JpcHBlci5sZW5ndGgsIGNyYW5lLmdyaXBwZXIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGdyaXBwZXIgPSBuZXcgVEhSRUUuTWVzaChncmlwcGVyR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueCA9IDE7XG5cblxuICAgICAgLy8gQWRkaW5nIG9iamVjdHMgdG8gdGhlIHNjZW5lXG4gICAgICBzY2VuZS5hZGQoY29sdW1uKTtcbiAgICAgIGNvbHVtbi5hZGQoYXJtMSk7XG4gICAgICBhcm0xLmFkZChhcm0yKTtcbiAgICAgIGFybTIuYWRkKGFybTMpO1xuICAgICAgYXJtMy5hZGQoZ3JpcHBlcik7XG5cblxuICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjb250cm9scy51cGRhdGUoKTsgLy8gb25seSByZXF1aXJlZCBpZiBjb250cm9scy5lbmFibGVEYW1waW5nIG9yIGNvbnRyb2xzLmF1dG9Sb3RhdGUgYXJlIHNldCB0byB0cnVlXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBtb3VudFJlZi5jdXJyZW50LnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NyYW5lXSk7IC8vIEFkZCBjcmFuZSB0byBkZXBlbmRlbmN5IGFycmF5IHRvIHJlLXJlbmRlciBvbiBjaGFuZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXNlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgcmVmPXttb3VudFJlZn0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JhbmVWaXN1YWxpemF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJDcmFuZVZpc3VhbGl6YXRpb24iLCJjcmFuZVBhcmFtcyIsIm1vdW50UmVmIiwiY3JhbmUiLCJzZXRDcmFuZSIsImN1cnJlbnQiLCJzY2VuZSIsIlNjZW5lIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJjb250cm9scyIsInVwZGF0ZSIsImxpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJhZGQiLCJtYXRlcmlhbCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImNvbHVtbkdlb21ldHJ5IiwiQ3lsaW5kZXJHZW9tZXRyeSIsImNvbHVtbiIsImRpYW1ldGVyIiwiaGVpZ2h0IiwiTWVzaCIsInkiLCJhcm0xR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImFybTEiLCJ3aWR0aCIsImxlbmd0aCIsIngiLCJyb3RhdGlvbiIsIk1hdGgiLCJQSSIsImFybTJHZW9tZXRyeSIsImFybTIiLCJhcm0zR2VvbWV0cnkiLCJhcm0zIiwieiIsImdyaXBwZXJHZW9tZXRyeSIsImdyaXBwZXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwicmVtb3ZlQ2hpbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});