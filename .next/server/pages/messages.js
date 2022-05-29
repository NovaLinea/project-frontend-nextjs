/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/messages";
exports.ids = ["pages/messages"];
exports.modules = {

/***/ "./components/UI/Snackbar/Snackbar.module.scss":
/*!*****************************************************!*\
  !*** ./components/UI/Snackbar/Snackbar.module.scss ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"snackbar\": \"Snackbar_snackbar__luqWB\",\n\t\"snackbar-in-right\": \"Snackbar_snackbar-in-right__rLazq\",\n\t\"message\": \"Snackbar_message__6wc8x\",\n\t\"close\": \"Snackbar_close__qQzq_\",\n\t\"error\": \"Snackbar_error__5MubM\",\n\t\"success\": \"Snackbar_success__HYXRK\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1NuYWNrYmFyL1NuYWNrYmFyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VJL1NuYWNrYmFyL1NuYWNrYmFyLm1vZHVsZS5zY3NzP2M4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic25hY2tiYXJcIjogXCJTbmFja2Jhcl9zbmFja2Jhcl9fbHVxV0JcIixcblx0XCJzbmFja2Jhci1pbi1yaWdodFwiOiBcIlNuYWNrYmFyX3NuYWNrYmFyLWluLXJpZ2h0X19yTGF6cVwiLFxuXHRcIm1lc3NhZ2VcIjogXCJTbmFja2Jhcl9tZXNzYWdlX182d2M4eFwiLFxuXHRcImNsb3NlXCI6IFwiU25hY2tiYXJfY2xvc2VfX3FRenFfXCIsXG5cdFwiZXJyb3JcIjogXCJTbmFja2Jhcl9lcnJvcl9fNU11Yk1cIixcblx0XCJzdWNjZXNzXCI6IFwiU25hY2tiYXJfc3VjY2Vzc19fSFlYUktcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UI/Snackbar/Snackbar.module.scss\n");

/***/ }),

/***/ "./components/UI/Snackbar/index.jsx":
/*!******************************************!*\
  !*** ./components/UI/Snackbar/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snackbar\": () => (/* binding */ Snackbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Snackbar.module.scss */ \"./components/UI/Snackbar/Snackbar.module.scss\");\n/* harmony import */ var _Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gr */ \"react-icons/gr\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Snackbar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const timeout = 5000;\n    const { 0: message1 , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: mode1 , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({\n            show (message, mode) {\n                setMessage(message);\n                setMode(mode);\n                setShow(true);\n                setTimeout(()=>{\n                    setShow(false);\n                }, timeout);\n            }\n        })\n    );\n    return show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().snackbar),\n        id: mode1 === \"error\" ? (_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error) : (_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().success),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().message),\n                children: message1\n            }, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/UI/Snackbar/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__.GrFormClose, {\n                onClick: ()=>setShow(false)\n                ,\n                className: (_Snackbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().close)\n            }, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/UI/Snackbar/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/UI/Snackbar/index.jsx\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL1NuYWNrYmFyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRTtBQUN0QjtBQUNBO0FBR3JDLE1BQU1LLFFBQVEsaUJBQUdKLGlEQUFVLENBQUMsQ0FBQ0ssS0FBSyxFQUFFQyxHQUFHLEdBQUs7SUFDL0MsTUFBTSxFQU5WLEdBTVdDLElBQUksR0FOZixHQU1pQkMsT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN2QyxNQUFNVSxPQUFPLEdBQUcsSUFBSTtJQUNwQixNQUFNLEVBUlYsR0FRV0MsUUFBTyxHQVJsQixHQVFvQkMsVUFBVSxNQUFJWiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxNQUFNLEVBVFYsR0FTV2EsS0FBSSxHQVRmLEdBU2lCQyxPQUFPLE1BQUlkLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXBDRSwwREFBbUIsQ0FBQ0ssR0FBRyxFQUFFLElBQU0sQ0FBQztZQUM1QkMsSUFBSSxFQUFDRyxPQUFPLEVBQUVFLElBQUksRUFBRTtnQkFDaEJELFVBQVUsQ0FBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ3BCRyxPQUFPLENBQUNELElBQUksQ0FBQyxDQUFDO2dCQUVkSixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2RNLFVBQVUsQ0FBQyxJQUFNO29CQUNiTixPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNqQixFQUFFQyxPQUFPLENBQUM7YUFDZDtTQUNKLENBQUM7SUFBQSxDQUFDLENBQUM7SUFFSixPQUNJRixJQUFJLGtCQUNBLDhEQUFDUSxLQUFHO1FBQ0FDLFNBQVMsRUFBRWQsdUVBQWdCO1FBQzNCZ0IsRUFBRSxFQUFFTixLQUFJLEtBQUssT0FBTyxHQUFHVixvRUFBYSxHQUFHQSxzRUFBZTs7MEJBRXRELDhEQUFDYSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVkLHNFQUFlOzBCQUFHUSxRQUFPOzs7Ozt5QkFBTzswQkFDaEQsOERBQUNQLHVEQUFXO2dCQUFDa0IsT0FBTyxFQUFFLElBQU1iLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQUE7Z0JBQUVRLFNBQVMsRUFBRWQsb0VBQWE7Ozs7O3lCQUFHOzs7Ozs7aUJBQ3JFLENBQ1o7Q0FDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1mcm9udGVuZC8uL2NvbXBvbmVudHMvVUkvU25hY2tiYXIvaW5kZXguanN4P2JiNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1NuYWNrYmFyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgR3JGb3JtQ2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9ncidcblxuXG5leHBvcnQgY29uc3QgU25hY2tiYXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSA1MDAwO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICAgIHNob3cobWVzc2FnZSwgbW9kZSkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHNldE1vZGUobW9kZSk7XG5cbiAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93KGZhbHNlKVxuICAgICAgICAgICAgfSwgdGltZW91dClcbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBzaG93ICYmXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNuYWNrYmFyfVxuICAgICAgICAgICAgICAgIGlkPXttb2RlID09PSBcImVycm9yXCIgPyBjbGFzc2VzLmVycm9yIDogY2xhc3Nlcy5zdWNjZXNzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PnttZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxHckZvcm1DbG9zZSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufSkiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJmb3J3YXJkUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImNsYXNzZXMiLCJHckZvcm1DbG9zZSIsIlNuYWNrYmFyIiwicHJvcHMiLCJyZWYiLCJzaG93Iiwic2V0U2hvdyIsInRpbWVvdXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1vZGUiLCJzZXRNb2RlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsInNuYWNrYmFyIiwiaWQiLCJlcnJvciIsInN1Y2Nlc3MiLCJvbkNsaWNrIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UI/Snackbar/index.jsx\n");

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Messages)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Snackbar */ \"./components/UI/Snackbar/index.jsx\");\n\n\n\n\nfunction Messages() {\n    const snackbarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"messages\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u044F\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/messages.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/messages.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/messages.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Snackbar__WEBPACK_IMPORTED_MODULE_3__.Snackbar, {\n                ref: snackbarRef\n            }, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/messages.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/messages.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZXNzYWdlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFDd0I7QUFHdEMsU0FBU0csUUFBUSxHQUFHO0lBQy9CLE1BQU1DLFdBQVcsR0FBR0osNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFaEMscUJBQ0ksOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7OzBCQUNyQiw4REFBQ0wsa0RBQUk7O2tDQUNELDhEQUFDTSxPQUFLO2tDQUFDLHdEQUFTOzs7Ozs0QkFBUTtrQ0FDeEIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDcEM7MEJBRVAsOERBQUNSLDZEQUFRO2dCQUFDUyxHQUFHLEVBQUVQLFdBQVc7Ozs7O29CQUFJOzs7Ozs7WUFDNUIsQ0FDUjtDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1mcm9udGVuZC8uL3BhZ2VzL21lc3NhZ2VzLmpzP2IwNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvU25hY2tiYXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlcygpIHtcbiAgICBjb25zdCBzbmFja2JhclJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+0KHQvtC+0LHRidC10L3QuNGPPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxTbmFja2JhciByZWY9e3NuYWNrYmFyUmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJIZWFkIiwiU25hY2tiYXIiLCJNZXNzYWdlcyIsInNuYWNrYmFyUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/messages.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/messages.js"));
module.exports = __webpack_exports__;

})();