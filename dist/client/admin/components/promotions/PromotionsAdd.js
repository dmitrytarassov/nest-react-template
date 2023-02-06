"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const PromotionsBase_1 = require("./PromotionsBase");
const PromotionsAdd = (props) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.Create, Object.assign({}, props, { redirect: "list" }, { children: (0, jsx_runtime_1.jsx)(PromotionsBase_1.default, {}) })));
};
exports.default = PromotionsAdd;
//# sourceMappingURL=PromotionsAdd.js.map