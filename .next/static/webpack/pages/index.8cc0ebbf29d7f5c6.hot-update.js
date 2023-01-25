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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            console.log(variants);\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n        };\n        fetchData();\n    }, []);\n    const updateVariants = ()=>{\n        setVariants(variants);\n    };\n    const handleClick = ()=>{\n        setActive(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-black\",\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-center text-xl\",\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    variants === null || variants === void 0 ? void 0 : variants.map((color)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-center text-xl\",\n                            children: color.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-0 mb-2.5 underline text-center text-[#707070]\",\n                        children: \"Mobile phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    Object.keys(variants).map((color)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl mt-2.5 font-semibold text-center text-[#f36d22]\",\n                            children: [\n                                \"P\",\n                                variants[color].price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"COLOR:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"BLUE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"BLACK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"WHITE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 border:1px solid #126B60;padding:0.9vw\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]\",\n                                children: \"MEMORY:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLUE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#126B60] text-white\",\n                                        children: \"32GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"BLACK\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"64GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        value: \"WHITE\",\n                                        className: \"w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]\",\n                                        children: \"256GB\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"B0UJaW9Z3sGBQFehTksukIRvrm8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtMLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUE2RDs7Ozs7OzBDQUcxRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FDQ0MsT0FBTTt3Q0FDTmIsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDWTt3Q0FDQ0MsT0FBTTt3Q0FDTmIsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDWTt3Q0FDQ0MsT0FBTTt3Q0FDTmIsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0EzR01wQjtBQTZHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2R1Y3QuanM/MzFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcHJvZHVjdEltYWdlIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3Byb2R1Y3QuanBnXCI7XHJcbmNvbnN0IHByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdE5hbWUsIHNldFByb2R1Y3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdmFyaWFudHMsIHNldFZhcmlhbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJmYWxzZVwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8vOXhvenBraW5zNC5leGVjdXRlLWFwaS5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvcHJvZHVjdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnRzKTtcclxuICAgICAgc2V0UHJvZHVjdE5hbWUocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm5hbWUpO1xyXG4gICAgICBzZXRPcHRpb25zKHJlc3BvbnNlPy5kYXRhPy5wcm9kdWN0Py5vcHRpb25zKTtcclxuICAgICAgc2V0VmFyaWFudHMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/LnZhcmlhbnRzKTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgdXBkYXRlVmFyaWFudHMgPSAoKSA9PiB7XHJcbiAgICBzZXRWYXJpYW50cyh2YXJpYW50cyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG1yLTIwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgdGV4dC1bIzcwNzA3MF1cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCJTaG9wID4gTW9iaWxlIHBob25lcyA+IFNhbXN1bmcgPiBcIn17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb2R1Y3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcHItMCBtci0xNlwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdEltYWdlfSB3aWR0aD1cIjQ1MFwiIGhlaWdodD1cIjM3MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgdy05NiBtdC0xNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQteGxcIj57cHJvZHVjdE5hbWV9PC9oMT5cclxuICAgICAgICB7dmFyaWFudHM/Lm1hcCgoY29sb3IpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC14bFwiPntjb2xvci5uYW1lfTwvcD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTAgbWItMi41IHVuZGVybGluZSB0ZXh0LWNlbnRlciB0ZXh0LVsjNzA3MDcwXVwiPlxyXG4gICAgICAgICAgTW9iaWxlIHBob25lczpcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHZhcmlhbnRzKS5tYXAoKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTIuNSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtWyNmMzZkMjJdXCI+XHJcbiAgICAgICAgICAgICAgUHt2YXJpYW50c1tjb2xvcl0ucHJpY2V9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgYm9yZGVyOjFweCBzb2xpZCAjMTI2QjYwO3BhZGRpbmc6MC45dndcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXgtMCBtYi0xIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bIzEyNkI2MF1cIj5cclxuICAgICAgICAgICAgQ09MT1I6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMVUVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjMTI2QjYwXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJMVUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMQUNLXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQkxBQ0tcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIldISVRFXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV0hJVEVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcHItMCBib3JkZXI6MXB4IHNvbGlkICMxMjZCNjA7cGFkZGluZzowLjl2d1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteC0wIG1iLTEgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LVsjMTI2QjYwXVwiPlxyXG4gICAgICAgICAgICBNRU1PUlk6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMVUVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjMTI2QjYwXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDMyR0JcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB2YWx1ZT1cIkJMQUNLXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4IG0tMSBwLTAgdGV4dC14cyBiZy1bI2YwZjBmMF0gdGV4dC1bIzEyNkI2MF1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgNjRHQlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiV0hJVEVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjggbS0xIHAtMCB0ZXh0LXhzIGJnLVsjZjBmMGYwXSB0ZXh0LVsjMTI2QjYwXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAyNTZHQlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ2YXJpYW50cyIsInNldFZhcmlhbnRzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJ1cGRhdGVWYXJpYW50cyIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibWFwIiwiY29sb3IiLCJPYmplY3QiLCJrZXlzIiwicHJpY2UiLCJidXR0b24iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});