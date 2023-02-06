"use strict";
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 5161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1035);




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ab0e6c50-0"
})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-ab0e6c50-1"
})`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 130%;
  color: ${({ theme  })=>theme.colors.text.primary
};
  white-space: pre-line;
  margin-top: 40px;
  text-align: center;
`;
const NotFound = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("not_found.svg")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Text, {
                children: [
                    "\u0421\u043E\u0436\u0430\u043B\u0435\u0435\u043C, \u043D\u043E \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ",
                    "\n",
                    "\u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E."
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ })

};
;