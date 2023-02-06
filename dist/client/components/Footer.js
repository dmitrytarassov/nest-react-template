"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = require("next/link");
const Vk_1 = require("@frontend/components/logos/Vk");
const Telegram_1 = require("@frontend/components/logos/Telegram");
const classnames_1 = require("classnames");
const Footer_module_scss_1 = require("./Footer.module.scss");
const Content_1 = require("@frontend/layout/Content");
const Image_1 = require("@frontend/components/Image");
const Footer = ({ halfScreen }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Footer_module_scss_1.default.container }, { children: (0, jsx_runtime_1.jsx)(Content_1.default, Object.assign({ className: Footer_module_scss_1.default.content }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Footer_module_scss_1.default.block, {
                    [Footer_module_scss_1.default.halfScreen]: halfScreen,
                }) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Footer_module_scss_1.default.column }, { children: (0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: "/", passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: Footer_module_scss_1.default.logoLink }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/logo.svg", className: Footer_module_scss_1.default.logo, layout: "fill" }) })) })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Footer_module_scss_1.default.column }, { children: [(0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: '/rentals' }, { children: "\u0420\u0435\u043D\u0442\u0430\u043B\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435" })), (0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: '/insurance' }, { children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F" })), (0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: "/unique_positions" }, { children: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Footer_module_scss_1.default.column }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: "mailto:kinoscope@inbox.ru" }, { children: "kinoscope@inbox.ru" })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "tel:+79999222535" }, { children: "8 (999) 922-25-35" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Footer_module_scss_1.default.socials }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://vk.com" }, { children: (0, jsx_runtime_1.jsx)(Vk_1.default, {}) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://t.me" }, { children: (0, jsx_runtime_1.jsx)(Telegram_1.default, {}) }))] }))] }))] })) })) })));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map