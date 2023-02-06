"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProduct = exports.getLoadProductUrl = void 0;
const fetcher_1 = require("./fetcher");
const IProduct_1 = require("../../lib/interfaces/IProduct");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const getLoadProductUrl = (id) => `/api/products?ids=${id}`;
exports.getLoadProductUrl = getLoadProductUrl;
async function loadProduct(id) {
    const responsePromise = await (0, fetcher_1.get)(`${process.env.API_URL}${(0, exports.getLoadProductUrl)(id)}`);
    const response = await responsePromise;
    const [data] = response === null || response === void 0 ? void 0 : response.data;
    return data;
}
exports.loadProduct = loadProduct;
//# sourceMappingURL=loadProduct.js.map