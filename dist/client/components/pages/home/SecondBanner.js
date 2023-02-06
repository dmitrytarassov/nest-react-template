"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Content_1 = require("@frontend/layout/Content");
const Button_1 = require("@frontend/components/Button");
const SecondBanner_module_scss_1 = require("./SecondBanner.module.scss");
const InfoText_module_scss_1 = require("../../InfoText.module.scss");
const classnames_1 = require("classnames");
const SecondBanner = () => {
    return ((0, jsx_runtime_1.jsx)(Content_1.default, Object.assign({ className: SecondBanner_module_scss_1.default.content }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: SecondBanner_module_scss_1.default.banner }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: SecondBanner_module_scss_1.default.heading }, { children: "\u0420\u0435\u043D\u0442\u0430\u043B\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435" })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: (0, classnames_1.default)(SecondBanner_module_scss_1.default.text, InfoText_module_scss_1.default.onlyDesktop) }, { children: ["\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u0433\u0434\u0435 ", '\n', "\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0440\u0435\u043D\u0442\u0430\u043B\u044B \u0432 \u0432\u0430\u0448\u0435\u043C \u0433\u043E\u0440\u043E\u0434\u0435"] })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: (0, classnames_1.default)(SecondBanner_module_scss_1.default.text, InfoText_module_scss_1.default.onlyMobile) }, { children: ["\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u0433\u0434\u0435 ", '\n', "\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0440\u0435\u043D\u0442\u0430\u043B\u044B \u0432 \u0432\u0430\u0448\u0435\u043C ", '\n', "\u0433\u043E\u0440\u043E\u0434\u0435"] })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: "/rentals", size: "large" }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435" }))] })) })));
};
exports.default = SecondBanner;
//# sourceMappingURL=SecondBanner.js.map