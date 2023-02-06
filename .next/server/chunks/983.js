"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 2892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ ProductsProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./contexts/products.context.ts

const ProductsContext = (0,external_react_.createContext)({
    products: [],
    addIds: ()=>{
    // do nothing
    }
});

;// CONCATENATED MODULE: ./providers/products.provider.tsx



const ProductsProvider = ({ children  })=>{
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)([]);
    const { 0: productIds , 1: setProductIds  } = (0,external_react_.useState)();
    const addIds = (ids)=>{
        // @ts-ignore
        setProductIds((_ids)=>[
                ...new Set([
                    ...ids,
                    ..._ids
                ])
            ]
        );
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ProductsContext.Provider, {
        value: {
            products,
            addIds
        },
        children: children
    });
};


/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;