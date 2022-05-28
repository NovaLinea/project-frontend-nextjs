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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _API_UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API/UserService */ \"./API/UserService.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Settings() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_6__.selectUserData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewMsg = ref1[0], setNftsNewMsg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewSubs = ref2[0], setNftsNewSubs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewComment = ref3[0], setNftsNewComment = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsUpdate = ref4[0], setNftsUpdate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsEmail = ref5[0], setNftsEmail = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    function fetchData() {\n        return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n        _fetchData = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetchDataSettings(userData.id);\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.data) {\n                            //setDataUser(response.data);\n                            //setName(response.data.name);\n                            //setEmail(response.data.email);\n                            //setDescription(response.data.description);\n                            //setCounterName(response.data.name.length);\n                            //setCounterDescription(response.data.description.length);\n                            if (response.data.notifications) {\n                                setNftsNewMsg(response.data.notifications.new_message);\n                                setNftsNewSubs(response.data.notifications.new_sub);\n                                setNftsNewComment(response.data.notifications.new_comment);\n                                setNftsUpdate(response.data.notifications.update);\n                                setNftsEmail(response.data.notifications.email_notification);\n                            }\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0435\\u043A\");\n                    case 10:\n                        _ctx.prev = 10;\n                        setIsLoading(false);\n                        return _ctx.finish(10);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7,\n                    10,\n                    13\n                ]\n            ]);\n        }));\n        return _fetchData.apply(this, arguments);\n    }\n    function saveData() {\n        return _saveData.apply(this, arguments);\n    }\n    function _saveData() {\n        _saveData = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].saveData(userData.id, name, email, description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail);\n                    case 3:\n                        console.log(\"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u044B\");\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return _saveData.apply(this, arguments);\n    }\n    function changePassword() {\n        return _changePassword.apply(this, arguments);\n    }\n    function _changePassword() {\n        _changePassword = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(newPassword === \"\" || oldPassword === \"\" || confirmPassword === \"\")) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        showSnackbar(\"\\u0412\\u044B \\u0437\\u0430\\u043F\\u043E\\u043B\\u043D\\u0438\\u043B\\u0438 \\u043D\\u0435 \\u0432\\u0441\\u0435 \\u043F\\u043E\\u043B\\u044F\", \"error\");\n                        _ctx.next = 19;\n                        break;\n                    case 5:\n                        if (!(newPassword !== confirmPassword)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        showSnackbar(\"\\u041D\\u043E\\u0432\\u044B\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442\", \"error\");\n                        _ctx.next = 19;\n                        break;\n                    case 9:\n                        if (!(newPassword === oldPassword)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        showSnackbar(\"\\u041D\\u043E\\u0432\\u044B\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u0438 \\u043D\\u0435 \\u043E\\u0442\\u043B\\u0438\\u0447\\u0430\\u0435\\u0442\\u0441\\u044F \\u043E\\u0442 \\u0441\\u0442\\u0430\\u0440\\u043E\\u0433\\u043E\", \"error\");\n                        _ctx.next = 19;\n                        break;\n                    case 13:\n                        _ctx.next = 15;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].changePassword(userData.id, oldPassword, newPassword);\n                    case 15:\n                        showSnackbar(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\", \"success\");\n                        setOldPassword(\"\");\n                        setNewPassword(\"\");\n                        setConfirmPassword(\"\");\n                    case 19:\n                        _ctx.next = 24;\n                        break;\n                    case 21:\n                        _ctx.prev = 21;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        showSnackbar(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044F\", \"error\");\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    21\n                ]\n            ]);\n        }));\n        return _changePassword.apply(this, arguments);\n    }\n    function deleteAccount() {\n        return _deleteAccount.apply(this, arguments);\n    }\n    function _deleteAccount() {\n        _deleteAccount = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].deleteAccount(store.isUserID);\n                    case 3:\n                        store.logout();\n                        navigate(\"/\");\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        showSnackbar(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u0438 \\u0430\\u043A\\u043A\\u0430\\u0443\\u043D\\u0442\\u0430\", \"error\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return _deleteAccount.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"settings\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n            lineNumber: 94,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n};\n_s(Settings, \"0wfxLx3ExoLF/wzliKPNY5ZcHVA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkJjSixlQUFjOzthQXFCZFEsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FBNUIseU1BQStCOzs7Ozs7K0JBRWpCekMsc0VBQXlCLENBQUMwQyxLQUFLLENBQUNDLFFBQVEsQ0FBQzs7d0JBRS9DRCxLQUFLLENBQUNFLE1BQU0sRUFBRSxDQUFDO3dCQUNmQyxRQUFRLENBQUMsR0FBRyxDQUFDOzs7Ozs7d0JBRWJSLFlBQVksQ0FBQywySkFBOEIsRUFBMkIsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1NBRTdELEVBQXpCO2VBVGNJLGNBQWE7O0lBVzVCLHFCQUNJLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUNyQiw0RUFBQ25ELGtEQUFJOzs4QkFDRCw4REFBQ29ELE9BQUs7OEJBQUMsd0RBQVM7Ozs7O3dCQUFROzhCQUN4Qiw4REFBQ0MsTUFBSTtvQkFBQ0MsR0FBRyxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozt3QkFBRzs7Ozs7O2dCQUNwQzs7Ozs7WUFDTCxDQUNSO0NBQ0w7R0EzRnVCbEQsUUFBUTs7UUFDWEgsd0RBQWM7UUFDaEJELGtEQUFTOzs7QUFGSkksS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXR0aW5ncy5qcz8wOWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvaG9va3MnO1xuaW1wb3J0IHsgc2VsZWN0VXNlckRhdGEgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvdXNlcic7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vQVBJL1VzZXJTZXJ2aWNlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdFVzZXJEYXRhKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW250ZnNOZXdNc2csIHNldE5mdHNOZXdNc2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudGZzTmV3U3Vicywgc2V0TmZ0c05ld1N1YnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudGZzTmV3Q29tbWVudCwgc2V0TmZ0c05ld0NvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudGZzVXBkYXRlLCBzZXROZnRzVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnRmc0VtYWlsLCBzZXROZnRzRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFVzZXJTZXJ2aWNlLmZldGNoRGF0YVNldHRpbmdzKHVzZXJEYXRhLmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL3NldERhdGFVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIC8vc2V0TmFtZShyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIC8vc2V0RW1haWwocmVzcG9uc2UuZGF0YS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgLy9zZXREZXNjcmlwdGlvbihyZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAvL3NldENvdW50ZXJOYW1lKHJlc3BvbnNlLmRhdGEubmFtZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vc2V0Q291bnRlckRlc2NyaXB0aW9uKHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c05ld01zZyhyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMubmV3X21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzTmV3U3VicyhyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMubmV3X3N1Yik7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNOZXdDb21tZW50KHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5uZXdfY29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNVcGRhdGUocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLnVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNFbWFpbChyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMuZW1haWxfbm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0L/QvtC70YPRh9C10L3QuNC4INC90LDRgdGC0YDQvtC10LonKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IFVzZXJTZXJ2aWNlLnNhdmVEYXRhKHVzZXJEYXRhLmlkLCBuYW1lLCBlbWFpbCwgZGVzY3JpcHRpb24sIG50ZnNOZXdNc2csIG50ZnNOZXdTdWJzLCBudGZzTmV3Q29tbWVudCwgbnRmc1VwZGF0ZSwgbnRmc0VtYWlsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndCw0YHRgtGA0L7QudC60Lgg0YPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdGLJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAg0L/RgNC4INGB0L7RhdGA0LDQvdC10L3QuNC4INC00LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG5ld1Bhc3N3b3JkID09PSBcIlwiIHx8IG9sZFBhc3N3b3JkID09PSBcIlwiIHx8IGNvbmZpcm1QYXNzd29yZCA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICBzaG93U25hY2tiYXIoJ9CS0Ysg0LfQsNC/0L7Qu9C90LjQu9C4INC90LUg0LLRgdC1INC/0L7Qu9GPJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKVxuICAgICAgICAgICAgICAgIHNob3dTbmFja2Jhcign0J3QvtCy0YvQtSDQv9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInLCAnZXJyb3InKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1Bhc3N3b3JkID09PSBvbGRQYXNzd29yZClcbiAgICAgICAgICAgICAgICBzaG93U25hY2tiYXIoJ9Cd0L7QstGL0LUg0L/QsNGA0L7Qu9C4INC90LUg0L7RgtC70LjRh9Cw0LXRgtGB0Y8g0L7RgiDRgdGC0LDRgNC+0LPQvicsICdlcnJvcicpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgVXNlclNlcnZpY2UuY2hhbmdlUGFzc3dvcmQodXNlckRhdGEuaWQsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCk7XG5cbiAgICAgICAgICAgICAgICBzaG93U25hY2tiYXIoJ9Cf0LDRgNC+0LvRjCDRg9GB0L/QtdGI0L3QviDQuNC30LzQtdC90LXQvScsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgc2V0T2xkUGFzc3dvcmQoXCJcIik7XG4gICAgICAgICAgICAgICAgc2V0TmV3UGFzc3dvcmQoXCJcIik7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzaG93U25hY2tiYXIoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INC/0LDRgNC+0LvRjycsICdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWNjb3VudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IFVzZXJTZXJ2aWNlLmRlbGV0ZUFjY291bnQoc3RvcmUuaXNVc2VySUQpO1xuXG4gICAgICAgICAgICBzdG9yZS5sb2dvdXQoKTtcbiAgICAgICAgICAgIG5hdmlnYXRlKFwiL1wiKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzaG93U25hY2tiYXIoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YPQtNCw0LvQtdC90LjQuCDQsNC60LrQsNGD0L3RgtCwJywgJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPtCd0LDRgdGC0YDQvtC50LrQuDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdFVzZXJEYXRhIiwiVXNlclNlcnZpY2UiLCJTZXR0aW5ncyIsInVzZXJEYXRhIiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibnRmc05ld01zZyIsInNldE5mdHNOZXdNc2ciLCJudGZzTmV3U3VicyIsInNldE5mdHNOZXdTdWJzIiwibnRmc05ld0NvbW1lbnQiLCJzZXROZnRzTmV3Q29tbWVudCIsIm50ZnNVcGRhdGUiLCJzZXROZnRzVXBkYXRlIiwibnRmc0VtYWlsIiwic2V0TmZ0c0VtYWlsIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaERhdGFTZXR0aW5ncyIsImlkIiwiZGF0YSIsIm5vdGlmaWNhdGlvbnMiLCJuZXdfbWVzc2FnZSIsIm5ld19zdWIiLCJuZXdfY29tbWVudCIsInVwZGF0ZSIsImVtYWlsX25vdGlmaWNhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzYXZlRGF0YSIsIm5hbWUiLCJlbWFpbCIsImRlc2NyaXB0aW9uIiwiY2hhbmdlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2hvd1NuYWNrYmFyIiwic2V0T2xkUGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsImRlbGV0ZUFjY291bnQiLCJzdG9yZSIsImlzVXNlcklEIiwibG9nb3V0IiwibmF2aWdhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/settings.js\n");

/***/ })

});