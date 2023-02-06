"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const ProductBase_1 = require("./ProductBase");
const ProductAdd = (props) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.Create, Object.assign({}, props, { redirect: "list" }, { children: (0, jsx_runtime_1.jsx)(ProductBase_1.default, {}) })));
};
exports.default = ProductAdd;
//# sourceMappingURL=ProductAdd.js.map