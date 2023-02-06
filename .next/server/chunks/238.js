"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 9102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ RentalsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RentalsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    rentals: []
});


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

/***/ 2624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rk": () => (/* binding */ getAllRentalsForCity),
  "yv": () => (/* binding */ loadAllPromotions),
  "jY": () => (/* binding */ loadProductById),
  "_G": () => (/* binding */ loadPromotion),
  "MO": () => (/* binding */ loadPromotionsByRentalId),
  "mJ": () => (/* binding */ loadPromotionsByRentals),
  "Lc": () => (/* binding */ loadRental),
  "Wh": () => (/* binding */ loadRentalById),
  "jO": () => (/* binding */ loadRentalProduct),
  "Bo": () => (/* binding */ loadRentalsByCity),
  "I2": () => (/* binding */ loadUniques)
});

// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(3043);
// EXTERNAL MODULE: ./utils/imageUrl.ts
var imageUrl = __webpack_require__(1035);
;// CONCATENATED MODULE: ./utils/parsers.ts
const productsToPromotionType = (products, rentalProducts, rentals)=>{
    const _result = rentalProducts.length ? rentalProducts.map((rentalProduct)=>{
        const product = products.find(({ id  })=>id === rentalProduct.productId
        );
        if (product) {
            const rental = rentals.find((p)=>p.id === rentalProduct.rentalId
            );
            if (rental) {
                var ref;
                const data = {
                    weight: rentalProduct.weight,
                    id: product.id,
                    photos: product.photos,
                    name: product.name,
                    url: `/rentals/${rental.url}/${rentalProduct.url}`,
                    text: "",
                    shortText: rentalProduct.promotionShortDescription || product.shortDescription,
                    rentalId: rentalProduct.rentalId,
                    promotionType: rentalProduct.promotionType,
                    promotionText: rentalProduct.promotionText,
                    date: rentalProduct === null || rentalProduct === void 0 ? void 0 : (ref = rentalProduct.date) === null || ref === void 0 ? void 0 : ref.toString(),
                    price: rentalProduct.price,
                    discountPrice: rentalProduct.discountPrice,
                    rentalLogo: rental.icon
                };
                return data;
            }
        }
    }).filter(Boolean) : [];
    return _result;
};
const combineProductsAndPromotions = (products, promotions, rentals)=>[
        ...products,
        ...promotions.map((promotion)=>{
            const rental = rentals.find(({ id  })=>id === promotion.rentalId
            );
            return {
                ...promotion,
                url: `/promotion/${promotion.url}`,
                rentalLogo: rental ? rental.icon : undefined
            };
        }), 
    ].map((promotion)=>({
            ...promotion,
            date: promotion.date || null
        })
    ).sort((a, b)=>(a.weight || 0) < (b.weight || 0) ? 1 : -1
    )
;

;// CONCATENATED MODULE: ./utils/loaders.ts



const makeUrl = (part)=>{
    // console.log(`${process.env.API_URL || ''}${part}`);
    return `${process.env.API_URL || ""}${part}`;
};
const loadRentalProduct = async (url)=>{
    const _rentalProducts = await (0,fetcher/* get */.U)(makeUrl(`/api/rental_products?filter[]=url,${url}`));
    const [rentalProduct] = _rentalProducts.data || [];
    return rentalProduct;
};
// export const loadRentalPromotions = async (rentalId): Promise<ICrudPromotion[]> => {
//   const _promotions: IControllerResponse<ICrudPromotion[]> = await get(
//     makeUrl(`/api/promotions?rentalId[]=url,${rentalId}`),
//   );
//   return _promotions.data;
// };
const loadRental = async (url)=>{
    const _rental = await (0,fetcher/* get */.U)(makeUrl(`/api/rental?filter[]=url,${url}&sort[]=weight,desc`));
    const [rental] = _rental.data || [];
    return rental;
};
const loadRentalsByCity = async (city)=>{
    const _rentals = await (0,fetcher/* get */.U)(makeUrl(`/api/rental?filter[]=city,${city}&sort[]=weight,desc`));
    return _rentals.data || [];
};
const loadPromotion = async (url)=>{
    const _promotion = await (0,fetcher/* get */.U)(makeUrl(`/api/promotions?filter[]=url,${url}`));
    const [promotion] = _promotion.data || [];
    return promotion;
};
const loadPromotionsByRentalId = async (rentalId)=>{
    const rental = await loadRentalById(rentalId);
    const _promotions = await (0,fetcher/* get */.U)(makeUrl(`/api/promotions?filter[]=rentalId,${rentalId}&sort[0]=weight,desc`));
    const _rentalProducts = await (0,fetcher/* get */.U)(makeUrl(`/api/rental_products?filter[]=rentalId,${rentalId}&filter[]=promotionType,in,new|sale`));
    const productIds = _rentalProducts.data.map(({ productId  })=>productId
    );
    const products = await (0,fetcher/* get */.U)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join("|")}`));
    const result = productsToPromotionType((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], [
        rental
    ]);
    return combineProductsAndPromotions(result, _promotions.data, [
        rental
    ]);
};
const loadPromotionsByRentals = async (rentals)=>{
    const _promotions = await (0,fetcher/* get */.U)(makeUrl(`/api/promotions?filter[]=rentalId,in,${rentals.map(({ id  })=>id
    ).join("|")}&sort[0]=weight,desc`));
    const _rentalProducts = await (0,fetcher/* get */.U)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentals.map(({ id  })=>id
    ).join("|")}&filter[]=promotionType,in,new|sale`));
    const productIds = _rentalProducts.data.map(({ productId  })=>productId
    );
    const products = await (0,fetcher/* get */.U)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join("|")}`));
    const result = productsToPromotionType((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], rentals);
    return combineProductsAndPromotions(result, _promotions.data, rentals);
};
const loadProductById = async (id)=>{
    const _product = await (0,fetcher/* get */.U)(makeUrl(`/api/product/${id}`));
    return _product;
};
const loadRentalById = async (id)=>{
    const _rental = await (0,fetcher/* get */.U)(makeUrl(`/api/rental/${id}`));
    return _rental;
};
const rentalsStack = {};
const getAllRentalsForCity = async (city)=>{
    if (!rentalsStack[city]) {
        const _rentals = await (0,fetcher/* get */.U)(makeUrl(`/api/rental?filter[]=city,${city}&sort[]=weight,desc`));
        rentalsStack[city] = _rentals.data;
    }
    return rentalsStack[city];
};
const loadUniques = async (city, onlyMainPage, rentalId)=>{
    const _rentals = await getAllRentalsForCity(city);
    const rentalIds = _rentals.map(({ id  })=>id
    );
    const _rentalProducts = await (0,fetcher/* get */.U)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentalIds.join("|")}${onlyMainPage ? "&filter[]=showUniqueOnMainPage,true" : ""}${rentalId ? `rentalId=${rentalId}` : ""}`));
    if (_rentalProducts.data.length) {
        const productIds = _rentalProducts.data.map(({ productId  })=>productId
        );
        const products = await (0,fetcher/* get */.U)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join("|")}&filter[]=unique,true`));
        const __rentalProducts = _rentalProducts.data.map((rentalProduct)=>{
            const product = products.data.find(({ id  })=>id === rentalProduct.productId
            );
            const rental = _rentals.find(({ id  })=>id === rentalProduct.rentalId
            );
            if (!rental) {
                console.log("can not find rental with id ", rentalProduct.rentalId);
            }
            if (!product) {
                console.log("can not find product with id ", rentalProduct.productId);
            }
            if (product && rental) {
                return {
                    product,
                    rentalProduct,
                    rental
                };
            }
        }).filter(Boolean);
        const cards = __rentalProducts.map((el)=>{
            var ref;
            return {
                id: el.rentalProduct.id,
                title: el.product.name,
                description: el.product.shortDescription,
                image: (0,imageUrl/* default */.Z)(el.product.photos[0]),
                link: `/rentals/${el.rental.url}/${el.rentalProduct.url}`,
                price: el.rentalProduct.price,
                discountPrice: el.rentalProduct.discountPrice,
                date: (ref = el.rentalProduct.date) === null || ref === void 0 ? void 0 : ref.toString(),
                promotionText: el.rentalProduct.promotionShortDescription,
                rentalLogo: (0,imageUrl/* default */.Z)(el.rental.icon),
                ...el.rentalProduct.promotionType && el.rentalProduct.promotionText ? {
                    tag: {
                        type: el.rentalProduct.promotionType,
                        text: el.rentalProduct.promotionText
                    }
                } : {}
            };
        });
        return cards;
    }
    return [];
};
const loadAllPromotions = async (city, onlyMainPage)=>{
    const _rentals = await getAllRentalsForCity(city);
    const rentalIds = _rentals.map(({ id  })=>id
    );
    const promotions = await (0,fetcher/* get */.U)(makeUrl(`/api/promotions?filter[]=rentalId,in,${rentalIds.join("|")}${onlyMainPage && "&filter[]=showOnMainPage,true&sort[0]=weight,desc"}`));
    const _rentalProducts = await (0,fetcher/* get */.U)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentalIds.join("|")}&filter[]=promotionType,in,new|sale${onlyMainPage && "&filter[]=showOnMainPage,true&sort[0]=weight,desc"}`));
    const productIds = _rentalProducts.data.map(({ productId  })=>productId
    );
    const products = await (0,fetcher/* get */.U)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join("|")}`));
    const result = productsToPromotionType((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], _rentals || []);
    return combineProductsAndPromotions(result, promotions.data, _rentals);
};


/***/ })

};
;