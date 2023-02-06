exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 1947:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__r_ga_",
	"large": "Button_large__x48qx",
	"primary": "Button_primary__BM2rC",
	"whiteOrange": "Button_whiteOrange__A3IBp",
	"grayViolet": "Button_grayViolet__19Asg",
	"aButton": "Button_aButton___dtyI"
};


/***/ }),

/***/ 3588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1947);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const Button = ({ onClick =()=>{
/* do nothing */ } , children , disabled , type ="button" , href ="" , blank =false , className , variant ="primary" , size ="medium"  })=>{
    const target = blank ? {
        target: "_blank"
    } : {};
    return type === "button" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button), (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[variant], (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[size], className),
        onClick: onClick,
        disabled: disabled,
        children: children
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        ...target,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button), (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[variant], (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[size], (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aButton), className),
            "data-button-link": true,
            ...target,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;