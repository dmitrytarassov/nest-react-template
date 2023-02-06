"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Content_1 = require("@frontend/layout/Content");
const react_1 = require("swiper/react");
const usePromotions_1 = require("../../../hooks/usePromotions");
const Card_1 = require("@frontend/components/Card");
const Button_1 = require("@frontend/components/Button");
const CarouselControls_1 = require("@frontend/components/CarouselControls");
const fullPageSwiperProps_1 = require("../../../utils/fullPageSwiperProps");
const CarouselContainer_1 = require("@frontend/components/CarouselContainer");
const imageUrl_1 = require("../../../utils/imageUrl");
const PromotionsCarousel_module_scss_1 = require("./PromotionsCarousel.module.scss");
const classnames_1 = require("classnames");
const Heading_module_scss_1 = require("../../Heading.module.scss");
const PromotionsCarousel = () => {
    const { promotions } = (0, usePromotions_1.usePromotions)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: promotions.length > 0 && ((0, jsx_runtime_1.jsx)(Content_1.default, Object.assign({ className: PromotionsCarousel_module_scss_1.default.content }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PromotionsCarousel_module_scss_1.default.container }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: (0, classnames_1.default)(PromotionsCarousel_module_scss_1.default.heading, Heading_module_scss_1.default.useLines) }, { children: (0, jsx_runtime_1.jsxs)("div", { children: ["\u0410\u043A\u0446\u0438\u0438 \u0438", '\u00A0', "\u043D\u043E\u0432\u0438\u043D\u043A\u0438", '\u00A0', "\u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432"] }) })), (0, jsx_runtime_1.jsx)(CarouselContainer_1.default, { children: (0, jsx_runtime_1.jsxs)(react_1.Swiper, Object.assign({}, fullPageSwiperProps_1.fullPageSwiperProps, { children: [promotions.map((promotion) => ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { size: "large", title: promotion.name, description: promotion.shortText, image: (0, imageUrl_1.default)(promotion.photos[0]), link: promotion.url, tag: {
                                            type: promotion.promotionType,
                                            text: promotion.promotionText,
                                        }, date: promotion.date, price: promotion.price, discountPrice: promotion.discountPrice, rentalLogo: promotion.rentalLogo }) }, promotion.id))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PromotionsCarousel_module_scss_1.default.carousel }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: "/promotions", size: "large" }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435" })), (0, jsx_runtime_1.jsx)(CarouselControls_1.default, { count: promotions.length, color: "black" })] }))] })) })] })) }))) }));
};
exports.default = PromotionsCarousel;
//# sourceMappingURL=PromotionsCarousel.js.map