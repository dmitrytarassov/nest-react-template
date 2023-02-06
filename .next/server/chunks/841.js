"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 4841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ RentalsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_contexts_rentals_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9102);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _frontend_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3043);
/* harmony import */ var _frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4986);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const RentalsProvider = ({ children , _rentals =[]  })=>{
    var ref;
    const { 0: init , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { city  } = (0,_frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_4__/* .useCity */ .h)();
    const fetchData = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(`/api/rental?filter[]=city,${city}&sort[0]=weight,desc`, _frontend_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (init) {
            fetchData.mutate();
        }
    }, [
        city
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInit(true);
    }, []);
    const rentals = (fetchData === null || fetchData === void 0 ? void 0 : (ref = fetchData.data) === null || ref === void 0 ? void 0 : ref.data) || _rentals || [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_contexts_rentals_context__WEBPACK_IMPORTED_MODULE_2__/* .RentalsContext.Provider */ .u.Provider, {
        value: {
            rentals
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;