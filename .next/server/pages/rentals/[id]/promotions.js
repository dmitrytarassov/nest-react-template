"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4532);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1035);
/* harmony import */ var _frontend_components_pages_rentalPromotions_NewsAndPromotions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9029);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rentalPromotions_NewsAndPromotions__WEBPACK_IMPORTED_MODULE_6__]);
_frontend_components_pages_rentalPromotions_NewsAndPromotions__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const RentalPromotionsPage = ({ rental: rental1 , promotions  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: searchString , 1: setSearchString  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_3__/* .useRentals */ .w)();
    const { activeRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_7__/* .useMap */ .S)();
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
            link: `/rentals/${rental1.url}`
        },
        {
            name: "\u0410\u043A\u0446\u0438\u0438 \u0438 \u043D\u043E\u0432\u0438\u043D\u043A\u0438",
            link: `/rentals/${rental1.url}/promotions`
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInit(true);
        return ()=>{
            setInit(false);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (activeRental && init) {
            const rental = rentals.find(({ id  })=>id === activeRental
            );
            console.log(`go to: /rentals/${rental.url}`);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [
        activeRental
    ]);
    const actions = promotions.filter(({ promotionType  })=>promotionType === "sale"
    ).filter((e)=>searchString.length === 0 ? true : e.name.toLowerCase().includes(searchString.toLowerCase())
    );
    const news = promotions.filter(({ promotionType  })=>promotionType === "new"
    ).filter((e)=>searchString.length === 0 ? true : e.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                backLink: `/rentals/${rental1.url}`,
                title: `${rental1.name}: Акции и новинки`,
                image: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(rental1.icon),
                search: {
                    value: searchString,
                    onChange: setSearchString
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentalPromotions_NewsAndPromotions__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                news: news,
                promotions: actions
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalPromotionsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3891);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_pages_rentalPromotions_RentalPromotionsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2958);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2624);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_rentalPromotions_RentalPromotionsPage__WEBPACK_IMPORTED_MODULE_3__]);
_frontend_components_pages_rentalPromotions_RentalPromotionsPage__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const loadData = async (rentalUrl)=>{
    const rental = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_4__/* .loadRental */ .Lc)(rentalUrl);
    const promotions = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_4__/* .loadPromotionsByRentalId */ .MO)(rental.id);
    return {
        rental,
        promotions
    };
};
const RentalPromotions = ({ rental , promotions  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: _rental , 1: set_rental  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rental);
    const { 0: _promotions , 1: set_promotions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(promotions);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!rental || !promotions) {
            loadData(router.query.id).then((data)=>{
                set_rental(data.rental);
                set_promotions(data.promotions);
            });
        }
    }, []);
    const rentalData = rental || _rental;
    const promotionsData = promotions || _promotions;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_rentalPromotions_RentalPromotionsPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        rental: rentalData,
        promotions: promotionsData
    });
};
async function getServerSideProps(context) {
    try {
        const id = (context.req.originalUrl.split("rentals/")[1] || "").split("/promotions")[0] || "";
        if (id) {
            const data = await loadData(id);
            return {
                props: {
                    ...data,
                    city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_5__/* .getCity */ .h)(context.req.session.city),
                    seo_title: `${data.rental.name} | Акции и новинки`,
                    seo_description: `${data.rental.name} | Акции и новинки`
                }
            };
        }
    } catch (e) {
        console.log(e);
        return {
            props: {
                statusCode: 404,
                city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_5__/* .getCity */ .h)(context.req.session.city)
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalPromotions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 908:
/***/ ((module) => {

module.exports = require("date-fns/locale/ru");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,238,523,53,946,161,875,346], () => (__webpack_exec__(5238)));
module.exports = __webpack_exports__;

})();