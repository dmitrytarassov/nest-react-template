"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = require("next/link");
const BackButton_module_scss_1 = require("./BackButton.module.scss");
const BackButton = ({ to }) => {
    return ((0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: to, passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: BackButton_module_scss_1.default.button }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "38", height: "38", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M20.4995 14.5L15.9995 20M15.9995 20L20.4995 25.5M15.9995 20H25", stroke: "#0F0E0E", strokeWidth: "2", strokeLinecap: "round" }) })) })) })));
};
exports.default = BackButton;
//# sourceMappingURL=BackButton.js.map