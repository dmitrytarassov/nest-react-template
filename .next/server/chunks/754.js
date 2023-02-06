"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 9852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PromotionsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PromotionsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    promotions: []
});


/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ PromotionsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_contexts_promotions_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9852);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2624);
/* harmony import */ var _frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4986);





const PromotionsProvider = ({ children , _promotions =[]  })=>{
    const { city  } = (0,_frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_4__/* .useCity */ .h)();
    const { 0: promotions , 1: setPromotions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_promotions);
    const { 0: init , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const load = async ()=>{
        const data = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__/* .loadAllPromotions */ .yv)(city, true);
        setPromotions(data);
        setInit(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (init) {
            load();
        }
    }, [
        city
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!_promotions.length) {
            load();
        } else {
            setInit(true);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_contexts_promotions_context__WEBPACK_IMPORTED_MODULE_2__/* .PromotionsContext.Provider */ .m.Provider, {
        value: {
            promotions
        },
        children: children
    });
};


/***/ })

};
;