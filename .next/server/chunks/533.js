"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 3533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3588);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6497);







const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-d5a7763e-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: calc(100vh - 72px - 275px);
  width: 100%;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-d5a7763e-1"
})`
  margin-bottom: 56px;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 64px;
  white-space: break-spaces;
  text-align: center;
  padding: 0 32px;

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      margin: 64px 0 32px;
    `)
};
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    componentId: "sc-d5a7763e-2"
})`
  width: 100%;
  margin-top: 32px;
  margin-bottom: -32px;

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      height: 250px;
      object-fit: cover;
    `)
};
`;
const images = {
    500: "/publc/500.svg",
    400: "/publc/400.svg"
};
function ErrorPage({ statusCode  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_4__/* .useRentals */ .w)();
    const { activeRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_6__/* .useMap */ .S)();
    const { 0: init , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setInit(true);
        return ()=>{
            setInit(false);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (activeRental && init) {
            const rental = rentals.find(({ id  })=>id === activeRental
            );
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [
        activeRental
    ]);
    const code = statusCode < 500 ? 400 : 500;
    const text = code === 500 ? "\u041E\u0439, \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C,\n\u0441\u043A\u043E\u0440\u043E \u043C\u044B \u0432\u0441\u0435 \u043F\u043E\u0447\u0438\u043D\u0438\u043C!" : "\u041E\u043F\u0430! \u0410 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430-\u0442\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        image: images[code] || images[500],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                type: "link",
                href: "/",
                children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                src: images[code] || images[500]
            })
        ]
    });
};


/***/ }),

/***/ 9086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ MapContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MapContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    markers: [],
    selectRental: ()=>{
        console.log("selectRental do nothing");
    // do nothing
    },
    zoom: 14,
    activeRental: ""
});


/***/ }),

/***/ 9102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ RentalsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RentalsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    rentals: []
});


/***/ }),

/***/ 6497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_contexts_map_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9086);


function useMap() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_frontend_contexts_map_content__WEBPACK_IMPORTED_MODULE_1__/* .MapContext */ .X);
    if (!context) {
        throw new Error(`Missing map context`);
    }
    return context;
}


/***/ }),

/***/ 1143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useRentals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_contexts_rentals_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9102);


function useRentals() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_frontend_contexts_rentals_context__WEBPACK_IMPORTED_MODULE_1__/* .RentalsContext */ .u);
    if (!context) {
        throw new Error(`Missing promotions context`);
    }
    return context;
}


/***/ })

};
;