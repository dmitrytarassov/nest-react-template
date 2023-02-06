"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const ProductBase_1 = require("./ProductBase");
const ProductEdit = (props) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.Edit, Object.assign({}, props, { redirect: "edit" }, { children: (0, jsx_runtime_1.jsx)(ProductBase_1.default, {}) })));
};
exports.default = ProductEdit;
//# sourceMappingURL=ProductEdit.js.map