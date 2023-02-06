exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 2215:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "Badge_badge__GhuD6",
	"date": "Badge_date__OvPOG",
	"new": "Badge_new__ZmF56",
	"sale": "Badge_sale__mBze9"
};


/***/ }),

/***/ 2629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(6377);
// Exports
module.exports = {
	"card": "Card_card__oCBK3",
	"container": "Card_container__9wID2",
	"image": "Card_image__K313N",
	"content": "Card_content__0vV_h",
	"small": "Card_small__M_kj6",
	"withPrice": "Card_withPrice__QUJIm",
	"titleContainer": "Card_titleContainer__5xsl4",
	"popupContainer": "Card_popupContainer__0fHRW",
	"popup": "Card_popup__pY4iI " + ___CSS_LOADER_ICSS_IMPORT_0___["popup"] + "",
	"title": "Card_title__IH9n6",
	"logoContainer": "Card_logoContainer__qpge7",
	"logo": "Card_logo__J1EmG",
	"text": "Card_text__jkCgo",
	"footer": "Card_footer__M9CSU",
	"priceTitle": "Card_priceTitle__GRN3f",
	"oldPrice": "Card_oldPrice__Fxc8k",
	"price": "Card_price__mky0q",
	"prices": "Card_prices__vP5yS"
};


/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(2215);
// Exports
module.exports = {
	"badge": "CardDate_badge__5hYJ9 " + ___CSS_LOADER_ICSS_IMPORT_0___["badge"] + " " + ___CSS_LOADER_ICSS_IMPORT_0___["date"] + "",
	"text": "CardDate_text__3Psi2"
};


/***/ }),

/***/ 9745:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(2215);
// Exports
module.exports = {
	"badge": "CardTag_badge__xBKgg " + ___CSS_LOADER_ICSS_IMPORT_0___["badge"] + "",
	"small": "CardTag_small__wqP_K"
};


/***/ }),

/***/ 565:
/***/ ((module) => {

// Exports
module.exports = {
	"control": "CarouselControl_control__fuVWV",
	"large": "CarouselControl_large__rgG_U",
	"small": "CarouselControl_small__wKJeX",
	"medium": "CarouselControl_medium__D6b1t",
	"left": "CarouselControl_left__FWlsF",
	"black": "CarouselControl_black__1BYCD",
	"element": "CarouselControl_element__HlCnP",
	"lite": "CarouselControl_lite__e3Dpm"
};


/***/ }),

/***/ 6377:
/***/ ((module) => {

// Exports
module.exports = {
	"popup": "Popup_popup__I5LAi"
};


/***/ }),

/***/ 3623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/moneyFormat.ts
var moneyFormat = __webpack_require__(4207);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/CardTag.module.scss
var CardTag_module = __webpack_require__(9745);
var CardTag_module_default = /*#__PURE__*/__webpack_require__.n(CardTag_module);
// EXTERNAL MODULE: ./components/Badge.module.scss
var Badge_module = __webpack_require__(2215);
var Badge_module_default = /*#__PURE__*/__webpack_require__.n(Badge_module);
;// CONCATENATED MODULE: ./components/CardTag.tsx





const CardTag = ({ tag , text , size  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((CardTag_module_default()).badge, (Badge_module_default())[tag], (CardTag_module_default())[size]),
        children: text
    });
};
/* harmony default export */ const components_CardTag = (CardTag);

// EXTERNAL MODULE: ./components/Image.tsx
var Image = __webpack_require__(9053);
// EXTERNAL MODULE: ./components/CardDate.module.scss
var CardDate_module = __webpack_require__(4059);
var CardDate_module_default = /*#__PURE__*/__webpack_require__.n(CardDate_module);
;// CONCATENATED MODULE: ./components/CardDate.tsx





const CardDate = ({ children , size  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((CardDate_module_default()).badge, (CardDate_module_default())[size]),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                src: "/public/clocks.svg",
                width: 20,
                height: 14
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (CardDate_module_default()).text,
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_CardDate = (CardDate);

// EXTERNAL MODULE: ./utils/getExpirationDateText.ts
var getExpirationDateText = __webpack_require__(5084);
// EXTERNAL MODULE: ./utils/imageUrl.ts
var imageUrl = __webpack_require__(1035);
// EXTERNAL MODULE: ./components/Card.module.scss
var Card_module = __webpack_require__(2629);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/Card.tsx











const Card = ({ size ="small" , link , image , title , description , price , discountPrice , tag , date , promotionText , rentalLogo  })=>{
    const dateText = (0,getExpirationDateText/* getExpirationDateText */.L)(date);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: external_classnames_default()((Card_module_default()).card, (Card_module_default())[size]),
            children: [
                tag && /*#__PURE__*/ jsx_runtime_.jsx(components_CardTag, {
                    tag: tag.type,
                    text: tag.text,
                    size: size
                }),
                dateText && /*#__PURE__*/ jsx_runtime_.jsx(components_CardDate, {
                    size: size,
                    children: dateText
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Card_module_default()).container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    className: (Card_module_default()).image,
                                    src: image,
                                    layout: "responsive",
                                    width: "400px",
                                    height: "200px"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: external_classnames_default()((Card_module_default()).content, {
                                        [(Card_module_default()).withPrice]: !!price
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Card_module_default()).titleContainer,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Card_module_default()).popupContainer,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (Card_module_default()).title,
                                                            children: title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (Card_module_default()).popup,
                                                            children: title
                                                        })
                                                    ]
                                                }),
                                                rentalLogo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Card_module_default()).logoContainer,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: (0,imageUrl/* default */.Z)(rentalLogo),
                                                        className: (Card_module_default()).logo
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Card_module_default()).text,
                                            children: promotionText || description
                                        })
                                    ]
                                })
                            ]
                        }),
                        price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Card_module_default()).footer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Card_module_default()).priceTitle,
                                    children: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Card_module_default()).prices,
                                    children: [
                                        discountPrice && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Card_module_default()).oldPrice,
                                            children: (0,moneyFormat/* moneyFormat */.E)(price)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Card_module_default()).price,
                                            children: (0,moneyFormat/* moneyFormat */.E)(discountPrice || price)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Card = (Card);


/***/ }),

/***/ 4110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const CarouselControl = ({ size , direction , onClick , color ="lite"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().control), (_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size], (_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[direction], (_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[color]),
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "20",
            height: "24",
            viewBox: "0 0 20 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: (_CarouselControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().element),
                d: "M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControl);


/***/ }),

/***/ 5084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getExpirationDateText)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_1__);


const getExpirationDateText = (date)=>date && `до ${date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date), "d MMMM", {
        locale: (date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_1___default())
    })}`
;


/***/ }),

/***/ 4207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ moneyFormat)
/* harmony export */ });
const formatter = new Intl.NumberFormat("ru-RU");
const moneyFormat = (n, addSymbol = true)=>`${formatter.format(n)}${addSymbol ? " \u20BD" : ""}`
;


/***/ })

};
;