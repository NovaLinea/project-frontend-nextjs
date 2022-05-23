"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_signin_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/signin.module.scss */ \"./styles/signin.module.scss\");\n/* harmony import */ var _styles_signin_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/Input */ \"./components/UI/Input/index.jsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/Button */ \"./components/UI/Button/index.jsx\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Signin() {\n    _s();\n    var store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.Context).store;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_signin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().signin),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"\\u0412\\u0445\\u043E\\u0434\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_signin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        placeholder: \"\\u041F\\u043E\\u0447\\u0442\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        type: \"password\",\n                        placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        mode: \"fill\",\n                        onClick: login,\n                        children: \"\\u0412\\u043E\\u0439\\u0442\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"\\u041D\\u0435\\u0442 \\u0430\\u043A\\u043A\\u0430\\u0443\\u043D\\u0442\\u0430? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return router.push(\"/signup\");\n                                },\n                                children: \"\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u044F\"\n                            }, void 0, false, {\n                                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                                lineNumber: 40,\n                                columnNumber: 34\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/signin.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n};\n_s(Signin, \"NHgLtpoLDefSgA/3k28b9ZbRBLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUNGO0FBQ3RCO0FBQ0o7QUFDSztBQUNXO0FBQ1U7QUFDUDtBQUNFOztBQUU5QixTQUFTVyxNQUFNLEdBQUc7O0lBQzdCLElBQU0sS0FBTSxHQUFJVixpREFBVSxDQUFDRSwwREFBTyxDQUFDLENBQTVCUyxLQUFLO0lBQ1osSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBQTBCUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBYjFDLEtBYWdCLEdBQWNBLEdBQVksR0FBMUIsRUFiaEIsUUFhMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWRoRCxRQWNtQixHQUFpQkEsSUFBWSxHQUE3QixFQWRuQixXQWNnQyxHQUFJQSxJQUFZLEdBQWhCO0lBRzVCLHFCQUNJLDhEQUFDa0IsS0FBRztRQUFDQyxTQUFTLEVBQUVYLDBFQUFhOzswQkFDekIsOERBQUNKLGtEQUFJOztrQ0FDYiw4REFBQ2lCLE9BQUs7a0NBQUMsMEJBQUk7Ozs7OzRCQUFZO2tDQUNuQiw4REFBSEMsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNqQzswQkFFRSw4REFBQ04sS0FBRztnQkFBQ0MsU0FBUyxFQUFFWCx3RUFBVzs7a0NBQ3ZCLDhEQUFDQyw0REFBSzt3QkFDRmlCLEtBQUssRUFBRVosS0FBSzt3QkFDWmEsUUFBUSxFQUFFQyxTQUFBQSxDQUFDO21DQUFJYixRQUFRLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7eUJBQUE7d0JBQ3ZDSSxXQUFXLEVBQUMsZ0NBQU87Ozs7OzRCQUNoQjtrQ0FDUCw4REFBQ0MsSUFBRTs7Ozs0QkFBRTtrQ0FDTCw4REFBQ3RCLDREQUFLO3dCQUNGaUIsS0FBSyxFQUFFVixRQUFRO3dCQUNmVyxRQUFRLEVBQUVDLFNBQUFBLENBQUM7bUNBQUlYLFdBQVcsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt5QkFBQTt3QkFDMUNNLElBQUksRUFBQyxVQUFVO3dCQUNmRixXQUFXLEVBQUMsc0NBQVE7Ozs7OzRCQUNoQjtrQ0FDUiw4REFBQ0MsSUFBRTs7Ozs0QkFBRTtrQ0FDTCw4REFBQ3JCLDZEQUFNO3dCQUFDdUIsSUFBSSxFQUFDLE1BQU07d0JBQUNDLE9BQU8sRUFBRUMsS0FBSztrQ0FBRSxnQ0FBSzs7Ozs7NEJBQWM7a0NBQ2xELDhEQUFKQyxHQUFDOzs0QkFBQyx1RUFBYzswQ0FBVyw4REFBQ0MsTUFBSTtnQ0FBQ0gsT0FBTyxFQUFFOzJDQUFNckIsTUFBTSxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FBQTswQ0FBRSxvRUFBVzs7Ozs7b0NBQU87Ozs7Ozs0QkFBSTs7Ozs7O29CQUNsRjs7Ozs7O1lBQ0osQ0FDUjtDQUNoQjtHQWpDdUIzQixNQUFNOztRQUVYSixrREFBUzs7O0FBRkpJLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2lnbmluLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9VSS9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvVUkvQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xuICAgIGNvbnN0IHtzdG9yZX0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25pbn0+XG4gICAgICAgICAgICA8SGVhZD5cblx0XHRcdFx0PHRpdGxlPtCS0YXQvtC0PC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/QvtGH0YLQsCcgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0LDRgNC+0LvRjCcgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbW9kZT0nZmlsbCcgb25DbGljaz17bG9naW59PtCS0L7QudGC0Lg8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD7QndC10YIg0LDQutC60LDRg9C90YLQsD8gPHNwYW4gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKX0+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUmVmIiwiQ29udGV4dCIsIkhlYWQiLCJjbHN4IiwiTGluayIsInVzZVJvdXRlciIsInN0eWxlcyIsIklucHV0IiwiQnV0dG9uIiwiU2lnbmluIiwic3RvcmUiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsInNpZ25pbiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJmb3JtIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJyIiwidHlwZSIsIm1vZGUiLCJvbkNsaWNrIiwibG9naW4iLCJwIiwic3BhbiIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ })

});