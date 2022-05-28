"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _API_UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API/UserService */ \"./API/UserService.js\");\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/Loader */ \"./components/UI/Loader/index.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Settings() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_6__.selectUserData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewMsg = ref1[0], setNftsNewMsg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewSubs = ref2[0], setNftsNewSubs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewComment = ref3[0], setNftsNewComment = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsUpdate = ref4[0], setNftsUpdate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsEmail = ref5[0], setNftsEmail = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    function fetchData() {\n        return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n        _fetchData = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetchDataSettings(userData.id);\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.data) {\n                            //setDataUser(response.data);\n                            //setName(response.data.name);\n                            //setEmail(response.data.email);\n                            //setDescription(response.data.description);\n                            //setCounterName(response.data.name.length);\n                            //setCounterDescription(response.data.description.length);\n                            if (response.data.notifications) {\n                                setNftsNewMsg(response.data.notifications.new_message);\n                                setNftsNewSubs(response.data.notifications.new_sub);\n                                setNftsNewComment(response.data.notifications.new_comment);\n                                setNftsUpdate(response.data.notifications.update);\n                                setNftsEmail(response.data.notifications.email_notification);\n                            }\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0435\\u043A\");\n                    case 10:\n                        _ctx.prev = 10;\n                        setIsLoading(false);\n                        return _ctx.finish(10);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7,\n                    10,\n                    13\n                ]\n            ]);\n        }));\n        return _fetchData.apply(this, arguments);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                marginTop: 50\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"settings\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"settings__header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                        className: \"title\",\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044F\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        mode: \"fill\",\n                        onClick: saveData,\n                        children: \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n};\n_s(Settings, \"0wfxLx3ExoLF/wzliKPNY5ZcHVA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO2dCQUFFQyxjQUFjLEVBQUUsUUFBUTtnQkFBRUMsU0FBUyxFQUFFLEVBQUU7YUFBQztzQkFDbEUsNEVBQUNqQyx5REFBTTs7OztvQkFBRTs7Ozs7Z0JBQ1AsQ0FDUjtLQUNMO0lBRUQscUJBQ0ksOERBQUM2QixLQUFHO1FBQUNLLFNBQVMsRUFBQyxVQUFVOzswQkFDckIsOERBQUN2QyxrREFBSTs7a0NBQ0QsOERBQUN3QyxPQUFLO2tDQUFDLHdEQUFTOzs7Ozs0QkFBaUI7a0NBQ3hCLDhEQUFSQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ3BDOzBCQUVQLDhEQUFDVCxLQUFHO2dCQUFDSyxTQUFTLEVBQUMsa0JBQWtCOztrQ0FDN0IsOERBQUNLLEdBQUM7d0JBQUNMLFNBQVMsRUFBQyxPQUFPO2tDQUFDLG1HQUFpQjs7Ozs7NEJBQW9CO2tDQUMxQyw4REFBZk0sTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLE9BQU8sRUFBRUMsUUFBUTtrQ0FBRSx3REFBUzs7Ozs7NEJBQVM7Ozs7OztvQkFDdkQ7Ozs7OztZQUNKLENBQ1I7Q0FDTDtHQS9EdUIxQyxRQUFROztRQUNYSix3REFBYztRQUNoQkQsa0RBQVM7OztBQUZKSyxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NldHRpbmdzLmpzPzA5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RVc2VyRGF0YSB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy91c2VyJztcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi9BUEkvVXNlclNlcnZpY2UnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9VSS9Mb2FkZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0VXNlckRhdGEpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbbnRmc05ld01zZywgc2V0TmZ0c05ld01zZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNOZXdTdWJzLCBzZXROZnRzTmV3U3Vic10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNOZXdDb21tZW50LCBzZXROZnRzTmV3Q29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNVcGRhdGUsIHNldE5mdHNVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudGZzRW1haWwsIHNldE5mdHNFbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVXNlclNlcnZpY2UuZmV0Y2hEYXRhU2V0dGluZ3ModXNlckRhdGEuaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vc2V0RGF0YVVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy9zZXROYW1lKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgLy9zZXRFbWFpbChyZXNwb25zZS5kYXRhLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAvL3NldERlc2NyaXB0aW9uKHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIC8vc2V0Q291bnRlck5hbWUocmVzcG9uc2UuZGF0YS5uYW1lLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9zZXRDb3VudGVyRGVzY3JpcHRpb24ocmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzTmV3TXNnKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5uZXdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNOZXdTdWJzKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5uZXdfc3ViKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c05ld0NvbW1lbnQocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLm5ld19jb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c1VwZGF0ZShyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMudXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c0VtYWlsKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5lbWFpbF9ub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0L3QsNGB0YLRgNC+0LXQuicpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiA1MH19PlxuICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7QndCw0YHRgtGA0L7QudC60Lg8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPSd0aXRsZSc+0J3QsNGB0YLRgNC+0LnQutC4INC/0YDQvtGE0LjQu9GPPC9iPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbW9kZT0nZmlsbCcgb25DbGljaz17c2F2ZURhdGF9PtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInVzZVJvdXRlciIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0VXNlckRhdGEiLCJVc2VyU2VydmljZSIsIkxvYWRlciIsIlNldHRpbmdzIiwidXNlckRhdGEiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJudGZzTmV3TXNnIiwic2V0TmZ0c05ld01zZyIsIm50ZnNOZXdTdWJzIiwic2V0TmZ0c05ld1N1YnMiLCJudGZzTmV3Q29tbWVudCIsInNldE5mdHNOZXdDb21tZW50IiwibnRmc1VwZGF0ZSIsInNldE5mdHNVcGRhdGUiLCJudGZzRW1haWwiLCJzZXROZnRzRW1haWwiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoRGF0YVNldHRpbmdzIiwiaWQiLCJkYXRhIiwibm90aWZpY2F0aW9ucyIsIm5ld19tZXNzYWdlIiwibmV3X3N1YiIsIm5ld19jb21tZW50IiwidXBkYXRlIiwiZW1haWxfbm90aWZpY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImIiLCJCdXR0b24iLCJtb2RlIiwib25DbGljayIsInNhdmVEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/settings.js\n");

/***/ })

});