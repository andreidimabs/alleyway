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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n        };\n        fetchData();\n    }, []);\n    const updateVariants = ()=>{\n        const newVariant = variants.map((item)=>item);\n        setVariants(variants);\n    };\n    const handleClick = ()=>{\n        setActive(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-black\",\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-center text-xl\",\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: newVariantsname\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"Mobile phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mt-2.5 font-semibold text-center text-[#f36d22]\",\n                        children: [\n                            \"P\",\n                            variants.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"variants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"COLOR:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"BLUE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"BLACK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"WHITE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"MEMORY:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"32GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"64GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"256GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"B0UJaW9Z3sGBQFehTksukIRvrm8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztrQ0FLTCw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBRUQsV0FBVTswQ0FBNkQ7Ozs7OzswQ0FHMUUsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1M7d0NBQ0NDLE9BQU07d0NBQ05WLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ1M7d0NBQ0NDLE9BQU07d0NBQ05WLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ1M7d0NBQ0NDLE9BQU07d0NBQ05WLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBcEhNckI7QUFzSE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0LmpzPzMxYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2R1Y3RJbWFnZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wcm9kdWN0LmpwZ1wiO1xyXG5jb25zdCBwcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZhcmlhbnRzLCBzZXRWYXJpYW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCJodHRwczovLzl4b3pwa2luczQuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3Byb2R1Y3RcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcm9kdWN0TmFtZShyZXNwb25zZT8uZGF0YT8ucHJvZHVjdD8ubmFtZSk7XHJcbiAgICAgIHNldE9wdGlvbnMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm9wdGlvbnMpO1xyXG4gICAgICBzZXRWYXJpYW50cyhyZXNwb25zZT8uZGF0YT8ucHJvZHVjdD8udmFyaWFudHMpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFyaWFudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdWYXJpYW50ID0gdmFyaWFudHMubWFwKChpdGVtKSA9PiBpdGVtKTtcclxuICAgIHNldFZhcmlhbnRzKHZhcmlhbnRzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG1yLTIwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgdGV4dC1bIzcwNzA3MF1cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCJTaG9wID4gTW9iaWxlIHBob25lcyA+IFNhbXN1bmcgPiBcIn17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb2R1Y3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcHItMCBtci0xNlwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdEltYWdlfSB3aWR0aD1cIjQ1MFwiIGhlaWdodD1cIjM3MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgdy05NiBtdC0xNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQteGxcIj57cHJvZHVjdE5hbWV9PC9oMT5cclxuICAgICAgICB7Lyoge09iamVjdC5rZXlzKHZhcmlhbnRzKS5tYXAoKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQteGxcIj5cclxuICAgICAgICAgICAgICB7dmFyaWFudHNbY29sb3JdLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9ICovfVxyXG4gICAgICAgIDxwPntuZXdWYXJpYW50c25hbWV9PC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0wIG1iLTIuNSB1bmRlcmxpbmUgdGV4dC1jZW50ZXIgdGV4dC1bIzcwNzA3MF1cIj5cclxuICAgICAgICAgIE1vYmlsZSBwaG9uZXM6XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTIuNSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtWyNmMzZkMjJdXCI+XHJcbiAgICAgICAgICBQe3ZhcmlhbnRzLnByaWNlfVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMCBtYi0yLjUgdW5kZXJsaW5lIHRleHQtY2VudGVyIHRleHQtWyM3MDcwNzBdXCI+XHJcbiAgICAgICAgICB2YXJpYW50czpcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgYm9yZGVyOjFweCBzb2xpZCAjMTI2QjYwO3BhZGRpbmc6MC45dndcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXgtMCBtYi0xIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bIzEyNkI2MF1cIj5cclxuICAgICAgICAgICAgQ09MT1I6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMVUVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjMTI2QjYwXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlVmFyaWFudHMoZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCTFVFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTEFDS1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBtLTEgcC0wIHRleHQteHMgYmctWyNmMGYwZjBdIHRleHQtWyMxMjZCNjBdXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlVmFyaWFudHMoZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCTEFDS1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiV0hJVEVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjZjBmMGYwXSB0ZXh0LVsjMTI2QjYwXVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV0hJVEVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcHItMCBib3JkZXI6MXB4IHNvbGlkICMxMjZCNjA7cGFkZGluZzowLjl2d1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteC0wIG1iLTEgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LVsjMTI2QjYwXVwiPlxyXG4gICAgICAgICAgICBNRU1PUlk6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMVUVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjMTI2QjYwXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDMyR0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMQUNLXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgNjRHQlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiV0hJVEVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjZjBmMGYwXSB0ZXh0LVsjMTI2QjYwXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAyNTZHQlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ2YXJpYW50cyIsInNldFZhcmlhbnRzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwibmFtZSIsInVwZGF0ZVZhcmlhbnRzIiwibmV3VmFyaWFudCIsIm1hcCIsIml0ZW0iLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm5ld1ZhcmlhbnRzbmFtZSIsInByaWNlIiwiYnV0dG9uIiwidmFsdWUiLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});