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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            console.log(variants);\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n        };\n        fetchData();\n    }, []);\n    const updateVariants = ()=>{\n        setVariants(variants);\n    };\n    const handleClick = ()=>{\n        setActive(active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-black\",\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-center text-xl\",\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    variants === null || variants === void 0 ? void 0 : variants.map((color)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-center text-xl\",\n                            children: color.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"Mobile phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    variants === null || variants === void 0 ? void 0 : variants.map((color)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl mt-2.5 font-semibold text-center text-[#f36d22]\",\n                            children: [\n                                \"P\",\n                                color.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"COLOR:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"BLUE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs text-[#126B60]\",\n                                        style: {\n                                            backgroundColor: active ? \"gray\" : \"white\"\n                                        },\n                                        onClick: handleClick(),\n                                        children: \"BLACK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"WHITE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"MEMORY:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"32GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"64GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"256GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"B0UJaW9Z3sGBQFehTksukIRvrm8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNoQjtrREFDVjs7Ozs7O2tEQUdELDhEQUFDWTt3Q0FDQ0MsT0FBTTt3Q0FDTlgsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtMLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUE2RDs7Ozs7OzBDQUcxRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDVTt3Q0FDQ0MsT0FBTTt3Q0FDTlgsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDVTt3Q0FDQ0MsT0FBTTt3Q0FDTlgsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDVTt3Q0FDQ0MsT0FBTTt3Q0FDTlgsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0E3R01wQjtBQStHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2R1Y3QuanM/MzFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcHJvZHVjdEltYWdlIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3Byb2R1Y3QuanBnXCI7XHJcbmNvbnN0IHByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdE5hbWUsIHNldFByb2R1Y3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdmFyaWFudHMsIHNldFZhcmlhbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJmYWxzZVwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8vOXhvenBraW5zNC5leGVjdXRlLWFwaS5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvcHJvZHVjdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnRzKTtcclxuICAgICAgc2V0UHJvZHVjdE5hbWUocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm5hbWUpO1xyXG4gICAgICBzZXRPcHRpb25zKHJlc3BvbnNlPy5kYXRhPy5wcm9kdWN0Py5vcHRpb25zKTtcclxuICAgICAgc2V0VmFyaWFudHMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/LnZhcmlhbnRzKTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgdXBkYXRlVmFyaWFudHMgPSAoKSA9PiB7XHJcbiAgICBzZXRWYXJpYW50cyh2YXJpYW50cyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZShhY3RpdmUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXItMjAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHRleHQtYmFzZSB0ZXh0LVsjNzA3MDcwXVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtcIlNob3AgPiBNb2JpbGUgcGhvbmVzID4gU2Ftc3VuZyA+IFwifXtcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2tcIj57cHJvZHVjdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMCBwci0wIG1yLTE2XCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0SW1hZ2V9IHdpZHRoPVwiNDUwXCIgaGVpZ2h0PVwiMzcwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOSB3LTk2IG10LTE2XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC14bFwiPntwcm9kdWN0TmFtZX08L2gxPlxyXG4gICAgICAgIHt2YXJpYW50cz8ubWFwKChjb2xvcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+e2NvbG9yLm5hbWV9PC9wPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMCBtYi0yLjUgdW5kZXJsaW5lIHRleHQtY2VudGVyIHRleHQtWyM3MDcwNzBdXCI+XHJcbiAgICAgICAgICBNb2JpbGUgcGhvbmVzOlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB7dmFyaWFudHM/Lm1hcCgoY29sb3IpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbXQtMi41IGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bI2YzNmQyMl1cIj5cclxuICAgICAgICAgICAgICBQe2NvbG9yLnByaWNlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMCBwci0wIGJvcmRlcjoxcHggc29saWQgIzEyNkI2MDtwYWRkaW5nOjAuOXZ3XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG14LTAgbWItMSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtWyMxMjZCNjBdXCI+XHJcbiAgICAgICAgICAgIENPTE9SOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTFVFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bIzEyNkI2MF0gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCTFVFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTEFDS1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBtLTEgcC0wIHRleHQteHMgIHRleHQtWyMxMjZCNjBdXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZSA/IFwiZ3JheVwiIDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJMQUNLXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJXSElURVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBtLTEgcC0wIHRleHQteHMgYmctWyNmMGYwZjBdIHRleHQtWyMxMjZCNjBdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdISVRFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgYm9yZGVyOjFweCBzb2xpZCAjMTI2QjYwO3BhZGRpbmc6MC45dndcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXgtMCBtYi0xIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bIzEyNkI2MF1cIj5cclxuICAgICAgICAgICAgTUVNT1JZOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTFVFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bIzEyNkI2MF0gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAzMkdCXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJCTEFDS1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBtLTEgcC0wIHRleHQteHMgYmctWyNmMGYwZjBdIHRleHQtWyMxMjZCNjBdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDY0R0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIldISVRFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgMjU2R0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImF4aW9zIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdCIsInByb3BzIiwicHJvZHVjdE5hbWUiLCJzZXRQcm9kdWN0TmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidmFyaWFudHMiLCJzZXRWYXJpYW50cyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwidXBkYXRlVmFyaWFudHMiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm1hcCIsImNvbG9yIiwicHJpY2UiLCJidXR0b24iLCJ2YWx1ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});