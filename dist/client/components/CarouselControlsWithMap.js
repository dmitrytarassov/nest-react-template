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

  &.hide-on-laptop {
    display: none;
    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          display: flex;
        `)}
  }

  &.hide-on-tablet {
    display: none;
    ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
          display: flex;
        `)}
  }

  &.hide-on-mobile {
    display: none;
  }
`;
const CarouselControlsWithMap = ({ revertColors, count, size = 'large', color, }) => {
    const swiper = (0, react_1.useSwiper)();
    const next = () => {
        swiper.slideNext();
    };
    const prev = () => {
        swiper.slidePrev();
    };
    return ((0, jsx_runtime_1.jsxs)(StyledCarouselControls, Object.assign({ className: (0, classnames_1.default)(count > 0 && count <= 2 && 'hide-on-laptop', count > 0 && count === 1 && 'hide-on-tablet') }, { children: [(0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: prev, revertColors: revertColors, direction: "left", color: color }), (0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: next, revertColors: revertColors, direction: "right", color: color })] })));
};
exports.default = CarouselControlsWithMap;
//# sourceMappingURL=CarouselControlsWithMap.js.map