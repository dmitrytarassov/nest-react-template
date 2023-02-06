"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = require("classnames");
const BannerBase_module_scss_1 = require("./BannerBase.module.scss");
const BannerBase = ({ children, className }) => {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(BannerBase_module_scss_1.default.base, className) }, { children: children }));
};
exports.default = BannerBase;
//# sourceMappingURL=BannerBase.js.map