"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const CarouselControl_1 = require("@frontend/components/CarouselControl");
const react_1 = require("swiper/react");
const theme_1 = require("../utils/theme");
const classnames_1 = require("classnames");
const StyledCarouselControls = styled_components_1.default.div `
  display: flex;

  &.hide-from-tablet {
    display: none;
    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          display: flex;
        `)}
  }

  &.hide-from-mobile {
    display: none;
    ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
          display: flex;
        `)}
  }

  &.hide {
    display: none;
  }
`;
const CarouselControlsHalfScreen = ({ revertColors, count, size = 'large', className, }) => {
    const swiper = (0, react_1.useSwiper)();
    const next = () => {
        swiper.slideNext();
    };
    const prev = () => {
        swiper.slidePrev();
    };
    return ((0, jsx_runtime_1.jsxs)(StyledCarouselControls, Object.assign({ className: (0, classnames_1.default)(className, count < 2 && 'hide', count === 2 && 'hide-from-mobile') }, { children: [(0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: prev, revertColors: revertColors, direction: "left" }), (0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: next, revertColors: revertColors, direction: "right" })] })));
};
exports.default = CarouselControlsHalfScreen;
//# sourceMappingURL=CarouselControlsHalfScreen.js.map