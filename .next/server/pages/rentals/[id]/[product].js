"use strict";
(() => {
var exports = {};
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 3672:
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
/* harmony import */ var _frontend_components_ProductInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6258);
/* harmony import */ var _frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1186);
/* harmony import */ var _frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4532);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6497);
/* harmony import */ var _frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4986);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_ProductInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__]);
_frontend_components_ProductInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const StyledPageMainColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_frontend_components_PageMainColumnContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b2873e73-0"
})``;
const NewProductPage = ({ rental: rental1 , product , rentalProduct ,  })=>{
    const { city  } = (0,_frontend_hooks_useCity__WEBPACK_IMPORTED_MODULE_9__/* .useCity */ .h)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_3__/* .useRentals */ .w)();
    const { activeRental  } = (0,_frontend_hooks_useMap__WEBPACK_IMPORTED_MODULE_8__/* .useMap */ .S)();
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
            name: product.name,
            link: `/rentals/${rental1.url}/${rentalProduct.url}`
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInit(true);
        return ()=>{
            setInit(false);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (init) {
            router.push(`/rentals/`);
        }
    }, [
        city
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    const _product = {
        photos: product.photos,
        date: rentalProduct.date ? rentalProduct.date.toString() : undefined,
        promotionText: rentalProduct.promotionText,
        promotion: {
            tag: rentalProduct.promotionType,
            tagText: rentalProduct.promotionText
        },
        price: rentalProduct.price ? rentalProduct.price.toString() : undefined,
        discountPrice: rentalProduct.discountPrice ? rentalProduct.discountPrice.toString() : undefined,
        description: product.description,
        properties: product.properties,
        propertiesText: product.propertiesText,
        externalUrl: rentalProduct.externalUrl
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledPageMainColumnContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ListTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                backLink: `/rentals/${rental1.url}`,
                title: product.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ProductInfo_ProductInfo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                rental: rental1,
                product: _product
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProductPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1429:
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
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3891);
/* harmony import */ var _frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2624);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_components_pages_product_NewProductPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3672);
/* harmony import */ var _frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_product_NewProductPage__WEBPACK_IMPORTED_MODULE_4__]);
_frontend_components_pages_product_NewProductPage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const loadData = async (rentalProductUrl, rentalUrl)=>{
    const rentalProduct = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_2__/* .loadRentalProduct */ .jO)(rentalProductUrl);
    if (rentalProduct) {
        const rental = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_2__/* .loadRental */ .Lc)(rentalUrl);
        if (rental) {
            const product = await (0,_frontend_utils_loaders__WEBPACK_IMPORTED_MODULE_2__/* .loadProductById */ .jY)(rentalProduct.productId);
            if (product) {
                return {
                    rental,
                    product,
                    rentalProduct
                };
            }
        }
    }
};
const RentalProductPage = ({ rental , rentalProduct , product ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        rental,
        rentalProduct,
        product
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!product) {
            loadData(router.query.id, router.query.product).then(setData);
        }
    }, []);
    const _rental = rental || data.rental;
    const _rentalProduct = rentalProduct || data.rentalProduct;
    const _product = product || data.product;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_product_NewProductPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        rental: _rental,
        product: _product,
        rentalProduct: _rentalProduct
    });
};
async function getServerSideProps(context) {
    try {
        const [rentalProductUrl, rentalUrl] = context.req.originalUrl.split("/").reverse().map((e)=>e.split(".")[0]
        );
        const data = await loadData(rentalProductUrl, rentalUrl);
        if (data) {
            return {
                props: {
                    ...(0,_frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data),
                    city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_6__/* .getCity */ .h)(context.req.session.city),
                    ...(0,_frontend_utils_clearify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
                        seo_title: data.rentalProduct.seo_title,
                        seo_description: data.rentalProduct.seo_description,
                        seo_keywords: data.rentalProduct.seo_keywords,
                        site_url: process.env.SITE_URL
                    })
                }
            };
        }
    } catch (e) {
        console.error(e);
    }
    return {
        props: {
            statusCode: 404,
            city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_6__/* .getCity */ .h)(context.req.session.city)
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentalProductPage);

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

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,238,523,588,289], () => (__webpack_exec__(1429)));
module.exports = __webpack_exports__;

})();