"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./app/auth/login/page.jsx":
/*!*********************************!*\
  !*** ./app/auth/login/page.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_utils_withAuthRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/withAuthRedirect */ \"(app-pages-browser)/./app/utils/withAuthRedirect.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-pages-browser)/./hooks/use-toast.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SignupPage() {\n    _s();\n    const baseurl = \"http://localhost:4000\";\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [password, setpassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [error, SetError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handelSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post('/api/login', {\n                email,\n                password\n            }, {\n                withCredentials: true\n            } // This includes credentials (cookies) with the request\n            );\n            if (response.status >= 200 && response.status < 300) {\n                toast({\n                    title: \"Welcome Back..\"\n                });\n                router.push(\"/feed\"); // Redirect to the feed page\n            } else {\n                // In case of unexpected status codes (not in 2xx range)\n                alert(\"Unexpected response: \".concat(response.status));\n            }\n        } catch (error) {\n            // Improved error handling\n            if (error.response) {\n                // If the error comes from the server, we access error.response data\n                SetError(error.response.data.message || \"Something went wrong with the response.\");\n                console.log(\"Error response:\", error.response);\n                toast({\n                    title: error.response.data.message\n                });\n            } else if (error.request) {\n                // If no response is received from the server\n                SetError(\"No response received from server.\");\n                console.log(\"Error request:\", error.request);\n            } else {\n                // If there's an issue setting up the request\n                SetError(error.message || \"An unexpected error occurred.\");\n                console.log(\"Error:\", error.message);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex items-center justify-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"signup-box\",\n            className: \"w-80 px-4 py-7   md:w-[40%] md:py-10 border rounded-xl \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-semibold font-mono md:text-4xl  text-center\",\n                    children: \"Welcome back\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-7 flex flex-col  md:flex-row md:mt-28 md:gap-28  items-center gap-4\",\n                    onSubmit: handelSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center md:text-2xl font-semibold w-full font-mono gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" md:w-[80%] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Enter Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        className: \"px-3\",\n                                        placeholder: \"user@gmail.com \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" md:w-[80%] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Enter Password\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                        type: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setpassword(e.target.value),\n                                        className: \"px-3\",\n                                        placeholder: \"......\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                className: \" md:w-[50%] \",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\development\\\\06\\\\frontend\\\\app\\\\auth\\\\login\\\\page.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupPage, \"B4eTRqrONP8htUn2Rz2s9QMw+i4=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignupPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c1 = (0,_app_utils_withAuthRedirect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SignupPage));\nvar _c, _c1;\n$RefreshReg$(_c, \"SignupPage\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2xvZ2luL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNGO0FBQ25CO0FBQ2tCO0FBQ0w7QUFDcUI7QUFDZjtBQUU3QyxTQUFTUTs7SUFDUCxNQUFNQyxVQUFRO0lBRWQsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsMERBQVFBO0lBQzFCLE1BQU0sQ0FBQ0ksT0FBTUMsU0FBUyxHQUFDUCwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFNLENBQUNRLFVBQVNDLFlBQVksR0FBQ1QsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDVSxPQUFNQyxTQUFTLEdBQUNYLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU1ZLFNBQU9kLDBEQUFTQTtJQUN0QixNQUFNZSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1uQiw2Q0FBS0EsQ0FBQ29CLElBQUksQ0FDN0IsY0FDQTtnQkFBRVg7Z0JBQU9FO1lBQVMsR0FDbEI7Z0JBQUVVLGlCQUFpQjtZQUFLLEVBQUUsdURBQXVEOztZQUdyRixJQUFJRixTQUFTRyxNQUFNLElBQUksT0FBT0gsU0FBU0csTUFBTSxHQUFHLEtBQUs7Z0JBQ2pEZCxNQUFNO29CQUNGZSxPQUFPO2dCQUNUO2dCQUNGUixPQUFPUyxJQUFJLENBQUMsVUFBVSw0QkFBNEI7WUFDdEQsT0FBTztnQkFDSCx3REFBd0Q7Z0JBQ3hEQyxNQUFNLHdCQUF3QyxPQUFoQk4sU0FBU0csTUFBTTtZQUNqRDtRQUNKLEVBQUUsT0FBT1QsT0FBTztZQUNaLDBCQUEwQjtZQUMxQixJQUFJQSxNQUFNTSxRQUFRLEVBQUU7Z0JBQ2hCLG9FQUFvRTtnQkFDcEVMLFNBQVNELE1BQU1NLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxPQUFPLElBQUk7Z0JBQ3hDQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CaEIsTUFBTU0sUUFBUTtnQkFDN0NYLE1BQU07b0JBQ0ZlLE9BQU9WLE1BQU1NLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxPQUFPO2dCQUNwQztZQUVOLE9BQU8sSUFBSWQsTUFBTWlCLE9BQU8sRUFBRTtnQkFDdEIsNkNBQTZDO2dCQUM3Q2hCLFNBQVM7Z0JBQ1RjLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JoQixNQUFNaUIsT0FBTztZQUMvQyxPQUFPO2dCQUNILDZDQUE2QztnQkFDN0NoQixTQUFTRCxNQUFNYyxPQUFPLElBQUk7Z0JBQzFCQyxRQUFRQyxHQUFHLENBQUMsVUFBVWhCLE1BQU1jLE9BQU87WUFDdkM7UUFDSjtJQUNKO0lBS0UscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlFLElBQUc7WUFBYUQsV0FBVTs7OEJBQy9CLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBMkQ7Ozs7Ozs4QkFDekUsOERBQUNHO29CQUFLSCxXQUFVO29CQUF5RUksVUFBVXBCOzhCQUNwRyw0RUFBQ2U7d0JBQUlDLFdBQVU7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNFO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNuQyx1REFBS0E7d0NBQUNzQyxNQUFLO3dDQUFRQyxPQUFPN0I7d0NBQU84QixVQUFVLENBQUN0QixJQUFJUCxTQUFTTyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dDQUFHTixXQUFVO3dDQUFPUyxhQUFZOzs7Ozs7Ozs7Ozs7MENBRTVHLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNFO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNuQyx1REFBS0E7d0NBQUNzQyxNQUFLO3dDQUFZQyxPQUFPM0I7d0NBQVU0QixVQUFVLENBQUN0QixJQUFJTCxZQUFZSyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dDQUFHTixXQUFVO3dDQUFPUyxhQUFZOzs7Ozs7Ozs7Ozs7MENBRXRILDhEQUFDM0MseURBQU1BO2dDQUFDa0MsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQXpFUzFCOztRQUdXRCxzREFBUUE7UUFJYkosc0RBQVNBOzs7S0FQZks7QUEyRVQsaUVBQWUsTUFBQUYsdUVBQWdCQSxDQUFDRSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJEOlxcRGV2ZWxvcG1lbnRcXGRldmVsb3BtZW50XFwwNlxcZnJvbnRlbmRcXGFwcFxcYXV0aFxcbG9naW5cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoQXV0aFJlZGlyZWN0IGZyb20gJ0AvYXBwL3V0aWxzL3dpdGhBdXRoUmVkaXJlY3QnO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJ0AvaG9va3MvdXNlLXRvYXN0JztcclxuXHJcbmZ1bmN0aW9uIFNpZ251cFBhZ2UoKSB7XHJcbiAgY29uc3QgYmFzZXVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiO1xyXG5cclxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xyXG4gIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF09dXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLHNldHBhc3N3b3JkXT11c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsU2V0RXJyb3JdPXVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRlbFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICcvYXBpL2xvZ2luJywgIC8vIFVwZGF0ZSB0aGlzIHRvIHRoZSBjb3JyZWN0IGxvZ2luIGVuZHBvaW50XHJcbiAgICAgICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0gLy8gVGhpcyBpbmNsdWRlcyBjcmVkZW50aWFscyAoY29va2llcykgd2l0aCB0aGUgcmVxdWVzdFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWxjb21lIEJhY2suLlwiXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZmVlZFwiKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGZlZWQgcGFnZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb2YgdW5leHBlY3RlZCBzdGF0dXMgY29kZXMgKG5vdCBpbiAyeHggcmFuZ2UpXHJcbiAgICAgICAgICAgIGFsZXJ0KGBVbmV4cGVjdGVkIHJlc3BvbnNlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEltcHJvdmVkIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBlcnJvciBjb21lcyBmcm9tIHRoZSBzZXJ2ZXIsIHdlIGFjY2VzcyBlcnJvci5yZXNwb25zZSBkYXRhXHJcbiAgICAgICAgICAgIFNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHJlc3BvbnNlLlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZXNwb25zZTpcIiwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8gSWYgbm8gcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgIFNldEVycm9yKFwiTm8gcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJlcXVlc3Q6XCIsIGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gaXNzdWUgc2V0dGluZyB1cCB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICBTZXRFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbic+XHJcbiAgICAgICAgPGRpdiBpZD1cInNpZ251cC1ib3hcIiBjbGFzc05hbWU9J3ctODAgcHgtNCBweS03ICAgbWQ6dy1bNDAlXSBtZDpweS0xMCBib3JkZXIgcm91bmRlZC14bCAnPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCBmb250LW1vbm8gbWQ6dGV4dC00eGwgIHRleHQtY2VudGVyJz5XZWxjb21lIGJhY2s8L2gxPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXQtNyBmbGV4IGZsZXgtY29sICBtZDpmbGV4LXJvdyBtZDptdC0yOCBtZDpnYXAtMjggIGl0ZW1zLWNlbnRlciBnYXAtNCcgb25TdWJtaXQ9e2hhbmRlbFN1Ym1pdH0+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWQ6dGV4dC0yeGwgZm9udC1zZW1pYm9sZCB3LWZ1bGwgZm9udC1tb25vIGdhcC01Jz5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWQ6dy1bODAlXSAnPlxyXG4gICAgICAgICAgICA8aDE+RW50ZXIgRW1haWw8L2gxPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInB4LTNcIiBwbGFjZWhvbGRlcj1cInVzZXJAZ21haWwuY29tIFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBtZDp3LVs4MCVdICc+XHJcbiAgICAgICAgICAgIDxoMT5FbnRlciBQYXNzd29yZDwvaDE+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT5zZXRwYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInB4LTNcIiBwbGFjZWhvbGRlcj1cIi4uLi4uLlwiIC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nIG1kOnctWzUwJV0gJz5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoUmVkaXJlY3QoU2lnbnVwUGFnZSkiXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ3aXRoQXV0aFJlZGlyZWN0IiwidXNlVG9hc3QiLCJTaWdudXBQYWdlIiwiYmFzZXVybCIsInRvYXN0IiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJlcnJvciIsIlNldEVycm9yIiwicm91dGVyIiwiaGFuZGVsU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwic3RhdHVzIiwidGl0bGUiLCJwdXNoIiwiYWxlcnQiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/login/page.jsx\n"));

/***/ })

});