"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./API/AuthService.js":
/*!****************************!*\
  !*** ./API/AuthService.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthService)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./API/index.js\");\n\nclass AuthService {\n    static async register(data) {\n        return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/auth/register\", data);\n    }\n    static async login(data) {\n        return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/auth/login\", data);\n    }\n    static async refresh(token) {\n        return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/auth/refresh\", {\n            headers: {\n                Authorization: `Bearer ${token}`\n            }\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUEkvQXV0aFNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUI7QUFFTixNQUFNQyxXQUFXO0lBQzVCLGFBQWFDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1FBQ3hCLE9BQU9ILDhDQUFTLENBQUMsZ0JBQWdCLEVBQUVHLElBQUksQ0FBQztLQUMzQztJQUVELGFBQWFFLEtBQUssQ0FBQ0YsSUFBSSxFQUFFO1FBQ3JCLE9BQU9ILDhDQUFTLENBQUMsYUFBYSxFQUFFRyxJQUFJLENBQUM7S0FDeEM7SUFFRCxhQUFhRyxPQUFPLENBQUNDLEtBQUssRUFBRTtRQUN4QixPQUFPUCw2Q0FBUSxDQUFDLGVBQWUsRUFBRTtZQUM3QlMsT0FBTyxFQUFFO2dCQUNMQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVILEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0osQ0FBQztLQUNMO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWZyb250ZW5kLy4vQVBJL0F1dGhTZXJ2aWNlLmpzP2UxMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRhcGkgZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHN0YXRpYyBhc3luYyByZWdpc3RlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiAkYXBpLnBvc3QoJy9hdXRoL3JlZ2lzdGVyJywgZGF0YSlcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIGxvZ2luKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICRhcGkucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyByZWZyZXNoKHRva2VuKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldCgnL2F1dGgvcmVmcmVzaCcsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyIkYXBpIiwiQXV0aFNlcnZpY2UiLCJyZWdpc3RlciIsImRhdGEiLCJwb3N0IiwibG9naW4iLCJyZWZyZXNoIiwidG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./API/AuthService.js\n");

/***/ }),

/***/ "./API/index.js":
/*!**********************!*\
  !*** ./API/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_URL = \"http://localhost:8083/api\";\nconst $api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    withCredentials: true,\n    baseURL: API_URL\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUEkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxPQUFPLEdBQUcsMkJBQTJCO0FBRWxELE1BQU1DLElBQUksR0FBR0YsbURBQVksQ0FBQztJQUN0QkksZUFBZSxFQUFFLElBQUk7SUFDckJDLE9BQU8sRUFBRUosT0FBTztDQUNuQixDQUFDO0FBRUYsaUVBQWVDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZnJvbnRlbmQvLi9BUEkvaW5kZXguanM/ZjM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4My9hcGknXG5cbmNvbnN0ICRhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICBiYXNlVVJMOiBBUElfVVJMXG59KVxuXG5leHBvcnQgZGVmYXVsdCAkYXBpOyJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9VUkwiLCIkYXBpIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./API/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popular */ \"./pages/popular.js\");\n/* harmony import */ var _API_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/AuthService */ \"./API/AuthService.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popular__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n};\nconst getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.getServerSideProps((store)=>async (ctx)=>{\n        try {\n            const { token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);\n            const userData = await _API_AuthService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].refresh(token);\n            console.log(userData.data);\n            store.dispatch((0,_redux_slices_user__WEBPACK_IMPORTED_MODULE_5__.setUserData)(userData.data));\n            return {\n                props: {}\n            };\n        } catch (e) {\n            console.log(e);\n            return {\n                props: {}\n            };\n        }\n    }\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRDtBQUNSO0FBQ2M7QUFDTTtBQUdwQyxTQUFTSyxJQUFJLEdBQUc7SUFDOUIscUJBQ0MsOERBQUNILGdEQUFPOzs7O1lBQUUsQ0FDVDtDQUNGO0FBRU0sTUFBTUksa0JBQWtCLEdBQUdOLG9FQUEwQixDQUFDTyxDQUFBQSxLQUFLLEdBQUksT0FBT0MsR0FBRyxHQUFLO1FBQ3BGLElBQUk7WUFDSCxNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFHUixxREFBWSxDQUFDTyxHQUFHLENBQUM7WUFFakMsTUFBTUUsUUFBUSxHQUFHLE1BQU1QLGdFQUFtQixDQUFDTSxLQUFLLENBQUM7WUFDakRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQztZQUMxQlAsS0FBSyxDQUFDUSxRQUFRLENBQUNYLCtEQUFXLENBQUNNLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUUzQyxPQUFPO2dCQUFFRSxLQUFLLEVBQUUsRUFBRTthQUFFLENBQUM7U0FDckIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7WUFDWEwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTztnQkFBRUQsS0FBSyxFQUFFLEVBQUU7YUFBRSxDQUFDO1NBQ3JCO0tBQ0Q7QUFBQSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWZyb250ZW5kLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcbmltcG9ydCBQb3B1bGFyIGZyb20gJy4vcG9wdWxhcidcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi9BUEkvQXV0aFNlcnZpY2UnO1xuaW1wb3J0IHsgc2V0VXNlckRhdGEgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvdXNlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8UG9wdWxhci8+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhzdG9yZSA9PiBhc3luYyAoY3R4KSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qge3Rva2VufSA9IHBhcnNlQ29va2llcyhjdHgpO1xuXG5cdFx0Y29uc3QgdXNlckRhdGEgPSBhd2FpdCBBdXRoU2VydmljZS5yZWZyZXNoKHRva2VuKTtcblx0XHRjb25zb2xlLmxvZyh1c2VyRGF0YS5kYXRhKVxuXHRcdHN0b3JlLmRpc3BhdGNoKHNldFVzZXJEYXRhKHVzZXJEYXRhLmRhdGEpKTtcblx0XHRcblx0XHRyZXR1cm4geyBwcm9wczoge30gfTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB7IHByb3BzOiB7fSB9O1xuXHR9XG59KTsiXSwibmFtZXMiOlsid3JhcHBlciIsInBhcnNlQ29va2llcyIsIlBvcHVsYXIiLCJBdXRoU2VydmljZSIsInNldFVzZXJEYXRhIiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInN0b3JlIiwiY3R4IiwidG9rZW4iLCJ1c2VyRGF0YSIsInJlZnJlc2giLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRpc3BhdGNoIiwicHJvcHMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/popular.js":
/*!**************************!*\
  !*** ./pages/popular.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popular)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Popular() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popular\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"\\u041F\\u043E\\u043F\\u0443\\u043B\\u044F\\u0440\\u043D\\u043E\\u0435\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/popular.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/popular.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/popular.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/popular.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3B1bGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFHYixTQUFTQyxPQUFPLEdBQUc7SUFDOUIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFNBQVM7a0JBQ3BCLDRFQUFDSCxrREFBSTs7OEJBQ0QsOERBQUNJLE9BQUs7OEJBQUMsOERBQVU7Ozs7O3dCQUFROzhCQUN6Qiw4REFBQ0MsTUFBSTtvQkFBQ0MsR0FBRyxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozt3QkFBRzs7Ozs7O2dCQUNwQzs7Ozs7WUFDTCxDQUNSO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWZyb250ZW5kLy4vcGFnZXMvcG9wdWxhci5qcz9lZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1bGFyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcHVsYXInPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPtCf0L7Qv9GD0LvRj9GA0L3QvtC1PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJQb3B1bGFyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/popular.js\n");

/***/ }),

/***/ "./redux/slices/user.js":
/*!******************************!*\
  !*** ./redux/slices/user.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectUserData\": () => (/* binding */ selectUserData),\n/* harmony export */   \"setUserData\": () => (/* binding */ setUserData),\n/* harmony export */   \"userReducer\": () => (/* binding */ userReducer),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    data: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        setUserData: (state, action)=>{\n            state.data = action.payload;\n        }\n    },\n    extraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{\n            return {\n                ...state,\n                ...action.payload.user\n            };\n        }\n    }\n});\nconst { setUserData  } = userSlice.actions;\nconst selectUserData = (state)=>state.user.data\n;\nconst userReducer = userSlice.reducer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZXMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNEO0FBRzdDLE1BQU1FLFlBQVksR0FBRztJQUNqQkMsSUFBSSxFQUFFLElBQUk7Q0FDYjtBQUVNLE1BQU1DLFNBQVMsR0FBR0osNkRBQVcsQ0FBQztJQUNqQ0ssSUFBSSxFQUFFLE1BQU07SUFDWkgsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDTkMsV0FBVyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzVCRCxLQUFLLENBQUNMLElBQUksR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUM7U0FDL0I7S0FDSjtJQUNEQyxhQUFhLEVBQUU7UUFDWCxDQUFDVix1REFBTyxDQUFDLEVBQUcsQ0FBQ08sS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDM0IsT0FBTztnQkFDSCxHQUFJRCxLQUFLO2dCQUNULEdBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRSxJQUFJO2FBQzFCO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFFSyxNQUFNLEVBQUVMLFdBQVcsR0FBRSxHQUFHSCxTQUFTLENBQUNTLE9BQU8sQ0FBQztBQUUxQyxNQUFNQyxjQUFjLEdBQUcsQ0FBQ04sS0FBSyxHQUFLQSxLQUFLLENBQUNJLElBQUksQ0FBQ1QsSUFBSTtBQUFBLENBQUM7QUFFbEQsTUFBTVksV0FBVyxHQUFHWCxTQUFTLENBQUNZLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZnJvbnRlbmQvLi9yZWR1eC9zbGljZXMvdXNlci5qcz84M2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXRhOiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3VzZXInLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRVc2VyRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IHtcbiAgICAgICAgW0hZRFJBVEVdIDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uIHN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlckRhdGEgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckRhdGEgPSAoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YTtcblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gdXNlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiSFlEUkFURSIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJ1c2VyIiwiYWN0aW9ucyIsInNlbGVjdFVzZXJEYXRhIiwidXNlclJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slices/user.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/user */ \"./redux/slices/user.js\");\n\n\n\nfunction makeStore() {\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            user: _slices_user__WEBPACK_IMPORTED_MODULE_2__.userReducer\n        }\n    });\n}\nconst store = makeStore();\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRDtBQUNBO0FBQ0w7QUFHckMsU0FBU0csU0FBUyxHQUFHO0lBQ3hCLE9BQU9ILGdFQUFjLENBQUM7UUFDbEJJLE9BQU8sRUFBRTtZQUNMQyxJQUFJLEVBQUVILHFEQUFXO1NBQ3BCO0tBQ0osQ0FBQztDQUNMO0FBRU0sTUFBTUksS0FBSyxHQUFHSCxTQUFTLEVBQUUsQ0FBQztBQUMxQixNQUFNSSxPQUFPLEdBQUdOLGlFQUFhLENBQUNFLFNBQVMsRUFBRTtJQUFFSyxLQUFLLEVBQUUsSUFBSTtDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZnJvbnRlbmQvLi9yZWR1eC9zdG9yZS5qcz8zNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IHVzZXJSZWR1Y2VyIH0gZnJvbSAnLi9zbGljZXMvdXNlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdG9yZSgpIHtcbiAgICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xuICAgICAgICByZWR1Y2VyOiB7IFxuICAgICAgICAgICAgdXNlcjogdXNlclJlZHVjZXIsXG4gICAgICAgIH0sXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gbWFrZVN0b3JlKCk7XG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJ1c2VyUmVkdWNlciIsIm1ha2VTdG9yZSIsInJlZHVjZXIiLCJ1c2VyIiwic3RvcmUiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();