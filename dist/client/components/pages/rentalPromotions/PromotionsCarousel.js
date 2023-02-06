"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const react_1 = require("swiper/react");
const Card_1 = require("@frontend/components/Card");
const CarouselContainer_1 = require("@frontend/components/CarouselContainer");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const halfPageSwiperProps_1 = require("../../../utils/halfPageSwiperProps");
const CarouselControls_1 = require("@frontend/components/CarouselControls");
const CarouselFooter_1 = require("@frontend/components/CarouselFooter");
const imageUrl_1 = require("../../../utils/imageUrl");
const theme_1 = require("../../../utils/theme");
const PositionsContainer = styled_components_1.default.div `
  margin: -32px -24px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 32px 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const StyledPromotionsCarousel = (0, styled_components_1.default)(CarouselContainer_1.default) `
  width: 100%;
  .swiper {
    display: flex;
    flex-direction: column;
  }
`;
const PromotionsCarousel = ({ promotions }) => {
    return ((0, jsx_runtime_1.jsx)(PositionsContainer, { children: (0, jsx_runtime_1.jsx)(StyledPromotionsCarousel, { children: (0, jsx_runtime_1.jsxs)(react_1.Swiper, Object.assign({}, halfPageSwiperProps_1.halfPageSwiperProps, { children: [promotions.map((promotion) => ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { title: promotion.name, description: promotion.shortText, image: promotion.photos[0]
                                ? (0, imageUrl_1.default)(promotion.photos[0])
                                : '/public/logoWithCover.svg', link: promotion.url, tag: {
                                type: promotion.promotionType,
                                text: promotion.promotionText,
                            }, date: promotion.date, price: promotion.price, discountPrice: promotion.discountPrice, rentalLogo: promotion.rentalLogo }) }, promotion.url))), (0, jsx_runtime_1.jsx)(CarouselFooter_1.default, { children: (0, jsx_runtime_1.jsx)(CarouselControls_1.default, { count: promotions.length + 1, color: "black", size: "small" }) })] })) }) }));
};
exports.default = PromotionsCarousel;
//# sourceMappingURL=PromotionsCarousel.js.map