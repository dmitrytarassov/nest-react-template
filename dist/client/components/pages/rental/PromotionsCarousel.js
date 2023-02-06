"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("swiper/react");
const Card_1 = require("@frontend/components/Card");
const Button_1 = require("@frontend/components/Button");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const halfPageSwiperProps_1 = require("../../../utils/halfPageSwiperProps");
const imageUrl_1 = require("../../../utils/imageUrl");
const CarouselControlsWithMap_1 = require("@frontend/components/CarouselControlsWithMap");
const loaders_1 = require("../../../utils/loaders");
const PromotionsCarousel_module_scss_1 = require("./PromotionsCarousel.module.scss");
const classnames_1 = require("classnames");
const PromotionsCarousel = ({ id, url }) => {
    const [allPromotions, setAllPromotions] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, loaders_1.loadPromotionsByRentalId)(id).then((data) => {
            setAllPromotions(data);
        });
    }, [id]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: allPromotions.length > 0 && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PromotionsCarousel_module_scss_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PromotionsCarousel_module_scss_1.default.title }, { children: ["\u0410\u043A\u0446\u0438\u0438 \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0440\u0435\u043D\u0442\u0430\u043B\u0430", (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ className: PromotionsCarousel_module_scss_1.default.button, type: "link", href: `/rentals/${url}/promotions` }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: PromotionsCarousel_module_scss_1.default.carousel }, { children: (0, jsx_runtime_1.jsxs)(react_2.Swiper, Object.assign({}, halfPageSwiperProps_1.halfPageSwiperProps, { children: [allPromotions.map((promotion) => ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { title: promotion.name, description: promotion.shortText, image: promotion.photos[0]
                                        ? (0, imageUrl_1.default)(promotion.photos[0])
                                        : '/public/logoWithCover.svg', link: promotion.url, tag: {
                                        type: promotion.promotionType,
                                        text: promotion.promotionText,
                                    }, date: promotion.date, rentalLogo: promotion.rentalLogo, size: "small", price: promotion.price, discountPrice: promotion.discountPrice }) }, promotion.id))), allPromotions.length > 2 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(PromotionsCarousel_module_scss_1.default.footer, PromotionsCarousel_module_scss_1.default.footerDesktop) }, { children: (0, jsx_runtime_1.jsx)(CarouselControlsWithMap_1.default, { count: allPromotions.length, size: "small", color: "black" }) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(PromotionsCarousel_module_scss_1.default.footer, PromotionsCarousel_module_scss_1.default.footerMobile) }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: `/rentals/${id}/promotions` }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435" })), (0, jsx_runtime_1.jsx)(CarouselControlsWithMap_1.default, { count: allPromotions.length, size: "medium", color: "black" })] }))] })) }))] }))) }));
};
exports.default = PromotionsCarousel;
//# sourceMappingURL=PromotionsCarousel.js.map