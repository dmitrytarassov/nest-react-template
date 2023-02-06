"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = require("classnames");
const Content_module_scss_1 = require("./Content.module.scss");
const Content = ({ children, className }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Content_module_scss_1.default.content, className) }, { children: children })));
};
exports.default = Content;
//# sourceMappingURL=Content.js.map