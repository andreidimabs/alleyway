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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/product.jpg */ \"./src/images/product.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst product = (props)=>{\n    var _options_;\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variants, setVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _response_data, _response_data_product, _response_data1, _response_data_product1, _response_data2, _response_data_product2;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product\");\n            setProductName(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_product = _response_data.product) === null || _response_data_product === void 0 ? void 0 : _response_data_product.name);\n            setOptions(response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_product1 = _response_data1.product) === null || _response_data_product1 === void 0 ? void 0 : _response_data_product1.options);\n            setVariants(response === null || response === void 0 ? void 0 : (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_product2 = _response_data2.product) === null || _response_data_product2 === void 0 ? void 0 : _response_data_product2.variants);\n        };\n        fetchData();\n    }, []);\n    const updateVariants = ()=>{\n        setOptions(options);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mr-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 text-base text-[#707070]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Shop > Mobile phones > Samsung > \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: productName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 51\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-0 pr-0 mr-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _src_images_product_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: \"450\",\n                            height: \"370\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-9 w-96 mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: productName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    (_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.values.map((color)=>{\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            value: color,\n                            children: color\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Mobile Phones:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Color:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLUE\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"BLUE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"BLACK\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"BLACK\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"WHITE\",\n                                onClick: (e)=>updateVariants(e),\n                                children: \"WHITE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Memory:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"32GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"64GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                value: \"256GB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ina\\\\Documents\\\\alleyway\\\\components\\\\product.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(product, \"2g1sMfwh2D6aiGFB8oVSziLm/X4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2R1Y3RJbWFnZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wcm9kdWN0LmpwZ1wiO1xyXG5jb25zdCBwcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ZhcmlhbnRzLCBzZXRWYXJpYW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCJodHRwczovLzl4b3pwa2luczQuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3Byb2R1Y3RcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcm9kdWN0TmFtZShyZXNwb25zZT8uZGF0YT8ucHJvZHVjdD8ubmFtZSk7XHJcbiAgICAgIHNldE9wdGlvbnMocmVzcG9uc2U/LmRhdGE/LnByb2R1Y3Q/Lm9wdGlvbnMpO1xyXG4gICAgICBzZXRWYXJpYW50cyhyZXNwb25zZT8uZGF0YT8ucHJvZHVjdD8udmFyaWFudHMpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB1cGRhdGVWYXJpYW50cyA9ICgpID0+IHtcclxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBtci0yMCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1iYXNlIHRleHQtWyM3MDcwNzBdXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge1wiU2hvcCA+IE1vYmlsZSBwaG9uZXMgPiBTYW1zdW5nID4gXCJ9IDxzcGFuPntwcm9kdWN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0wIHByLTAgbXItMTZcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3RJbWFnZX0gd2lkdGg9XCI0NTBcIiBoZWlnaHQ9XCIzNzBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IHctOTYgbXQtMTZcIj5cclxuICAgICAgICA8aDE+e3Byb2R1Y3ROYW1lfTwvaDE+XHJcbiAgICAgICAge29wdGlvbnNbMF0/LnZhbHVlcy5tYXAoKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICA8cCB2YWx1ZT17Y29sb3J9Pntjb2xvcn08L3A+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxwPk1vYmlsZSBQaG9uZXM6PC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5Db2xvcjo8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiQkxVRVwiIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVWYXJpYW50cyhlKX0+XHJcbiAgICAgICAgICAgIEJMVUVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIkJMQUNLXCIgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfT5cclxuICAgICAgICAgICAgQkxBQ0tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIldISVRFXCIgb25DbGljaz17KGUpID0+IHVwZGF0ZVZhcmlhbnRzKGUpfT5cclxuICAgICAgICAgICAgV0hJVEVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5NZW1vcnk6PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIjMyR0JcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9XCI2NEdCXCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiMjU2R0JcIj48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImF4aW9zIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdCIsInByb3BzIiwib3B0aW9ucyIsInByb2R1Y3ROYW1lIiwic2V0UHJvZHVjdE5hbWUiLCJzZXRPcHRpb25zIiwidmFyaWFudHMiLCJzZXRWYXJpYW50cyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsIm5hbWUiLCJ1cGRhdGVWYXJpYW50cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInZhbHVlcyIsIm1hcCIsImNvbG9yIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product.js\n"));

/***/ })

});