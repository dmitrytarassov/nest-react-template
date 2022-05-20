import { Navigation } from 'swiper';
import { breakpoints } from '@frontend/utils/theme';

export const halfPageSwiperProps = {
  modules: [Navigation],
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    [breakpoints.mobile]: {
      slidesPerView: 2.1,
      spaceBetween: 24,
    },
    // [breakpoints.tablet]: {
    //   slidesPerView: 3,
    //   spaceBetween: 24,
    // },
    // [breakpoints.laptop]: {
    //   slidesPerView: 4,
    //   spaceBetween: 24,
    // },
  },
};
