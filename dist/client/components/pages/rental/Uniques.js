"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Positions_1 = require("@frontend/components/pages/rental/Positions");
const Uniques = ({ id }) => {
    return ((0, jsx_runtime_1.jsx)(Positions_1.default, { loadPositionUrl: `/api/rentals/unique_products?id=${id}`, linkToAll: `/rentals/${id}/uniques`, revertColors: true }));
};
exports.default = Uniques;
//# sourceMappingURL=Uniques.js.map