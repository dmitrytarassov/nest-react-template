"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const PromotionsBase_1 = require("./PromotionsBase");
const PromotionsEdit = (props) => {
    return ((0, jsx_runtime_1.jsx)(react_admin_1.Edit, Object.assign({}, props, { redirect: "edit" }, { children: (0, jsx_runtime_1.jsx)(PromotionsBase_1.default, {}) })));
};
exports.default = PromotionsEdit;
//# sourceMappingURL=PromotionsEdit.js.map