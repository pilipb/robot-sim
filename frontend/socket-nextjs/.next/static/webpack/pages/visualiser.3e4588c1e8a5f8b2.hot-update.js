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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CraneVisualisation */ \"./src/components/CraneVisualisation.tsx\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ \"../../../../../node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nlet socket = null;\nfunction Home() {\n    _s();\n    const [craneParams, setCraneParams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        kinematics: {\n            z: 0,\n            alpha: 0,\n            beta: 0,\n            gamma: 0,\n            g: 0\n        }\n    });\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        z: 0,\n        alpha: 0,\n        beta: 0,\n        gamma: 0,\n        g: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket = new WebSocket(\"ws://localhost:8000/ws/crane\");\n        socket.onopen = ()=>{\n            console.log(\"WebSocket Connected\");\n        };\n        socket.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(\"Backend response:\", data);\n            if (data.position) {\n                setPosition({\n                    ...data.position\n                });\n            } else {\n                setPosition({\n                    z: 0,\n                    alpha: 0,\n                    beta: 0,\n                    gamma: 0,\n                    g: 0\n                });\n            }\n        };\n        socket.onclose = ()=>{\n            console.log(\"WebSocket Disconnected\");\n            socket = null;\n        };\n        return ()=>{\n            socket === null || socket === void 0 ? void 0 : socket.close();\n        };\n    }, []);\n    const debouncedUpdatePosition = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((newParams)=>{\n        socket === null || socket === void 0 ? void 0 : socket.send(JSON.stringify(newParams));\n    }, 100);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        const [key, subKey] = name.split(\".\");\n        const newParams = {\n            ...craneParams,\n            [key]: {\n                ...craneParams[key],\n                [subKey]: parseFloat(value)\n            }\n        };\n        setCraneParams(newParams);\n        debouncedUpdatePosition(newParams);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"full-page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"input-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    craneParams: craneParams,\n                    position: position\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Crane Parameters\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    children: \"Lift Height\"\n                }, void 0, false, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sliders\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            name: \"kinematics.z\",\n                            value: craneParams.kinematics.z,\n                            onChange: handleInputChange,\n                            placeholder: \"Lift Height\",\n                            min: \"0\",\n                            max: \"2\",\n                            step: \"0.05\",\n                            style: {\n                                background: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Swing Angle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            name: \"kinematics.alpha\",\n                            value: craneParams.kinematics.alpha,\n                            onChange: handleInputChange,\n                            placeholder: \"Swing Angle\",\n                            min: \"0\",\n                            max: \"6.2\",\n                            step: \"0.1\",\n                            style: {\n                                background: \"blue\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Elbow Angle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            name: \"kinematics.beta\",\n                            value: craneParams.kinematics.beta,\n                            onChange: handleInputChange,\n                            placeholder: \"Elbow Angle\",\n                            min: \"0\",\n                            max: \"6.2\",\n                            step: \"0.1\",\n                            style: {\n                                background: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Wrist Angle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            name: \"kinematics.gamma\",\n                            value: craneParams.kinematics.gamma,\n                            onChange: handleInputChange,\n                            placeholder: \"Wrist Angle\",\n                            min: \"0\",\n                            max: \"6.2\",\n                            step: \"0.1\",\n                            style: {\n                                background: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Gripper Width\"\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            name: \"kinematics.g\",\n                            value: craneParams.kinematics.g,\n                            onChange: handleInputChange,\n                            placeholder: \"Gripper Width\",\n                            min: \"0\",\n                            max: \"0.2\",\n                            step: \"0.01\",\n                            style: {\n                                background: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"T08hX3NPPSf5o+kRTgvlXnn8pAY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7NEJBQUlDLEtBQUk7NEJBQU1DLE1BQUs7NEJBQ3ZCUixPQUFPO2dDQUFFUyxZQUFZOzRCQUFPOzs7Ozs7c0NBRTlCLDhEQUFDVjs0QkFBTUMsT0FBTztnQ0FBRUMsT0FBTzs0QkFBUTtzQ0FBRzs7Ozs7O3NDQUNsQyw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xkLE1BQUs7NEJBQ0xDLE9BQU81QixZQUFZRSxVQUFVLENBQUNHLElBQUk7NEJBQ2xDcUMsVUFBVWpCOzRCQUNWa0IsYUFBWTs0QkFDWkMsS0FBSTs0QkFBSUMsS0FBSTs0QkFBTUMsTUFBSzs0QkFDdkJSLE9BQU87Z0NBQUVTLFlBQVk7NEJBQVE7Ozs7OztzQ0FFL0IsOERBQUNWOzRCQUFNQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFRO3NDQUFHOzs7Ozs7c0NBQ2xDLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGQsTUFBSzs0QkFDTEMsT0FBTzVCLFlBQVlFLFVBQVUsQ0FBQ0ksS0FBSzs0QkFDbkNvQyxVQUFVakI7NEJBQ1ZrQixhQUFZOzRCQUNaQyxLQUFJOzRCQUFJQyxLQUFJOzRCQUFNQyxNQUFLOzRCQUN2QlIsT0FBTztnQ0FBRVMsWUFBWTs0QkFBUTs7Ozs7O3NDQUUvQiw4REFBQ1Y7NEJBQU1DLE9BQU87Z0NBQUVDLE9BQU87NEJBQVE7c0NBQUc7Ozs7OztzQ0FDbEMsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMZCxNQUFLOzRCQUNMQyxPQUFPNUIsWUFBWUUsVUFBVSxDQUFDSyxDQUFDOzRCQUMvQm1DLFVBQVVqQjs0QkFDVmtCLGFBQVk7NEJBQ1pDLEtBQUk7NEJBQUlDLEtBQUk7NEJBQU1DLE1BQUs7NEJBQ3ZCUixPQUFPO2dDQUFFUyxZQUFZOzRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQWxId0JoRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdmlzdWFsaXNlci9pbmRleC50c3g/M2EwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ3JhbmVWaXN1YWxpc2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NyYW5lVmlzdWFsaXNhdGlvblwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgQ3JhbmVQYXJhbXMge1xuICBraW5lbWF0aWNzOiB7IHo6IG51bWJlcjsgYWxwaGE6IG51bWJlcjsgYmV0YTogbnVtYmVyOyBnYW1tYTogbnVtYmVyLCBnOjAgfTtcbn1cblxubGV0IHNvY2tldDogV2ViU29ja2V0IHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjcmFuZVBhcmFtcywgc2V0Q3JhbmVQYXJhbXNdID0gdXNlU3RhdGU8Q3JhbmVQYXJhbXM+KHtcbiAgICBraW5lbWF0aWNzOiB7IHo6IDAsIGFscGhhOiAwLCBiZXRhOiAwLCBnYW1tYTogMCwgZzogMCB9XG4gIH0pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgejogMCwgYWxwaGE6IDAsIGJldGE6IDAsIGdhbW1hOiAwLCBnOiAwIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODAwMC93cy9jcmFuZScpO1xuXG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgQ29ubmVjdGVkJyk7XG4gICAgfTtcblxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgY29uc29sZS5sb2coXCJCYWNrZW5kIHJlc3BvbnNlOlwiLCBkYXRhKTtcbiAgICAgIGlmIChkYXRhLnBvc2l0aW9uKSB7XG4gICAgICAgIHNldFBvc2l0aW9uKHsgLi4uZGF0YS5wb3NpdGlvbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBvc2l0aW9uKHsgejogMCwgYWxwaGE6IDAsIGJldGE6IDAsIGdhbW1hOiAwLCBnOiAwIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgRGlzY29ubmVjdGVkJyk7XG4gICAgICBzb2NrZXQgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Py5jbG9zZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBkZWJvdW5jZWRVcGRhdGVQb3NpdGlvbiA9IGRlYm91bmNlKChuZXdQYXJhbXM6IENyYW5lUGFyYW1zKSA9PiB7XG4gICAgc29ja2V0Py5zZW5kKEpTT04uc3RyaW5naWZ5KG5ld1BhcmFtcykpO1xuICB9LCAxMDApO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgW2tleSwgc3ViS2V5XSA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSB7XG4gICAgICAuLi5jcmFuZVBhcmFtcyxcbiAgICAgIFtrZXldOiB7XG4gICAgICAgIC4uLmNyYW5lUGFyYW1zW2tleV0sXG4gICAgICAgIFtzdWJLZXldOiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgfVxuICAgIH07XG4gICAgc2V0Q3JhbmVQYXJhbXMobmV3UGFyYW1zKTtcbiAgICBkZWJvdW5jZWRVcGRhdGVQb3NpdGlvbihuZXdQYXJhbXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXBhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxDcmFuZVZpc3VhbGlzYXRpb24gY3JhbmVQYXJhbXM9e2NyYW5lUGFyYW1zfSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG5cbiAgICAgICAgey8qIGFkZCBhIHRpdGxlIGZvciBpbnB1dHMgKi99XG4gICAgICAgIDxoMj5DcmFuZSBQYXJhbWV0ZXJzPC9oMj5cblxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+TGlmdCBIZWlnaHQ8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnNcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBuYW1lPVwia2luZW1hdGljcy56XCJcbiAgICAgICAgICAgIHZhbHVlPXtjcmFuZVBhcmFtcy5raW5lbWF0aWNzLnp9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpZnQgSGVpZ2h0XCJcbiAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIyXCIgc3RlcD1cIjAuMDVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlN3aW5nIEFuZ2xlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBuYW1lPVwia2luZW1hdGljcy5hbHBoYVwiXG4gICAgICAgICAgICB2YWx1ZT17Y3JhbmVQYXJhbXMua2luZW1hdGljcy5hbHBoYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3dpbmcgQW5nbGVcIlxuICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjYuMlwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2JsdWUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RWxib3cgQW5nbGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIG5hbWU9XCJraW5lbWF0aWNzLmJldGFcIlxuICAgICAgICAgICAgdmFsdWU9e2NyYW5lUGFyYW1zLmtpbmVtYXRpY3MuYmV0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWxib3cgQW5nbGVcIlxuICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjYuMlwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PldyaXN0IEFuZ2xlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBuYW1lPVwia2luZW1hdGljcy5nYW1tYVwiXG4gICAgICAgICAgICB2YWx1ZT17Y3JhbmVQYXJhbXMua2luZW1hdGljcy5nYW1tYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3Jpc3QgQW5nbGVcIlxuICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjYuMlwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkdyaXBwZXIgV2lkdGg8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIG5hbWU9XCJraW5lbWF0aWNzLmdcIlxuICAgICAgICAgICAgdmFsdWU9e2NyYW5lUGFyYW1zLmtpbmVtYXRpY3MuZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR3JpcHBlciBXaWR0aFwiXG4gICAgICAgICAgICBtaW49XCIwXCIgbWF4PVwiMC4yXCIgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyYW5lVmlzdWFsaXNhdGlvbiIsImRlYm91bmNlIiwic29ja2V0IiwiSG9tZSIsImNyYW5lUGFyYW1zIiwic2V0Q3JhbmVQYXJhbXMiLCJraW5lbWF0aWNzIiwieiIsImFscGhhIiwiYmV0YSIsImdhbW1hIiwiZyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImNsb3NlIiwiZGVib3VuY2VkVXBkYXRlUG9zaXRpb24iLCJuZXdQYXJhbXMiLCJzZW5kIiwic3RyaW5naWZ5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Iiwic3ViS2V5Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsYWJlbCIsInN0eWxlIiwiY29sb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWluIiwibWF4Iiwic3RlcCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/visualiser/index.tsx\n"));

/***/ })

});