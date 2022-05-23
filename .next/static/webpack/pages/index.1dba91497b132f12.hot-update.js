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

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Button */ \"./components/UI/Button/index.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var store = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.Context).store;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    function logout() {\n        return _logout.apply(this, arguments);\n    }\n    function _logout() {\n        _logout = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        store.logout();\n                        navigate(\"/\");\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _logout.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header), \"d-flex w100\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container), \" d-flex justify-between align-center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header__left),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                            children: \"ProjectUnion\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header__right), \"d-flex align-center\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiSearch, {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().search), \"fw-bold\")\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiOutlineBell, {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notifications), \"fw-bold\")\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            mode: \"fill\",\n                            onClick: function() {\n                                return router.push(\"/signin\");\n                            },\n                            children: \"\\u0412\\u0445\\u043E\\u0434\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"BCgWECjXFYwIKMzN5jTdVIIAw/Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDbUI7QUFDM0I7QUFDSztBQUNXO0FBQ0U7QUFDSTtBQUNMO0FBQ0o7O0FBRzlCLElBQU1TLE1BQU0sR0FBRyxXQUFNOztJQUN4QixJQUFNLEtBQU0sR0FBSVQsaURBQVUsQ0FBQ0MsMERBQU8sQ0FBQyxDQUE1QlMsS0FBSztJQUNaLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTthQUVYUSxNQUFNO2VBQU5BLE9BQU07O2FBQU5BLE9BQU07UUFBTkEsT0FBTSxHQUFyQix5TUFBd0I7Ozs7d0JBQ3BCRixLQUFLLENBQUNFLE1BQU0sRUFBRSxDQUFDO3dCQUNmQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7OztTQUNqQjtlQUhjRCxPQUFNOztJQUtyQixxQkFDSSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUViLGdEQUFJLENBQUNHLG1FQUFhLEVBQUUsYUFBYSxDQUFDO2tCQUM5Qyw0RUFBQ1MsS0FBRztZQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFtQixNQUFvQyxDQUFyRFYsc0VBQWdCLEVBQUMsc0NBQW9DLENBQUM7OzhCQUNyRSw4REFBQ1MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFVix5RUFBbUI7OEJBQy9CLDRFQUFDRixrREFBSTt3QkFBQ2dCLElBQUksRUFBQyxHQUFHO2tDQUNWLDRFQUFDQyxJQUFFOzRCQUFDTCxTQUFTLEVBQUVWLGlFQUFXO3NDQUFFLGNBQVk7Ozs7O2lDQUFLOzs7Ozs2QkFDMUM7Ozs7O3lCQUNMOzhCQUVOLDhEQUFDUyxLQUFHO29CQUFDQyxTQUFTLEVBQUViLGdEQUFJLENBQUNHLDBFQUFvQixFQUFFLHFCQUFxQixDQUFDOztzQ0FDN0QsOERBQUNFLG9EQUFROzRCQUFDUSxTQUFTLEVBQUViLGdEQUFJLENBQUNHLG1FQUFhLEVBQUUsU0FBUyxDQUFDOzs7OztpQ0FBSTtzQ0FDdkQsOERBQUNDLDBEQUFhOzRCQUFDUyxTQUFTLEVBQUViLGdEQUFJLENBQUNHLDBFQUFvQixFQUFFLFNBQVMsQ0FBQzs7Ozs7aUNBQUk7c0NBQ25FLDhEQUFDRyw4Q0FBTTs0QkFBQ2lCLElBQUksRUFBQyxNQUFNOzRCQUFDQyxPQUFPLEVBQUU7dUNBQU1mLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxTQUFTLENBQUM7NkJBQUE7c0NBQUUsMEJBQUk7Ozs7O2lDQUFTOzs7Ozs7eUJBQ3RFOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0osQ0FDUjtDQUNMLENBQUM7R0ExQldsQixNQUFNOztRQUVBTCxrREFBUzs7O0FBRmZLLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/ZGUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEFpT3V0bGluZUJlbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxuaW1wb3J0IHsgQmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL1VJL0J1dHRvblwiXG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7c3RvcmV9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgc3RvcmUubG9nb3V0KCk7XG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCB3MTAwJyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5Qcm9qZWN0VW5pb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyX19yaWdodCwgJ2QtZmxleCBhbGlnbi1jZW50ZXInKX0+XG4gICAgICAgICAgICAgICAgICAgIDxCaVNlYXJjaCBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlYXJjaCwgJ2Z3LWJvbGQnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUJlbGwgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5ub3RpZmljYXRpb25zLCAnZnctYm9sZCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1vZGU9J2ZpbGwnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnbmluJyl9PtCS0YXQvtC0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkNvbnRleHQiLCJjbHN4IiwiTGluayIsInVzZVJvdXRlciIsInN0eWxlcyIsIkFpT3V0bGluZUJlbGwiLCJCaVNlYXJjaCIsIkJ1dHRvbiIsIkhlYWRlciIsInN0b3JlIiwicm91dGVyIiwibG9nb3V0IiwibmF2aWdhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJjb250YWluZXIiLCJoZWFkZXJfX2xlZnQiLCJocmVmIiwiaDMiLCJsb2dvIiwiaGVhZGVyX19yaWdodCIsInNlYXJjaCIsIm5vdGlmaWNhdGlvbnMiLCJtb2RlIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});