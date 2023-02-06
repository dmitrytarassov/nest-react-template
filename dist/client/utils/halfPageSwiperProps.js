"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halfPageSwiperProps = void 0;
const swiper_1 = require("swiper");
const theme_1 = require("./theme");
exports.halfPageSwiperProps = {
    modules: [swiper_1.Navigation],
    spaceBetween: 24,
    slidesPerView: 1.1,
    breakpoints: {
        [theme_1.breakpoints.mobile]: {
            slidesPerView: 2.35,
            spaceBetween: 24,
        },
    },
};
//# sourceMappingURL=halfPageSwiperProps.js.map