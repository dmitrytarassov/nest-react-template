(() => {
var exports = {};
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 1015:
/***/ ((module) => {

// Exports
module.exports = {
	"block": "Block_block__c31Nh",
	"title": "Block_title__7OVA9"
};


/***/ }),

/***/ 7105:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PromotionsCarousel_container___UZIH",
	"carousel": "PromotionsCarousel_carousel__to1IM",
	"title": "PromotionsCarousel_title__amIDY",
	"footer": "PromotionsCarousel_footer__H_3xZ",
	"footerMobile": "PromotionsCarousel_footerMobile__84jGu",
	"footerDesktop": "PromotionsCarousel_footerDesktop___EgUz",
	"button": "PromotionsCarousel_button__8q99b"
};


/***/ }),

/***/ 378:
/***/ ((module) => {

// Exports
module.exports = {
	"blocks": "RentalPage_blocks__eksEH",
	"fullRow": "RentalPage_fullRow__AffsV",
	"wtRow": "RentalPage_wtRow__pgxYj",
	"flexibleContainer": "RentalPage_flexibleContainer__4I2LI",
	"socialLink": "RentalPage_socialLink__GV8qp",
	"row": "RentalPage_row__sWWRD",
	"servicesContainer": "RentalPage_servicesContainer__XsGst",
	"servicesRow": "RentalPage_servicesRow__vk5pY",
	"serviceLink": "RentalPage_serviceLink__wHC2n",
	"text": "RentalPage_text__OWls3",
	"contactsLink": "RentalPage_contactsLink__5w4BH",
	"contactsLinkIconContainer": "RentalPage_contactsLinkIconContainer__Og5Nk",
	"contactsIcon": "RentalPage_contactsIcon__KD98i"
};


/***/ }),

/***/ 8636:
/***/ ((module) => {

// Exports
module.exports = {
	"service": "Service_service__KKhji"
};


/***/ }),

/***/ 9539:
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
    componentId: "sc-679df206-0"
})`
  display: flex;

  &.hide-on-laptop {
    display: none;
    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
        `)
}
  }

  &.hide-on-tablet {
    display: none;
    ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
        `)
}
  }

  &.hide-on-mobile {
    display: none;
  }
`;
const CarouselControlsWithMap = ({ revertColors , count , size ="large" , color ,  })=>{
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_4__.useSwiper)();
    const next = ()=>{
        swiper.slideNext();
    };
    const prev = ()=>{
        swiper.slidePrev();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCarouselControls, {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(count > 0 && count <= 2 && "hide-on-laptop", count > 0 && count === 1 && "hide-on-tablet"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: size,
                onClick: prev,
                revertColors: revertColors,
                direction: "left",
                color: color
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: size,
                onClick: next,
                revertColors: revertColors,
                direction: "right",
                color: color
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControlsWithMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Block_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);
/* harmony import */ var _Block_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Block_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Block = ({ children , title , blockName  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Block_module_scss__WEBPACK_IMPORTED_MODULE_2___default().block),
        style: {
            gridArea: blockName
        },
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Block_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


/***/ }),

/***/ 1154:
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
/* harmony import */ var _frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3588);
/* harmony import */ var _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1694);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1035);
/* harmony import */ var _frontend_components_CarouselControlsWithMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9539);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2624);
/* harmony import */ var _PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7105);
/* harmony import */ var _PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_5__, _frontend_components_CarouselControlsWithMap__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_5__, _frontend_components_CarouselControlsWithMap__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PromotionsCarousel = ({ id , url  })=>{
    const { 0: allPromotions , 1: setAllPromotions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_7__/* .loadPromotionsByRentalId */ .MO)(id).then((data)=>{
            setAllPromotions(data);
        });
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: allPromotions.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                    children: [
                        "\u0410\u043A\u0446\u0438\u0438 \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0440\u0435\u043D\u0442\u0430\u043B\u0430",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button),
                            type: "link",
                            href: `/rentals/${url}/promotions`,
                            children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().carousel),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        ..._frontend_utils_halfPageSwiperProps__WEBPACK_IMPORTED_MODULE_5__/* .halfPageSwiperProps */ .A,
                        children: [
                            allPromotions.map((promotion)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        title: promotion.name,
                                        description: promotion.shortText,
                                        image: promotion.photos[0] ? (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(promotion.photos[0]) : "/public/logoWithCover.svg",
                                        link: promotion.url,
                                        tag: {
                                            type: promotion.promotionType,
                                            text: promotion.promotionText
                                        },
                                        date: promotion.date,
                                        rentalLogo: promotion.rentalLogo,
                                        size: "small",
                                        price: promotion.price,
                                        discountPrice: promotion.discountPrice
                                    })
                                }, promotion.id)
                            ),
                            allPromotions.length > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().footer), (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().footerDesktop)),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControlsWithMap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    count: allPromotions.length,
                                    size: "small",
                                    color: "black"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().footer), (_PromotionsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_9___default().footerMobile)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        type: "link",
                                        href: `/rentals/${id}/promotions`,
                                        children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_CarouselControlsWithMap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        count: allPromotions.length,
                                        size: "medium",
                                        color: "black"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromotionsCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1431:
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
/* harmony import */ var _frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4532);
/* harmony import */ var _frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(223);
/* harmony import */ var _frontend_components_pages_rental_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1154);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1035);
/* harmony import */ var _frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5737);
/* harmony import */ var _frontend_components_pages_rental_Service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2211);
/* harmony import */ var _frontend_utils_socials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(555);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6497);
/* harmony import */ var _RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(378);
/* harmony import */ var _RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9053);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rental_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_7__, _frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_8__]);
([_frontend_components_pages_rental_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_7__, _frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const RentalPage = ({ rental: rental1  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_4__/* .useRentals */ .w)();
    const { activeRental , selectRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_11__/* .useMap */ .S)();
    const { 0: init , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const breadcrumbs = [
        {
            name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            link: "/"
        },
        {
            name: "\u0420\u0435\u043D\u0442\u0430\u043B\u044B",
            link: "/rentals"
        },
        {
            name: rental1.name,
            link: `/rentals/${rental1.id}`
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (init) {
            const rental = rentals.find(({ id  })=>id === activeRental
            );
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [
        activeRental
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInit(true);
        selectRental(rental1.id);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                backLink: "/rentals",
                title: rental1.name,
                image: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(rental1.icon),
                rating: rental1.rating
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().blocks),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "\u0410\u0434\u0440\u0435\u0441:",
                        blockName: "address",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fullRow),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().text),
                                children: rental1.address
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:",
                        blockName: "contacts",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fullRow),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLink),
                                    href: `tel:+${rental1.phone}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLinkIconContainer),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsIcon),
                                                width: 24,
                                                height: 24,
                                                src: "/public/icons/phone.svg"
                                            })
                                        }),
                                        (0,_frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_8__/* .phoneFormat */ .w)(`+${rental1.phone}`)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fullRow),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLink),
                                    href: `mailto:${rental1.email}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLinkIconContainer),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsIcon),
                                                width: 24,
                                                height: 24,
                                                src: "/public/icons/email.svg"
                                            })
                                        }),
                                        rental1.email
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438:",
                        blockName: "socials",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()((_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().flexibleContainer), (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fullRow)),
                            children: [
                                rental1.telegram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fullRow),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: rental1.telegram,
                                        target: "_blank",
                                        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()((_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLink)),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLinkIconContainer),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsIcon),
                                                    width: 24,
                                                    height: 24,
                                                    src: "/public/icons/telegram.svg"
                                                })
                                            }),
                                            (0,_frontend_utils_socials__WEBPACK_IMPORTED_MODULE_10__/* .parseTelegram */ .Me)(rental1.telegram)
                                        ]
                                    })
                                }),
                                rental1.vk && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().row),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: rental1.vk,
                                        target: "_blank",
                                        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()((_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLink), (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().socialLink)),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLinkIconContainer),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsIcon),
                                                    width: 24,
                                                    height: 24,
                                                    src: "/public/icons/vk.svg"
                                                })
                                            }),
                                            (0,_frontend_utils_socials__WEBPACK_IMPORTED_MODULE_10__/* .parseVk */ .LN)(rental1.vk)
                                        ]
                                    })
                                }),
                                rental1.web && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().row),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: rental1.web,
                                        target: "_blank",
                                        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()((_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLink), (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().socialLink)),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsLinkIconContainer),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().contactsIcon),
                                                    width: 24,
                                                    height: 24,
                                                    src: "/public/icons/web.svg"
                                                })
                                            }),
                                            (0,_frontend_utils_socials__WEBPACK_IMPORTED_MODULE_10__/* .parseUrl */ .en)(rental1.web)
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:",
                        blockName: "workingtime",
                        children: rental1.workingTime.split("\n").map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().wtRow),
                                children: e
                            }, e)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B:",
                        blockName: "services",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().servicesContainer),
                            children: [
                                rental1.delivery && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().servicesRow),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().serviceLink),
                                        href: rental1.delivery,
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Service__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
                                        })
                                    })
                                }),
                                rental1.selfService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().servicesRow),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().serviceLink),
                                        href: rental1.selfService,
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Service__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            children: "Self Service"
                                        })
                                    })
                                }),
                                rental1.repair && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().servicesRow),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().serviceLink),
                                        href: rental1.repair,
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Service__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            children: "\u0420\u0435\u043C\u043E\u043D\u0442"
                                        })
                                    })
                                }),
                                rental1.insurance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().servicesRow),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_RentalPage_module_scss__WEBPACK_IMPORTED_MODULE_15___default().serviceLink),
                                        href: rental1.insurance,
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_Service__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_PromotionsCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                id: rental1.id,
                url: rental1.url
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Service_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var _Service_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Service_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Service = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Service_module_scss__WEBPACK_IMPORTED_MODULE_2___default().service),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "16",
                height: "17",
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "8",
                    cy: "8.5",
                    r: "8",
                    fill: "#22C56D"
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


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

/***/ 2240:
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
/* harmony import */ var _frontend_providers_products_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2892);
/* harmony import */ var _frontend_providers_promotions_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9754);
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3891);
/* harmony import */ var _frontend_components_pages_rental_RentalPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2624);
/* harmony import */ var _frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rental_RentalPage__WEBPACK_IMPORTED_MODULE_4__]);
_frontend_components_pages_rental_RentalPage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const loadData = async (rentalUrl)=>{
    return await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_6__/* .loadRental */ .Lc)(rentalUrl);
};
const Rental = ({ rental  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: _rental , 1: set_rental  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rental);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadData(router.query.id).then(set_rental);
    }, [
        router.query.id
    ]);
    const rentalData = rental || _rental;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_products_provider__WEBPACK_IMPORTED_MODULE_2__/* .ProductsProvider */ .J, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_promotions_provider__WEBPACK_IMPORTED_MODULE_3__/* .PromotionsProvider */ .C, {
            children: rentalData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rental_RentalPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                rental: rentalData
            })
        })
    });
};
async function getServerSideProps(context) {
    try {
        const id = (context.req.originalUrl.split("rentals/")[1] || "").split("?")[0].split("#")[0].split(".")[0];
        if (id) {
            const rental = await loadData(id);
            if (!rental) {
                throw new Error();
            }
            return {
                props: {
                    rental: rental || null,
                    city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_7__/* .getCity */ .h)(context.req.session.city),
                    ...(0,_frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
                        seo_title: rental.seo_title,
                        seo_description: rental.seo_description,
                        seo_keywords: rental.seo_keywords,
                        site_url: process.env.SITE_URL
                    })
                }
            };
        }
    } catch (e) {
        return {
            props: {
                statusCode: 404,
                city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_7__/* .getCity */ .h)(context.req.session.city)
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rental);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ phoneFormat)
/* harmony export */ });
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__]);
libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const phoneFormat = (phone)=>libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__.parsePhoneNumber(phone).formatInternational()
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Me": () => (/* binding */ parseTelegram),
  "en": () => (/* binding */ parseUrl),
  "LN": () => (/* binding */ parseVk)
});

;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
var external_url_default = /*#__PURE__*/__webpack_require__.n(external_url_namespaceObject);
;// CONCATENATED MODULE: ./utils/socials.ts

function parseTelegram(url) {
    const [_, name] = url.split("t.me/");
    return `@${(name || url).toLowerCase()}`;
}
function parseVk(url) {
    const [_, name] = url.split(".com/");
    return `vk.com/${(name || url).toLowerCase()}`;
}
function parseUrl(url) {
    try {
        const _url = external_url_default().parse(url);
        return _url.hostname;
    } catch (e) {
        return url;
    }
}


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

/***/ 2630:
/***/ ((module) => {

"use strict";
module.exports = import("libphonenumber-js");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,238,523,588,53,946,754,983], () => (__webpack_exec__(2240)));
module.exports = __webpack_exports__;

})();