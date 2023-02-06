"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullPageSwiperProps = void 0;
const swiper_1 = require("swiper");
const theme_1 = require("./theme");
exports.fullPageSwiperProps = {
    modules: [swiper_1.Navigation],
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
        [theme_1.breakpoints.mobile]: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        [theme_1.breakpoints.tablet]: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
};
//# sourceMappingURL=fullPageSwiperProps.js.map