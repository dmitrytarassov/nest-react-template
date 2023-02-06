"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = require("next/link");
const Button_module_scss_1 = require("./Button.module.scss");
const classnames_1 = require("classnames");
const Button = ({ onClick = () => {
}, children, disabled, type = 'button', href = '', blank = false, className, variant = 'primary', size = 'medium', }) => {
    const target = blank ? { target: '_blank' } : {};
    return type === 'button' ? ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: (0, classnames_1.default)(Button_module_scss_1.default.button, Button_module_scss_1.default[variant], Button_module_scss_1.default[size], className), onClick: onClick, disabled: disabled }, { children: children }))) : ((0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: href, passHref: true }, target, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: (0, classnames_1.default)(Button_module_scss_1.default.button, Button_module_scss_1.default[variant], Button_module_scss_1.default[size], Button_module_scss_1.default.aButton, className), "data-button-link": true }, target, { children: children })) })));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map