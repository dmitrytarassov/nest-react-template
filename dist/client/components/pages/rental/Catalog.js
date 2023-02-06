"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Positions_1 = require("@frontend/components/pages/rental/Positions");
const Catalog = ({ id }) => {
    return ((0, jsx_runtime_1.jsx)(Positions_1.default, { loadPositionUrl: `/api/rentals/${id}/products`, linkToAll: `/rentals/${id}/catalog`, revertColors: false }));
};
exports.default = Catalog;
//# sourceMappingURL=Catalog.js.map