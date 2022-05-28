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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _styles_Settings_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Settings.module.scss */ \"./styles/Settings.module.scss\");\n/* harmony import */ var _styles_Settings_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Settings_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _API_UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API/UserService */ \"./API/UserService.js\");\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/Loader */ \"./components/UI/Loader/index.jsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UI/Button */ \"./components/UI/Button/index.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Settings() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_6__.selectUserData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewMsg = ref1[0], setNftsNewMsg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewSubs = ref2[0], setNftsNewSubs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewComment = ref3[0], setNftsNewComment = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsUpdate = ref4[0], setNftsUpdate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsEmail = ref5[0], setNftsEmail = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    function fetchData() {\n        return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n        _fetchData = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetchDataSettings(userData.id);\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.data) {\n                            //setDataUser(response.data);\n                            //setName(response.data.name);\n                            //setEmail(response.data.email);\n                            //setDescription(response.data.description);\n                            //setCounterName(response.data.name.length);\n                            //setCounterDescription(response.data.description.length);\n                            if (response.data.notifications) {\n                                setNftsNewMsg(response.data.notifications.new_message);\n                                setNftsNewSubs(response.data.notifications.new_sub);\n                                setNftsNewComment(response.data.notifications.new_comment);\n                                setNftsUpdate(response.data.notifications.update);\n                                setNftsEmail(response.data.notifications.email_notification);\n                            }\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0435\\u043A\");\n                    case 10:\n                        _ctx.prev = 10;\n                        setIsLoading(false);\n                        return _ctx.finish(10);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7,\n                    10,\n                    13\n                ]\n            ]);\n        }));\n        return _fetchData.apply(this, arguments);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                marginTop: 50\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"settings\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Settings_module_scss__WEBPACK_IMPORTED_MODULE_10___default().settings__header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                        className: (_styles_Settings_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044F\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        mode: \"fill\",\n                        children: \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n};\n_s(Settings, \"0wfxLx3ExoLF/wzliKPNY5ZcHVA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Z0JBQUNDLE9BQU8sRUFBRSxNQUFNO2dCQUFFQyxjQUFjLEVBQUUsUUFBUTtnQkFBRUMsU0FBUyxFQUFFLEVBQUU7YUFBQztzQkFDbEUsNEVBQUNsQyx5REFBTTs7OztvQkFBRTs7Ozs7Z0JBQ1AsQ0FDUjtLQUNMO0lBRUQscUJBQ0ksOERBQUM4QixLQUFHO1FBQUNLLFNBQVMsRUFBQyxVQUFVOzswQkFDckIsOERBQUN6QyxrREFBSTs7a0NBQ0QsOERBQUMwQyxPQUFLO2tDQUFDLHdEQUFTOzs7Ozs0QkFBaUI7a0NBQ3hCLDhEQUFSQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ3BDOzBCQUVQLDhEQUFDVCxLQUFHO2dCQUFDSyxTQUFTLEVBQUVyQyx1RkFBdUI7O2tDQUNuQyw4REFBQzJDLEdBQUM7d0JBQUNOLFNBQVMsRUFBRXJDLDRFQUFZO2tDQUFFLG1HQUFpQjs7Ozs7NEJBQW9CO2tDQUNqRCw4REFBZkcseURBQU07d0JBQUN5QyxJQUFJLEVBQUMsTUFBTTtrQ0FBQyx3REFBUzs7Ozs7NEJBQVM7Ozs7OztvQkFDcEM7Ozs7OztZQUNKLENBQ1I7Q0FDTDtHQS9EdUJ4QyxRQUFROztRQUNYTix3REFBYztRQUNoQkQsa0RBQVM7OztBQUZKTyxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NldHRpbmdzLmpzPzA5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9ob29rcyc7XG5pbXBvcnQgeyBzZWxlY3RVc2VyRGF0YSB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy91c2VyJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TZXR0aW5ncy5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vQVBJL1VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVUkvTG9hZGVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0J1dHRvblwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RVc2VyRGF0YSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtudGZzTmV3TXNnLCBzZXROZnRzTmV3TXNnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnRmc05ld1N1YnMsIHNldE5mdHNOZXdTdWJzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnRmc05ld0NvbW1lbnQsIHNldE5mdHNOZXdDb21tZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnRmc1VwZGF0ZSwgc2V0TmZ0c1VwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNFbWFpbCwgc2V0TmZ0c0VtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBVc2VyU2VydmljZS5mZXRjaERhdGFTZXR0aW5ncyh1c2VyRGF0YS5pZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgLy9zZXREYXRhVXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvL3NldE5hbWUocmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAvL3NldEVtYWlsKHJlc3BvbnNlLmRhdGEuZW1haWwpO1xuICAgICAgICAgICAgICAgIC8vc2V0RGVzY3JpcHRpb24ocmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgLy9zZXRDb3VudGVyTmFtZShyZXNwb25zZS5kYXRhLm5hbWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvL3NldENvdW50ZXJEZXNjcmlwdGlvbihyZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNOZXdNc2cocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLm5ld19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c05ld1N1YnMocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLm5ld19zdWIpO1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzTmV3Q29tbWVudChyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMubmV3X2NvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzVXBkYXRlKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy51cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzRW1haWwocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLmVtYWlsX25vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAg0L/RgNC4INC/0L7Qu9GD0YfQtdC90LjQuCDQvdCw0YHRgtGA0L7QtdC6Jyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDUwfX0+XG4gICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPtCd0LDRgdGC0YDQvtC50LrQuDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzX19oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7QndCw0YHRgtGA0L7QudC60Lgg0L/RgNC+0YTQuNC70Y88L2I+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBtb2RlPSdmaWxsJz7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdFVzZXJEYXRhIiwic3R5bGVzIiwiVXNlclNlcnZpY2UiLCJMb2FkZXIiLCJCdXR0b24iLCJTZXR0aW5ncyIsInVzZXJEYXRhIiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibnRmc05ld01zZyIsInNldE5mdHNOZXdNc2ciLCJudGZzTmV3U3VicyIsInNldE5mdHNOZXdTdWJzIiwibnRmc05ld0NvbW1lbnQiLCJzZXROZnRzTmV3Q29tbWVudCIsIm50ZnNVcGRhdGUiLCJzZXROZnRzVXBkYXRlIiwibnRmc0VtYWlsIiwic2V0TmZ0c0VtYWlsIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaERhdGFTZXR0aW5ncyIsImlkIiwiZGF0YSIsIm5vdGlmaWNhdGlvbnMiLCJuZXdfbWVzc2FnZSIsIm5ld19zdWIiLCJuZXdfY29tbWVudCIsInVwZGF0ZSIsImVtYWlsX25vdGlmaWNhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJzZXR0aW5nc19faGVhZGVyIiwiYiIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/settings.js\n");

/***/ })

});