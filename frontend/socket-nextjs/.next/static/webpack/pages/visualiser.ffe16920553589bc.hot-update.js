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

/***/ "./src/pages/visualiser/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/visualiser/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/.pnpm/socket.io-client@4.7.5/node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CraneVisualisation */ \"./src/components/CraneVisualisation.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nlet socket;\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initialize();\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    async function initialize() {\n        await fetch(\"/api/socket\");\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        socket.on(\"receive-message\", (data)=>{\n            setMessages((messages)=>[\n                    ...messages,\n                    data\n                ]);\n        });\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        socket.emit(\"send-message\", {\n            name,\n            message\n        });\n        setMessage(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CraneVisualisation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter your name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter your message\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: messages.map((msg, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: msg.name\n                            }, void 0, false, {\n                                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            \" : \",\n                            msg.message\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/philblecher/Desktop/Github/robot-sim/frontend/socket-nextjs/src/pages/visualiser/index.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"vIWxcvsvbtY1fRXIox6YCY/yqAw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdmlzdWFsaXNlci9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1Y7QUFDbUM7QUFDckUsSUFBSUk7QUFFVyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUlk7UUFFQSxPQUFPO1lBQ0xSLE9BQU9TLFVBQVU7UUFDbkI7SUFDRixHQUFHLEVBQUU7SUFFTCxlQUFlRDtRQUNiLE1BQU1FLE1BQU07UUFDWlYsU0FBU0YsNERBQUVBO1FBRVhFLE9BQU9XLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQ0M7WUFDNUJMLFlBQVksQ0FBQ0QsV0FBYTt1QkFBSUE7b0JBQVVNO2lCQUFLO1FBQy9DO0lBQ0Y7SUFFQSxTQUFTQyxhQUFhQyxDQUFDO1FBQ3JCQSxFQUFFQyxjQUFjO1FBQ2hCZixPQUFPZ0IsSUFBSSxDQUFDLGdCQUFnQjtZQUFFZDtZQUFNRTtRQUFRO1FBQzVDQyxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1k7OzBCQUNDLDhEQUFDbEIsc0VBQWtCQTs7Ozs7MEJBRW5CLDhEQUFDbUI7Z0JBQUtDLFVBQVVOOztrQ0FDZCw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9yQjt3QkFDUHNCLFVBQVUsQ0FBQ1YsSUFBTVgsUUFBUVcsRUFBRVcsTUFBTSxDQUFDRixLQUFLO3dCQUN2Q0csUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNQO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPbkI7d0JBQ1BvQixVQUFVLENBQUNWLElBQU1ULFdBQVdTLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDMUNHLFFBQVE7Ozs7OztrQ0FFViw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDQzt3QkFBT1AsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1E7Ozs7OzBCQUVELDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDRXpCLFNBQVMwQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msa0JBQ2xCLDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFRSCxJQUFJL0IsSUFBSTs7Ozs7OzRCQUFVOzRCQUFJK0IsSUFBSTdCLE9BQU87O3VCQURuQzhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBL0R3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy92aXN1YWxpc2VyL2luZGV4LmpzeD9jN2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IENyYW5lVmlzdWFsaXNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmFuZVZpc3VhbGlzYXRpb25cIjtcbmxldCBzb2NrZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0aWFsaXplKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGF3YWl0IGZldGNoKFwiL2FwaS9zb2NrZXRcIik7XG4gICAgc29ja2V0ID0gaW8oKTtcblxuICAgIHNvY2tldC5vbihcInJlY2VpdmUtbWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbLi4ubWVzc2FnZXMsIGRhdGFdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5lbWl0KFwic2VuZC1tZXNzYWdlXCIsIHsgbmFtZSwgbWVzc2FnZSB9KTtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENyYW5lVmlzdWFsaXNhdGlvbiAvPlxuICAgICAgXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxociAvPlxuXG4gICAgICA8aDI+TWVzc2FnZXM8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxzdHJvbmc+e21zZy5uYW1lfTwvc3Ryb25nPiA6IHttc2cubWVzc2FnZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiQ3JhbmVWaXN1YWxpc2F0aW9uIiwic29ja2V0IiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaW5pdGlhbGl6ZSIsImRpc2Nvbm5lY3QiLCJmZXRjaCIsIm9uIiwiZGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJyIiwiYnV0dG9uIiwiaHIiLCJoMiIsInVsIiwibWFwIiwibXNnIiwiaSIsImxpIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/visualiser/index.jsx\n"));

/***/ })

});