"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Content_1 = require("@frontend/layout/Content");
const InfoText_1 = require("@frontend/components/InfoText");
const Heading_module_scss_1 = require("../../Heading.module.scss");
const Banner_module_scss_1 = require("./Banner.module.scss");
const classnames_1 = require("classnames");
const Banner = () => {
    return ((0, jsx_runtime_1.jsx)(Content_1.default, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Banner_module_scss_1.default.banner }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: (0, classnames_1.default)(Banner_module_scss_1.default.heading, Heading_module_scss_1.default.useLines) }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Kinoscope" }) })), (0, jsx_runtime_1.jsxs)(InfoText_1.default, Object.assign({ onlyDesktop: true }, { children: ["\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u043E \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u0445 ", '\n', "\u0438 \u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u043E \u0432\u0441\u0435\u0445 \u0440\u0435\u043D\u0442\u0430\u043B\u0430\u0445", ' ', '\n', "\u0432 \u0442\u0432\u043E\u0435\u043C \u0433\u043E\u0440\u043E\u0434\u0435"] })), (0, jsx_runtime_1.jsxs)(InfoText_1.default, Object.assign({ onlyMobile: true }, { children: ["\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 ", '\n', "\u043E \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u0445 \u0438 \u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u043E \u0432\u0441\u0435\u0445 ", '\n', "\u0440\u0435\u043D\u0442\u0430\u043B\u0430\u0445", ' ', "\u0432 \u0442\u0432\u043E\u0435\u043C \u0433\u043E\u0440\u043E\u0434\u0435"] }))] })) }));
};
exports.default = Banner;
//# sourceMappingURL=Banner.js.map