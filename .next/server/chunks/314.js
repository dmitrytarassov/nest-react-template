"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 7805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Block = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-77be4594-0"
})`
  background-color: ${({ theme  })=>theme.colors.background.default
};
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }

  ${({ theme  })=>theme.mixins.tablet(styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 32px 24px;
      overflow-x: hidden;
    `)
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


/***/ }),

/***/ 1883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./utils/styles.ts

const lintStyles = external_styled_components_.css`
  color: ${({ theme  })=>theme.colors.links.default
};
  :hover {
    color: ${({ theme  })=>theme.colors.links.hover
}!important;
  }
  :visited,
  :active,
  :focus,
  :focus-visible,
  :focus-within {
    color: ${({ theme  })=>theme.colors.links.active
};
  }
`;

;// CONCATENATED MODULE: ./layout/Container.tsx


const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4420b7af-0"
})`
  min-height: 100vh;
  color: ${({ theme  })=>theme.colors.text.primary
};
  background-color: ${({ theme  })=>theme.colors.background.primary
};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  ${({ theme  })=>theme.mixins.mobile(external_styled_components_.css`
      padding: 0 16px;
    `)
}

  a {
    ${lintStyles}
  }
`;


/***/ }),

/***/ 3891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getCity)
/* harmony export */ });
const getCity = (city)=>[
        "spb",
        "moscow"
    ].includes(city) ? city : "spb"
;


/***/ })

};
;