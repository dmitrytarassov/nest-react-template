"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const moneyFormat_1 = require("../../utils/moneyFormat");
const Button_1 = require("@frontend/components/Button");
const ShareButton_1 = require("@frontend/components/ShareButton");
const Price_module_scss_1 = require("./Price.module.scss");
const Price = ({ price, discountPrice, link }) => {
    const isPromotion = !(price || discountPrice);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Price_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Price_module_scss_1.default.prices }, { children: isPromotion ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Price_module_scss_1.default.text }, { children: link ? 'Посмотреть на сайте рентала' : 'Поделиться' }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Price_module_scss_1.default.text }, { children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Price_module_scss_1.default.current }, { children: [(0, moneyFormat_1.moneyFormat)(discountPrice || price, false), (0, jsx_runtime_1.jsxs)("span", { children: ['\u00A0', "\u20BD"] })] })), discountPrice > 0 && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Price_module_scss_1.default.old }, { children: [(0, moneyFormat_1.moneyFormat)(price, false), " ", (0, jsx_runtime_1.jsxs)("span", { children: ['\u00A0', "\u20BD"] })] })))] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Price_module_scss_1.default.buttons }, { children: [(0, jsx_runtime_1.jsx)(ShareButton_1.default, { alone: !link }), link && ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ className: Price_module_scss_1.default.button, href: link, blank: true, type: "link" }, { children: isPromotion ? 'Открыть' : 'Арендовать' })))] }))] })));
};
exports.default = Price;
//# sourceMappingURL=Price.js.map