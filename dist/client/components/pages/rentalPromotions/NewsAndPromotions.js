"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const NotFound_1 = require("@frontend/components/NotFound");
const PromotionsCarousel_1 = require("@frontend/components/pages/rentalPromotions/PromotionsCarousel");
const classnames_1 = require("classnames");
const NewsAndPromotions_module_scss_1 = require("./NewsAndPromotions.module.scss");
const NewsAndPromotions = ({ news, promotions, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [promotions.length === 0 && news.length === 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: NewsAndPromotions_module_scss_1.default.nfContainer }, { children: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) }))), promotions.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: NewsAndPromotions_module_scss_1.default.title }, { children: "\u0410\u043A\u0446\u0438\u0438" })), (0, jsx_runtime_1.jsx)(PromotionsCarousel_1.default, { promotions: promotions })] })), news.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: (0, classnames_1.default)(NewsAndPromotions_module_scss_1.default.title, {
                            [NewsAndPromotions_module_scss_1.default.not_alone]: promotions.length > 0,
                        }) }, { children: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438" })), (0, jsx_runtime_1.jsx)(PromotionsCarousel_1.default, { promotions: news })] }))] }));
};
exports.default = NewsAndPromotions;
//# sourceMappingURL=NewsAndPromotions.js.map