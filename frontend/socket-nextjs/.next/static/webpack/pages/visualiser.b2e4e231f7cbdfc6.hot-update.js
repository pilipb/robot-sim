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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // define the crane dimensions and position\n    // const crane = {\n    //   origin: { x: 0, y: 0, z: 0 },\n    //   column: {diameter: 0.1, height: 2},\n    //   arm1: {length: 0.5, width: 0.1, height: 0.1},\n    //   arm2: {length: 1, width: 0.1, height: 0.1},\n    //   arm3: {length: 0.4, width: 0.05, height: 0.05},\n    //   gripper: {length: 0.1, width: 0.02, height: 0.02},\n    //   kinematics: {z:0,alpha:0, beta:0, gamma:0} \n    // }\n    const [crane, setCrane] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(craneParams);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mountRef.current) {\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0xeeeeee);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            camera.position.set(5, 5, 5);\n            camera.lookAt(0, 0, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Base\n            // const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);\n            // const base = new THREE.Mesh(baseGeometry, material);\n            // base.rotation.x = Math.PI / 2;\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(crane.column.diameter, crane.column.diameter, crane.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.y = 1;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.arm1.width, crane.arm1.length, crane.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            arm1.position.y = 1;\n            arm1.position.x = 0.5;\n            arm1.rotation.x = Math.PI / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.arm2.width, crane.arm2.length, crane.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            arm2.position.y = 1;\n            arm2.position.x = 0;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(crane.arm3.width, crane.arm3.width, crane.arm3.length, 32);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            arm3.position.y = 1;\n            arm3.position.x = 0;\n            arm3.rotation.z = Math.PI / 2;\n            // Gripper\n            const gripperGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(crane.gripper.width, crane.gripper.length, crane.gripper.height);\n            const gripper = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperGeometry, material);\n            gripper.position.x = 1;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripper);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n            };\n        }\n    }, [\n        crane\n    ]); // Add crane to dependency array to re-render on change\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mountRef,\n        style: {\n            width: \"50%\",\n            height: \"50%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 112,\n        columnNumber: 10\n    }, undefined);\n};\n_s(CraneVisualization, \"0YQ00Mfx2JHcZye2FGwCAnmeegw=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmFuZVZpc3VhbGlzYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQUM1QjtBQUMyQztBQUUxRSxNQUFNTSxxQkFBcUI7UUFBQyxFQUFFQyxXQUFXLEVBQUU7O0lBQ3pDLE1BQU1DLFdBQVdQLDZDQUFNQSxDQUFpQjtJQUV4QywyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsa0RBQWtEO0lBQ2xELGdEQUFnRDtJQUNoRCxvREFBb0Q7SUFDcEQsdURBQXVEO0lBQ3ZELGdEQUFnRDtJQUNoRCxJQUFJO0lBRUosTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDSTtJQUduQ0wsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxTQUFTRyxPQUFPLEVBQUU7WUFDcEIsTUFBTUMsUUFBUSxJQUFJUix3Q0FBVztZQUM3QlEsTUFBTUUsVUFBVSxHQUFHLElBQUlWLHdDQUFXLENBQUM7WUFFbkMsTUFBTVksU0FBUyxJQUFJWixvREFBdUIsQ0FDeEMsSUFDQWMsT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXLEVBQ3RDLEtBQ0E7WUFFRkosT0FBT0ssUUFBUSxDQUFDQyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQzFCTixPQUFPTyxNQUFNLENBQUMsR0FBRyxHQUFHO1lBRXBCLE1BQU1DLFdBQVcsSUFBSXBCLGdEQUFtQjtZQUN4Q29CLFNBQVNFLE9BQU8sQ0FBQ1IsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1lBQ3REWixTQUFTRyxPQUFPLENBQUNnQixXQUFXLENBQUNILFNBQVNJLFVBQVU7WUFFaEQsTUFBTUMsV0FBVyxJQUFJeEIsb0ZBQWFBLENBQUNXLFFBQVFRLFNBQVNJLFVBQVU7WUFDOURDLFNBQVNDLE1BQU07WUFFZixNQUFNQyxRQUFRLElBQUkzQiwrQ0FBa0IsQ0FBQztZQUNyQyxNQUFNNkIsbUJBQW1CLElBQUk3QixtREFBc0IsQ0FBQyxVQUFVO1lBQzlENkIsaUJBQWlCWixRQUFRLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDcENWLE1BQU11QixHQUFHLENBQUNKO1lBQ1ZuQixNQUFNdUIsR0FBRyxDQUFDRjtZQUVWLG1CQUFtQjtZQUNuQixNQUFNRyxXQUFXLElBQUloQyxzREFBeUIsQ0FBQztnQkFBRWtDLE9BQU87WUFBUztZQUVqRSxPQUFPO1lBQ1Asc0VBQXNFO1lBQ3RFLHVEQUF1RDtZQUN2RCxpQ0FBaUM7WUFFakMsU0FBUztZQUNULE1BQU1DLGlCQUFpQixJQUFJbkMsbURBQXNCLENBQUNLLE1BQU1nQyxNQUFNLENBQUNDLFFBQVEsRUFBRWpDLE1BQU1nQyxNQUFNLENBQUNDLFFBQVEsRUFBRWpDLE1BQU1nQyxNQUFNLENBQUNFLE1BQU0sRUFBRTtZQUNySCxNQUFNRixTQUFTLElBQUlyQyx1Q0FBVSxDQUFDbUMsZ0JBQWdCSDtZQUM5Q0ssT0FBT3BCLFFBQVEsQ0FBQ3dCLENBQUMsR0FBRztZQUVwQixRQUFRO1lBQ1IsTUFBTUMsZUFBZSxJQUFJMUMsOENBQWlCLENBQUNLLE1BQU11QyxJQUFJLENBQUNDLEtBQUssRUFBRXhDLE1BQU11QyxJQUFJLENBQUNFLE1BQU0sRUFBRXpDLE1BQU11QyxJQUFJLENBQUNMLE1BQU07WUFDakcsTUFBTUssT0FBTyxJQUFJNUMsdUNBQVUsQ0FBQzBDLGNBQWNWO1lBQzFDWSxLQUFLM0IsUUFBUSxDQUFDd0IsQ0FBQyxHQUFHO1lBQ2xCRyxLQUFLM0IsUUFBUSxDQUFDOEIsQ0FBQyxHQUFHO1lBQ2xCSCxLQUFLSSxRQUFRLENBQUNELENBQUMsR0FBR0UsS0FBS0MsRUFBRSxHQUFHO1lBRTVCLFFBQVE7WUFDUixNQUFNQyxlQUFlLElBQUluRCw4Q0FBaUIsQ0FBQ0ssTUFBTStDLElBQUksQ0FBQ1AsS0FBSyxFQUFFeEMsTUFBTStDLElBQUksQ0FBQ04sTUFBTSxFQUFFekMsTUFBTStDLElBQUksQ0FBQ2IsTUFBTTtZQUNqRyxNQUFNYSxPQUFPLElBQUlwRCx1Q0FBVSxDQUFDbUQsY0FBY25CO1lBQzFDb0IsS0FBS25DLFFBQVEsQ0FBQ3dCLENBQUMsR0FBRztZQUNsQlcsS0FBS25DLFFBQVEsQ0FBQzhCLENBQUMsR0FBRztZQUVsQixRQUFRO1lBQ1IsTUFBTU0sZUFBZSxJQUFJckQsbURBQXNCLENBQUNLLE1BQU1pRCxJQUFJLENBQUNULEtBQUssRUFBRXhDLE1BQU1pRCxJQUFJLENBQUNULEtBQUssRUFBRXhDLE1BQU1pRCxJQUFJLENBQUNSLE1BQU0sRUFBRTtZQUN2RyxNQUFNUSxPQUFPLElBQUl0RCx1Q0FBVSxDQUFDcUQsY0FBY3JCO1lBQzFDc0IsS0FBS3JDLFFBQVEsQ0FBQ3dCLENBQUMsR0FBRztZQUNsQmEsS0FBS3JDLFFBQVEsQ0FBQzhCLENBQUMsR0FBRztZQUNsQk8sS0FBS04sUUFBUSxDQUFDTyxDQUFDLEdBQUdOLEtBQUtDLEVBQUUsR0FBRztZQUU1QixVQUFVO1lBQ1YsTUFBTU0sa0JBQWtCLElBQUl4RCw4Q0FBaUIsQ0FBQ0ssTUFBTW9ELE9BQU8sQ0FBQ1osS0FBSyxFQUFFeEMsTUFBTW9ELE9BQU8sQ0FBQ1gsTUFBTSxFQUFFekMsTUFBTW9ELE9BQU8sQ0FBQ2xCLE1BQU07WUFDN0csTUFBTWtCLFVBQVUsSUFBSXpELHVDQUFVLENBQUN3RCxpQkFBaUJ4QjtZQUNoRHlCLFFBQVF4QyxRQUFRLENBQUM4QixDQUFDLEdBQUc7WUFHckIsOEJBQThCO1lBQzlCdkMsTUFBTXVCLEdBQUcsQ0FBQ007WUFDVkEsT0FBT04sR0FBRyxDQUFDYTtZQUNYQSxLQUFLYixHQUFHLENBQUNxQjtZQUNUQSxLQUFLckIsR0FBRyxDQUFDdUI7WUFDVEEsS0FBS3ZCLEdBQUcsQ0FBQzBCO1lBR1QsTUFBTUMsVUFBVTtnQkFDZEMsc0JBQXNCRDtnQkFDdEJqQyxTQUFTQyxNQUFNLElBQUksaUZBQWlGO2dCQUNwR04sU0FBU3dDLE1BQU0sQ0FBQ3BELE9BQU9JO1lBQ3pCO1lBRUE4QztZQUVBLE9BQU87Z0JBQ0wsSUFBSXRELFNBQVNHLE9BQU8sRUFBRTtvQkFDcEJILFNBQVNHLE9BQU8sQ0FBQ3NELFdBQVcsQ0FBQ3pDLFNBQVNJLFVBQVU7Z0JBQ2xEO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ25CO0tBQU0sR0FBRyx1REFBdUQ7SUFFcEUscUJBQU8sOERBQUN5RDtRQUFJQyxLQUFLM0Q7UUFBVTRELE9BQU87WUFBRW5CLE9BQU87WUFBT04sUUFBUTtRQUFNOzs7Ozs7QUFDbEU7R0E1R01yQztLQUFBQTtBQThHTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvbi50c3g/ODg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5cbmNvbnN0IENyYW5lVmlzdWFsaXphdGlvbiA9ICh7IGNyYW5lUGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbW91bnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGRlZmluZSB0aGUgY3JhbmUgZGltZW5zaW9ucyBhbmQgcG9zaXRpb25cbiAgLy8gY29uc3QgY3JhbmUgPSB7XG4gIC8vICAgb3JpZ2luOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgLy8gICBjb2x1bW46IHtkaWFtZXRlcjogMC4xLCBoZWlnaHQ6IDJ9LFxuICAvLyAgIGFybTE6IHtsZW5ndGg6IDAuNSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjF9LFxuICAvLyAgIGFybTI6IHtsZW5ndGg6IDEsIHdpZHRoOiAwLjEsIGhlaWdodDogMC4xfSxcbiAgLy8gICBhcm0zOiB7bGVuZ3RoOiAwLjQsIHdpZHRoOiAwLjA1LCBoZWlnaHQ6IDAuMDV9LFxuICAvLyAgIGdyaXBwZXI6IHtsZW5ndGg6IDAuMSwgd2lkdGg6IDAuMDIsIGhlaWdodDogMC4wMn0sXG4gIC8vICAga2luZW1hdGljczoge3o6MCxhbHBoYTowLCBiZXRhOjAsIGdhbW1hOjB9IFxuICAvLyB9XG5cbiAgY29uc3QgW2NyYW5lLCBzZXRDcmFuZV0gPSB1c2VTdGF0ZShjcmFuZVBhcmFtcyk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweGVlZWVlZSk7XG5cbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgNzUsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAwLjEsXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDUsIDUsIDUpO1xuICAgICAgY2FtZXJhLmxvb2tBdCgwLCAwLCAwKTtcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIG1vdW50UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDApO1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMCwgMSwgMCk7XG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xuICAgICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgICAvLyBDcmFuZSBDb21wb25lbnRzXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4Nzc3N2ZmIH0pO1xuXG4gICAgICAvLyBCYXNlXG4gICAgICAvLyBjb25zdCBiYXNlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjUsIDAuNSwgMC4yLCAzMik7XG4gICAgICAvLyBjb25zdCBiYXNlID0gbmV3IFRIUkVFLk1lc2goYmFzZUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAvLyBiYXNlLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcblxuICAgICAgLy8gQ29sdW1uXG4gICAgICBjb25zdCBjb2x1bW5HZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGNyYW5lLmNvbHVtbi5kaWFtZXRlciwgY3JhbmUuY29sdW1uLmRpYW1ldGVyLCBjcmFuZS5jb2x1bW4uaGVpZ2h0LCAzMik7XG4gICAgICBjb25zdCBjb2x1bW4gPSBuZXcgVEhSRUUuTWVzaChjb2x1bW5HZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgY29sdW1uLnBvc2l0aW9uLnkgPSAxO1xuXG4gICAgICAvLyBBcm0gMVxuICAgICAgY29uc3QgYXJtMUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGNyYW5lLmFybTEud2lkdGgsIGNyYW5lLmFybTEubGVuZ3RoLCBjcmFuZS5hcm0xLmhlaWdodCk7XG4gICAgICBjb25zdCBhcm0xID0gbmV3IFRIUkVFLk1lc2goYXJtMUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBhcm0xLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgYXJtMS5wb3NpdGlvbi54ID0gMC41O1xuICAgICAgYXJtMS5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG5cbiAgICAgIC8vIEFybSAyXG4gICAgICBjb25zdCBhcm0yR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoY3JhbmUuYXJtMi53aWR0aCwgY3JhbmUuYXJtMi5sZW5ndGgsIGNyYW5lLmFybTIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGFybTIgPSBuZXcgVEhSRUUuTWVzaChhcm0yR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTIucG9zaXRpb24ueSA9IDE7XG4gICAgICBhcm0yLnBvc2l0aW9uLnggPSAwO1xuXG4gICAgICAvLyBBcm0gM1xuICAgICAgY29uc3QgYXJtM0dlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3JhbmUuYXJtMy53aWR0aCwgY3JhbmUuYXJtMy53aWR0aCwgY3JhbmUuYXJtMy5sZW5ndGgsIDMyKTtcbiAgICAgIGNvbnN0IGFybTMgPSBuZXcgVEhSRUUuTWVzaChhcm0zR2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIGFybTMucG9zaXRpb24ueSA9IDE7XG4gICAgICBhcm0zLnBvc2l0aW9uLnggPSAwO1xuICAgICAgYXJtMy5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XG5cbiAgICAgIC8vIEdyaXBwZXJcbiAgICAgIGNvbnN0IGdyaXBwZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShjcmFuZS5ncmlwcGVyLndpZHRoLCBjcmFuZS5ncmlwcGVyLmxlbmd0aCwgY3JhbmUuZ3JpcHBlci5oZWlnaHQpO1xuICAgICAgY29uc3QgZ3JpcHBlciA9IG5ldyBUSFJFRS5NZXNoKGdyaXBwZXJHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgZ3JpcHBlci5wb3NpdGlvbi54ID0gMTtcblxuXG4gICAgICAvLyBBZGRpbmcgb2JqZWN0cyB0byB0aGUgc2NlbmVcbiAgICAgIHNjZW5lLmFkZChjb2x1bW4pO1xuICAgICAgY29sdW1uLmFkZChhcm0xKTtcbiAgICAgIGFybTEuYWRkKGFybTIpO1xuICAgICAgYXJtMi5hZGQoYXJtMyk7XG4gICAgICBhcm0zLmFkZChncmlwcGVyKTtcblxuXG4gICAgICBjb25zdCBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpOyAvLyBvbmx5IHJlcXVpcmVkIGlmIGNvbnRyb2xzLmVuYWJsZURhbXBpbmcgb3IgY29udHJvbHMuYXV0b1JvdGF0ZSBhcmUgc2V0IHRvIHRydWVcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfTtcblxuICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIG1vdW50UmVmLmN1cnJlbnQucmVtb3ZlQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCBbY3JhbmVdKTsgLy8gQWRkIGNyYW5lIHRvIGRlcGVuZGVuY3kgYXJyYXkgdG8gcmUtcmVuZGVyIG9uIGNoYW5nZVxuXG4gIHJldHVybiA8ZGl2IHJlZj17bW91bnRSZWZ9IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmFuZVZpc3VhbGl6YXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIkNyYW5lVmlzdWFsaXphdGlvbiIsImNyYW5lUGFyYW1zIiwibW91bnRSZWYiLCJjcmFuZSIsInNldENyYW5lIiwiY3VycmVudCIsInNjZW5lIiwiU2NlbmUiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwidXBkYXRlIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsImFkZCIsIm1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiY29sdW1uR2VvbWV0cnkiLCJDeWxpbmRlckdlb21ldHJ5IiwiY29sdW1uIiwiZGlhbWV0ZXIiLCJoZWlnaHQiLCJNZXNoIiwieSIsImFybTFHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiYXJtMSIsIndpZHRoIiwibGVuZ3RoIiwieCIsInJvdGF0aW9uIiwiTWF0aCIsIlBJIiwiYXJtMkdlb21ldHJ5IiwiYXJtMiIsImFybTNHZW9tZXRyeSIsImFybTMiLCJ6IiwiZ3JpcHBlckdlb21ldHJ5IiwiZ3JpcHBlciIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJyZW1vdmVDaGlsZCIsImRpdiIsInJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});