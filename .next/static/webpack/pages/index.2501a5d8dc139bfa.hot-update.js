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

/***/ "./components/Canvas/index.js":
/*!************************************!*\
  !*** ./components/Canvas/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23)).then(function(mod) {\n        __webpack_require__(/*! p5/lib/addons/p5.sound */ \"./node_modules/p5/lib/addons/p5.sound.js\");\n        return mod.default;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"../components/Canvas/index.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nvar x = 50;\nvar y = 50;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var setup = function(p5, canvasParentRef) {\n        p5.createCanvas(500, 500).parent(canvasParentRef);\n    };\n    var draw = function(p5) {\n        p5.background(0);\n        p5.ellipse(x, y, 70, 70);\n        x++;\n    };\n    // Will only render on client-side\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/nexojornal/Projects/P5/Next/POC_P5_Next_Sound/components/Canvas/index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\nvar _c;\n$RefreshReg$(_c, \"Sketch\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDOztBQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR0QsbURBQU8sQ0FBQyxRQUFRO0lBQUZFLE1BQU0sQ0FBTkEsaU1BQWlCLENBQUVDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1FBQzdEQyxtQkFBTyxDQUFDLHdFQUF3QjtRQUNoQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsT0FBTztJQUNwQixDQUFDOzs7Ozs7O0lBQ0NDLEdBQUcsRUFBRSxLQUFLOztLQUpOTixNQUFNO0FBT1osR0FBRyxDQUFDTyxDQUFDLEdBQUcsRUFBRTtBQUNWLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLEVBQUU7QUFFViw2QkFBZSxvQ0FBQ0MsS0FBSyxFQUFLLENBQUM7SUFDMUIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLGVBQWUsRUFBSyxDQUFDO1FBQ3ZDRCxFQUFFLENBQUNFLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFQyxNQUFNLENBQUNGLGVBQWU7SUFDakQsQ0FBQztJQUVELEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsQ0FBUEosRUFBRSxFQUFLLENBQUM7UUFDckJBLEVBQUUsQ0FBQ0ssVUFBVSxDQUFDLENBQUM7UUFDZkwsRUFBRSxDQUFDTSxPQUFPLENBQUNWLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ3ZCRCxDQUFDO0lBQ0YsQ0FBQztJQUVGLEVBQWtDO0lBQ2pDLE1BQU0sNkVBQUVQLE1BQU07UUFBQ1UsS0FBSyxFQUFFQSxLQUFLO1FBQUVLLElBQUksRUFBRUEsSUFBSTs7Ozs7O0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW52YXMvaW5kZXguanM/NmY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXA1XCIpLnRoZW4oKG1vZCkgPT4ge1xuICByZXF1aXJlKCdwNS9saWIvYWRkb25zL3A1LnNvdW5kJyk7XG4gIHJldHVybiBtb2QuZGVmYXVsdFxufSksIHtcbiAgc3NyOiBmYWxzZVxufSk7XG5cbmxldCB4ID0gNTA7XG5sZXQgeSA9IDUwO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblx0Y29uc3Qgc2V0dXAgPSAocDUsIGNhbnZhc1BhcmVudFJlZikgPT4ge1xuXHRcdHA1LmNyZWF0ZUNhbnZhcyg1MDAsIDUwMCkucGFyZW50KGNhbnZhc1BhcmVudFJlZik7XG5cdH07XG5cblx0Y29uc3QgZHJhdyA9IChwNSkgPT4ge1xuXHRcdHA1LmJhY2tncm91bmQoMCk7XG5cdFx0cDUuZWxsaXBzZSh4LCB5LCA3MCwgNzApO1xuXHRcdHgrKztcblx0fTtcblxuLy8gV2lsbCBvbmx5IHJlbmRlciBvbiBjbGllbnQtc2lkZVxuXHRyZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+O1xufTsiXSwibmFtZXMiOlsiZHluYW1pYyIsIlNrZXRjaCIsImltcG9ydCIsInRoZW4iLCJtb2QiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInNzciIsIngiLCJ5IiwicHJvcHMiLCJzZXR1cCIsInA1IiwiY2FudmFzUGFyZW50UmVmIiwiY3JlYXRlQ2FudmFzIiwicGFyZW50IiwiZHJhdyIsImJhY2tncm91bmQiLCJlbGxpcHNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Canvas/index.js\n");

/***/ })

});