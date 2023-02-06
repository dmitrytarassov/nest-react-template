"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CarouselControl_1 = require("@frontend/components/CarouselControl");
const react_1 = require("swiper/react");
const classnames_1 = require("classnames");
const CarouselControls_module_scss_1 = require("./CarouselControls.module.scss");
const CarouselControls = ({ revertColors, count, size = 'large', color, }) => {
    const swiper = (0, react_1.useSwiper)();
    const next = () => {
        swiper.slideNext();
    };
    const prev = () => {
        swiper.slidePrev();
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CarouselControls_module_scss_1.default.container, count > 0 && count <= 3 && CarouselControls_module_scss_1.default['hide-on-laptop'], count > 0 && count <= 2 && CarouselControls_module_scss_1.default['hide-on-tablet'], count === 1 && CarouselControls_module_scss_1.default['hide-on-mobile']) }, { children: [(0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: prev, revertColors: revertColors, direction: "left", color: color }), (0, jsx_runtime_1.jsx)(CarouselControl_1.default, { size: size, onClick: next, revertColors: revertColors, direction: "right", color: color })] })));
};
exports.default = CarouselControls;
//# sourceMappingURL=CarouselControls.js.map