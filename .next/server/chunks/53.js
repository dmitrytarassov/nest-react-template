"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "_4": () => (/* binding */ dark),
/* harmony export */   "rS": () => (/* binding */ theme)
/* harmony export */ });
/* unused harmony export _dark */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const breakpoints = {
    mobile: 576,
    tablet: 768,
    laptop: 1024,
    halfScreenBreak: 1400
};
const theme = {
    colors: {
        text: {
            primary: "#222222",
            secondary: "#6C768A",
            accent: "#000000",
            additional: "#0F0E0E",
            alternate: "#FFFFFF",
            oldPrice: "#9EA6B6"
        },
        links: {
            default: "#000000",
            hover: "#13EC50",
            active: "#0F0E0E",
            alternate: {
                default: "#fff",
                hover: "#13EC50",
                active: "#13EC50"
            }
        },
        breadcrumbs: {
            default: "#6C768A",
            current: "#0F0E0E",
            hover: "#13EC50"
        },
        buttons: {
            insurance: {
                default: {
                    color: "#0F0E0E",
                    background: "#ffffff"
                },
                hover: {
                    color: "#ffffff",
                    background: "#FE6B01"
                }
            },
            default: {
                color: "#0F0E0E",
                background: "#13EC50"
            },
            hover: {
                color: "#0F0E0E",
                background: "#15D14A"
            },
            disabled: {
                color: "#6C768A",
                background: "#E9EAEE"
            },
            additional: {
                hover: {
                    color: "#222222",
                    background: "#F8F9FA"
                },
                default: {
                    color: "#000000",
                    background: "#ffffff"
                }
            },
            alternate: {
                hover: {
                    color: "#222222",
                    background: "#D8DDE2"
                },
                default: {
                    color: "#000000",
                    background: "#F1F5F6"
                }
            }
        },
        thumbs: {
            active: "#13EC50",
            hover: "#6C768A",
            default: "#D8DDE2"
        },
        options: {
            active: "#E9EAEE20"
        },
        borders: {
            default: "#D8DDE2",
            active: "#13EC50"
        },
        background: {
            insurance: "#7749D9",
            default: "#ffffff",
            primary: "#F8F9FA",
            secondary: "#E9EAEE",
            alternate: "#222222",
            header: "#0F0E0E",
            footer: "#0F0E0E"
        },
        tags: {
            new: "#7749D9",
            sale: "#FE6B01",
            date: "#0F0E0E",
            text: "#fff"
        }
    },
    mixins: {
        mobile: (content)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      @media screen and (max-width: ${breakpoints.mobile}px) {
        ${content}
      }
    `
        ,
        tablet: (content)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      @media screen and (max-width: ${breakpoints.tablet}px) {
        ${content}
      }
    `
        ,
        laptop: (content)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      @media screen and (max-width: ${breakpoints.laptop}px) {
        ${content}
      }
    `
        ,
        halfScreenBreak: (content)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      @media screen and (max-width: ${breakpoints.halfScreenBreak}px) {
        ${content}
      }
    `
    }
};
const _dark = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(theme);
_dark.colors.background.primary = "#222222";
_dark.colors.text.primary = "#fff";
_dark.colors.breadcrumbs.current = "#fff";
const dark = _dark;


/***/ })

};
;