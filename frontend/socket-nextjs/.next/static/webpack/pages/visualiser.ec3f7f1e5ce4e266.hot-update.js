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

/***/ "./src/pages/visualiser/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/visualiser/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CraneVisualisation */ \"./src/components/CraneVisualisation.tsx\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ \"../../../../../node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nlet socket;\nfunction Home() {\n    _s();\n    const [craneParams, setCraneParams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        kinematics: {\n            z: 0,\n            alpha: 0,\n            beta: 0,\n            gamma: 0,\n            g: 0\n        }\n    });\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0,\n        x: 0,\n        y: 0\n    });\n    const updatePosition = async (newParams)=>{\n        const response = await fetch(\"http://localhost:8000/api/calculate-crane\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newParams)\n        });\n        const data = await response.json();\n        console.log(data); // Add this line to log the response\n        if (data.position) {\n            setPosition({\n                ...data.position,\n                x: data.position.x || 0,\n                y: data.position.y || 0\n            });\n        } else {\n            // Handle the case where data.position is null or undefined\n            setPosition({\n                z: 0,\n                alpha: 0,\n                beta: 0,\n                gamma: 0,\n                g: 0,\n                x: 0,\n                y: 0\n            });\n        }\n    };\n    const debouncedUpdatePosition = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(updatePosition, 300); // 300 ms\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        const [key, subKey] = name.split(\".\");\n        const newParams = {\n            ...craneParams,\n            [key]: {\n                ...craneParams[key],\n                [subKey]: parseFloat(value)\n            }\n        };\n        setCraneParams(newParams);\n        debouncedUpdatePosition(newParams);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"full-page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"input-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    craneParams: craneParams,\n                    position: position\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Crane Parameters\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"red\"\n                    },\n                    children: \"Lift Height\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    name: \"kinematics.z\",\n                    value: craneParams.kinematics.z,\n                    onChange: handleInputChange,\n                    placeholder: \"Lift Height\",\n                    min: \"0\",\n                    max: \"2\",\n                    step: \"0.05\",\n                    style: {\n                        background: \"red\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"blue\"\n                    },\n                    children: \"Swing Angle\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    name: \"kinematics.alpha\",\n                    value: craneParams.kinematics.alpha,\n                    onChange: handleInputChange,\n                    placeholder: \"Swing Angle\",\n                    min: \"0\",\n                    max: \"360\",\n                    step: \"1\",\n                    style: {\n                        background: \"blue\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"green\"\n                    },\n                    children: \"Elbow Angle\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    name: \"kinematics.beta\",\n                    value: craneParams.kinematics.beta,\n                    onChange: handleInputChange,\n                    placeholder: \"Elbow Angle\",\n                    min: \"0\",\n                    max: \"360\",\n                    step: \"1\",\n                    style: {\n                        background: \"green\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"purple\"\n                    },\n                    children: \"Wrist Angle\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    name: \"kinematics.gamma\",\n                    value: craneParams.kinematics.gamma,\n                    onChange: handleInputChange,\n                    placeholder: \"Wrist Angle\",\n                    min: \"0\",\n                    max: \"360\",\n                    step: \"1\",\n                    style: {\n                        background: \"purple\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"orange\"\n                    },\n                    children: \"Gripper Angle\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    name: \"kinematics.g\",\n                    value: craneParams.kinematics.g,\n                    onChange: handleInputChange,\n                    placeholder: \"Gripper Width\",\n                    min: \"0\",\n                    max: \"1\",\n                    step: \"0.01\",\n                    style: {\n                        background: \"orange\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dWC+rxP6d9wFxMU7kD85S7OFH6U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ1Y7b0JBQU1DLE9BQU87d0JBQUVDLE9BQU87b0JBQVE7OEJBQUc7Ozs7Ozs4QkFDbEMsOERBQUNDO29CQUNDQyxNQUFLO29CQUNMZCxNQUFLO29CQUNMQyxPQUFPN0IsWUFBWUUsVUFBVSxDQUFDRyxJQUFJO29CQUNsQ3NDLFVBQVVqQjtvQkFDVmtCLGFBQVk7b0JBQ1pDLEtBQUk7b0JBQUlDLEtBQUk7b0JBQU1DLE1BQUs7b0JBQ3ZCUixPQUFPO3dCQUFFUyxZQUFZO29CQUFROzs7Ozs7OEJBRS9CLDhEQUFDVjtvQkFBTUMsT0FBTzt3QkFBRUMsT0FBTztvQkFBUzs4QkFBRzs7Ozs7OzhCQUNuQyw4REFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xkLE1BQUs7b0JBQ0xDLE9BQU83QixZQUFZRSxVQUFVLENBQUNJLEtBQUs7b0JBQ25DcUMsVUFBVWpCO29CQUNWa0IsYUFBWTtvQkFDWkMsS0FBSTtvQkFBSUMsS0FBSTtvQkFBTUMsTUFBSztvQkFDdkJSLE9BQU87d0JBQUVTLFlBQVk7b0JBQVM7Ozs7Ozs4QkFFaEMsOERBQUNWO29CQUFNQyxPQUFPO3dCQUFFQyxPQUFPO29CQUFTOzhCQUFHOzs7Ozs7OEJBQ25DLDhEQUFDQztvQkFDQ0MsTUFBSztvQkFDTGQsTUFBSztvQkFDTEMsT0FBTzdCLFlBQVlFLFVBQVUsQ0FBQ0ssQ0FBQztvQkFDL0JvQyxVQUFVakI7b0JBQ1ZrQixhQUFZO29CQUNaQyxLQUFJO29CQUFJQyxLQUFJO29CQUFJQyxNQUFLO29CQUNyQlIsT0FBTzt3QkFBRVMsWUFBWTtvQkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEM7R0FyR3dCakQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Zpc3VhbGlzZXIvaW5kZXgudHN4PzNhMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgQ3JhbmVWaXN1YWxpc2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvblwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgQ3JhbmVQYXJhbXMge1xuICBraW5lbWF0aWNzOiB7IHo6IG51bWJlcjsgYWxwaGE6IG51bWJlcjsgYmV0YTogbnVtYmVyOyBnYW1tYTogbnVtYmVyLCBnOjAgfTtcbn1cblxubGV0IHNvY2tldDogU29ja2V0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3JhbmVQYXJhbXMsIHNldENyYW5lUGFyYW1zXSA9IHVzZVN0YXRlPENyYW5lUGFyYW1zPih7XG4gICAga2luZW1hdGljczogeyB6OiAwLCBhbHBoYTogMCwgYmV0YTogMCwgZ2FtbWE6IDAgLCBnOiAwfVxuICB9KTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHo6MCwgYWxwaGE6MCwgYmV0YTowLCBnYW1tYTowLCBnOjAsIHg6IDAsIHk6IDAgfSk7XG5cbiAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSBhc3luYyAobmV3UGFyYW1zOiBDcmFuZVBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2FsY3VsYXRlLWNyYW5lJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3UGFyYW1zKSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvLyBBZGQgdGhpcyBsaW5lIHRvIGxvZyB0aGUgcmVzcG9uc2VcbiAgICBpZiAoZGF0YS5wb3NpdGlvbikge1xuICAgICAgc2V0UG9zaXRpb24oeyAuLi5kYXRhLnBvc2l0aW9uLCB4OiBkYXRhLnBvc2l0aW9uLnggfHwgMCwgeTogZGF0YS5wb3NpdGlvbi55IHx8IDAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBkYXRhLnBvc2l0aW9uIGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICBzZXRQb3NpdGlvbih7IHo6IDAsIGFscGhhOiAwLCBiZXRhOiAwLCBnYW1tYTogMCwgZzogMCwgeDogMCwgeTogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVib3VuY2VkVXBkYXRlUG9zaXRpb24gPSBkZWJvdW5jZSh1cGRhdGVQb3NpdGlvbiwgMzAwKTsgLy8gMzAwIG1zXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBba2V5LCBzdWJLZXldID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHtcbiAgICAgIC4uLmNyYW5lUGFyYW1zLFxuICAgICAgW2tleV06IHtcbiAgICAgICAgLi4uY3JhbmVQYXJhbXNba2V5XSxcbiAgICAgICAgW3N1YktleV06IHBhcnNlRmxvYXQodmFsdWUpXG4gICAgICB9XG4gICAgfTtcbiAgICBzZXRDcmFuZVBhcmFtcyhuZXdQYXJhbXMpO1xuICAgIGRlYm91bmNlZFVwZGF0ZVBvc2l0aW9uKG5ld1BhcmFtcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtcGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPENyYW5lVmlzdWFsaXNhdGlvbiBjcmFuZVBhcmFtcz17Y3JhbmVQYXJhbXN9IHBvc2l0aW9uPXtwb3NpdGlvbn0gLz5cblxuICAgICAgICB7LyogYWRkIGEgdGl0bGUgZm9yIGlucHV0cyAqL31cbiAgICAgICAgPGgyPkNyYW5lIFBhcmFtZXRlcnM8L2gyPlxuXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+TGlmdCBIZWlnaHQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIG5hbWU9XCJraW5lbWF0aWNzLnpcIlxuICAgICAgICAgIHZhbHVlPXtjcmFuZVBhcmFtcy5raW5lbWF0aWNzLnp9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlmdCBIZWlnaHRcIlxuICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIyXCIgc3RlcD1cIjAuMDVcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZWQnIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PlN3aW5nIEFuZ2xlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICBuYW1lPVwia2luZW1hdGljcy5hbHBoYVwiXG4gICAgICAgICAgdmFsdWU9e2NyYW5lUGFyYW1zLmtpbmVtYXRpY3MuYWxwaGF9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3dpbmcgQW5nbGVcIlxuICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIzNjBcIiBzdGVwPVwiMVwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2JsdWUnIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5FbGJvdyBBbmdsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgbmFtZT1cImtpbmVtYXRpY3MuYmV0YVwiXG4gICAgICAgICAgdmFsdWU9e2NyYW5lUGFyYW1zLmtpbmVtYXRpY3MuYmV0YX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbGJvdyBBbmdsZVwiXG4gICAgICAgICAgbWluPVwiMFwiIG1heD1cIjM2MFwiIHN0ZXA9XCIxXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnZ3JlZW4nIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogJ3B1cnBsZScgfX0+V3Jpc3QgQW5nbGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIG5hbWU9XCJraW5lbWF0aWNzLmdhbW1hXCJcbiAgICAgICAgICB2YWx1ZT17Y3JhbmVQYXJhbXMua2luZW1hdGljcy5nYW1tYX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcmlzdCBBbmdsZVwiXG4gICAgICAgICAgbWluPVwiMFwiIG1heD1cIjM2MFwiIHN0ZXA9XCIxXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncHVycGxlJyB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PkdyaXBwZXIgQW5nbGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIG5hbWU9XCJraW5lbWF0aWNzLmdcIlxuICAgICAgICAgIHZhbHVlPXtjcmFuZVBhcmFtcy5raW5lbWF0aWNzLmd9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR3JpcHBlciBXaWR0aFwiXG4gICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ29yYW5nZScgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ3JhbmVWaXN1YWxpc2F0aW9uIiwiZGVib3VuY2UiLCJzb2NrZXQiLCJIb21lIiwiY3JhbmVQYXJhbXMiLCJzZXRDcmFuZVBhcmFtcyIsImtpbmVtYXRpY3MiLCJ6IiwiYWxwaGEiLCJiZXRhIiwiZ2FtbWEiLCJnIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwidXBkYXRlUG9zaXRpb24iLCJuZXdQYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGVib3VuY2VkVXBkYXRlUG9zaXRpb24iLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJzdWJLZXkiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtaW4iLCJtYXgiLCJzdGVwIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/visualiser/index.tsx\n"));

/***/ })

});