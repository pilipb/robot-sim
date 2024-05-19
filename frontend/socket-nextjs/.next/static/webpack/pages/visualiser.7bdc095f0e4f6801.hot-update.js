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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/.pnpm/three@0.164.1/node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CraneVisualization = (param)=>{\n    let { craneParams, position = {\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    }, width = \"800px\", height = \"600px\" } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const fixedCraneDimensions = {\n        origin: {\n            x: 0,\n            y: 0,\n            z: 0\n        },\n        column: {\n            diameter: 0.1,\n            height: 2\n        },\n        arm1: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm2: {\n            length: 1,\n            width: 0.1,\n            height: 0.1\n        },\n        arm3: {\n            length: 0.4,\n            width: 0.05,\n            height: 0.05\n        },\n        gripper: {\n            length: 0.1,\n            width: 0.02,\n            height: 0.02\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(position); // Log to check if position updates are received\n        if (mountRef.current) {\n            const width = mountRef.current.clientWidth;\n            const height = mountRef.current.clientHeight;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x333333); // Dark background for the 3D scene\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);\n            // Set the camera position to be offset along the x-axis and above the column\n            camera.position.set(5, 3, 0);\n            camera.lookAt(0, 1, 0);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n            renderer.setSize(width, height);\n            mountRef.current.appendChild(renderer.domElement);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n            controls.update();\n            const light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040);\n            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.5);\n            directionalLight.position.set(0, 1, 0);\n            scene.add(light);\n            scene.add(directionalLight);\n            // Add GridHelper\n            const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(10, 10);\n            scene.add(gridHelper);\n            // Crane Components\n            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({\n                color: 0x7777ff\n            });\n            // Column\n            const columnGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.diameter, fixedCraneDimensions.column.height, 32);\n            const column = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(columnGeometry, material);\n            column.position.set(fixedCraneDimensions.origin.x, fixedCraneDimensions.origin.y, fixedCraneDimensions.origin.z);\n            // allow column to rotate about y (by angle alpha)\n            column.rotation.y = position.alpha;\n            column.position.y = fixedCraneDimensions.column.height / 2;\n            // Arm 1\n            const arm1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm1.width, fixedCraneDimensions.arm1.length, fixedCraneDimensions.arm1.height);\n            const arm1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm1Geometry, material);\n            // arm 1 is z units along the column\n            arm1.position.y = position.z;\n            arm1.rotation.z = Math.PI / 2;\n            arm1.position.x = fixedCraneDimensions.arm1.length / 2;\n            // Arm 2\n            const arm2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm2.width, fixedCraneDimensions.arm2.length, fixedCraneDimensions.arm2.height);\n            const arm2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm2Geometry, material);\n            // Move the geometry so the end of the arm is at the origin\n            arm2Geometry.translate(0, -fixedCraneDimensions.arm2.length / 2, 0);\n            // Now apply the rotation\n            arm2.rotation.x = position.beta;\n            // Position the arm2 relative to arm1\n            arm2.position.y = -fixedCraneDimensions.arm1.length / 2;\n            arm2.position.x = -fixedCraneDimensions.arm1.height;\n            // Arm 3\n            const arm3Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.arm3.width, fixedCraneDimensions.arm3.length, fixedCraneDimensions.arm3.height);\n            const arm3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(arm3Geometry, material);\n            // Move the geometry so the end of the arm is at the origin\n            arm3Geometry.translate(0, -fixedCraneDimensions.arm3.length / 2, 0);\n            // Now apply the rotation\n            arm3.rotation.x = position.gamma;\n            arm3.position.y = -fixedCraneDimensions.arm2.length;\n            arm3.position.x = -fixedCraneDimensions.arm2.height / 2;\n            arm3.position.z = 0;\n            // Gripper consisting of two vertical blocks\n            const gripperBlock1Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripperBlock2Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(fixedCraneDimensions.gripper.width, fixedCraneDimensions.gripper.length, fixedCraneDimensions.gripper.height);\n            const gripperBlock1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperBlock1Geometry, material);\n            const gripperBlock2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(gripperBlock2Geometry, material);\n            gripperBlock1Geometry.translate(0, -fixedCraneDimensions.gripper.length / 2, 0);\n            gripperBlock2Geometry.translate(0, -fixedCraneDimensions.gripper.length / 2, 0);\n            // Now apply the rotation\n            gripperBlock1.rotation.z = Math.PI / 2;\n            gripperBlock2.rotation.z = Math.PI / 2;\n            // Position blocks vertically and slightly apart\n            gripperBlock1.position.y = -fixedCraneDimensions.arm3.length / 2;\n            gripperBlock1.position.x = -fixedCraneDimensions.gripper.height / 2;\n            gripperBlock2.position.y = -fixedCraneDimensions.arm3.length / 2;\n            gripperBlock2.position.x = fixedCraneDimensions.gripper.height / 2;\n            // Adding objects to the scene\n            scene.add(column);\n            column.add(arm1);\n            arm1.add(arm2);\n            arm2.add(arm3);\n            arm3.add(gripperBlock1);\n            arm3.add(gripperBlock2);\n            const animate = function() {\n                requestAnimationFrame(animate);\n                controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true\n                renderer.render(scene, camera);\n            };\n            animate();\n            // Handle window resize\n            const handleResize = ()=>{\n                const width = mountRef.current.clientWidth;\n                const height = mountRef.current.clientHeight;\n                renderer.setSize(width, height);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>{\n                if (mountRef.current) {\n                    mountRef.current.removeChild(renderer.domElement);\n                }\n                window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, [\n        craneParams,\n        position\n    ]); // Re-run this effect if craneParams or position changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visualiser-container\",\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mountRef,\n            style: {\n                width,\n                height\n            }\n        }, void 0, false, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n            lineNumber: 187,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/components/CraneVisualisation.tsx\",\n        lineNumber: 186,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CraneVisualization, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = CraneVisualization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraneVisualization);\nvar _c;\n$RefreshReg$(_c, \"CraneVisualization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmFuZVZpc3VhbGlzYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQUM1QjtBQUMyQztBQUUxRSxNQUFNSyxxQkFBcUI7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7UUFBRUMsR0FBRztRQUFHQyxPQUFPO1FBQUdDLE1BQU07UUFBR0MsT0FBTztRQUFHQyxHQUFHO1FBQUdDLEdBQUc7UUFBR0MsR0FBRztJQUFFLENBQUMsRUFBRUMsUUFBUSxPQUFPLEVBQUVDLFNBQVMsT0FBTyxFQUFFOztJQUNoSixNQUFNQyxXQUFXaEIsNkNBQU1BLENBQWlCO0lBRXhDLE1BQU1pQix1QkFBdUI7UUFDM0JDLFFBQVE7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1lBQUdOLEdBQUc7UUFBRTtRQUMzQlksUUFBUTtZQUFFQyxVQUFVO1lBQUtMLFFBQVE7UUFBRTtRQUNuQ00sTUFBTTtZQUFFQyxRQUFRO1lBQUdSLE9BQU87WUFBS0MsUUFBUTtRQUFJO1FBQzNDUSxNQUFNO1lBQUVELFFBQVE7WUFBR1IsT0FBTztZQUFLQyxRQUFRO1FBQUk7UUFDM0NTLE1BQU07WUFBRUYsUUFBUTtZQUFLUixPQUFPO1lBQU1DLFFBQVE7UUFBSztRQUMvQ1UsU0FBUztZQUFFSCxRQUFRO1lBQUtSLE9BQU87WUFBTUMsUUFBUTtRQUFLO0lBQ3BEO0lBR0FkLGdEQUFTQSxDQUFDO1FBQ1J5QixRQUFRQyxHQUFHLENBQUNyQixXQUFXLGdEQUFnRDtRQUN2RSxJQUFJVSxTQUFTWSxPQUFPLEVBQUU7WUFDcEIsTUFBTWQsUUFBUUUsU0FBU1ksT0FBTyxDQUFDQyxXQUFXO1lBQzFDLE1BQU1kLFNBQVNDLFNBQVNZLE9BQU8sQ0FBQ0UsWUFBWTtZQUU1QyxNQUFNQyxRQUFRLElBQUk3Qix3Q0FBVztZQUM3QjZCLE1BQU1FLFVBQVUsR0FBRyxJQUFJL0Isd0NBQVcsQ0FBQyxXQUFXLG1DQUFtQztZQUVqRixNQUFNaUMsU0FBUyxJQUFJakMsb0RBQXVCLENBQUMsSUFBSVksUUFBUUMsUUFBUSxLQUFLO1lBQ3BFLDZFQUE2RTtZQUM3RW9CLE9BQU83QixRQUFRLENBQUMrQixHQUFHLENBQUMsR0FBRyxHQUFHO1lBQzFCRixPQUFPRyxNQUFNLENBQUMsR0FBRyxHQUFHO1lBRXBCLE1BQU1DLFdBQVcsSUFBSXJDLGdEQUFtQjtZQUN4Q3FDLFNBQVNFLE9BQU8sQ0FBQzNCLE9BQU9DO1lBQ3hCQyxTQUFTWSxPQUFPLENBQUNjLFdBQVcsQ0FBQ0gsU0FBU0ksVUFBVTtZQUVoRCxNQUFNQyxXQUFXLElBQUl6QyxvRkFBYUEsQ0FBQ2dDLFFBQVFJLFNBQVNJLFVBQVU7WUFDOURDLFNBQVNDLE1BQU07WUFFZixNQUFNQyxRQUFRLElBQUk1QywrQ0FBa0IsQ0FBQztZQUNyQyxNQUFNOEMsbUJBQW1CLElBQUk5QyxtREFBc0IsQ0FBQyxVQUFVO1lBQzlEOEMsaUJBQWlCMUMsUUFBUSxDQUFDK0IsR0FBRyxDQUFDLEdBQUcsR0FBRztZQUNwQ04sTUFBTW1CLEdBQUcsQ0FBQ0o7WUFDVmYsTUFBTW1CLEdBQUcsQ0FBQ0Y7WUFFVixpQkFBaUI7WUFDakIsTUFBTUcsYUFBYSxJQUFJakQsNkNBQWdCLENBQUMsSUFBSTtZQUM1QzZCLE1BQU1tQixHQUFHLENBQUNDO1lBRVYsbUJBQW1CO1lBQ25CLE1BQU1FLFdBQVcsSUFBSW5ELHNEQUF5QixDQUFDO2dCQUFFcUQsT0FBTztZQUFTO1lBRWpFLFNBQVM7WUFDVCxNQUFNQyxpQkFBaUIsSUFBSXRELG1EQUFzQixDQUMvQ2UscUJBQXFCRSxNQUFNLENBQUNDLFFBQVEsRUFDcENILHFCQUFxQkUsTUFBTSxDQUFDQyxRQUFRLEVBQ3BDSCxxQkFBcUJFLE1BQU0sQ0FBQ0osTUFBTSxFQUNsQztZQUVGLE1BQU1JLFNBQVMsSUFBSWpCLHVDQUFVLENBQUNzRCxnQkFBZ0JIO1lBQzlDbEMsT0FBT2IsUUFBUSxDQUFDK0IsR0FBRyxDQUNqQnBCLHFCQUFxQkMsTUFBTSxDQUFDTixDQUFDLEVBQzdCSyxxQkFBcUJDLE1BQU0sQ0FBQ0wsQ0FBQyxFQUM3QkkscUJBQXFCQyxNQUFNLENBQUNYLENBQUM7WUFFL0Isa0RBQWtEO1lBQ2xEWSxPQUFPd0MsUUFBUSxDQUFDOUMsQ0FBQyxHQUFHUCxTQUFTRSxLQUFLO1lBQ2xDVyxPQUFPYixRQUFRLENBQUNPLENBQUMsR0FBR0kscUJBQXFCRSxNQUFNLENBQUNKLE1BQU0sR0FBRztZQUV6RCxRQUFRO1lBQ1IsTUFBTTZDLGVBQWUsSUFBSTFELDhDQUFpQixDQUN4Q2UscUJBQXFCSSxJQUFJLENBQUNQLEtBQUssRUFDL0JHLHFCQUFxQkksSUFBSSxDQUFDQyxNQUFNLEVBQ2hDTCxxQkFBcUJJLElBQUksQ0FBQ04sTUFBTTtZQUVsQyxNQUFNTSxPQUFPLElBQUluQix1Q0FBVSxDQUFDMEQsY0FBY1A7WUFDMUMsb0NBQW9DO1lBQ3BDaEMsS0FBS2YsUUFBUSxDQUFDTyxDQUFDLEdBQUdQLFNBQVNDLENBQUM7WUFDNUJjLEtBQUtzQyxRQUFRLENBQUNwRCxDQUFDLEdBQUd1RCxLQUFLQyxFQUFFLEdBQUc7WUFDNUIxQyxLQUFLZixRQUFRLENBQUNNLENBQUMsR0FBR0sscUJBQXFCSSxJQUFJLENBQUNDLE1BQU0sR0FBRztZQUVyRCxRQUFRO1lBQ1IsTUFBTTBDLGVBQWUsSUFBSTlELDhDQUFpQixDQUN4Q2UscUJBQXFCTSxJQUFJLENBQUNULEtBQUssRUFDL0JHLHFCQUFxQk0sSUFBSSxDQUFDRCxNQUFNLEVBQ2hDTCxxQkFBcUJNLElBQUksQ0FBQ1IsTUFBTTtZQUVsQyxNQUFNUSxPQUFPLElBQUlyQix1Q0FBVSxDQUFDOEQsY0FBY1g7WUFFMUMsMkRBQTJEO1lBQzNEVyxhQUFhQyxTQUFTLENBQUMsR0FBRyxDQUFDaEQscUJBQXFCTSxJQUFJLENBQUNELE1BQU0sR0FBRyxHQUFHO1lBRWpFLHlCQUF5QjtZQUN6QkMsS0FBS29DLFFBQVEsQ0FBQy9DLENBQUMsR0FBR04sU0FBU0csSUFBSTtZQUUvQixxQ0FBcUM7WUFDckNjLEtBQUtqQixRQUFRLENBQUNPLENBQUMsR0FBRyxDQUFDSSxxQkFBcUJJLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1lBQ3REQyxLQUFLakIsUUFBUSxDQUFDTSxDQUFDLEdBQUcsQ0FBQ0sscUJBQXFCSSxJQUFJLENBQUNOLE1BQU07WUFFbkQsUUFBUTtZQUNSLE1BQU1tRCxlQUFlLElBQUloRSw4Q0FBaUIsQ0FDeENlLHFCQUFxQk8sSUFBSSxDQUFDVixLQUFLLEVBQy9CRyxxQkFBcUJPLElBQUksQ0FBQ0YsTUFBTSxFQUNoQ0wscUJBQXFCTyxJQUFJLENBQUNULE1BQU07WUFFbEMsTUFBTVMsT0FBTyxJQUFJdEIsdUNBQVUsQ0FBQ2dFLGNBQWNiO1lBRTFDLDJEQUEyRDtZQUMzRGEsYUFBYUQsU0FBUyxDQUFDLEdBQUcsQ0FBQ2hELHFCQUFxQk8sSUFBSSxDQUFDRixNQUFNLEdBQUcsR0FBRztZQUVqRSx5QkFBeUI7WUFDekJFLEtBQUttQyxRQUFRLENBQUMvQyxDQUFDLEdBQUdOLFNBQVNJLEtBQUs7WUFDaENjLEtBQUtsQixRQUFRLENBQUNPLENBQUMsR0FBRyxDQUFDSSxxQkFBcUJNLElBQUksQ0FBQ0QsTUFBTTtZQUNuREUsS0FBS2xCLFFBQVEsQ0FBQ00sQ0FBQyxHQUFHLENBQUNLLHFCQUFxQk0sSUFBSSxDQUFDUixNQUFNLEdBQUc7WUFDdERTLEtBQUtsQixRQUFRLENBQUNDLENBQUMsR0FBRztZQUVsQiw0Q0FBNEM7WUFDNUMsTUFBTTRELHdCQUF3QixJQUFJakUsOENBQWlCLENBQ2pEZSxxQkFBcUJRLE9BQU8sQ0FBQ1gsS0FBSyxFQUNsQ0cscUJBQXFCUSxPQUFPLENBQUNILE1BQU0sRUFDbkNMLHFCQUFxQlEsT0FBTyxDQUFDVixNQUFNO1lBRXJDLE1BQU1xRCx3QkFBd0IsSUFBSWxFLDhDQUFpQixDQUNqRGUscUJBQXFCUSxPQUFPLENBQUNYLEtBQUssRUFDbENHLHFCQUFxQlEsT0FBTyxDQUFDSCxNQUFNLEVBQ25DTCxxQkFBcUJRLE9BQU8sQ0FBQ1YsTUFBTTtZQUdyQyxNQUFNc0QsZ0JBQWdCLElBQUluRSx1Q0FBVSxDQUFDaUUsdUJBQXVCZDtZQUM1RCxNQUFNaUIsZ0JBQWdCLElBQUlwRSx1Q0FBVSxDQUFDa0UsdUJBQXVCZjtZQUc1RGMsc0JBQXNCRixTQUFTLENBQUMsR0FBRyxDQUFDaEQscUJBQXFCUSxPQUFPLENBQUNILE1BQU0sR0FBRyxHQUFHO1lBQzdFOEMsc0JBQXNCSCxTQUFTLENBQzdCLEdBQ0EsQ0FBQ2hELHFCQUFxQlEsT0FBTyxDQUFDSCxNQUFNLEdBQUcsR0FDdkM7WUFFRix5QkFBeUI7WUFDekIrQyxjQUFjVixRQUFRLENBQUNwRCxDQUFDLEdBQUd1RCxLQUFLQyxFQUFFLEdBQUc7WUFDckNPLGNBQWNYLFFBQVEsQ0FBQ3BELENBQUMsR0FBR3VELEtBQUtDLEVBQUUsR0FBRztZQUVyQyxnREFBZ0Q7WUFDaERNLGNBQWMvRCxRQUFRLENBQUNPLENBQUMsR0FBRyxDQUFDSSxxQkFBcUJPLElBQUksQ0FBQ0YsTUFBTSxHQUFHO1lBQy9EK0MsY0FBYy9ELFFBQVEsQ0FBQ00sQ0FBQyxHQUFHLENBQUNLLHFCQUFxQlEsT0FBTyxDQUFDVixNQUFNLEdBQUc7WUFFbEV1RCxjQUFjaEUsUUFBUSxDQUFDTyxDQUFDLEdBQUcsQ0FBQ0kscUJBQXFCTyxJQUFJLENBQUNGLE1BQU0sR0FBRztZQUMvRGdELGNBQWNoRSxRQUFRLENBQUNNLENBQUMsR0FBR0sscUJBQXFCUSxPQUFPLENBQUNWLE1BQU0sR0FBRztZQUVqRSw4QkFBOEI7WUFDOUJnQixNQUFNbUIsR0FBRyxDQUFDL0I7WUFDVkEsT0FBTytCLEdBQUcsQ0FBQzdCO1lBQ1hBLEtBQUs2QixHQUFHLENBQUMzQjtZQUNUQSxLQUFLMkIsR0FBRyxDQUFDMUI7WUFDVEEsS0FBSzBCLEdBQUcsQ0FBQ21CO1lBQ1Q3QyxLQUFLMEIsR0FBRyxDQUFDb0I7WUFFVCxNQUFNQyxVQUFVO2dCQUNkQyxzQkFBc0JEO2dCQUN0QjNCLFNBQVNDLE1BQU0sSUFBSSxpRkFBaUY7Z0JBQ3BHTixTQUFTa0MsTUFBTSxDQUFDMUMsT0FBT0k7WUFDekI7WUFFQW9DO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU1HLGVBQWU7Z0JBQ25CLE1BQU01RCxRQUFRRSxTQUFTWSxPQUFPLENBQUNDLFdBQVc7Z0JBQzFDLE1BQU1kLFNBQVNDLFNBQVNZLE9BQU8sQ0FBQ0UsWUFBWTtnQkFDNUNTLFNBQVNFLE9BQU8sQ0FBQzNCLE9BQU9DO2dCQUN4Qm9CLE9BQU93QyxNQUFNLEdBQUc3RCxRQUFRQztnQkFDeEJvQixPQUFPeUMsc0JBQXNCO1lBQy9CO1lBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVKO1lBRWxDLE9BQU87Z0JBQ0wsSUFBSTFELFNBQVNZLE9BQU8sRUFBRTtvQkFDcEJaLFNBQVNZLE9BQU8sQ0FBQ21ELFdBQVcsQ0FBQ3hDLFNBQVNJLFVBQVU7Z0JBQ2xEO2dCQUNBa0MsT0FBT0csbUJBQW1CLENBQUMsVUFBVU47WUFDdkM7UUFDRjtJQUNGLEdBQUc7UUFBQ3JFO1FBQWFDO0tBQVMsR0FBRyx3REFBd0Q7SUFFckYscUJBQ0UsOERBQUMyRTtRQUFJQyxXQUFVO1FBQXVCQyxPQUFPO1lBQUVyRSxPQUFPO1lBQVFDLFFBQVE7UUFBTztrQkFDM0UsNEVBQUNrRTtZQUFJRyxLQUFLcEU7WUFBVW1FLE9BQU87Z0JBQUVyRTtnQkFBT0M7WUFBTzs7Ozs7Ozs7Ozs7QUFHakQ7R0F6TE1YO0tBQUFBO0FBMkxOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3JhbmVWaXN1YWxpc2F0aW9uLnRzeD84ODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcblxuY29uc3QgQ3JhbmVWaXN1YWxpemF0aW9uID0gKHsgY3JhbmVQYXJhbXMsIHBvc2l0aW9uID0geyB6OiAwLCBhbHBoYTogMCwgYmV0YTogMCwgZ2FtbWE6IDAsIGc6IDAsIHg6IDAsIHk6IDAgfSwgd2lkdGggPSBcIjgwMHB4XCIsIGhlaWdodCA9IFwiNjAwcHhcIiB9KSA9PiB7XG4gIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBmaXhlZENyYW5lRGltZW5zaW9ucyA9IHtcbiAgICBvcmlnaW46IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgIGNvbHVtbjogeyBkaWFtZXRlcjogMC4xLCBoZWlnaHQ6IDIgfSxcbiAgICBhcm0xOiB7IGxlbmd0aDogMSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjEgfSxcbiAgICBhcm0yOiB7IGxlbmd0aDogMSwgd2lkdGg6IDAuMSwgaGVpZ2h0OiAwLjEgfSxcbiAgICBhcm0zOiB7IGxlbmd0aDogMC40LCB3aWR0aDogMC4wNSwgaGVpZ2h0OiAwLjA1IH0sXG4gICAgZ3JpcHBlcjogeyBsZW5ndGg6IDAuMSwgd2lkdGg6IDAuMDIsIGhlaWdodDogMC4wMiB9LFxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7IC8vIExvZyB0byBjaGVjayBpZiBwb3NpdGlvbiB1cGRhdGVzIGFyZSByZWNlaXZlZFxuICAgIGlmIChtb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCB3aWR0aCA9IG1vdW50UmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHgzMzMzMzMpOyAvLyBEYXJrIGJhY2tncm91bmQgZm9yIHRoZSAzRCBzY2VuZVxuXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgLy8gU2V0IHRoZSBjYW1lcmEgcG9zaXRpb24gdG8gYmUgb2Zmc2V0IGFsb25nIHRoZSB4LWF4aXMgYW5kIGFib3ZlIHRoZSBjb2x1bW5cbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoNSwgMywgMCk7XG4gICAgICBjYW1lcmEubG9va0F0KDAsIDEsIDApO1xuXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgbW91bnRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgY29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuNSk7XG4gICAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgwLCAxLCAwKTtcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAgIC8vIEFkZCBHcmlkSGVscGVyXG4gICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAsIDEwKTtcbiAgICAgIHNjZW5lLmFkZChncmlkSGVscGVyKTtcblxuICAgICAgLy8gQ3JhbmUgQ29tcG9uZW50c1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDc3NzdmZiB9KTtcblxuICAgICAgLy8gQ29sdW1uXG4gICAgICBjb25zdCBjb2x1bW5HZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uZGlhbWV0ZXIsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmNvbHVtbi5kaWFtZXRlcixcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuY29sdW1uLmhlaWdodCxcbiAgICAgICAgMzJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBuZXcgVEhSRUUuTWVzaChjb2x1bW5HZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgY29sdW1uLnBvc2l0aW9uLnNldChcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMub3JpZ2luLngsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLm9yaWdpbi55LFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5vcmlnaW4uelxuICAgICAgKTtcbiAgICAgIC8vIGFsbG93IGNvbHVtbiB0byByb3RhdGUgYWJvdXQgeSAoYnkgYW5nbGUgYWxwaGEpXG4gICAgICBjb2x1bW4ucm90YXRpb24ueSA9IHBvc2l0aW9uLmFscGhhO1xuICAgICAgY29sdW1uLnBvc2l0aW9uLnkgPSBmaXhlZENyYW5lRGltZW5zaW9ucy5jb2x1bW4uaGVpZ2h0IC8gMjtcblxuICAgICAgLy8gQXJtIDFcbiAgICAgIGNvbnN0IGFybTFHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS53aWR0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5sZW5ndGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTEuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY29uc3QgYXJtMSA9IG5ldyBUSFJFRS5NZXNoKGFybTFHZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgLy8gYXJtIDEgaXMgeiB1bml0cyBhbG9uZyB0aGUgY29sdW1uXG4gICAgICBhcm0xLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi56O1xuICAgICAgYXJtMS5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XG4gICAgICBhcm0xLnBvc2l0aW9uLnggPSBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCAvIDI7XG5cbiAgICAgIC8vIEFybSAyXG4gICAgICBjb25zdCBhcm0yR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIud2lkdGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIubGVuZ3RoLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0yLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFybTIgPSBuZXcgVEhSRUUuTWVzaChhcm0yR2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgLy8gTW92ZSB0aGUgZ2VvbWV0cnkgc28gdGhlIGVuZCBvZiB0aGUgYXJtIGlzIGF0IHRoZSBvcmlnaW5cbiAgICAgIGFybTJHZW9tZXRyeS50cmFuc2xhdGUoMCwgLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIubGVuZ3RoIC8gMiwgMCk7XG5cbiAgICAgIC8vIE5vdyBhcHBseSB0aGUgcm90YXRpb25cbiAgICAgIGFybTIucm90YXRpb24ueCA9IHBvc2l0aW9uLmJldGE7XG5cbiAgICAgIC8vIFBvc2l0aW9uIHRoZSBhcm0yIHJlbGF0aXZlIHRvIGFybTFcbiAgICAgIGFybTIucG9zaXRpb24ueSA9IC1maXhlZENyYW5lRGltZW5zaW9ucy5hcm0xLmxlbmd0aCAvIDI7XG4gICAgICBhcm0yLnBvc2l0aW9uLnggPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMS5oZWlnaHQ7XG5cbiAgICAgIC8vIEFybSAzXG4gICAgICBjb25zdCBhcm0zR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMud2lkdGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5hcm0zLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFybTMgPSBuZXcgVEhSRUUuTWVzaChhcm0zR2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgLy8gTW92ZSB0aGUgZ2VvbWV0cnkgc28gdGhlIGVuZCBvZiB0aGUgYXJtIGlzIGF0IHRoZSBvcmlnaW5cbiAgICAgIGFybTNHZW9tZXRyeS50cmFuc2xhdGUoMCwgLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoIC8gMiwgMCk7XG5cbiAgICAgIC8vIE5vdyBhcHBseSB0aGUgcm90YXRpb25cbiAgICAgIGFybTMucm90YXRpb24ueCA9IHBvc2l0aW9uLmdhbW1hO1xuICAgICAgYXJtMy5wb3NpdGlvbi55ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIubGVuZ3RoO1xuICAgICAgYXJtMy5wb3NpdGlvbi54ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTIuaGVpZ2h0IC8gMjtcbiAgICAgIGFybTMucG9zaXRpb24ueiA9IDA7XG5cbiAgICAgIC8vIEdyaXBwZXIgY29uc2lzdGluZyBvZiB0d28gdmVydGljYWwgYmxvY2tzXG4gICAgICBjb25zdCBncmlwcGVyQmxvY2sxR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIud2lkdGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIubGVuZ3RoLFxuICAgICAgICBmaXhlZENyYW5lRGltZW5zaW9ucy5ncmlwcGVyLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGdyaXBwZXJCbG9jazJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci53aWR0aCxcbiAgICAgICAgZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5sZW5ndGgsXG4gICAgICAgIGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0XG4gICAgICApO1xuXG4gICAgICBjb25zdCBncmlwcGVyQmxvY2sxID0gbmV3IFRIUkVFLk1lc2goZ3JpcHBlckJsb2NrMUdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBjb25zdCBncmlwcGVyQmxvY2syID0gbmV3IFRIUkVFLk1lc2goZ3JpcHBlckJsb2NrMkdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICBcbiAgICAgIGdyaXBwZXJCbG9jazFHZW9tZXRyeS50cmFuc2xhdGUoMCwgLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIubGVuZ3RoIC8gMiwgMCk7XG4gICAgICBncmlwcGVyQmxvY2syR2VvbWV0cnkudHJhbnNsYXRlKFxuICAgICAgICAwLFxuICAgICAgICAtZml4ZWRDcmFuZURpbWVuc2lvbnMuZ3JpcHBlci5sZW5ndGggLyAyLFxuICAgICAgICAwXG4gICAgICApO1xuICAgICAgLy8gTm93IGFwcGx5IHRoZSByb3RhdGlvblxuICAgICAgZ3JpcHBlckJsb2NrMS5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XG4gICAgICBncmlwcGVyQmxvY2syLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcblxuICAgICAgLy8gUG9zaXRpb24gYmxvY2tzIHZlcnRpY2FsbHkgYW5kIHNsaWdodGx5IGFwYXJ0XG4gICAgICBncmlwcGVyQmxvY2sxLnBvc2l0aW9uLnkgPSAtZml4ZWRDcmFuZURpbWVuc2lvbnMuYXJtMy5sZW5ndGggLyAyO1xuICAgICAgZ3JpcHBlckJsb2NrMS5wb3NpdGlvbi54ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0IC8gMjtcblxuICAgICAgZ3JpcHBlckJsb2NrMi5wb3NpdGlvbi55ID0gLWZpeGVkQ3JhbmVEaW1lbnNpb25zLmFybTMubGVuZ3RoIC8gMjtcbiAgICAgIGdyaXBwZXJCbG9jazIucG9zaXRpb24ueCA9IGZpeGVkQ3JhbmVEaW1lbnNpb25zLmdyaXBwZXIuaGVpZ2h0IC8gMjtcblxuICAgICAgLy8gQWRkaW5nIG9iamVjdHMgdG8gdGhlIHNjZW5lXG4gICAgICBzY2VuZS5hZGQoY29sdW1uKTtcbiAgICAgIGNvbHVtbi5hZGQoYXJtMSk7XG4gICAgICBhcm0xLmFkZChhcm0yKTtcbiAgICAgIGFybTIuYWRkKGFybTMpO1xuICAgICAgYXJtMy5hZGQoZ3JpcHBlckJsb2NrMSk7XG4gICAgICBhcm0zLmFkZChncmlwcGVyQmxvY2syKTtcblxuICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjb250cm9scy51cGRhdGUoKTsgLy8gb25seSByZXF1aXJlZCBpZiBjb250cm9scy5lbmFibGVEYW1waW5nIG9yIGNvbnRyb2xzLmF1dG9Sb3RhdGUgYXJlIHNldCB0byB0cnVlXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBtb3VudFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKG1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBtb3VudFJlZi5jdXJyZW50LnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NyYW5lUGFyYW1zLCBwb3NpdGlvbl0pOyAvLyBSZS1ydW4gdGhpcyBlZmZlY3QgaWYgY3JhbmVQYXJhbXMgb3IgcG9zaXRpb24gY2hhbmdlc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxpc2VyLWNvbnRhaW5lclwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgIDxkaXYgcmVmPXttb3VudFJlZn0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JhbmVWaXN1YWxpemF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiQ3JhbmVWaXN1YWxpemF0aW9uIiwiY3JhbmVQYXJhbXMiLCJwb3NpdGlvbiIsInoiLCJhbHBoYSIsImJldGEiLCJnYW1tYSIsImciLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW91bnRSZWYiLCJmaXhlZENyYW5lRGltZW5zaW9ucyIsIm9yaWdpbiIsImNvbHVtbiIsImRpYW1ldGVyIiwiYXJtMSIsImxlbmd0aCIsImFybTIiLCJhcm0zIiwiZ3JpcHBlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzY2VuZSIsIlNjZW5lIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJzZXQiLCJsb29rQXQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiY29udHJvbHMiLCJ1cGRhdGUiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiYWRkIiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJtYXRlcmlhbCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImNvbHVtbkdlb21ldHJ5IiwiQ3lsaW5kZXJHZW9tZXRyeSIsIk1lc2giLCJyb3RhdGlvbiIsImFybTFHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiTWF0aCIsIlBJIiwiYXJtMkdlb21ldHJ5IiwidHJhbnNsYXRlIiwiYXJtM0dlb21ldHJ5IiwiZ3JpcHBlckJsb2NrMUdlb21ldHJ5IiwiZ3JpcHBlckJsb2NrMkdlb21ldHJ5IiwiZ3JpcHBlckJsb2NrMSIsImdyaXBwZXJCbG9jazIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CraneVisualisation.tsx\n"));

/***/ })

});