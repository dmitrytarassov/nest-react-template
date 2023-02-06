exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 4541:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "NewsAndPromotions_title___GuRS",
	"not_alone": "NewsAndPromotions_not_alone__RkCX5",
	"nfContainer": "NewsAndPromotions_nfContainer__aX6VS"
};


/***/ }),

/***/ 1759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b8ba8bc-0"
})`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselFooter);


/***/ }),

/***/ 9029:
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
/* harmony import */ var _frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5161);
/* harmony import */ var _frontend_components_pages_rentalPromotions_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(737);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4541);
/* harmony import */ var _NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rentalPromotions_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_3__]);
_frontend_components_pages_rentalPromotions_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const NewsAndPromotions = ({ news , promotions ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            promotions.length === 0 && news.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nfContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            promotions.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: "\u0410\u043A\u0446\u0438\u0438"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentalPromotions_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        promotions: promotions
                    })
                ]
            }),
            news.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title), {
                            [(_NewsAndPromotions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().not_alone)]: promotions.length > 0
                        }),
                        children: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentalPromotions_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        promotions: news
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsAndPromotions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 737:
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _frontend_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3623);
/* harmony import */ var _frontend_components_CarouselContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9691);
/* harmony import */ var _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1694);
/* harmony import */ var _frontend_components_CarouselControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7058);
/* harmony import */ var _frontend_components_CarouselFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1759);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_6__, _frontend_components_CarouselControls__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_6__, _frontend_components_CarouselControls__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PositionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9856677-0"
})`
  margin: -32px -24px;
  background-color: ${({ theme  })=>theme.colors.background.primary
};
  padding: 32px 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const StyledPromotionsCarousel = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_frontend_components_CarouselContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a9856677-1"
})`
  width: 100%;
  .swiper {
    display: flex;
    flex-direction: column;
  }
`;
const PromotionsCarousel = ({ promotions  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PositionsContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledPromotionsCarousel, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                ..._frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_6__/* .halfPageSwiperProps */ .A,
                children: [
                    promotions.map((promotion)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                title: promotion.name,
                                description: promotion.shortText,
                                image: promotion.photos[0] ? (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(promotion.photos[0]) : "/public/logoWithCover.svg",
                                link: promotion.url,
                                tag: {
                                    type: promotion.promotionType,
                                    text: promotion.promotionText
                                },
                                date: promotion.date,
                                price: promotion.price,
                                discountPrice: promotion.discountPrice,
                                rentalLogo: promotion.rentalLogo
                            })
                        }, promotion.url)
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselFooter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControls__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            count: promotions.length + 1,
                            color: "black",
                            size: "small"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromotionsCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ })

};
;