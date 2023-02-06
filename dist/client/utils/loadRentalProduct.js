"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRentalProduct = exports.getLoadRentalProductUrl = void 0;
const fetcher_1 = require("./fetcher");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const IRentalProduct_1 = require("../../lib/interfaces/IRentalProduct");
const getLoadRentalProductUrl = (id) => `/api/rental-products/${id}`;
exports.getLoadRentalProductUrl = getLoadRentalProductUrl;
async function loadRentalProduct(id) {
    const responsePromise = await (0, fetcher_1.get)(`${process.env.API_URL}${(0, exports.getLoadRentalProductUrl)(id)}`);
    const response = await responsePromise;
    const data = response === null || response === void 0 ? void 0 : response.data;
    return data;
}
exports.loadRentalProduct = loadRentalProduct;
//# sourceMappingURL=loadRentalProduct.js.map