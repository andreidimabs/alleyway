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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variantName, setVariantName] = react__WEBPACK_IMPORTED_MODULE_1__.useState[\"\"];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2, _response_data3, _response_data_product3, _response_data_product_variants;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            console.log(variants);\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n            setVariantName(response === null || response === void 0 ? void 0 : (_response_data3 = response.data) === null || _response_data3 === void 0 ? void 0 : (_response_data_product3 = _response_data3.product) === null || _response_data_product3 === void 0 ? void 0 : (_response_data_product_variants = _response_data_product3.variants) === null || _response_data_product_variants === void 0 ? void 0 : _response_data_product_variants.name);\n        };\n        fetchData();\n    }, []);\n    const updateVariants = ()=>{\n        setVariants(variants);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 51\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: variants === null || variants === void 0 ? void 0 : variants.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Mobile Phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"P\",\n                            setVariantName(name)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Color:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLUE\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"BLUE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLACK\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"BLACK\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"WHITE\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"WHITE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Memory:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"32GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"64GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"256GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"2g1sMfwh2D6aiGFB8oVSziLm/X4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs7Ozs7OzBDQUNkLDhEQUFDRDtnQ0FBT0MsT0FBTTs7Ozs7OzBDQUNkLDhEQUFDRDtnQ0FBT0MsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBOURNM0I7QUFnRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0LmpzPzMxYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2R1Y3RJbWFnZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wcm9kdWN0LmpwZ1wiO1xyXG5jb25zdCBwcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZhcmlhbnRzLCBzZXRWYXJpYW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZhcmlhbnROYW1lLCBzZXRWYXJpYW50TmFtZV0gPSB1c2VTdGF0ZVtcIlwiXTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8vOXhvenBraW5zNC5leGVjdXRlLWFwaS5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvcHJvZHVjdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnRzKTtcclxuICAgICAgc2V0UHJvZHVjdE5hbWUocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm5hbWUpO1xyXG4gICAgICBzZXRPcHRpb25zKHJlc3BvbnNlPy5kYXRhPy5wcm9kdWN0Py5vcHRpb25zKTtcclxuICAgICAgc2V0VmFyaWFudHMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/LnZhcmlhbnRzKTtcclxuICAgICAgc2V0VmFyaWFudE5hbWUocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/LnZhcmlhbnRzPy5uYW1lKTtcclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgdXBkYXRlVmFyaWFudHMgPSAoKSA9PiB7XHJcbiAgICBzZXRWYXJpYW50cyh2YXJpYW50cyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBtci0yMCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1iYXNlIHRleHQtWyM3MDcwNzBdXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge1wiU2hvcCA+IE1vYmlsZSBwaG9uZXMgPiBTYW1zdW5nID4gXCJ9IDxzcGFuPntwcm9kdWN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgbXItMTZcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3RJbWFnZX0gd2lkdGg9XCI0NTBcIiBoZWlnaHQ9XCIzNzBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IHctOTYgbXQtMTZcIj5cclxuICAgICAgICA8aDE+e3Byb2R1Y3ROYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+e3ZhcmlhbnRzPy5uYW1lfTwvcD5cclxuICAgICAgICB7Lyoge29wdGlvbnNbMF0/LnZhbHVlcy5tYXAoKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICA8cD57Y29sb3J9PC9wPjtcclxuICAgICAgICB9KX0gKi99XHJcbiAgICAgICAgPHA+TW9iaWxlIFBob25lczo8L3A+XHJcbiAgICAgICAgPHA+UHtzZXRWYXJpYW50TmFtZShuYW1lKX08L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPkNvbG9yOjwvcD5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9XCJCTFVFXCIgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfT5cclxuICAgICAgICAgICAgQkxVRVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiQkxBQ0tcIiBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlVmFyaWFudHMoZSl9PlxyXG4gICAgICAgICAgICBCTEFDS1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiV0hJVEVcIiBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlVmFyaWFudHMoZSl9PlxyXG4gICAgICAgICAgICBXSElURVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPk1lbW9yeTo8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiMzJHQlwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIjY0R0JcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9XCIyNTZHQlwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ2YXJpYW50cyIsInNldFZhcmlhbnRzIiwidmFyaWFudE5hbWUiLCJzZXRWYXJpYW50TmFtZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwidXBkYXRlVmFyaWFudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJidXR0b24iLCJ2YWx1ZSIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});