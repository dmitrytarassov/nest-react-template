"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRental = exports.getLoadRentalUrl = void 0;
const IRental_1 = require("../../lib/interfaces/IRental");
const fetcher_1 = require("./fetcher");
const IControllerResponse_1 = require("../../lib/interfaces/IControllerResponse");
const getLoadRentalUrl = (id) => `/api/rentals/${id}`;
exports.getLoadRentalUrl = getLoadRentalUrl;
async function loadRental(id) {
    const responsePromise = await (0, fetcher_1.get)(`${process.env.API_URL}${(0, exports.getLoadRentalUrl)(id)}`);
    const response = await responsePromise;
    const data = response === null || response === void 0 ? void 0 : response.data;
    return data;
}
exports.loadRental = loadRental;
//# sourceMappingURL=loadRental.js.map