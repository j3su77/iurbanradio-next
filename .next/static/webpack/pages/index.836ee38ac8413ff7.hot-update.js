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

/***/ "./components/layouts/SeletedTheme.tsx":
/*!*********************************************!*\
  !*** ./components/layouts/SeletedTheme.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SeletedTheme\": function() { return /* binding */ SeletedTheme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ui_UIContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ui/UIContext */ \"./context/ui/UIContext.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar SeletedTheme = function(param) {\n    var children = param.children;\n    _s();\n    var isDark = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ui_UIContext__WEBPACK_IMPORTED_MODULE_2__.UIContext).isDark;\n    var isTheme;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isTheme = isDark ? \"dark-theme\" : \"light-theme\";\n        if (true) document.querySelector(\"body\").classList.add(isTheme);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isTheme = isDark ? \"dark-theme\" : \"light-theme\";\n        if (true) {\n            document.querySelector(\"body\").classList.remove(\"light-theme\");\n            document.querySelector(\"body\").classList.remove(\"dark-theme\");\n            document.querySelector(\"body\").classList.add(isTheme);\n        }\n    }, [\n        isDark\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false));\n};\n_s(SeletedTheme, \"03izx8lJLJ7MqC4U4a7hqqpTyaU=\");\n_c = SeletedTheme;\nvar _c;\n$RefreshReg$(_c, \"SeletedTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvU2VsZXRlZFRoZW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRVk7QUFDUzs7QUFFL0MsR0FBSyxDQUFDSSxZQUFZLEdBQU8sUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekMsR0FBSyxDQUFHQyxNQUFNLEdBQUtMLGlEQUFVLENBQUNFLDREQUFTLEVBQS9CRyxNQUFNO0lBQ2QsR0FBRyxDQUFDQyxPQUFPO0lBQ1hMLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZLLE9BQU8sR0FBR0QsTUFBTSxHQUFHLENBQVksY0FBRyxDQUFhO1FBQy9DLEVBQUUsRUFBRUUsSUFBZSxFQUFHRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFNLE9BQUdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDTixPQUFPO0lBQzdFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTEwsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkssT0FBTyxHQUFHRCxNQUFNLEdBQUcsQ0FBWSxjQUFHLENBQWE7UUFDL0MsRUFBRSxFQUFFRSxJQUFlLEVBQUUsQ0FBQztZQUNwQkUsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBTSxPQUFHQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFhO1lBQzlESixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFNLE9BQUdDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7WUFDN0RKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQU0sT0FBR0MsU0FBUyxDQUFDQyxHQUFHLENBQUNOLE9BQU87UUFDdkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDRDtRQUFBQSxNQUFNO0lBQUEsQ0FBQztJQUVYLE1BQU07a0JBQUlELFFBQVE7O0FBQ3BCLENBQUM7R0FsQllELFlBQVk7S0FBWkEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvU2VsZXRlZFRoZW1lLnRzeD84NDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVSUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC91aS9VSUNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IFNlbGV0ZWRUaGVtZTogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgaXNEYXJrIH0gPSB1c2VDb250ZXh0KFVJQ29udGV4dCk7XG4gIGxldCBpc1RoZW1lO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzVGhlbWUgPSBpc0RhcmsgPyBcImRhcmstdGhlbWVcIiA6IFwibGlnaHQtdGhlbWVcIjtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLmNsYXNzTGlzdC5hZGQoaXNUaGVtZSlcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNUaGVtZSA9IGlzRGFyayA/IFwiZGFyay10aGVtZVwiIDogXCJsaWdodC10aGVtZVwiO1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIS5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstdGhlbWVcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEuY2xhc3NMaXN0LmFkZChpc1RoZW1lKTtcbiAgICB9XG4gIH0sIFtpc0RhcmtdKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJVSUNvbnRleHQiLCJTZWxldGVkVGhlbWUiLCJjaGlsZHJlbiIsImlzRGFyayIsImlzVGhlbWUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/SeletedTheme.tsx\n");

/***/ })

});