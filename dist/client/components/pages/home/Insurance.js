"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("@frontend/components/Button");
const Insurance_module_scss_1 = require("./Insurance.module.scss");
const classnames_1 = require("classnames");
const Content_1 = require("@frontend/layout/Content");
const Insurance = ({ haveUniques }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Insurance_module_scss_1.default.container, {
            [Insurance_module_scss_1.default.haveUniques]: haveUniques,
        }) }, { children: (0, jsx_runtime_1.jsx)(Content_1.default, Object.assign({ className: Insurance_module_scss_1.default.content }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Insurance_module_scss_1.default.banner }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: Insurance_module_scss_1.default.heading }, { children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Insurance_module_scss_1.default.text }, { children: ["\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u043A\u0443 ", '\n', "\u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u0430\u0440\u0435\u043D\u0434\u044B?"] })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: "/insurance", size: "large", variant: "whiteOrange" }, { children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435" }))] })) })) })));
};
exports.default = Insurance;
//# sourceMappingURL=Insurance.js.map