"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineProductsAndPromotions = exports.productsToPromotionType = void 0;
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const ICrudRentalProduct_1 = require("../../lib/interfaces/ICrudRentalProduct");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const ICrudProduct_1 = require("../../lib/interfaces/ICrudProduct");
const productsToPromotionType = (products, rentalProducts, rentals) => {
    const _result = rentalProducts.length
        ? rentalProducts
            .map((rentalProduct) => {
            var _a;
            const product = products.find(({ id }) => id === rentalProduct.productId);
            if (product) {
                const rental = rentals.find((p) => p.id === rentalProduct.rentalId);
                if (rental) {
                    const data = {
                        weight: rentalProduct.weight,
                        id: product.id,
                        photos: product.photos,
                        name: product.name,
                        url: `/rentals/${rental.url}/${rentalProduct.url}`,
                        text: '',
                        shortText: rentalProduct.promotionShortDescription ||
                            product.shortDescription,
                        rentalId: rentalProduct.rentalId,
                        promotionType: rentalProduct.promotionType,
                        promotionText: rentalProduct.promotionText,
                        date: (_a = rentalProduct === null || rentalProduct === void 0 ? void 0 : rentalProduct.date) === null || _a === void 0 ? void 0 : _a.toString(),
                        price: rentalProduct.price,
                        discountPrice: rentalProduct.discountPrice,
                        rentalLogo: rental.icon,
                    };
                    return data;
                }
            }
        })
            .filter(Boolean)
        : [];
    return _result;
};
exports.productsToPromotionType = productsToPromotionType;
const combineProductsAndPromotions = (products, promotions, rentals) => [
    ...products,
    ...promotions.map((promotion) => {
        const rental = rentals.find(({ id }) => id === promotion.rentalId);
        return Object.assign(Object.assign({}, promotion), { url: `/promotion/${promotion.url}`, rentalLogo: rental ? rental.icon : undefined });
    }),
]
    .map((promotion) => (Object.assign(Object.assign({}, promotion), { date: promotion.date || null })))
    .sort((a, b) => ((a.weight || 0) < (b.weight || 0) ? 1 : -1));
exports.combineProductsAndPromotions = combineProductsAndPromotions;
//# sourceMappingURL=parsers.js.map