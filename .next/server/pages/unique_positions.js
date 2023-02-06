(() => {
var exports = {};
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 1144:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "InfoText_text__YpTmN",
	"onlyMobile": "InfoText_onlyMobile__WHGE4",
	"onlyDesktop": "InfoText_onlyDesktop__m7Jdj"
};


/***/ }),

/***/ 3504:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "BannerBase_base__Nfhhd"
};


/***/ }),

/***/ 7090:
/***/ ((module) => {

// Exports
module.exports = {
	"positions": "Positions_positions__Q4X7b",
	"controls": "Positions_controls__i206u"
};


/***/ }),

/***/ 2162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3504);
// Exports
module.exports = {
	"banner": "UniquePositions_banner__R5XM_ " + ___CSS_LOADER_ICSS_IMPORT_0___["base"] + "",
	"text": "UniquePositions_text__MIWKd"
};


/***/ }),

/***/ 2085:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4110);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
swiper_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StyledCarouselControls = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-7f41a10-0"
})`
  display: flex;

  &.hide-from-tablet {
    display: none;
    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
        `)
}
  }

  &.hide-from-mobile {
    display: none;
    ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
        `)
}
  }

  &.hide {
    display: none;
  }
`;
const CarouselControlsHalfScreen = ({ revertColors , count , size ="large" , className ,  })=>{
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_4__.useSwiper)();
    const next = ()=>{
        swiper.slideNext();
    };
    const prev = ()=>{
        swiper.slidePrev();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCarouselControls, {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, count < 2 && "hide", count === 2 && "hide-from-mobile"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: size,
                onClick: prev,
                revertColors: revertColors,
                direction: "left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: size,
                onClick: next,
                revertColors: revertColors,
                direction: "right"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControlsHalfScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1144);
/* harmony import */ var _InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const InfoText = ({ children , className , onlyMobile , onlyDesktop  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text), className, {
            [(_InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3___default().onlyDesktop)]: onlyDesktop,
            [(_InfoText_module_scss__WEBPACK_IMPORTED_MODULE_3___default().onlyMobile)]: onlyMobile
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoText);


/***/ }),

/***/ 3498:
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _frontend_components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3623);
/* harmony import */ var _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1694);
/* harmony import */ var _frontend_components_CarouselControlsHalfScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2085);
/* harmony import */ var _Positions_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7090);
/* harmony import */ var _Positions_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Positions_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_4__, _frontend_components_CarouselControlsHalfScreen__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_4__, _frontend_components_CarouselControlsHalfScreen__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Positions = ({ positions  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Positions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().styles),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            ..._frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_4__/* .halfPageSwiperProps */ .A,
            children: [
                positions.map(({ id , ...card })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...card
                        })
                    }, id)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControlsHalfScreen__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: (_Positions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().controls),
                    revertColors: true,
                    count: positions.length,
                    size: "small"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Positions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2193:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4532);
/* harmony import */ var _frontend_components_pages_unique_positions_Positions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3498);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5161);
/* harmony import */ var _frontend_components_InfoText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1952);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6497);
/* harmony import */ var _UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2162);
/* harmony import */ var _UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_unique_positions_Positions__WEBPACK_IMPORTED_MODULE_5__]);
_frontend_components_pages_unique_positions_Positions__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-5da570b4-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const StyledInfoText = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_frontend_components_InfoText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5da570b4-1"
})`
  color: #fff;
  max-width: 448px;
  margin-bottom: 0;
  min-height: 145px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  align-items: center;
`;
const UniquePositionsPage = ({ rentals , uniques  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: searchString , 1: setSearchString  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { activeRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_9__/* .useMap */ .S)();
    const { 0: init , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const breadcrumbs = [
        {
            name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            link: "/"
        },
        {
            name: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",
            link: "/unique_positions"
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInit(true);
        return ()=>{
            setInit(false);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const rental = rentals.find(({ id  })=>id === activeRental
        );
        if (init && rental) {
            console.log(`go to /rentals/${rental.url}`);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [
        activeRental
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                backLink: `/`,
                title: `Уникальные позиции`,
                revertColors: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10___default().banner),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_InfoText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        onlyDesktop: true,
                        className: (_UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                        children: [
                            "\u0412 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u043A\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0435\u0434\u043A\u0438\u0435, ",
                            "\n",
                            "\u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, ",
                            "\n",
                            "\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0438!"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_InfoText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        onlyMobile: true,
                        className: (_UniquePositions_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                        children: [
                            "\u0412 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u043A\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 ",
                            "\n",
                            "\u0440\u0435\u0434\u043A\u0438\u0435, \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0438 \u0434\u0430\u0436\u0435 ",
                            "\n",
                            "\u0442\u0430\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B ",
                            "\n",
                            "\u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0438!"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarouselContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: uniques.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_unique_positions_Positions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        positions: uniques
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniquePositionsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CityContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CityContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    city: "spb",
    setCity: ()=>{
        console.log("setCity do nothing");
    // do nothing
    }
});


/***/ }),

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useCity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_contexts_city_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9132);


function useCity() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_frontend_contexts_city_content__WEBPACK_IMPORTED_MODULE_1__/* .CityContext */ .i);
    if (!context) {
        throw new Error(`Missing news context`);
    }
    return context;
}


/***/ }),

/***/ 3995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4841);
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3891);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2624);
/* harmony import */ var _frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1517);
/* harmony import */ var _frontend_components_pages_unique_positions_UniquePositions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_2__, _frontend_components_pages_unique_positions_UniquePositions__WEBPACK_IMPORTED_MODULE_4__]);
([_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_2__, _frontend_components_pages_unique_positions_UniquePositions__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const loadData = async (city)=>{
    const rentals = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__/* .getAllRentalsForCity */ .rk)(city);
    const uniques = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__/* .loadUniques */ .I2)(city);
    return {
        rentals,
        uniques
    };
};
const UniquePositions = ({ rentals , uniques , city ,  })=>{
    const { 0: _rentals , 1: _setRentals  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rentals || []);
    const { 0: _uniques , 1: _setUniques  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(uniques || []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!rentals || !uniques) {
            loadData(city).then((data)=>{
                _setRentals(data.rentals);
                _setUniques(data.uniques);
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_2__/* .RentalsProvider */ .l, {
        _rentals: rentals,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_unique_positions_UniquePositions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            rentals: _rentals,
            uniques: _uniques
        })
    });
};
async function getServerSideProps(context) {
    const city = (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_5__/* .getCity */ .h)(context.req.session.city);
    const { rentals , uniques  } = await loadData(city);
    return {
        props: {
            rentals,
            uniques,
            city,
            ...(0,_frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
                seo_title: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432",
                seo_description: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432",
                seo_keywords: null,
                site_url: process.env.SITE_URL
            })
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniquePositions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearify = (obj)=>{
    if (Array.isArray(obj)) {
        // @ts-ignore
        return obj.map((v)=>clearify(v)
        );
    } else {
        const keys = Object.keys(obj);
        const newObject = {
            ...obj
        };
        keys.forEach((key)=>{
            if (typeof obj[key] === "undefined") {
                delete newObject[key];
            }
        });
        return newObject;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearify);


/***/ }),

/***/ 1694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ halfPageSwiperProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var _frontend_utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const halfPageSwiperProps = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation
    ],
    spaceBetween: 24,
    slidesPerView: 1.1,
    breakpoints: {
        [_frontend_utils_theme__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mobile */ .AV.mobile]: {
            slidesPerView: 2.35,
            spaceBetween: 24
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4384:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/format");

/***/ }),

/***/ 908:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale/ru");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,238,523,53,946,161,841], () => (__webpack_exec__(3995)));
module.exports = __webpack_exports__;

})();