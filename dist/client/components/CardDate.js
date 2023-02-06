"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("@frontend/components/Image");
const CardDate_module_scss_1 = require("./CardDate.module.scss");
const classnames_1 = require("classnames");
const CardDate = ({ children, size }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CardDate_module_scss_1.default.badge, CardDate_module_scss_1.default[size]) }, { children: [(0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/clocks.svg", width: 20, height: 14 }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: CardDate_module_scss_1.default.text }, { children: children }))] })));
};
exports.default = CardDate;
//# sourceMappingURL=CardDate.js.map