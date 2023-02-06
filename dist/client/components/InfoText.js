"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = require("classnames");
const InfoText_module_scss_1 = require("./InfoText.module.scss");
const InfoText = ({ children, className, onlyMobile, onlyDesktop, }) => {
    return ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: (0, classnames_1.default)(InfoText_module_scss_1.default.text, className, {
            [InfoText_module_scss_1.default.onlyDesktop]: onlyDesktop,
            [InfoText_module_scss_1.default.onlyMobile]: onlyMobile,
        }) }, { children: children })));
};
exports.default = InfoText;
//# sourceMappingURL=InfoText.js.map