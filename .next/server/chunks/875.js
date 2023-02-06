exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 8254:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CarouselControls_container__p7m1O",
	"hide-on-laptop": "CarouselControls_hide-on-laptop___23G1",
	"hide-on-tablet": "CarouselControls_hide-on-tablet__Fy3F6",
	"hide-on-mobile": "CarouselControls_hide-on-mobile__m8Lxd"
};


/***/ }),

/***/ 9691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a7db1be7-0"
})`
  display: block;
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselContainer);


/***/ }),

/***/ 7058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4110);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8254);
/* harmony import */ var _CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CarouselControls = ({ revertColors , count , size ="large" , color ,  })=>{
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_3__.useSwiper)();
    const next = ()=>{
        swiper.slideNext();
    };
    const prev = ()=>{
        swiper.slidePrev();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container), count > 0 && count <= 3 && (_CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["hide-on-laptop"]), count > 0 && count <= 2 && (_CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["hide-on-tablet"]), count === 1 && (_CarouselControls_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["hide-on-mobile"])),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                size: size,
                onClick: prev,
                revertColors: revertColors,
                direction: "left",
                color: color
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                size: size,
                onClick: next,
                revertColors: revertColors,
                direction: "right",
                color: color
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControls);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;