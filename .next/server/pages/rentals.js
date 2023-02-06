(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 7233:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "RentalCard_card___Kbe9",
	"active": "RentalCard_active__bA_gp",
	"rentalName": "RentalCard_rentalName__riCAp",
	"nameAndStar": "RentalCard_nameAndStar__y_oxD",
	"name": "RentalCard_name__Ae94m",
	"rating": "RentalCard_rating__cRIxP",
	"text": "RentalCard_text__mHwT7",
	"star": "RentalCard_star__P0p2t",
	"imageContainer": "RentalCard_imageContainer__RGec6",
	"imageMobileContainer": "RentalCard_imageMobileContainer__sG4Kz",
	"container": "RentalCard_container__7lh4a",
	"contact": "RentalCard_contact__CQOva",
	"value": "RentalCard_value__AI2ix",
	"address": "RentalCard_address__IGalu",
	"phone": "RentalCard_phone__QwOlg",
	"icon": "RentalCard_icon__wAruA"
};


/***/ }),

/***/ 8312:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5737);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1035);
/* harmony import */ var _frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9053);
/* harmony import */ var _RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7233);
/* harmony import */ var _RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_3__]);
_frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const RentalCard = ({ rental , active  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (active && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            var // @ts-ignore
            ref1;
            (ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.scrollIntoViewIfNeeded();
        }
    }, [
        active
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/rentals/${rental.url}`,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card), active && (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active)),
            ref: ref,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imageContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(rental.icon),
                        width: "128px",
                        height: "128px"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rentalName),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imageMobileContainer),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(rental.icon),
                                        width: "48px",
                                        height: "48px"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nameAndStar),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().name),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: rental.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rating),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                                                    children: rental.rating
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().star),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        src: "/public/star.svg",
                                                        width: "20",
                                                        height: "20",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contact), (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address)),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        src: "/public/location.svg",
                                        width: "24",
                                        height: "24",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                    children: rental.address
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: `tel:${rental.phone}`,
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contact), (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().phone)),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        src: "/public/phone.svg",
                                        width: "24",
                                        height: "24"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_RentalCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                    children: (0,_frontend_utils_phoneFormat__WEBPACK_IMPORTED_MODULE_3__/* .phoneFormat */ .w)(`+${rental.phone}`)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9263:
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
/* harmony import */ var _frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _frontend_dtos_ESelectRental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3554);
/* harmony import */ var _frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4532);
/* harmony import */ var _frontend_utils_updateMapRentals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4238);
/* harmony import */ var _frontend_components_pages_rentals_RentalCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8312);
/* harmony import */ var _frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5161);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rentals_RentalCard__WEBPACK_IMPORTED_MODULE_5__]);
_frontend_components_pages_rentals_RentalCard__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const RentalsPage = ()=>{
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_2__/* .useRentals */ .w)();
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: searchString , 1: setSearchString  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { activeRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_7__/* .useMap */ .S)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_frontend_utils_updateMapRentals__WEBPACK_IMPORTED_MODULE_8__/* .updateMapRentals */ .W)(rentals, active);
    }, [
        rentals,
        active
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function callBack(e) {
            setSearchString("");
            // @ts-ignore
            setActive(e.detail || "");
        }
        window.addEventListener(_frontend_dtos_ESelectRental__WEBPACK_IMPORTED_MODULE_9__/* .ESelectRental */ .C, callBack);
        return ()=>{
            window.removeEventListener(_frontend_dtos_ESelectRental__WEBPACK_IMPORTED_MODULE_9__/* .ESelectRental */ .C, callBack);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (activeRental) {
            setSearchString("");
            setActive(activeRental);
        }
    }, [
        activeRental
    ]);
    const breadcrumbs = [
        {
            name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
            link: "/"
        },
        {
            name: "\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432",
            link: "/rentals"
        }, 
    ];
    const filteredRentals = searchString === "" ? rentals : rentals.filter(// @ts-ignore
    ({ name , address  })=>name.toLowerCase().includes(searchString.toLowerCase()) || address.toLowerCase().includes(searchString.toLowerCase())
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                backLink: "/",
                title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432",
                search: {
                    value: searchString,
                    onChange: setSearchString,
                    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0440\u0435\u043D\u0442\u0430\u043B\u0430\u043C"
                }
            }),
            filteredRentals.length > 0 ? filteredRentals.map((rental)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentals_RentalCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    rental: rental,
                    active: active === rental.id
                }, rental.id)
            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: rentals.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_NotFound__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : null
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ESelectRental)
/* harmony export */ });
const ESelectRental = "EVENT_SELECT_RENTAL";


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

/***/ 7317:
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
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3891);
/* harmony import */ var _frontend_components_pages_rentals_RentalsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9263);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2624);
/* harmony import */ var _frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rentals_RentalsPage__WEBPACK_IMPORTED_MODULE_2__]);
_frontend_components_pages_rentals_RentalsPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Rentals = ({ rentals , city  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentals_RentalsPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};
async function getServerSideProps(context) {
    const rentals = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_3__/* .getAllRentalsForCity */ .rk)(context.req.session.city);
    return {
        props: {
            rentals,
            city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_4__/* .getCity */ .h)(context.req.session.city),
            ...(0,_frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
                seo_title: "\u041D\u0430\u0439\u0442\u0438 \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435",
                seo_description: "\u0420\u0435\u043D\u0442\u0430\u043B\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 \u043E\u043D\u043B\u0430\u0439\u043D",
                seo_keywords: null,
                site_url: process.env.SITE_URL
            })
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rentals);

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

/***/ 4238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ updateMapRentals)
});

;// CONCATENATED MODULE: ./dtos/ESetMarkers.ts
const ESetMarkers = "EVENT_SET_MARKERS";

;// CONCATENATED MODULE: ./utils/updateMapRentals.ts

function updateMapRentals(rentals, active, timeout = 200) {
    const detail = rentals.map(({ coordinates , id: rentalId , icon  })=>({
            coordinates: coordinates.split(",").map((a)=>+a
            ),
            rentalId,
            active: rentalId === active,
            icon
        })
    );
    setTimeout(()=>{
        window.dispatchEvent(new CustomEvent(ESetMarkers, {
            detail
        }));
    }, timeout);
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,238,523,161], () => (__webpack_exec__(7317)));
module.exports = __webpack_exports__;

})();