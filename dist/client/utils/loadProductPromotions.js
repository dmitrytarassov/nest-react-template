"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProductPromotions = exports.getLoadProductPromotionsUrl = void 0;
const fetcher_1 = require("./fetcher");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const getLoadProductPromotionsUrl = (id) => `/api/promotions?rental_product=${id}`;
exports.getLoadProductPromotionsUrl = getLoadProductPromotionsUrl;
async function loadProductPromotions(id) {
    const responsePromise = await (0, fetcher_1.get)(`${process.env.API_URL}${(0, exports.getLoadProductPromotionsUrl)(id)}`);
    const response = await responsePromise;
    return (response === null || response === void 0 ? void 0 : response.data) || [];
}
exports.loadProductPromotions = loadProductPromotions;
//# sourceMappingURL=loadProductPromotions.js.map