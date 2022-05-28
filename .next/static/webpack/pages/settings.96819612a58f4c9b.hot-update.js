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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _API_UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API/UserService */ \"./API/UserService.js\");\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/Loader */ \"./components/UI/Loader/index.jsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UI/Button */ \"./components/UI/Button/index.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Settings() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_6__.selectUserData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewMsg = ref1[0], setNftsNewMsg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewSubs = ref2[0], setNftsNewSubs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsNewComment = ref3[0], setNftsNewComment = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsUpdate = ref4[0], setNftsUpdate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ntfsEmail = ref5[0], setNftsEmail = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    function fetchData() {\n        return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n        _fetchData = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_UserService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetchDataSettings(userData.id);\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.data) {\n                            //setDataUser(response.data);\n                            //setName(response.data.name);\n                            //setEmail(response.data.email);\n                            //setDescription(response.data.description);\n                            //setCounterName(response.data.name.length);\n                            //setCounterDescription(response.data.description.length);\n                            if (response.data.notifications) {\n                                setNftsNewMsg(response.data.notifications.new_message);\n                                setNftsNewSubs(response.data.notifications.new_sub);\n                                setNftsNewComment(response.data.notifications.new_comment);\n                                setNftsUpdate(response.data.notifications.update);\n                                setNftsEmail(response.data.notifications.email_notification);\n                            }\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0435\\u043A\");\n                    case 10:\n                        _ctx.prev = 10;\n                        setIsLoading(false);\n                        return _ctx.finish(10);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7,\n                    10,\n                    13\n                ]\n            ]);\n        }));\n        return _fetchData.apply(this, arguments);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                marginTop: 50\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"settings\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"settings__header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                        className: \"title\",\n                        children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044F\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        mode: \"fill\",\n                        children: \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n};\n_s(Settings, \"0wfxLx3ExoLF/wzliKPNY5ZcHVA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjtBQUNZO0FBQ1E7QUFDTTtBQUNUO0FBQ0k7QUFDRDs7QUFHakMsU0FBU1MsUUFBUSxHQUFHOztJQUMvQixJQUFNQyxRQUFRLEdBQUdOLDREQUFjLENBQUNDLDhEQUFjLENBQUM7SUFDL0MsSUFBTU0sTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQWtDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYnBELFNBYW9CLEdBQWtCQSxHQUFjLEdBQWhDLEVBYnBCLFlBYWtDLEdBQUlBLEdBQWMsR0FBbEI7SUFDOUIsSUFBb0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFkdkQsVUFjcUIsR0FBbUJBLElBQWUsR0FBbEMsRUFkckIsYUFjb0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNoQyxJQUFzQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWZ6RCxXQWVzQixHQUFvQkEsSUFBZSxHQUFuQyxFQWZ0QixjQWVzQyxHQUFJQSxJQUFlLEdBQW5CO0lBQ2xDLElBQTRDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBaEIvRCxjQWdCeUIsR0FBdUJBLElBQWUsR0FBdEMsRUFoQnpCLGlCQWdCNEMsR0FBSUEsSUFBZSxHQUFuQjtJQUN4QyxJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWpCdkQsVUFpQnFCLEdBQW1CQSxJQUFlLEdBQWxDLEVBakJyQixhQWlCb0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNoQyxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWxCckQsU0FrQm9CLEdBQWtCQSxJQUFlLEdBQWpDLEVBbEJwQixZQWtCa0MsR0FBSUEsSUFBZSxHQUFuQjtJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1p1QixTQUFTLEVBQUUsQ0FBQztLQUNmLEVBQUUsRUFBRSxDQUFDO2FBRVNBLFNBQVM7ZUFBVEEsVUFBUzs7YUFBVEEsVUFBUztRQUFUQSxVQUFTLEdBQXhCLHlNQUEyQjtnQkFFYkMsUUFBUTs7Ozs7OytCQUFTbkIsMEVBQTZCLENBQUNJLFFBQVEsQ0FBQ2lCLEVBQUUsQ0FBQzs7d0JBQTNERixRQUFRLFlBQW1EO3dCQUVqRSxJQUFJQSxRQUFRLENBQUNHLElBQUksRUFBRTs0QkFDZiw2QkFBNkI7NEJBQzdCLDhCQUE4Qjs0QkFDOUIsZ0NBQWdDOzRCQUNoQyw0Q0FBNEM7NEJBQzVDLDRDQUE0Qzs0QkFDNUMsMERBQTBEOzRCQUUxRCxJQUFJSCxRQUFRLENBQUNHLElBQUksQ0FBQ0MsYUFBYSxFQUFFO2dDQUM3QmQsYUFBYSxDQUFDVSxRQUFRLENBQUNHLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxXQUFXLENBQUMsQ0FBQztnQ0FDdkRiLGNBQWMsQ0FBQ1EsUUFBUSxDQUFDRyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7Z0NBQ3BEWixpQkFBaUIsQ0FBQ00sUUFBUSxDQUFDRyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0csV0FBVyxDQUFDLENBQUM7Z0NBQzNEWCxhQUFhLENBQUNJLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxhQUFhLENBQUNJLE1BQU0sQ0FBQyxDQUFDO2dDQUNsRFYsWUFBWSxDQUFDRSxRQUFRLENBQUNHLElBQUksQ0FBQ0MsYUFBYSxDQUFDSyxrQkFBa0IsQ0FBQyxDQUFDOzZCQUNoRTt5QkFDSjs7Ozs7O3dCQUdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpS0FBK0IsQ0FBMkIsQ0FBQzs7O3dCQUU3Q3ZCLFlBQWQsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7U0FFM0I7ZUExQmNXLFVBQVM7O0lBNEJ4QixJQUFJWixTQUFTLEVBQUU7UUFDWCxxQkFDSSw4REFBQ3lCLEtBQUc7WUFBQ0MsS0FBSyxFQUFFO2dCQUFDQyxPQUFPLEVBQUUsTUFBTTtnQkFBRUMsY0FBYyxFQUFFLFFBQVE7Z0JBQUVDLFNBQVMsRUFBRSxFQUFFO2FBQUM7c0JBQ2xFLDRFQUFDbEMseURBQU07Ozs7b0JBQUU7Ozs7O2dCQUNQLENBQ1I7S0FDTDtJQUVELHFCQUNJLDhEQUFDOEIsS0FBRztRQUFDSyxTQUFTLEVBQUMsVUFBVTs7MEJBQ3JCLDhEQUFDeEMsa0RBQUk7O2tDQUNELDhEQUFDeUMsT0FBSztrQ0FBQyx3REFBUzs7Ozs7NEJBQWlCO2tDQUN4Qiw4REFBUkMsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNwQzswQkFFUCw4REFBQ1QsS0FBRztnQkFBQ0ssU0FBUyxFQUFDLGtCQUFrQjs7a0NBQzdCLDhEQUFDSyxHQUFDO3dCQUFDTCxTQUFTLEVBQUMsT0FBTztrQ0FBQyxtR0FBaUI7Ozs7OzRCQUFvQjtrQ0FDMUMsOERBQWZsQyx5REFBTTt3QkFBQ3dDLElBQUksRUFBQyxNQUFNO2tDQUFDLHdEQUFTOzs7Ozs0QkFBUzs7Ozs7O29CQUNwQzs7Ozs7O1lBQ0osQ0FDUjtDQUNMO0dBL0R1QnZDLFFBQVE7O1FBQ1hMLHdEQUFjO1FBQ2hCRCxrREFBUzs7O0FBRkpNLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanM/MDllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L2hvb2tzJztcbmltcG9ydCB7IHNlbGVjdFVzZXJEYXRhIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3VzZXInO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL0FQSS9Vc2VyU2VydmljZSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1VJL0xvYWRlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9CdXR0b25cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0VXNlckRhdGEpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbbnRmc05ld01zZywgc2V0TmZ0c05ld01zZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNOZXdTdWJzLCBzZXROZnRzTmV3U3Vic10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNOZXdDb21tZW50LCBzZXROZnRzTmV3Q29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW250ZnNVcGRhdGUsIHNldE5mdHNVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudGZzRW1haWwsIHNldE5mdHNFbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVXNlclNlcnZpY2UuZmV0Y2hEYXRhU2V0dGluZ3ModXNlckRhdGEuaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vc2V0RGF0YVVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy9zZXROYW1lKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgLy9zZXRFbWFpbChyZXNwb25zZS5kYXRhLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAvL3NldERlc2NyaXB0aW9uKHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIC8vc2V0Q291bnRlck5hbWUocmVzcG9uc2UuZGF0YS5uYW1lLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9zZXRDb3VudGVyRGVzY3JpcHRpb24ocmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBzZXROZnRzTmV3TXNnKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5uZXdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5mdHNOZXdTdWJzKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5uZXdfc3ViKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c05ld0NvbW1lbnQocmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb25zLm5ld19jb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c1VwZGF0ZShyZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbnMudXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0c0VtYWlsKHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucy5lbWFpbF9ub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0L3QsNGB0YLRgNC+0LXQuicpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiA1MH19PlxuICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7QndCw0YHRgtGA0L7QudC60Lg8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPSd0aXRsZSc+0J3QsNGB0YLRgNC+0LnQutC4INC/0YDQvtGE0LjQu9GPPC9iPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbW9kZT0nZmlsbCc+0KHQvtGF0YDQsNC90LjRgtGMPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwidXNlUm91dGVyIiwidXNlQXBwU2VsZWN0b3IiLCJzZWxlY3RVc2VyRGF0YSIsIlVzZXJTZXJ2aWNlIiwiTG9hZGVyIiwiQnV0dG9uIiwiU2V0dGluZ3MiLCJ1c2VyRGF0YSIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm50ZnNOZXdNc2ciLCJzZXROZnRzTmV3TXNnIiwibnRmc05ld1N1YnMiLCJzZXROZnRzTmV3U3VicyIsIm50ZnNOZXdDb21tZW50Iiwic2V0TmZ0c05ld0NvbW1lbnQiLCJudGZzVXBkYXRlIiwic2V0TmZ0c1VwZGF0ZSIsIm50ZnNFbWFpbCIsInNldE5mdHNFbWFpbCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2hEYXRhU2V0dGluZ3MiLCJpZCIsImRhdGEiLCJub3RpZmljYXRpb25zIiwibmV3X21lc3NhZ2UiLCJuZXdfc3ViIiwibmV3X2NvbW1lbnQiLCJ1cGRhdGUiLCJlbWFpbF9ub3RpZmljYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYiIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/settings.js\n");

/***/ })

});