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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mountRef.current) {\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0xeeeeee);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            camera.position.set(0, 5, 0);\n            camera.lookAt(0, 0, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Base\n            const baseGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(0.5, 0.5, 0.2, 32);\n            const base = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(baseGeometry, material);\n            // base.rotation.x = Math.PI / 2;\n            base.position.set(craneParams.origin.x, craneParams.origin.y, craneParams.origin.z);\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(craneParams.column.diameter, craneParams.column.diameter, craneParams.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(craneParams.origin.x, craneParams.origin.y + 1, craneParams.origin.z); // Positioned 1 unit above the base along y-axis\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.arm1.width, craneParams.arm1.length, craneParams.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            arm1.position.y = 1;\n            arm1.position.x = 0.5;\n            arm1.rotation.x = Math.PI / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.arm2.width, craneParams.arm2.length, craneParams.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = 1;\n            arm2.position.x = 0;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(craneParams.arm3.width, craneParams.arm3.width, craneParams.arm3.length, 32);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 1;\n            arm3.position.x = 0;\n            arm3.rotation.z = Math.PI / 2;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(craneParams.gripper.width, craneParams.gripper.length, craneParams.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            // Translate the crane to the calculated position\n            gripper.position.x = position.x;\n            gripper.position.y = position.y;\n            gripper.position.z = position.z;\n            // Adding objects to the scene\n            scene.add(base);\n            base.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width: \"50%\",\n                height: \"50%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQ2E7WUFDVEEsT0FBT2IsR0FBRyxDQUFDa0I7WUFDWEEsS0FBS2xCLEdBQUcsQ0FBQ3lCO1lBQ1RBLEtBQUt6QixHQUFHLENBQUMyQjtZQUNUQSxLQUFLM0IsR0FBRyxDQUFDNkI7WUFHVCxNQUFNQyxVQUFVO2dCQUNkQyxzQkFBc0JEO2dCQUN0QnBDLFNBQVNDLE1BQU0sSUFBSSxpRkFBaUY7Z0JBQ3BHTixTQUFTMkMsTUFBTSxDQUFDdEQsT0FBT0k7WUFDekI7WUFFQWdEO1lBRUEsT0FBTztnQkFDTCxJQUFJdEQsU0FBU0MsT0FBTyxFQUFFO29CQUNwQkQsU0FBU0MsT0FBTyxDQUFDd0QsV0FBVyxDQUFDNUMsU0FBU0ksVUFBVTtnQkFDbEQ7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDbkI7UUFBYUM7S0FBUyxHQUFHLHdEQUF3RDtJQUVyRixxQkFDRSw4REFBQzJEO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlFLEtBQUs1RDtZQUFVNkQsT0FBTztnQkFBRWxCLE9BQU87Z0JBQU9KLFFBQVE7WUFBTTs7Ozs7Ozs7Ozs7QUFHL0Q7R0F4R00xQztLQUFBQTtBQTBHTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvbi50c3g/ODg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5cbmNvbnN0IENyYW5lVmlzdWFsaXphdGlvbiA9ICh7IGNyYW5lUGFyYW1zLCBwb3NpdGlvbiB9KSA9PiB7XG4gIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweGVlZWVlZSk7XG5cbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgNzUsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAwLjEsXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDUsIDApO1xuICAgICAgY2FtZXJhLmxvb2tBdCgwLCAwLCAwKTtcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIG1vdW50UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDApO1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMCwgMSwgMCk7XG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xuICAgICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgICAvLyBDcmFuZSBDb21wb25lbnRzXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4Nzc3N2ZmIH0pO1xuXG4gICAgICAvLyBCYXNlXG4gICAgICBjb25zdCBiYXNlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjUsIDAuNSwgMC4yLCAzMik7XG4gICAgICBjb25zdCBiYXNlID0gbmV3IFRIUkVFLk1lc2goYmFzZUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAvLyBiYXNlLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgIGJhc2UucG9zaXRpb24uc2V0KGNyYW5lUGFyYW1zLm9yaWdpbi54LCBjcmFuZVBhcmFtcy5vcmlnaW4ueSwgY3JhbmVQYXJhbXMub3JpZ2luLnopO1xuXG4gICAgICAvLyBDb2x1bW5cbiAgICAgIGNvbnN0IGNvbHVtbkdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3JhbmVQYXJhbXMuY29sdW1uLmRpYW1ldGVyLCBjcmFuZVBhcmFtcy5jb2x1bW4uZGlhbWV0ZXIsIGNyYW5lUGFyYW1zLmNvbHVtbi5oZWlnaHQsIDMyKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBUSFJFRS5NZXNoKGNvbHVtbkdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBjb2x1bW4ucG9zaXRpb24uc2V0KGNyYW5lUGFyYW1zLm9yaWdpbi54LCBjcmFuZVBhcmFtcy5vcmlnaW4ueSArIDEsIGNyYW5lUGFyYW1zLm9yaWdpbi56KTsgLy8gUG9zaXRpb25lZCAxIHVuaXQgYWJvdmUgdGhlIGJhc2UgYWxvbmcgeS1heGlzXG5cbiAgICAgIC8vIEFybSAxXG4gICAgICBjb25zdCBhcm0xR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoY3JhbmVQYXJhbXMuYXJtMS53aWR0aCwgY3JhbmVQYXJhbXMuYXJtMS5sZW5ndGgsIGNyYW5lUGFyYW1zLmFybTEuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTEgPSBuZXcgVEhSRUUuTWVzaChhcm0xR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTEucG9zaXRpb24ueSA9IDE7XG4gICAgICBhcm0xLnBvc2l0aW9uLnggPSAwLjU7XG4gICAgICBhcm0xLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcblxuICAgICAgLy8gQXJtIDJcbiAgICAgIGNvbnN0IGFybTJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShjcmFuZVBhcmFtcy5hcm0yLndpZHRoLCBjcmFuZVBhcmFtcy5hcm0yLmxlbmd0aCwgY3JhbmVQYXJhbXMuYXJtMi5oZWlnaHQpO1xuICAgICAgY29uc3QgYXJtMiA9IG5ldyBUSFJFRS5NZXNoKGFybTJHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgYXJtMi5wb3NpdGlvbi55ID0gMTtcbiAgICAgIGFybTIucG9zaXRpb24ueCA9IDA7XG5cbiAgICAgIC8vIEFybSAzXG4gICAgICBjb25zdCBhcm0zR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjcmFuZVBhcmFtcy5hcm0zLndpZHRoLCBjcmFuZVBhcmFtcy5hcm0zLndpZHRoLCBjcmFuZVBhcmFtcy5hcm0zLmxlbmd0aCwgMzIpO1xuICAgICAgY29uc3QgYXJtMyA9IG5ldyBUSFJFRS5NZXNoKGFybTNHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgYXJtMy5wb3NpdGlvbi55ID0gMTtcbiAgICAgIGFybTMucG9zaXRpb24ueCA9IDA7XG4gICAgICBhcm0zLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcblxuICAgICAgLy8gR3JpcHBlclxuICAgICAgY29uc3QgZ3JpcHBlckdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGNyYW5lUGFyYW1zLmdyaXBwZXIud2lkdGgsIGNyYW5lUGFyYW1zLmdyaXBwZXIubGVuZ3RoLCBjcmFuZVBhcmFtcy5ncmlwcGVyLmhlaWdodCk7XG4gICAgICBjb25zdCBncmlwcGVyID0gbmV3IFRIUkVFLk1lc2goZ3JpcHBlckdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICBcblxuICAgICAgLy8gVHJhbnNsYXRlIHRoZSBjcmFuZSB0byB0aGUgY2FsY3VsYXRlZCBwb3NpdGlvblxuICAgICAgZ3JpcHBlci5wb3NpdGlvbi54ID0gcG9zaXRpb24ueDtcbiAgICAgIGdyaXBwZXIucG9zaXRpb24ueSA9IHBvc2l0aW9uLnk7XG4gICAgICBncmlwcGVyLnBvc2l0aW9uLnogPSBwb3NpdGlvbi56O1xuXG4gICAgICAvLyBBZGRpbmcgb2JqZWN0cyB0byB0aGUgc2NlbmVcbiAgICAgIHNjZW5lLmFkZChiYXNlKTtcbiAgICAgIGJhc2UuYWRkKGNvbHVtbik7XG4gICAgICBjb2x1bW4uYWRkKGFybTEpO1xuICAgICAgYXJtMS5hZGQoYXJtMik7XG4gICAgICBhcm0yLmFkZChhcm0zKTtcbiAgICAgIGFybTMuYWRkKGdyaXBwZXIpO1xuXG5cbiAgICAgIGNvbnN0IGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7IC8vIG9ubHkgcmVxdWlyZWQgaWYgY29udHJvbHMuZW5hYmxlRGFtcGluZyBvciBjb250cm9scy5hdXRvUm90YXRlIGFyZSBzZXQgdG8gdHJ1ZVxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlKCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgbW91bnRSZWYuY3VycmVudC5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFtjcmFuZVBhcmFtcywgcG9zaXRpb25dKTsgLy8gUmUtcnVuIHRoaXMgZWZmZWN0IGlmIGNyYW5lUGFyYW1zIG9yIHBvc2l0aW9uIGNoYW5nZXNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXNlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgcmVmPXttb3VudFJlZn0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JhbmVWaXN1YWxpemF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiQ3JhbmVWaXN1YWxpemF0aW9uIiwiY3JhbmVQYXJhbXMiLCJwb3NpdGlvbiIsIm1vdW50UmVmIiwiY3VycmVudCIsInNjZW5lIiwiU2NlbmUiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldCIsImxvb2tBdCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJjb250cm9scyIsInVwZGF0ZSIsImxpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJhZGQiLCJtYXRlcmlhbCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImJhc2VHZW9tZXRyeSIsIkN5bGluZGVyR2VvbWV0cnkiLCJiYXNlIiwiTWVzaCIsIm9yaWdpbiIsIngiLCJ5IiwieiIsImNvbHVtbkdlb21ldHJ5IiwiY29sdW1uIiwiZGlhbWV0ZXIiLCJoZWlnaHQiLCJhcm0xR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImFybTEiLCJ3aWR0aCIsImxlbmd0aCIsInJvdGF0aW9uIiwiTWF0aCIsIlBJIiwiYXJtMkdlb21ldHJ5IiwiYXJtMiIsImFybTNHZW9tZXRyeSIsImFybTMiLCJncmlwcGVyR2VvbWV0cnkiLCJncmlwcGVyIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInJlbW92ZUNoaWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});