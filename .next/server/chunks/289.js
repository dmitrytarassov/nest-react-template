exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 3426:
/***/ ((module) => {

// Exports
module.exports = {
	"info": "Info_info__Z_xtH",
	"buttons": "Info_buttons__ZlAlT",
	"title": "Info_title__OGnAM",
	"propTitle": "Info_propTitle__nE8yh",
	"line": "Info_line__i7Gt8",
	"separator": "Info_separator__P7P73",
	"propText": "Info_propText__XoKUn",
	"props": "Info_props__vdBaL",
	"base": "Info_base__g27rn",
	"name": "Info_name__jdd2k",
	"value": "Info_value__Zb4bl",
	"description": "Info_description__Zd7L7"
};


/***/ }),

/***/ 8104:
/***/ ((module) => {

// Exports
module.exports = {
	"price": "Price_price__RXJs5",
	"text": "Price_text__SrAEB",
	"current": "Price_current__YTFfa",
	"old": "Price_old__VP58y",
	"buttons": "Price_buttons__mBIt6",
	"prices": "Price_prices__FTwwC",
	"button": "Price_button__L2kis"
};


/***/ }),

/***/ 2657:
/***/ ((module) => {

// Exports
module.exports = {
	"tabs": "Tabs_tabs__GZyTY",
	"tab": "Tabs_tab__g9oKN",
	"active": "Tabs_active__T6ZGB"
};


/***/ }),

/***/ 9814:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "ShareButton_button__kqYym",
	"alone": "ShareButton_alone__QqZ7s",
	"popup": "ShareButton_popup___894S",
	"text": "ShareButton_text__6c_nW",
	"content": "ShareButton_content__YT_H7",
	"toast": "ShareButton_toast__trgvE"
};


/***/ }),

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Block = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-10b8e066-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme  })=>theme.colors.background.default
};
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


/***/ }),

/***/ 3843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
    componentId: "sc-99147bf1-0"
})`
  position: relative;
  padding: 32px 0;
  width: 100%;
  max-height: 400px;
  object-fit: contain;

  ${({ theme  })=>theme.mixins.halfScreenBreak(styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: 96px 0;
    `)
};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 2117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1035);




const StyledImages = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-762e5db9-0"
})`
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 2;
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-direction: row-reverse;
    `)
};
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-762e5db9-1"
})`
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme  })=>theme.colors.buttons.alternate.default.background
};

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      height: 48px;
      width: 48px;
      margin-left: 24px;

      img {
        width: 30px;
        height: 30px;
      }
    `)
};
`;
const ImagesLine = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-762e5db9-2"
})`
  display: block;
  overflow-x: auto;
  margin-left: 24px;
  width: calc(100% - 80px);

  ${Logo} {
    display: flex;
    margin-left: 12px;
  }

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      width: calc(100% - 68px);
      margin-left: 0;
    `)
};
`;
const ImagesLineScroll = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-762e5db9-3"
})`
  display: flex;
  float: right;

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      float: left;
    `)
};
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
    componentId: "sc-762e5db9-4"
})`
  height: 48px;
  width: 48px;
  object-fit: contain;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ active , theme  })=>active ? theme.colors.borders.active : theme.colors.borders.default
};
  cursor: pointer;
  box-sizing: border-box;
  background: #fff;

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      height: 48px;
    `)
};

  ${({ active , theme  })=>active ? styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          border-color: ${theme.colors.thumbs.active};
        ` : styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          border-color: ${theme.colors.thumbs.default};
          :hover {
            border-color: ${theme.colors.thumbs.hover};
          }
        `
}

  ${({ theme , logo  })=>logo && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      display: none;
      
      ${theme.mixins.laptop(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        display: block;
      `)}}
    `
}

  :not(:first-child) {
    margin-left: 12px;
  }
`;
const Images = ({ logo , images , current , onChange  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledImages, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: logo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImagesLine, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImagesLineScroll, {
                    children: images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                            src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(image),
                            active: current === image,
                            onClick: ()=>onChange(image)
                        }, image)
                    )
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Images);


/***/ }),

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductInfo_Info)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ProductInfo/Tabs.module.scss
var Tabs_module = __webpack_require__(2657);
var Tabs_module_default = /*#__PURE__*/__webpack_require__.n(Tabs_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/ProductInfo/Tabs.tsx




const Tabs = ({ options , active , onChange  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Tabs_module_default()).tabs,
        children: options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()((Tabs_module_default()).tab, {
                    [(Tabs_module_default()).active]: option.value === active
                }),
                onClick: ()=>onChange(option.value)
                ,
                children: option.name
            }, option.value)
        )
    });
};
/* harmony default export */ const ProductInfo_Tabs = (Tabs);

// EXTERNAL MODULE: ./components/ProductInfo/Info.module.scss
var Info_module = __webpack_require__(3426);
var Info_module_default = /*#__PURE__*/__webpack_require__.n(Info_module);
;// CONCATENATED MODULE: ./components/ProductInfo/Info.tsx





const Info = ({ properties ="" , propertiesText , description , promotion  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(properties || propertiesText ? "properties" : "description");
    const _properties = properties.split("\n").map((e)=>{
        if (e.startsWith("**")) {
            return [
                "**",
                e.replace("**", "")
            ];
        } else {
            const [param = "", value = ""] = e.split("===");
            return [
                param,
                value
            ];
        }
    }).filter(([a, b])=>a && b
    );
    const showButtons = (propertiesText || properties) && (description || promotion);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Info_module_default()).info,
        children: [
            showButtons && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Info_module_default()).buttons,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductInfo_Tabs, {
                    options: [
                        {
                            name: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",
                            value: "properties"
                        },
                        {
                            name: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                            value: "description"
                        }, 
                    ],
                    active: show,
                    onChange: setShow
                })
            }),
            show === "properties" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Info_module_default()).title,
                        children: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"
                    }),
                    _properties.map(([name, value])=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Info_module_default()).props,
                            children: name === "**" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Info_module_default()).propTitle,
                                children: value
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: external_classnames_default()((Info_module_default()).base, (Info_module_default()).name),
                                        children: name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Info_module_default()).separator
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: external_classnames_default()((Info_module_default()).base, (Info_module_default()).value),
                                        children: value.split("==").map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Info_module_default()).line,
                                                children: e
                                            }, `${name}_${e}_${i}`)
                                        )
                                    })
                                ]
                            })
                        }, `${name}_${value}`)
                    ),
                    propertiesText && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Info_module_default()).propText,
                        children: propertiesText
                    })
                ]
            }),
            show === "description" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Info_module_default()).title,
                        children: promotion && !description ? "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0430\u043A\u0446\u0438" : "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
                    }),
                    promotion && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Info_module_default()).description,
                        children: promotion
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Info_module_default()).description,
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ProductInfo_Info = (Info);


/***/ }),

/***/ 5106:
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
/* harmony import */ var _frontend_utils_moneyFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4207);
/* harmony import */ var _frontend_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _frontend_components_ShareButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5378);
/* harmony import */ var _Price_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8104);
/* harmony import */ var _Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Price_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_ShareButton__WEBPACK_IMPORTED_MODULE_4__]);
_frontend_components_ShareButton__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Price = ({ price , discountPrice , link  })=>{
    const isPromotion = !(price || discountPrice);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prices),
                children: isPromotion ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                    children: link ? "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043D\u0442\u0430\u043B\u0430" : "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                            children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().current),
                            children: [
                                (0,_frontend_utils_moneyFormat__WEBPACK_IMPORTED_MODULE_2__/* .moneyFormat */ .E)(discountPrice || price, false),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "\xa0",
                                        "\u20BD"
                                    ]
                                })
                            ]
                        }),
                        discountPrice > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().old),
                            children: [
                                (0,_frontend_utils_moneyFormat__WEBPACK_IMPORTED_MODULE_2__/* .moneyFormat */ .E)(price, false),
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "\xa0",
                                        "\u20BD"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_ShareButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        alone: !link
                    }),
                    link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: (_Price_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
                        href: link,
                        blank: true,
                        type: "link",
                        children: isPromotion ? "\u041E\u0442\u043A\u0440\u044B\u0442\u044C" : "\u0410\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_utils_getExpirationDateText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5084);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1035);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_product_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2690);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1362);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3843);
/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2117);
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8234);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5106);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Price__WEBPACK_IMPORTED_MODULE_8__]);
_Price__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ProductInfo({ product , rental  }) {
    const { 0: currentImage , 1: setCurrentImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(product.photos[0]);
    const dateText = product.date ? (0,_frontend_utils_getExpirationDateText__WEBPACK_IMPORTED_MODULE_1__/* .getExpirationDateText */ .L)(product.date) : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(currentImage)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pages_product_Tags__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: [
                            product.promotion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                // @ts-ignore
                                tag: product.promotion.tag,
                                text: product.promotion.tagText
                            }),
                            dateText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                tag: "date",
                                text: dateText
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Images__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        logo: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(rental.icon),
                        images: product.photos,
                        current: currentImage,
                        onChange: setCurrentImage
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    price: +product.price,
                    discountPrice: +product.discountPrice,
                    link: product.externalUrl
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    promotion: product.promotionText,
                    description: product.description,
                    properties: product.properties,
                    propertiesText: product.propertiesText
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_TagBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4802);




const StyledTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_frontend_components_TagBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-31421132-0"
})``;
const Tag = ({ tag , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTag, {
        type: tag,
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 5378:
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5332);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9814);
/* harmony import */ var _ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _frontend_components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ShareButton = ({ alone  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: open1 , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUrl( false ? 0 : "");
    }, []);
    const close = (e)=>{
        e === null || e === void 0 ? void 0 : e.stopPropagation();
        setOpen(false);
    };
    const copyClick = (e)=>{
        e === null || e === void 0 ? void 0 : e.preventDefault();
        navigator.clipboard.writeText(url);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("\uD83D\uDE80 \u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
        close(e);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.addEventListener("click", (e)=>{
            let _target = e.target;
            while(_target){
                var ref1;
                // @ts-ignore
                if (ref && ((ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.isSameNode(_target))) {
                    return;
                }
                // @ts-ignore
                _target = _target.parentNode;
            }
            close(e);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = popupRef.current;
        if (el) {
            const position = el.getBoundingClientRect();
            if (position.x < 0) {
                el.style.marginRight = `${position.x - 16}px`;
            }
        }
    }, [
        open1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().button), {
                    [(_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().alone)]: alone
                }),
                onClick: ()=>setOpen((open)=>!open
                    )
                ,
                ref: ref,
                children: [
                    open1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().popup),
                        onClick: (e)=>e.stopPropagation()
                        ,
                        ref: popupRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                                children: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        onClick: copyClick,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            width: "32",
                                            height: "32",
                                            src: "/public/share/copy.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `https://vk.com/share.php?url=${url}`,
                                        target: "_blank",
                                        onClick: close,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            width: "32",
                                            height: "32",
                                            src: "/public/share/vk.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `https://api.whatsapp.com/send?text=${url}`,
                                        "data-action": "share/whatsapp/share",
                                        target: "_blank",
                                        onClick: close,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            width: "32",
                                            height: "32",
                                            src: "/public/share/whatsapp.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `https://t.me/share/url?url=${url}`,
                                        target: "_blank",
                                        onClick: close,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            width: "32",
                                            height: "32",
                                            src: "/public/share/telegram.svg"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "24",
                        height: "25",
                        viewBox: "0 0 24 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M16.8004 9.3C18.1259 9.3 19.2004 8.22548 19.2004 6.9C19.2004 5.57452 18.1259 4.5 16.8004 4.5C15.4749 4.5 14.4004 5.57452 14.4004 6.9C14.4004 8.22548 15.4749 9.3 16.8004 9.3Z",
                                stroke: "#0F0E0E",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M7.20078 14.9001C8.52626 14.9001 9.60078 13.8256 9.60078 12.5001C9.60078 11.1746 8.52626 10.1001 7.20078 10.1001C5.8753 10.1001 4.80078 11.1746 4.80078 12.5001C4.80078 13.8256 5.8753 14.9001 7.20078 14.9001Z",
                                stroke: "#0F0E0E",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M16.8004 20.5002C18.1259 20.5002 19.2004 19.4257 19.2004 18.1002C19.2004 16.7747 18.1259 15.7002 16.8004 15.7002C15.4749 15.7002 14.4004 16.7747 14.4004 18.1002C14.4004 19.4257 15.4749 20.5002 16.8004 20.5002Z",
                                stroke: "#0F0E0E",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M9.27344 13.708L14.7374 16.892",
                                stroke: "#0F0E0E",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M14.7294 8.10791L9.27344 11.2919",
                                stroke: "#0F0E0E",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ShareButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default().toast),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                    position: "bottom-center",
                    autoClose: 5000
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const TagBase = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e11b621a-0"
})`
  font-family: 'Neue Machina';
  padding: 0 12px;
  height: 48px;
  z-index: 2;
  display: flex;
  align-items: center;
  border-radius: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  ${({ theme , type  })=>styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: ${theme.colors.tags[type]};
    color: ${theme.colors.tags.text};

    ${theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      height: 32px;
      font-size: 14px;
    `)}
  `
};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagBase);


/***/ }),

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_components_TagBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4802);




const StyledTags = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-9da620ef-0"
})`
  position: absolute;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  top: 24px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      justify-content: flex-start;

      ${_frontend_components_TagBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} + ${_frontend_components_TagBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
        margin-left: 12px;
      }
    `)}
  `
};
`;
const Tags = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTags, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);


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


/***/ }),

/***/ 5332:
/***/ (() => {



/***/ })

};
;