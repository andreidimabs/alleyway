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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n        };\n        fetchData();\n    }, []);\n    const newVariantsname = variants.map((item)=>item.name);\n    const newVariantsprice = variants.map((item)=>item.price);\n    const updateVariants = ()=>{\n        setVariants(variants);\n    };\n    const handleClick = ()=>{\n        setActive(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-black\",\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-center text-xl\",\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    Object.keys(variants).map((color)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-center text-xl\",\n                            children: variants[color].name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"Mobile phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mt-2.5 font-semibold text-center text-[#f36d22]\",\n                        children: [\n                            \"P\",\n                            variants.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"variants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"COLOR:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"BLUE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"BLACK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        onClick: (e)=>updateVariants(e),\n                                        children: \"WHITE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"MEMORY:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"32GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"64GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"256GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"B0UJaW9Z3sGBQFehTksukIRvrm8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7a0RBQ2hDOzs7Ozs7a0RBR0QsOERBQUNIO3dDQUNDQyxPQUFNO3dDQUNOWCxXQUFVO3dDQUNWWSxTQUFTLENBQUNDLElBQU1oQixlQUFlZ0I7a0RBQ2hDOzs7Ozs7a0RBR0QsOERBQUNIO3dDQUNDQyxPQUFNO3dDQUNOWCxXQUFVO3dDQUNWWSxTQUFTLENBQUNDLElBQU1oQixlQUFlZ0I7a0RBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNkO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUVELFdBQVU7MENBQTZEOzs7Ozs7MENBRzFFLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNVO3dDQUNDQyxPQUFNO3dDQUNOWCxXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNVO3dDQUNDQyxPQUFNO3dDQUNOWCxXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNVO3dDQUNDQyxPQUFNO3dDQUNOWCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXBITXZCO0FBc0hOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC5qcz8zMWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBwcm9kdWN0SW1hZ2UgZnJvbSBcIi4uL3NyYy9pbWFnZXMvcHJvZHVjdC5qcGdcIjtcclxuY29uc3QgcHJvZHVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TmFtZSwgc2V0UHJvZHVjdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2YXJpYW50cywgc2V0VmFyaWFudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly85eG96cGtpbnM0LmV4ZWN1dGUtYXBpLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS9wcm9kdWN0XCJcclxuICAgICAgKTtcclxuICAgICAgc2V0UHJvZHVjdE5hbWUocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm5hbWUpO1xyXG4gICAgICBzZXRPcHRpb25zKHJlc3BvbnNlPy5kYXRhPy5wcm9kdWN0Py5vcHRpb25zKTtcclxuICAgICAgc2V0VmFyaWFudHMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/LnZhcmlhbnRzKTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG5ld1ZhcmlhbnRzbmFtZSA9IHZhcmlhbnRzLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKTtcclxuICBjb25zdCBuZXdWYXJpYW50c3ByaWNlID0gdmFyaWFudHMubWFwKChpdGVtKSA9PiBpdGVtLnByaWNlKTtcclxuICBjb25zdCB1cGRhdGVWYXJpYW50cyA9ICgpID0+IHtcclxuICAgIHNldFZhcmlhbnRzKHZhcmlhbnRzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG1yLTIwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgdGV4dC1bIzcwNzA3MF1cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCJTaG9wID4gTW9iaWxlIHBob25lcyA+IFNhbXN1bmcgPiBcIn17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb2R1Y3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcHItMCBtci0xNlwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdEltYWdlfSB3aWR0aD1cIjQ1MFwiIGhlaWdodD1cIjM3MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgdy05NiBtdC0xNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQteGxcIj57cHJvZHVjdE5hbWV9PC9oMT5cclxuICAgICAgICB7T2JqZWN0LmtleXModmFyaWFudHMpLm1hcCgoY29sb3IpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgIHt2YXJpYW50c1tjb2xvcl0ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMCBtYi0yLjUgdW5kZXJsaW5lIHRleHQtY2VudGVyIHRleHQtWyM3MDcwNzBdXCI+XHJcbiAgICAgICAgICBNb2JpbGUgcGhvbmVzOlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtdC0yLjUgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LVsjZjM2ZDIyXVwiPlxyXG4gICAgICAgICAgUHt2YXJpYW50cy5wcmljZX1cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTAgbWItMi41IHVuZGVybGluZSB0ZXh0LWNlbnRlciB0ZXh0LVsjNzA3MDcwXVwiPlxyXG4gICAgICAgICAgdmFyaWFudHM6XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMCBwci0wIGJvcmRlcjoxcHggc29saWQgIzEyNkI2MDtwYWRkaW5nOjAuOXZ3XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG14LTAgbWItMSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtWyMxMjZCNjBdXCI+XHJcbiAgICAgICAgICAgIENPTE9SOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTFVFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bIzEyNkI2MF0gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQkxVRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiQkxBQ0tcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjZjBmMGYwXSB0ZXh0LVsjMTI2QjYwXVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQkxBQ0tcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIldISVRFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVWYXJpYW50cyhlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdISVRFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgYm9yZGVyOjFweCBzb2xpZCAjMTI2QjYwO3BhZGRpbmc6MC45dndcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXgtMCBtYi0xIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bIzEyNkI2MF1cIj5cclxuICAgICAgICAgICAgTUVNT1JZOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTFVFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bIzEyNkI2MF0gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAzMkdCXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTEFDS1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBtLTEgcC0wIHRleHQteHMgYmctWyNmMGYwZjBdIHRleHQtWyMxMjZCNjBdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDY0R0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIldISVRFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgMjU2R0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImF4aW9zIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdCIsInByb3BzIiwicHJvZHVjdE5hbWUiLCJzZXRQcm9kdWN0TmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidmFyaWFudHMiLCJzZXRWYXJpYW50cyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsIm5hbWUiLCJuZXdWYXJpYW50c25hbWUiLCJtYXAiLCJpdGVtIiwibmV3VmFyaWFudHNwcmljZSIsInByaWNlIiwidXBkYXRlVmFyaWFudHMiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIk9iamVjdCIsImtleXMiLCJjb2xvciIsImJ1dHRvbiIsInZhbHVlIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});