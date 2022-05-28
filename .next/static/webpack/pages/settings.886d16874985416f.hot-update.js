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

/***/ "./components/FormField/index.js":
/*!***************************************!*\
  !*** ./components/FormField/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormField\": function() { return /* binding */ FormField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _FormField_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormField.module.scss */ \"./components/FormField/FormField.module.scss\");\n/* harmony import */ var _FormField_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormField_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FormField(_param) {\n    var name = _param.name, placeholder = _param.placeholder, type = _param.type, props = _objectWithoutProperties(_param, [\n        \"name\",\n        \"placeholder\",\n        \"type\"\n    ]);\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)(), register = ref2.register, formState = ref2.formState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, register(name), {\n        name: name,\n        type: type,\n        placeholder: placeholder,\n        variant: \"outlined\",\n        size: \"small\",\n        error: !!((ref = formState.errors[name]) === null || ref === void 0 ? void 0 : ref.message),\n        helperText: (ref1 = formState.errors[name]) === null || ref1 === void 0 ? void 0 : ref1.message,\n        className: (_FormField_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__input)\n    }, props), void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/FormField/index.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(FormField, \"eTk/jddN2G1m83TZTJPJQ2YaBxo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext\n    ];\n});\n_c = FormField;\nvar _c;\n$RefreshReg$(_c, \"FormField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1GaWVsZC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0o7QUFDRzs7QUFHekMsU0FBU0csU0FBUyxDQUFDLE1BQW1DLEVBQUU7UUFBcENDLElBQUksR0FBTCxNQUFtQyxDQUFsQ0EsSUFBSSxFQUFFQyxXQUFXLEdBQWxCLE1BQW1DLENBQTVCQSxXQUFXLEVBQUVDLElBQUksR0FBeEIsTUFBbUMsQ0FBZkEsSUFBSSxFQUFLQyxLQUFLLDRCQUFsQyxNQUFtQztRQUFsQ0gsTUFBSTtRQUFFQyxhQUFXO1FBQUVDLE1BQUk7O1FBVzdCRSxHQUFzQixFQUNuQkEsSUFBc0I7O0lBWDFDLElBQWdDUixJQUFnQixHQUFoQkEsK0RBQWMsRUFBRSxFQUF4Q1MsUUFBUSxHQUFnQlQsSUFBZ0IsQ0FBeENTLFFBQVEsRUFBRUQsU0FBUyxHQUFLUixJQUFnQixDQUE5QlEsU0FBUztJQUUzQixxQkFDSSw4REFBQ04sK0RBQVMsb0JBQ0RPLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDO1FBQ25CQSxJQUFJLEVBQUVBLElBQUk7UUFDVkUsSUFBSSxFQUFFQSxJQUFJO1FBQ1ZELFdBQVcsRUFBRUEsV0FBVztRQUN4QkssT0FBTyxFQUFDLFVBQVU7UUFDbEJDLElBQUksRUFBQyxPQUFPO1FBQ1pDLEtBQUssRUFBRSxDQUFDLENBQUNKLENBQUFBLENBQUFBLEdBQXNCLEdBQXRCQSxTQUFTLENBQUNLLE1BQU0sQ0FBQ1QsSUFBSSxDQUFDLGNBQXRCSSxHQUFzQixXQUFTLEdBQS9CQSxLQUFBQSxDQUErQixHQUEvQkEsR0FBc0IsQ0FBRU0sT0FBTztRQUN4Q0MsVUFBVSxFQUFFUCxDQUFBQSxJQUFzQixHQUF0QkEsU0FBUyxDQUFDSyxNQUFNLENBQUNULElBQUksQ0FBQyxjQUF0QkksSUFBc0IsV0FBUyxHQUEvQkEsS0FBQUEsQ0FBK0IsR0FBL0JBLElBQXNCLENBQUVNLE9BQU87UUFDM0NFLFNBQVMsRUFBRWYsMkVBQWtCO09BQ3hCTSxLQUFLOzs7O1lBQ1osQ0FDSjtDQUNMO0dBakJlSixTQUFTOztRQUNXSCwyREFBYzs7O0FBRGxDRyxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybUZpZWxkL2luZGV4LmpzPzg0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Zvcm1GaWVsZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1GaWVsZCh7bmFtZSwgcGxhY2Vob2xkZXIsIHR5cGUsIC4uLnByb3BzfSkge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybUNvbnRleHQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHsuLi4gcmVnaXN0ZXIobmFtZSl9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgIGVycm9yPXshIWZvcm1TdGF0ZS5lcnJvcnNbbmFtZV0/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtmb3JtU3RhdGUuZXJyb3JzW25hbWVdPy5tZXNzYWdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9faW5wdXR9XG4gICAgICAgICAgICB7Li4uIHByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZUZvcm1Db250ZXh0Iiwic3R5bGVzIiwiVGV4dEZpZWxkIiwiRm9ybUZpZWxkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInByb3BzIiwiZm9ybVN0YXRlIiwicmVnaXN0ZXIiLCJ2YXJpYW50Iiwic2l6ZSIsImVycm9yIiwiZXJyb3JzIiwibWVzc2FnZSIsImhlbHBlclRleHQiLCJjbGFzc05hbWUiLCJmb3JtX19pbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormField/index.js\n");

/***/ })

});