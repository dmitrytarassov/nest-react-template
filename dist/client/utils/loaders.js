"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllPromotions = exports.loadUniques = exports.getAllRentalsForCity = exports.loadRentalById = exports.loadProductById = exports.loadPromotionsByRentals = exports.loadPromotionsByRentalId = exports.loadPromotion = exports.loadRentalsByCity = exports.loadRental = exports.loadRentalProduct = void 0;
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const fetcher_1 = require("./fetcher");
const ICrudRentalProduct_1 = require("../../lib/interfaces/ICrudRentalProduct");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const ICrudProduct_1 = require("../../lib/interfaces/ICrudProduct");
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const City_1 = require("../../lib/types/City");
const imageUrl_1 = require("./imageUrl");
const IPromotionTag_1 = require("../../lib/interfaces/IPromotionTag");
const parsers_1 = require("./parsers");
const makeUrl = (part) => {
    return `${process.env.API_URL || ''}${part}`;
};
const loadRentalProduct = async (url) => {
    const _rentalProducts = await (0, fetcher_1.get)(makeUrl(`/api/rental_products?filter[]=url,${url}`));
    const [rentalProduct] = _rentalProducts.data || [];
    return rentalProduct;
};
exports.loadRentalProduct = loadRentalProduct;
const loadRental = async (url) => {
    const _rental = await (0, fetcher_1.get)(makeUrl(`/api/rental?filter[]=url,${url}&sort[]=weight,desc`));
    const [rental] = _rental.data || [];
    return rental;
};
exports.loadRental = loadRental;
const loadRentalsByCity = async (city) => {
    const _rentals = await (0, fetcher_1.get)(makeUrl(`/api/rental?filter[]=city,${city}&sort[]=weight,desc`));
    return _rentals.data || [];
};
exports.loadRentalsByCity = loadRentalsByCity;
const loadPromotion = async (url) => {
    const _promotion = await (0, fetcher_1.get)(makeUrl(`/api/promotions?filter[]=url,${url}`));
    const [promotion] = _promotion.data || [];
    return promotion;
};
exports.loadPromotion = loadPromotion;
const loadPromotionsByRentalId = async (rentalId) => {
    const rental = await (0, exports.loadRentalById)(rentalId);
    const _promotions = await (0, fetcher_1.get)(makeUrl(`/api/promotions?filter[]=rentalId,${rentalId}&sort[0]=weight,desc`));
    const _rentalProducts = await (0, fetcher_1.get)(makeUrl(`/api/rental_products?filter[]=rentalId,${rentalId}&filter[]=promotionType,in,new|sale`));
    const productIds = _rentalProducts.data.map(({ productId }) => productId);
    const products = await (0, fetcher_1.get)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`));
    const result = (0, parsers_1.productsToPromotionType)((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], [rental]);
    return (0, parsers_1.combineProductsAndPromotions)(result, _promotions.data, [rental]);
};
exports.loadPromotionsByRentalId = loadPromotionsByRentalId;
const loadPromotionsByRentals = async (rentals) => {
    const _promotions = await (0, fetcher_1.get)(makeUrl(`/api/promotions?filter[]=rentalId,in,${rentals
        .map(({ id }) => id)
        .join('|')}&sort[0]=weight,desc`));
    const _rentalProducts = await (0, fetcher_1.get)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentals
        .map(({ id }) => id)
        .join('|')}&filter[]=promotionType,in,new|sale`));
    const productIds = _rentalProducts.data.map(({ productId }) => productId);
    const products = await (0, fetcher_1.get)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`));
    const result = (0, parsers_1.productsToPromotionType)((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], rentals);
    return (0, parsers_1.combineProductsAndPromotions)(result, _promotions.data, rentals);
};
exports.loadPromotionsByRentals = loadPromotionsByRentals;
const loadProductById = async (id) => {
    const _product = await (0, fetcher_1.get)(makeUrl(`/api/product/${id}`));
    return _product;
};
exports.loadProductById = loadProductById;
const loadRentalById = async (id) => {
    const _rental = await (0, fetcher_1.get)(makeUrl(`/api/rental/${id}`));
    return _rental;
};
exports.loadRentalById = loadRentalById;
const rentalsStack = {};
const getAllRentalsForCity = async (city) => {
    if (!rentalsStack[city]) {
        const _rentals = await (0, fetcher_1.get)(makeUrl(`/api/rental?filter[]=city,${city}&sort[]=weight,desc`));
        rentalsStack[city] = _rentals.data;
    }
    return rentalsStack[city];
};
exports.getAllRentalsForCity = getAllRentalsForCity;
const loadUniques = async (city, onlyMainPage, rentalId) => {
    const _rentals = await (0, exports.getAllRentalsForCity)(city);
    const rentalIds = _rentals.map(({ id }) => id);
    const _rentalProducts = await (0, fetcher_1.get)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentalIds.join('|')}${onlyMainPage ? '&filter[]=showUniqueOnMainPage,true' : ''}${rentalId ? `rentalId=${rentalId}` : ''}`));
    if (_rentalProducts.data.length) {
        const productIds = _rentalProducts.data.map(({ productId }) => productId);
        const products = await (0, fetcher_1.get)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}&filter[]=unique,true`));
        const __rentalProducts = _rentalProducts.data
            .map((rentalProduct) => {
            const product = products.data.find(({ id }) => id === rentalProduct.productId);
            const rental = _rentals.find(({ id }) => id === rentalProduct.rentalId);
            if (!rental) {
                console.log('can not find rental with id ', rentalProduct.rentalId);
            }
            if (!product) {
                console.log('can not find product with id ', rentalProduct.productId);
            }
            if (product && rental) {
                return {
                    product,
                    rentalProduct,
                    rental,
                };
            }
        })
            .filter(Boolean);
        const cards = __rentalProducts.map((el) => {
            var _a;
            return Object.assign({ id: el.rentalProduct.id, title: el.product.name, description: el.product.shortDescription, image: (0, imageUrl_1.default)(el.product.photos[0]), link: `/rentals/${el.rental.url}/${el.rentalProduct.url}`, price: el.rentalProduct.price, discountPrice: el.rentalProduct.discountPrice, date: (_a = el.rentalProduct.date) === null || _a === void 0 ? void 0 : _a.toString(), promotionText: el.rentalProduct.promotionShortDescription, rentalLogo: (0, imageUrl_1.default)(el.rental.icon) }, (el.rentalProduct.promotionType && el.rentalProduct.promotionText
                ? {
                    tag: {
                        type: el.rentalProduct.promotionType,
                        text: el.rentalProduct.promotionText,
                    },
                }
                : {}));
        });
        return cards;
    }
    return [];
};
exports.loadUniques = loadUniques;
const loadAllPromotions = async (city, onlyMainPage) => {
    const _rentals = await (0, exports.getAllRentalsForCity)(city);
    const rentalIds = _rentals.map(({ id }) => id);
    const promotions = await (0, fetcher_1.get)(makeUrl(`/api/promotions?filter[]=rentalId,in,${rentalIds.join('|')}${onlyMainPage && '&filter[]=showOnMainPage,true&sort[0]=weight,desc'}`));
    const _rentalProducts = await (0, fetcher_1.get)(makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentalIds.join('|')}&filter[]=promotionType,in,new|sale${onlyMainPage && '&filter[]=showOnMainPage,true&sort[0]=weight,desc'}`));
    const productIds = _rentalProducts.data.map(({ productId }) => productId);
    const products = await (0, fetcher_1.get)(makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`));
    const result = (0, parsers_1.productsToPromotionType)((products === null || products === void 0 ? void 0 : products.data) || [], _rentalProducts.data || [], _rentals || []);
    return (0, parsers_1.combineProductsAndPromotions)(result, promotions.data, _rentals);
};
exports.loadAllPromotions = loadAllPromotions;
//# sourceMappingURL=loaders.js.map