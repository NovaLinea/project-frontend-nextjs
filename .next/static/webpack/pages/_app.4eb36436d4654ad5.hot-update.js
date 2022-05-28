"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/Button */ \"./components/UI/Button/index.jsx\");\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Badge */ \"./node_modules/@mui/material/Badge/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_7__.selectUserData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function logout() {\n        return _logout.apply(this, arguments);\n    }\n    function _logout() {\n        _logout = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_5__.destroyCookie)(null, \"token\");\n                        router.push(\"/\");\n                        dispatch((0,_redux_slices_user__WEBPACK_IMPORTED_MODULE_7__.setUserData)(null));\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _logout.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header), \"d-flex w100\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container), \" d-flex justify-between align-center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__left),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            children: \"ProjectUnion\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__right), \"d-flex align-center\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_10__.BiSearch, {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().search), \"fw-bold\")\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        !userData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            mode: \"fill\",\n                            onClick: function() {\n                                return router.push(\"/login\");\n                            },\n                            children: \"\\u0412\\u0445\\u043E\\u0434\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    badgeContent: 0,\n                                    color: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineBell, {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().notifications), \"fw-bold\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    mode: \"fill\",\n                                    onClick: logout,\n                                    children: \"\\u0412\\u044B\\u0439\\u0442\\u0438\"\n                                }, void 0, false, {\n                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"J6b0NYX6UrE8iyPa2mjcos0BlSA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNLO0FBQ1c7QUFDQTtBQUNXO0FBQ007QUFDTjtBQUNHO0FBQ1o7QUFDbUI7QUFDWjtBQUNQO0FBQ0M7QUFDTjtBQUNNO0FBQ0g7O0FBR2pDLElBQU1rQixNQUFNLEdBQUcsV0FBTTs7SUFDeEIsSUFBTUMsUUFBUSxHQUFHYiw0REFBYyxFQUFFO0lBQ2pDLElBQU1jLFFBQVEsR0FBR2hCLDREQUFjLENBQUNDLDhEQUFjLENBQUM7SUFDL0MsSUFBTWdCLE1BQU0sR0FBR25CLHNEQUFTLEVBQUU7YUFFWG9CLE1BQU07ZUFBTkEsT0FBTTs7YUFBTkEsT0FBTTtRQUFOQSxPQUFNLEdBQXJCLHlNQUF3Qjs7Ozt3QkFDcEJuQixzREFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDN0JrQixNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakJKLFFBQVEsQ0FBQ1osK0RBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7U0FDL0I7ZUFKY2UsT0FBTTs7SUFNckIscUJBQ0ksOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFekIsZ0RBQUksQ0FBQ1EsbUVBQWEsRUFBRSxhQUFhLENBQUM7a0JBQzlDLDRFQUFDZ0IsS0FBRztZQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFtQixNQUFvQyxDQUFyRGpCLHNFQUFnQixFQUFDLHNDQUFvQyxDQUFDOzs4QkFDckUsOERBQUNnQixLQUFHO29CQUFDQyxTQUFTLEVBQUVqQix5RUFBbUI7OEJBQy9CLDRFQUFDUCxrREFBSTt3QkFBQzRCLElBQUksRUFBQyxHQUFHO2tDQUNWLDRFQUFDQyxJQUFFOzRCQUFDTCxTQUFTLEVBQUVqQixpRUFBVztzQ0FBRSxjQUFZOzs7OztpQ0FBSzs7Ozs7NkJBQzFDOzs7Ozt5QkFDTDs4QkFFTiw4REFBQ2dCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRXpCLGdEQUFJLENBQUNRLDBFQUFvQixFQUFFLHFCQUFxQixDQUFDOztzQ0FDN0QsOERBQUNJLHFEQUFROzRCQUFDYSxTQUFTLEVBQUV6QixnREFBSSxDQUFDUSxtRUFBYSxFQUFFLFNBQVMsQ0FBQzs7Ozs7aUNBQUk7d0JBRXRELENBQUNZLFFBQVEsaUJBRU4sOERBQUNMLDhDQUFNOzRCQUFDbUIsSUFBSSxFQUFDLE1BQU07NEJBQUNDLE9BQU8sRUFBRTt1Q0FBTWQsTUFBTSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDOzZCQUFBO3NDQUFFLDBCQUFJOzs7OztpQ0FBYSxpQkFFdkU7OzhDQUNBLDhEQUFDTiw0REFBSztvQ0FBQ21CLFlBQVksRUFBRSxDQUFDO29DQUFFQyxLQUFLLEVBQUMsU0FBUzs4Q0FDbkMsNEVBQUM1QiwwREFBYTt3Q0FBQ2dCLFNBQVMsRUFBRXpCLGdEQUFJLENBQUNRLDBFQUFvQixFQUFFLFNBQVMsQ0FBQzs7Ozs7NkNBQUc7Ozs7O3lDQUM5RDs4Q0FFUiw4REFBQ08sOENBQU07b0NBQUNtQixJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsT0FBTyxFQUFFYixNQUFNOzhDQUFFLGdDQUFLOzs7Ozt5Q0FBUzs7d0NBQ3BEOzs7Ozs7eUJBRUw7Ozs7OztpQkFDSjs7Ozs7YUFDSixDQUNSO0NBQ0wsQ0FBQztHQXZDV0osTUFBTTs7UUFDRVosd0RBQWM7UUFDZEYsd0RBQWM7UUFDaEJGLGtEQUFTOzs7QUFIZmdCLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/ZGUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy91c2VyJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vcmVkdXgvaG9va3MnO1xuaW1wb3J0IHsgc2V0VXNlckRhdGEgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvdXNlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQWlPdXRsaW5lQmVsbCwgQWlPdXRsaW5lVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG5pbXBvcnQgeyBCaUV4aXQsIEJpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcbmltcG9ydCB7IENnUHJvZmlsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiXG5pbXBvcnQgeyBGaVNldHRpbmdzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9VSS9CdXR0b25cIlxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xuXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0VXNlckRhdGEpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICBkZXN0cm95Q29va2llKG51bGwsICd0b2tlbicpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXJEYXRhKG51bGwpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyLCAnZC1mbGV4IHcxMDAnKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbGVmdH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlByb2plY3RVbmlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXJfX3JpZ2h0LCAnZC1mbGV4IGFsaWduLWNlbnRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgPEJpU2VhcmNoIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc2VhcmNoLCAnZnctYm9sZCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgeyF1c2VyRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtb2RlPSdmaWxsJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX0+0JLRhdC+0LQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MH0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVCZWxsIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMubm90aWZpY2F0aW9ucywgJ2Z3LWJvbGQnKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1vZGU9J2ZpbGwnIG9uQ2xpY2s9e2xvZ291dH0+0JLRi9C50YLQuDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJjbHN4IiwiTGluayIsInVzZVJvdXRlciIsImRlc3Ryb3lDb29raWUiLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdFVzZXJEYXRhIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRVc2VyRGF0YSIsInN0eWxlcyIsIkFpT3V0bGluZUJlbGwiLCJBaU91dGxpbmVVc2VyIiwiQmlFeGl0IiwiQmlTZWFyY2giLCJDZ1Byb2ZpbGUiLCJGaVNldHRpbmdzIiwiQnV0dG9uIiwiRHJvcGRvd24iLCJCYWRnZSIsIkhlYWRlciIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJyb3V0ZXIiLCJsb2dvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiY29udGFpbmVyIiwiaGVhZGVyX19sZWZ0IiwiaHJlZiIsImgzIiwibG9nbyIsImhlYWRlcl9fcmlnaHQiLCJzZWFyY2giLCJtb2RlIiwib25DbGljayIsImJhZGdlQ29udGVudCIsImNvbG9yIiwibm90aWZpY2F0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});