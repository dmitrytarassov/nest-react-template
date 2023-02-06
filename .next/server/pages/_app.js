"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5237);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _frontend_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5488);
/* harmony import */ var _frontend_providers_city_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8502);
/* harmony import */ var _frontend_providers_current_location_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7453);
/* harmony import */ var _frontend_components_pages_errors_ErrorPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3533);
/* harmony import */ var _frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4841);
/* harmony import */ var _frontend_providers_map_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_10__]);
_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const DynamicComponentWithNoSSR = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/ContainerWithMap.tsx -> " + "@frontend/components/Map"
        ]
    },
    ssr: false
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-37311f95-0"
})`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row-reverse;
  position: relative;
  overflow: hidden;

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-direction: column;
      height: unset;
    `)
};
`;
const MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-37311f95-1"
})`
  width: 40%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;

  ${({ theme , size  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      ${theme.mixins.halfScreenBreak(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        width: 30%;
      `)}

      ${theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        width: 100%;

        ${size === "small" && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          height: calc(70vh + 72px);
        `}
      `)}
    `
}
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-37311f95-2"
})`
  width: 60%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${({ theme  })=>theme.colors.background.primary
};
  box-shadow: 0 8px 16px rgba(156, 164, 169, 0.32);
  z-index: 2;

  ${({ theme  })=>theme.mixins.halfScreenBreak(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 70%;
    `)
};

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 100%;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      margin-top: -16px;
      position: relative;
      overflow: visible;
      padding-top: 16px;

      :after {
        content: '';
        height: 8px;
        width: 56px;
        background: #fff;
        left: calc(50% - 28px);
        position: absolute;
        top: -24px;
        border-radius: 4px;
      }
    `)
};
`;
const ChildrenContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-37311f95-3"
})`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
  width: 100%;
  justify-content: space-between;

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      padding-top: 0;
    `)
};
`;
const ContainerWithMap = ({ children , statusCode , ...rest })=>{
    const isClient = "undefined" !== "undefined";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const isSmallMap = [
        "/rentals/[id]",
        "/rentals/[id]/[product]",
        "/promotion/[id]",
        "/rentals",
        "/unique_positions", 
    ].includes(router.route);
    const showMap = [
        "/delete_products/[id]",
        "/rentals/[id]",
        "/rentals/[id]/[product]",
        "/promotion/[id]",
        "/unique_positions", 
    ].includes(router.route);
    const isError = typeof statusCode !== "undefined" && statusCode >= 400;
    // @ts-ignore
    const city = children.props.city;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (showMap) {
            setTimeout(()=>{
                // @ts-ignore
                window.scrollTo(0, window.innerHeight - 172 - 300);
            }, 500);
        } else {
            window.scrollTo(0, 0);
        }
        if (ref) {
            // @ts-ignore
            ref.current.scrollTo(0, 0);
        }
    }, [
        router.route
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_city_provider__WEBPACK_IMPORTED_MODULE_7__/* .CityProvider */ .I, {
        currentCity: city || "spb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_10__/* .RentalsProvider */ .l, {
            _rentals: (rest === null || rest === void 0 ? void 0 : rest.rentals) || [],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_map_provider__WEBPACK_IMPORTED_MODULE_11__/* .MapProvider */ .I, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_current_location_provider__WEBPACK_IMPORTED_MODULE_8__/* .CurrentLocationProvider */ .$, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MapContainer, {
                                size: isSmallMap ? "small" : "big",
                                children: isClient && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicComponentWithNoSSR, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                                ref: ref,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChildrenContainer, {
                                    children: [
                                        isError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_providers_rentals_provider__WEBPACK_IMPORTED_MODULE_10__/* .RentalsProvider */ .l, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_errors_ErrorPage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                statusCode: statusCode
                                            })
                                        }) : children,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            halfScreen: true
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerWithMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4053);
/* harmony import */ var _frontend_components_ContainerWithMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* harmony import */ var _frontend_utils_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5537);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_ContainerWithMap__WEBPACK_IMPORTED_MODULE_4__]);
_frontend_components_ContainerWithMap__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Client(props) {
    const { Component , pageProps  } = props;
    const isMainTemplate = [
        "/",
        "/insurance",
        "/terms"
    ].includes(props.router.route);
    const seoData = (0,_frontend_utils_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props.pageProps);
    const _theme = props.router.route === "/unique_positions" ? _frontend_utils_theme__WEBPACK_IMPORTED_MODULE_3__/* .dark */ ._4 : _frontend_utils_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme */ .rS;
    // @ts-ignore
    return props.router.route.startsWith("/admin") ? // @ts-ignore
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: seoData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:title",
                        content: seoData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: seoData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: seoData.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:description",
                        content: seoData.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: seoData.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: seoData.keywords
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonnical",
                        href: props.pageProps.site_url + props.router.asPath.split("#")[0].split("?")[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:url",
                        content: props.pageProps.site_url + props.router.asPath.split("#")[0].split("?")[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "image_src",
                        href: props.pageProps.site_url + (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("cover.png")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:image",
                        content: props.pageProps.site_url + (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("cover.png")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                theme: _theme,
                children: isMainTemplate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ContainerWithMap__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...pageProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ CurrentLocationProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./contexts/current_location.context.ts

const CurrentLocationContext = (0,external_react_.createContext)(null);

;// CONCATENATED MODULE: ./providers/current_location.provider.tsx



const CurrentLocationProvider = ({ children  })=>{
    const { 0: coordinates , 1: setCoordinates  } = (0,external_react_.useState)();
    return /*#__PURE__*/ jsx_runtime_.jsx(CurrentLocationContext.Provider, {
        value: {
            coordinates,
            setCoordinates
        },
        children: children
    });
};


/***/ }),

/***/ 3205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ MapProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _frontend_contexts_map_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9086);




const MapProvider = ({ children  })=>{
    const { rentals  } = (0,_frontend_hooks_useRentals__WEBPACK_IMPORTED_MODULE_2__/* .useRentals */ .w)();
    const { 0: markers1 , 1: setMarkers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: center , 1: setCenter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: zoom , 1: setZom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12);
    const { 0: activeRental , 1: setActiveRental  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // @ts-ignore
        const _markers = rentals.map((e)=>({
                icon: e.icon,
                rentalId: e.id,
                coordinates: e.coordinates.split(","),
                active: false
            })
        );
        setMarkers(_markers);
    }, [
        rentals.map(({ id  })=>id
        ).join()
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const active1 = markers1.find(({ active  })=>active
        );
        if (active1) {
            setCenter(active1.coordinates);
            setZom(14);
        } else {
            setCenter(markers1.reduce((acc, marker)=>{
                acc[0] += marker.coordinates[0] / markers1.length;
                acc[1] += marker.coordinates[1] / markers1.length;
                return acc;
            }, [
                0,
                0
            ]));
            setZom(12);
        }
    }, [
        markers1
    ]);
    const selectRental = (id)=>{
        setActiveRental(id);
        setMarkers((markers)=>markers.map((m)=>({
                    ...m,
                    active: m.rentalId === id
                })
            )
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_contexts_map_content__WEBPACK_IMPORTED_MODULE_3__/* .MapContext.Provider */ .X.Provider, {
        value: {
            markers: markers1,
            selectRental,
            center,
            zoom,
            activeRental
        },
        children: children
    });
};


/***/ }),

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imageUrl = (u)=>u ? u.startsWith("/public") ? u : `/public/${u}` : "/public/logoWithCover.svg"
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageUrl);


/***/ }),

/***/ 5537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const seo = ({ seo_title , seo_keywords , seo_description , seo_name  })=>{
    return {
        title: `Kinoscope${seo_title || seo_name ? ` | ${seo_title || seo_name}` : ""}`,
        keywords: seo_keywords || "Kinoscope, \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0438\u043D\u043E\u043E\u0431\u0443\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u0440\u0435\u043D\u0442\u0430\u043B\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u043A\u0438\u043D\u043E\u0440\u0435\u043D\u0442\u0430\u043B\u044B",
        description: seo_description || "Kinoscope, \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0438\u043D\u043E\u043E\u0431\u0443\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u0440\u0435\u043D\u0442\u0430\u043B\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u043A\u0438\u043D\u043E\u0440\u0435\u043D\u0442\u0430\u043B\u044B"
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seo);


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,237,994,588,53,769,841,533], () => (__webpack_exec__(8473)));
module.exports = __webpack_exports__;

})();