"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/product.js":
/*!*******************************!*\
  !*** ./components/product.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            setProductName(response.data.product.name);\n            setOptions(response.data.product.options);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 51\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    options === null || options === void 0 ? void 0 : options.map((color)=>{\n                        var _color_values;\n                        color === null || color === void 0 ? void 0 : (_color_values = color.values) === null || _color_values === void 0 ? void 0 : _color_values.map((value)=>{\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value[0] / value[1]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined);\n                        });\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Mobile Phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"\",\n                        \"data-index\": \"0\",\n                        \"data-forhalf\": \"★\",\n                        className: \"position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(243, 109, 34); font-size: 22px;\",\n                        children: \"★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"\",\n                        \"data-index\": \"1\",\n                        \"data-forhalf\": \"★\",\n                        className: \"position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(243, 109, 34); font-size: 22px;\",\n                        children: \"★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"\",\n                        \"data-index\": \"2\",\n                        \"data-forhalf\": \"★\",\n                        className: \"position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(243, 109, 34); font-size: 22px;\",\n                        children: \"★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"\",\n                        \"data-index\": \"3\",\n                        \"data-forhalf\": \"★\",\n                        className: \"position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(243, 109, 34); font-size: 22px;\",\n                        children: \"★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"react-stars-05756829194278854\",\n                        \"data-index\": \"4\",\n                        \"data-forhalf\": \"★\",\n                        className: \"position: relative; overflow: hidden; cursor: default; display: block; float: left; color: gray; font-size: 22px;\",\n                        children: \"★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Color:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLUE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLACK\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"WHITE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Memory:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"32GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"64GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"256GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"kxVojTEkowueq6zu0RtzOTqPASE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDTDtBQUMyQjtBQUNyRCxNQUFNTSxVQUFVLENBQUNDLFFBQVU7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUN6Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLFlBQVksVUFBWTtZQUM1QixNQUFNQyxXQUFXLE1BQU1ULGlEQUFTLENBQzlCO1lBRUZLLGVBQWVJLFNBQVNFLElBQUksQ0FBQ1QsT0FBTyxDQUFDVSxJQUFJO1lBQ3pDTCxXQUFXRSxTQUFTRSxJQUFJLENBQUNULE9BQU8sQ0FBQ0ksT0FBTztRQUMxQztRQUNBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7O2dDQUNFO2dDQUFvQzs4Q0FBQyw4REFBQ0M7OENBQU1aOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakQsOERBQUNTO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDZixtREFBS0E7NEJBQUNrQixLQUFLaEIsK0RBQVlBOzRCQUFFaUIsT0FBTTs0QkFBTUMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO2tDQUFJaEI7Ozs7OztvQkFDSkUsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTZSxHQUFHLENBQUMsQ0FBQ0MsUUFBVTs0QkFDdkJBO3dCQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxNQUFPQyxNQUFNLGNBQWJELDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRCxJQUFJLENBQUNHLFFBQVU7MENBQzVCLDhEQUFDVDswQ0FBR1MsS0FBSyxDQUFDLEVBQUUsR0FBR0EsS0FBSyxDQUFDLEVBQUU7Ozs7Ozt3QkFDekI7b0JBQ0Y7a0NBQ0EsOERBQUNUO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO3dCQUNDUyxPQUFNO3dCQUNOQyxjQUFXO3dCQUNYQyxnQkFBYTt3QkFDYmIsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDRTt3QkFDQ1MsT0FBTTt3QkFDTkMsY0FBVzt3QkFDWEMsZ0JBQWE7d0JBQ2JiLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0U7d0JBQ0NTLE9BQU07d0JBQ05DLGNBQVc7d0JBQ1hDLGdCQUFhO3dCQUNiYixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNFO3dCQUNDUyxPQUFNO3dCQUNOQyxjQUFXO3dCQUNYQyxnQkFBYTt3QkFDYmIsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDRTt3QkFDQ1MsT0FBTTt3QkFDTkMsY0FBVzt3QkFDWEMsZ0JBQWE7d0JBQ2JiLFdBQVU7a0NBQ1g7Ozs7OztrQ0FJRCw4REFBQ0Q7OzBDQUNDLDhEQUFDRTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDYTtnQ0FBT0osT0FBTTs7Ozs7OzBDQUNkLDhEQUFDSTtnQ0FBT0osT0FBTTs7Ozs7OzBDQUNkLDhEQUFDSTtnQ0FBT0osT0FBTTs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ1g7OzBDQUNDLDhEQUFDRTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDYTtnQ0FBT0osT0FBTTs7Ozs7OzBDQUNkLDhEQUFDSTtnQ0FBT0osT0FBTTs7Ozs7OzBDQUNkLDhEQUFDSTtnQ0FBT0osT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBMUZNdEI7QUE0Rk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0LmpzPzMxYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2R1Y3RJbWFnZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wcm9kdWN0LmpwZ1wiO1xyXG5jb25zdCBwcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCJodHRwczovLzl4b3pwa2luczQuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3Byb2R1Y3RcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcm9kdWN0TmFtZShyZXNwb25zZS5kYXRhLnByb2R1Y3QubmFtZSk7XHJcbiAgICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YS5wcm9kdWN0Lm9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXItMjAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHRleHQtYmFzZSB0ZXh0LVsjNzA3MDcwXVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtcIlNob3AgPiBNb2JpbGUgcGhvbmVzID4gU2Ftc3VuZyA+IFwifSA8c3Bhbj57cHJvZHVjdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMCBwci0wIG1yLTE2XCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0SW1hZ2V9IHdpZHRoPVwiNDUwXCIgaGVpZ2h0PVwiMzcwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOSB3LTk2IG10LTE2XCI+XHJcbiAgICAgICAgPGgxPntwcm9kdWN0TmFtZX08L2gxPlxyXG4gICAgICAgIHtvcHRpb25zPy5tYXAoKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICBjb2xvcj8udmFsdWVzPy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIDxwPnt2YWx1ZVswXSAvIHZhbHVlWzFdfTwvcD47XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8cD5Nb2JpbGUgUGhvbmVzOjwvcD5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3M9XCJcIlxyXG4gICAgICAgICAgZGF0YS1pbmRleD1cIjBcIlxyXG4gICAgICAgICAgZGF0YS1mb3JoYWxmPVwi4piFXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgb3ZlcmZsb3c6IGhpZGRlbjsgY3Vyc29yOiBkZWZhdWx0OyBkaXNwbGF5OiBibG9jazsgZmxvYXQ6IGxlZnQ7IGNvbG9yOiByZ2IoMjQzLCAxMDksIDM0KTsgZm9udC1zaXplOiAyMnB4O1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg4piFXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cIlwiXHJcbiAgICAgICAgICBkYXRhLWluZGV4PVwiMVwiXHJcbiAgICAgICAgICBkYXRhLWZvcmhhbGY9XCLimIVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IGRlZmF1bHQ7IGRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgY29sb3I6IHJnYigyNDMsIDEwOSwgMzQpOyBmb250LXNpemU6IDIycHg7XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDimIVcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICAgIGRhdGEtaW5kZXg9XCIyXCJcclxuICAgICAgICAgIGRhdGEtZm9yaGFsZj1cIuKYhVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47IGN1cnNvcjogZGVmYXVsdDsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyBjb2xvcjogcmdiKDI0MywgMTA5LCAzNCk7IGZvbnQtc2l6ZTogMjJweDtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOKYhVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3M9XCJcIlxyXG4gICAgICAgICAgZGF0YS1pbmRleD1cIjNcIlxyXG4gICAgICAgICAgZGF0YS1mb3JoYWxmPVwi4piFXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgb3ZlcmZsb3c6IGhpZGRlbjsgY3Vyc29yOiBkZWZhdWx0OyBkaXNwbGF5OiBibG9jazsgZmxvYXQ6IGxlZnQ7IGNvbG9yOiByZ2IoMjQzLCAxMDksIDM0KTsgZm9udC1zaXplOiAyMnB4O1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg4piFXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cInJlYWN0LXN0YXJzLTA1NzU2ODI5MTk0Mjc4ODU0XCJcclxuICAgICAgICAgIGRhdGEtaW5kZXg9XCI0XCJcclxuICAgICAgICAgIGRhdGEtZm9yaGFsZj1cIuKYhVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47IGN1cnNvcjogZGVmYXVsdDsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyBjb2xvcjogZ3JheTsgZm9udC1zaXplOiAyMnB4O1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg4piFXHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+Q29sb3I6PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIkJMVUVcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9XCJCTEFDS1wiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIldISVRFXCI+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPk1lbW9yeTo8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiMzJHQlwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIjY0R0JcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9XCIyNTZHQlwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibWFwIiwiY29sb3IiLCJ2YWx1ZXMiLCJ2YWx1ZSIsImNsYXNzIiwiZGF0YS1pbmRleCIsImRhdGEtZm9yaGFsZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});