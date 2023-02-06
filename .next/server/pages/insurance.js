(() => {
var exports = {};
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 3371:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Form_button__jIBdw"
};


/***/ }),

/***/ 2610:
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
/* harmony import */ var _frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7805);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-1ea3b2b8-0"
})`
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(/public/insurance.png);
  background-position-x: 95%;
  background-position-y: 50%;

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      background-image: url(/public/insurance-mobile.png);
      height: 560px;
    `)
}
`;
const Component = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-1ea3b2b8-1"
})`
  max-width: 535px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    color: #0f0e0e;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
    color: #6c768a;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    background: #f1f5f6;
    border-radius: 12px;
    color: #000000;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    text-decoration: none;
    transition: 0.3s ease all;

    svg {
      margin-right: 12px;
    }

    :hover {
      color: #7749d9 !important;
      transform: translateX(-20px);
      path {
        stroke: #7749d9;
      }
    }
  }
`;
const Banner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBlock, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "12",
                                height: "14",
                                viewBox: "0 0 12 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.49953 1.5L1.99953 7M1.99953 7L6.49953 12.5M1.99953 7H11",
                                    stroke: "black",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }),
                            "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Kinoscope Insurance"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Kinoscope Insurance \u044D\u0442\u043E \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u044A\u0435\u043C\u043E\u043A"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 7908:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3588);
/* harmony import */ var _frontend_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3043);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3371);
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Form_module_scss__WEBPACK_IMPORTED_MODULE_7__);








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-580f5e74-0"
})`
  display: flex;
  flex-direction: column;
  max-width: 604px;
  align-items: flex-start;
  width: 100%;
  position: relative;

  &.sended {
    max-width: 335px;
  }

  .text {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 32px;
    color: #6c768a;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #d8dde2;
    border-radius: 8px;
    padding: 0 16px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #6c768a;
    height: 56px;
    width: 448px;
    box-sizing: border-box;

    &.valid {
      border-color: #13ec50;
    }

    &.invalid {
      border-color: #e22446;
    }

    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        width: 100%;
      `)
}

    ::placeholder {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #6c768a;
    }
  }

  textarea {
    height: 167px;
    margin-top: 24px;
    padding: 16px;
  }

  .checkbox {
    display: flex;
    margin-top: 24px;
    align-items: center;
    cursor: pointer;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;

    a {
      color: #7749d9;
    }

    span {
      width: calc(100% - 32px);
      position: relative;

      &.withBox {
        :before {
          content: '';
          position: absolute;
          left: -39px;
          width: 39px;
          height: 22px;
          top: -2px;
        }
      }
    }

    :before {
      content: '';
      width: 24px;
      height: 24px;
      border: 2px solid #9ea6b6;
      border-radius: 8px;
      margin-right: 16px;
      box-sizing: border-box;
    }

    &.checked:before {
      background: url(/public/checked.svg);
      border: none;
    }
  }

  .result {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;

    &.active {
      display: block;
    }

    &.active ~ * {
      opacity: 0;
    }
  }
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-580f5e74-1"
})`
  margin-top: 24px;
  background-color: #f1f5f6;
  color: ${({ theme  })=>theme.colors.buttons.insurance.default.color
};

  &[data-button-link]:hover {
    background-color: #7749d9 !important;
    color: ${({ theme  })=>theme.colors.buttons.insurance.hover.color
}!important;
  }

  &[data-button-link]:disabled,
  &[data-button-link]:disabled:hover {
    cursor: default;
    background-color: #f1f5f6 !important;
    color: #aeaeae !important;
  }
`;
const validateEmail = (email)=>{
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
const Form = ({ onSend , canSend  })=>{
    const { 0: checked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: text , 1: settext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: email , 1: setemail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isValid , 1: setIsValid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: sended , 1: setsended  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsValid(!!(!sended && checked && validateEmail(email || "") && (text === null || text === void 0 ? void 0 : text.length) > 0));
    }, [
        email,
        text,
        checked,
        sended
    ]);
    const send = async ()=>{
        if (isValid) {
            await (0,_frontend_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .post */ .v)("/api/feedback/insurance", {
                email,
                message: text
            });
            setemail("");
            settext("");
            setChecked(false);
            localStorage.setItem("sended", "1");
            setsended(true);
            onSend();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!canSend) {
            setsended(true);
            onSend();
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
            sended
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("result", {
                    active: sended
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text",
                    children: "\u041C\u044B \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0430\u0441, \u0437\u0430 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443. \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text",
                children: "\u0414\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443, \u043C\u044B \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "\u0412\u0430\u0448 E-mail",
                onChange: (e)=>setemail(e.target.value)
                ,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                    valid: validateEmail(email || ""),
                    invalid: (email || "").length > 0 && !validateEmail(email || "")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442",
                onChange: (e)=>settext(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("checkbox", {
                    checked
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "withBox",
                            onClick: ()=>setChecked(!checked)
                            ,
                            children: [
                                "\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/terms",
                            children: "\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: (_Form_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),
                variant: "grayViolet",
                disabled: !isValid,
                onClick: send,
                size: "large",
                children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ 3991:
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
/* harmony import */ var _frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7118);
/* harmony import */ var _frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5921);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d996153c-0"
})`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 58px;
    width: 100%;
    overflow-x: hidden;

    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        display: none;
      `)
}

    ${_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
      margin-bottom: 16px;
    }
  }

  .mobileContainer {
    display: none;

    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        display: block;
        width: 100%;
      `)
}

    ${_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
      margin-bottom: 16px;
    }

    ${_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z} {
      text-align: left;
    }

    .swiper-pagination {
      display: flex;
      width: 100%;
      margin-top: 32px;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      width: 32px;
      height: 6px;
      background: #d8dde2;
      border-radius: 3px;

      & + .swiper-pagination-bullet {
        margin-left: 8px;
      }

      &.swiper-pagination-bullet-active {
        background: #fe6b01;
      }
    }

    .swiper {
      flex-direction: column-reverse;
      display: flex;
    }
  }

  .block {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        border: 1px solid #9ea6b6;
        border-radius: 16px;
        padding: 24px;
        align-items: flex-start;
      `)
}
  }

  .number {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 24px;
    background: #f1f5f6;
    border-radius: 16px;
    position: relative;

    &.withLine {
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #d8dde2;
        left: calc(100% + 24px);
        top: 50%;
        z-index: 1;
      }
    }

    &.breakCenter {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }

    &.breakLast {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }
  }
`;
const swiperProps = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,
        swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination
    ],
    spaceBetween: 24,
    slidesPerView: 1.1,
    speed: 300,
    pagination: {
        clickable: true
    }
};
const HowDoesItWork = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "number withLine",
                                children: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "withPadding",
                                children: "\u041E\u0444\u043E\u0440\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0440\u0435\u043D\u0442\u0430\u043B\u0430. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "number breakCenter",
                                children: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "\u041E\u043F\u043B\u0430\u0442\u0430"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "withPadding",
                                children: [
                                    "\u0421\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043C\u044B \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443. \u0421 \u0446\u0435\u043D\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#prices",
                                        children: "\u0442\u0443\u0442"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "number breakLast",
                                children: "3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "\u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "withPadding",
                                children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u043E\u0447\u0442\u0443 \u2014 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0443\u0436\u0435 \u0442\u0430\u043C. \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "number withLine",
                                children: "4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "\u0421\u044A\u0435\u043C\u043A\u0430"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "withPadding",
                                children: "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439 \u0441\u0430\u043C\u044B\u0435 \u0441\u043C\u0435\u043B\u044B\u0435 \u0438\u0434\u0435\u0438, \u0430 \u0440\u0438\u0441\u043A\u0438 \u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435 \u043C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "number breakLast",
                                children: "5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "withPadding",
                                children: "\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439? \u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C, \u043F\u0440\u0438\u0448\u043B\u0438 \u0444\u043E\u0442\u043E/\u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u0438 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u0447\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mobileContainer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                    ...swiperProps,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "number",
                                        children: "1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: "\u041E\u0444\u043E\u0440\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0440\u0435\u043D\u0442\u0430\u043B\u0430. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "number",
                                        children: "2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: "\u041E\u043F\u043B\u0430\u0442\u0430"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: [
                                            "\u0421\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043C\u044B \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443. \u0421 \u0446\u0435\u043D\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#prices",
                                                children: "\u0442\u0443\u0442"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "number",
                                        children: "3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: "\u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u043E\u0447\u0442\u0443 \u2014 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0443\u0436\u0435 \u0442\u0430\u043C. \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "number",
                                        children: "4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: "\u0421\u044A\u0435\u043C\u043A\u0430"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439 \u0441\u0430\u043C\u044B\u0435 \u0441\u043C\u0435\u043B\u044B\u0435 \u0438\u0434\u0435\u0438, \u0430 \u0440\u0438\u0441\u043A\u0438 \u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435 \u043C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "number",
                                        children: "5"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: "\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439? \u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C, \u043F\u0440\u0438\u0448\u043B\u0438 \u0444\u043E\u0442\u043E/\u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u0438 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u0447\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowDoesItWork);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8744:
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
/* harmony import */ var _frontend_layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1883);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_layout_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4214);
/* harmony import */ var _frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7805);
/* harmony import */ var _frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6770);
/* harmony import */ var _frontend_components_pages_insurance_WhyUs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1625);
/* harmony import */ var _frontend_components_pages_insurance_HowDoesItWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3991);
/* harmony import */ var _frontend_components_pages_insurance_Risks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1576);
/* harmony import */ var _frontend_components_pages_insurance_Prices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var _frontend_components_pages_insurance_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7908);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _frontend_components_pages_insurance_Banner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_insurance_HowDoesItWork__WEBPACK_IMPORTED_MODULE_8__]);
_frontend_components_pages_insurance_HowDoesItWork__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_frontend_layout_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W).withConfig({
    componentId: "sc-60ab6344-0"
})`
  ${({ theme: theme1  })=>theme1.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      background-color: ${({ theme  })=>theme.colors.background.insurance
    };
      position: relative;
      z-index: 0;
      margin-bottom: -32px;
      padding-bottom: 64px;
    `)
}
`;
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-60ab6344-1"
})`
  background-color: ${({ theme  })=>theme.colors.background.insurance
};
  width: 100%;
  border-radius: 32px;
  padding: 40px;
  min-height: 100vh;

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      padding: 32px 24px;
      margin: -56px -24px;
      border-radius: 0;
    `)
}

  ${({ theme  })=>theme.mixins.mobile(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      padding: 32px 16px;
      margin: -32px -16px;
      border-radius: 0;
    `)
}
`;
const BixWithImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-60ab6344-2"
})`
  background-image: url(/public/insurance-end.png);
  min-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;

  &.formIsSent {
    background-image: url(/public/sended.png);
    background-position: bottom center;
    background-size: cover;
  }

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      background-image: unset;
      &.formIsSent {
        background-position: bottom center;
        background-size: auto 80%;
      }
    `)
}
`;
const InsurancePage = ({ canSend  })=>{
    const { 0: formIsSent , 1: setFormIsSent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!canSend);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_layout_Content__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_Banner__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_WhyUs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 Kinoscope Insurance?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_HowDoesItWork__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: "\u041A\u0430\u043A\u0438\u0435 \u0440\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_Risks__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        id: "prices",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0446\u0435\u043D"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_Prices__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BixWithImage, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()({
                            formIsSent
                        }),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: formIsSent ? "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443!" : "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u044E \u0442\u0435\u0445\u043D\u0438\u043A\u0443?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_Form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                onSend: ()=>setFormIsSent(true)
                                ,
                                canSend: canSend
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsurancePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36:
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



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a3442f4a-0"
})`
  display: flex;
  flex-direction: column;

  table {
    border-radius: 16px;
    border-spacing: 0;
    margin-bottom: 32px;

    ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
        margin-bottom: 24px;
      `)
}

    td,
    th {
      width: 33%;
      border-collapse: collapse;
      border: 1px solid #eaeaea;
      padding: 12px 24px;
      text-align: left;

      ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          padding: 10px 12px;
        `)
}
    }
    th {
      background: #f1f5f6;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.5px;

      ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          font-size: 10px;
          line-height: 14px;
        `)
}
    }

    td {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 135%;
      color: #0f0e0e;

      ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          font-size: 10px;
          line-height: 14px;
        `)
}
    }

    th:first-child {
      border-top-left-radius: 16px;
    }

    th:last-child {
      border-top-right-radius: 16px;
    }

    tbody {
      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 16px;
        }

        td:last-child {
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
  .disclaimer {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ea6b6;
  }
`;
const Prices = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "\u041E\u0446\u0435\u043D\u043E\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "\u0421\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        children: [
                                            "\u043E\u0442",
                                            "\xa0",
                                            "100.000 \u0434\u043E",
                                            "\xa0",
                                            "300.000",
                                            "\xa0",
                                            "\u20BD"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u043E\u0442 135 \u20BD"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        children: [
                                            "\u043E\u0442",
                                            "\xa0",
                                            "300.000 \u0434\u043E",
                                            "\xa0",
                                            "500.000",
                                            "\xa0",
                                            "\u20BD"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u043E\u0442 540 \u20BD"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        children: [
                                            "\u043E\u0442",
                                            "\xa0",
                                            "500.000 \u0434\u043E",
                                            "\xa0",
                                            "1",
                                            "\xa0",
                                            "\u043C\u043B\u043D.",
                                            "\xa0",
                                            "\u20BD"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u043E\u0442 1035 \u20BD"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "\u0434\u043E 7 \u0434\u043D\u0435\u0439"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "disclaimer",
                children: "*\u041E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u0440\u0435\u043C\u0438\u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u0440\u0435\u043D\u0434\u044B"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);


/***/ }),

/***/ 1576:
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
/* harmony import */ var _frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5921);
/* harmony import */ var _frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7118);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1035);







const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-64e4f3a3-0"
})`
  display: flex;
  flex-direction: column;

  .block {
    background: #f1f5f6;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    cursor: pointer;

    & + .block {
      margin-top: 24px;

      ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          margin-top: 16px;
        `)
}
    }

    ${_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z} {
      position: relative;

      img {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    ${_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
      display: none;
      margin-top: 18px;
    }

    &.open {
      ${_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
        display: block;
      }

      ${_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z} {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
const Risks = ()=>{
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const blocks = [
        [
            "\u0412\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
            "\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0443\u0434\u0430\u0440\u0430, \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439", 
        ],
        [
            "\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u0440\u0430\u0432\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446",
            "\u041A\u0440\u0430\u0436\u0430, \u0433\u0440\u0430\u0431\u0435\u0436, \u0440\u0430\u0437\u0431\u043E\u0439 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u0440\u0430\u0432\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B \u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D \u0443\u0449\u0435\u0440\u0431 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044E \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446", 
        ],
        [
            "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435",
            "\u041F\u0440\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u043B\u0443\u0447\u0430\u044F 90% \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u0449\u0435\u0440\u0431\u0430 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430, \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 10% \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u0449\u0435\u0440\u0431\u0430 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442", 
        ], 
    ];
    const updateCurrent = (value)=>()=>{
            setCurrent((_value)=>{
                return _value === value ? -1 : value;
            });
        }
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: blocks.map(([name, value], index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("block", {
                    open: index === current
                }),
                onClick: updateCurrent(index),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_components_pages_insurance_components_Subtitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: [
                            name,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: (0,_frontend_utils_imageUrl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("arrowDown.svg")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_components_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: value
                    })
                ]
            }, name)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Risks);


/***/ }),

/***/ 1625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ insurance_WhyUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/pages/insurance/components/Tabs.tsx



const StyledTabs = external_styled_components_default().div.withConfig({
    componentId: "sc-e17c8444-0"
})`
  display: flex;
  height: 48px;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 28px;
  justify-content: flex-start;
  border: 1px solid ${({ theme  })=>theme.colors.borders.default
};
`;
const Option = external_styled_components_default().div.withConfig({
    componentId: "sc-e17c8444-1"
})`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 24px;
  margin: -1px;
  position: relative;
  z-index: 2;

  ${({ theme , active  })=>active ? external_styled_components_.css`
          background-color: ${theme.colors.buttons.insurance.hover.background};
          color: ${theme.colors.buttons.insurance.hover.color};
          border-radius: 32px;
          cursor: default;
        ` : external_styled_components_.css`
          color: ${theme.colors.text.additional};
          cursor: pointer;
        `
}
`;
const Tabs = ({ options , active , onChange , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledTabs, {
        className: className,
        children: options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(Option, {
                active: option.value === active,
                onClick: ()=>onChange(option.value)
                ,
                children: option.name
            }, option.value)
        )
    });
};
/* harmony default export */ const components_Tabs = (Tabs);

// EXTERNAL MODULE: ./components/pages/insurance/components/Subtitle.tsx
var Subtitle = __webpack_require__(7118);
// EXTERNAL MODULE: ./components/pages/insurance/components/Text.tsx
var Text = __webpack_require__(5921);
// EXTERNAL MODULE: ./utils/imageUrl.ts
var imageUrl = __webpack_require__(1035);
;// CONCATENATED MODULE: ./components/pages/insurance/WhyUs.tsx







const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-2d35d172-0"
})`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    width: 100%;

    ${({ theme  })=>theme.mixins.tablet(external_styled_components_.css`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 16px;
      `)
}

    ${Subtitle/* default */.Z} {
      margin-bottom: 16px;
    }
  }

  .block {
    background: #f1f5f6;
    border-radius: 24px;
    padding: 24px;
    position: relative;

    ${Subtitle/* default */.Z} {
      //width: calc(100% - 60px);
    }

    .image {
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      display: none;
    }
  }
`;
const WhyUs = ()=>{
    const { 0: tab , 1: settab  } = (0,external_react_.useState)("rentals");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tabs, {
                options: [
                    {
                        name: "\u0420\u0435\u043D\u0442\u0430\u043B\u0430\u043C",
                        value: "rentals"
                    },
                    {
                        name: "\u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C",
                        value: "clients"
                    }, 
                ],
                active: tab,
                onChange: settab
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: tab === "rentals" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-1.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043C ",
                                        "\n",
                                        "\u0432\u0430\u0448\u0438 \u0434\u0435\u043D\u044C\u0433\u0438"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u0417\u0430\u043F\u043B\u0430\u0442\u0438\u043C \u0437\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u043D\u0443\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0442\u0435\u0445\u043D\u0438\u043A\u0443 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0439 \u0441\u0440\u043E\u043A"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-2.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u0413\u043E\u0432\u043E\u0440\u0438\u043C \u043D\u0430 \u043E\u0434\u043D\u043E\u043C ",
                                        "\n",
                                        "\u044F\u0437\u044B\u043A\u0435 \u0441 \u0432\u0430\u043C\u0438"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0430\u0440\u0435\u043D\u0434\u044B \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-3.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043C ",
                                        "\n",
                                        "\u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u041F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-4.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u0423 \u043D\u0430\u0441 \u0434\u0435\u0448\u0435\u0432\u043B\u0435 ",
                                        "\n",
                                        "\u0447\u0435\u043C \u0443 \u0434\u0440\u0443\u0433\u0438\u0445"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u044B \u044F\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u0441\u0430\u043C\u044B\u043C \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C \u043D\u0430 \u0440\u044B\u043D\u043A\u0435"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-5.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u0422\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0438\u0441\u043A\u0438 ",
                                        "\n",
                                        "\u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u0423\u0440\u043E\u043D\u0438\u043B \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432 \u0438\u043B\u0438 \u043F\u043E\u0432\u0440\u0435\u0434\u0438\u043B \u043A\u0430\u043C\u0435\u0440\u0443 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u044A\u0435\u043C\u043A\u0438? \u0422\u0435\u043F\u0435\u0440\u044C \u044D\u0442\u043E \u0442\u043E\u0436\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,imageUrl/* default */.Z)("ins-6.svg"),
                                    alt: "",
                                    className: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle/* default */.Z, {
                                    children: [
                                        "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ",
                                        "\n",
                                        "\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                    children: "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430 \xab\u0443\u0434\u0430\u0440 \u043C\u043E\u043B\u043D\u0438\u0438\xbb \u0438\u043B\u0438 \xab\u043F\u043E\u0445\u0438\u0449\u0435\u043D\u0438\u0435 \u0438\u043D\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u044F\u043D\u0430\u043C\u0438\xbb"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const insurance_WhyUs = (WhyUs);


/***/ }),

/***/ 7118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b184f58a-0"
})`
  white-space: break-spaces;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0f0e0e;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtitle);


/***/ }),

/***/ 5921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b89c6a99-0"
})`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &.withPadding {
    padding: 0 24px;
  }

  a {
    color: #fe6b01 !important;
    text-decoration: none;

    &:hover {
      color: #fe6b01 !important;
      text-decoration: underline;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 6770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-bccf42cb-0"
})`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 0;

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
    `)
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 1112:
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
/* harmony import */ var _frontend_components_pages_insurance_InsurancePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8744);
/* harmony import */ var _frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3891);
/* harmony import */ var _frontend_providers_city_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8502);
/* harmony import */ var _frontend_components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5488);
/* harmony import */ var _frontend_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_frontend_components_pages_insurance_InsurancePage__WEBPACK_IMPORTED_MODULE_2__]);
_frontend_components_pages_insurance_InsurancePage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Insurance = ({ city , canSend  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_frontend_providers_city_provider__WEBPACK_IMPORTED_MODULE_3__/* .CityProvider */ .I, {
        currentCity: city,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_pages_insurance_InsurancePage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                canSend: canSend
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_frontend_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insurance);
async function getServerSideProps(context) {
    const lastSend = context.req.session.insuranceRequestSend ? new Date(context.req.session.insuranceRequestSend) : new Date(+new Date() - 10000001);
    const goodTimeToSend = +new Date() - +lastSend >= 10000000;
    return {
        props: {
            city: (0,_frontend_utils_getCity__WEBPACK_IMPORTED_MODULE_6__/* .getCity */ .h)(context.req.session.city),
            canSend: goodTimeToSend
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imageUrl = (u)=>u ? u.startsWith("/public") ? u : `/public/${u}` : "/public/logoWithCover.svg"
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageUrl);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892,97,577,994,588,769,314], () => (__webpack_exec__(1112)));
module.exports = __webpack_exports__;

})();