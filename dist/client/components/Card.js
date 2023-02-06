"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = require("next/link");
const moneyFormat_1 = require("../utils/moneyFormat");
const IPromotionTag_1 = require("../../lib/interfaces/IPromotionTag");
const CardTag_1 = require("@frontend/components/CardTag");
const CardDate_1 = require("@frontend/components/CardDate");
const getExpirationDateText_1 = require("../utils/getExpirationDateText");
const imageUrl_1 = require("../utils/imageUrl");
const Card_module_scss_1 = require("./Card.module.scss");
const Image_1 = require("@frontend/components/Image");
const classnames_1 = require("classnames");
const Card = ({ size = 'small', link, image, title, description, price, discountPrice, tag, date, promotionText, rentalLogo, }) => {
    const dateText = (0, getExpirationDateText_1.getExpirationDateText)(date);
    return ((0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: link, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: (0, classnames_1.default)(Card_module_scss_1.default.card, Card_module_scss_1.default[size]) }, { children: [tag && (0, jsx_runtime_1.jsx)(CardTag_1.default, { tag: tag.type, text: tag.text, size: size }), dateText && (0, jsx_runtime_1.jsx)(CardDate_1.default, Object.assign({ size: size }, { children: dateText })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Card_module_scss_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Image_1.default, { className: Card_module_scss_1.default.image, src: image, layout: "responsive", width: "400px", height: "200px" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Card_module_scss_1.default.content, {
                                        [Card_module_scss_1.default.withPrice]: !!price,
                                    }) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Card_module_scss_1.default.titleContainer }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Card_module_scss_1.default.popupContainer }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: Card_module_scss_1.default.title }, { children: title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.popup }, { children: title }))] })), rentalLogo && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.logoContainer }, { children: (0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)(rentalLogo), className: Card_module_scss_1.default.logo }) })))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.text }, { children: promotionText || description }))] }))] }), price && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Card_module_scss_1.default.footer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.priceTitle }, { children: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Card_module_scss_1.default.prices }, { children: [discountPrice && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.oldPrice }, { children: (0, moneyFormat_1.moneyFormat)(price) }))), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Card_module_scss_1.default.price }, { children: (0, moneyFormat_1.moneyFormat)(discountPrice || price) }))] }))] })))] }))] })) })));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map