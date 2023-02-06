"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const Subtitle_1 = require("@frontend/components/pages/insurance/components/Subtitle");
const Text_1 = require("@frontend/components/pages/insurance/components/Text");
const react_1 = require("swiper/react");
const swiper_1 = require("swiper");
const Container = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 58px;
    width: 100%;
    overflow-x: hidden;

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        display: none;
      `)}

    ${Subtitle_1.default} {
      margin-bottom: 16px;
    }
  }

  .mobileContainer {
    display: none;

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        display: block;
        width: 100%;
      `)}

    ${Subtitle_1.default} {
      margin-bottom: 16px;
    }

    ${Text_1.default} {
      text-align: left;
    }

    .swiper-pagination {
      display: flex;
      width: 100%;
      margin-top: 32px;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      width: 32px;
      height: 6px;
      background: #d8dde2;
      border-radius: 3px;

      & + .swiper-pagination-bullet {
        margin-left: 8px;
      }

      &.swiper-pagination-bullet-active {
        background: #fe6b01;
      }
    }

    .swiper {
      flex-direction: column-reverse;
      display: flex;
    }
  }

  .block {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
        border: 1px solid #9ea6b6;
        border-radius: 16px;
        padding: 24px;
        align-items: flex-start;
      `)}
  }

  .number {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 24px;
    background: #f1f5f6;
    border-radius: 16px;
    position: relative;

    &.withLine {
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #d8dde2;
        left: calc(100% + 24px);
        top: 50%;
        z-index: 1;
      }
    }

    &.breakCenter {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }

    &.breakLast {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }
  }
`;
const swiperProps = {
    modules: [swiper_1.Navigation, swiper_1.Pagination],
    spaceBetween: 24,
    slidesPerView: 1.1,
    speed: 300,
    pagination: {
        clickable: true,
    },
};
const HowDoesItWork = () => {
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number withLine" }, { children: "1" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ className: "withPadding" }, { children: "\u041E\u0444\u043E\u0440\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0440\u0435\u043D\u0442\u0430\u043B\u0430. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number breakCenter" }, { children: "2" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041E\u043F\u043B\u0430\u0442\u0430" }), (0, jsx_runtime_1.jsxs)(Text_1.default, Object.assign({ className: "withPadding" }, { children: ["\u0421\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043C\u044B \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443. \u0421 \u0446\u0435\u043D\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F", ' ', (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#prices" }, { children: "\u0442\u0443\u0442" }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number breakLast" }, { children: "3" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435" }), (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ className: "withPadding" }, { children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u043E\u0447\u0442\u0443 \u2014 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0443\u0436\u0435 \u0442\u0430\u043C. \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number withLine" }, { children: "4" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u0421\u044A\u0435\u043C\u043A\u0430" }), (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ className: "withPadding" }, { children: "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439 \u0441\u0430\u043C\u044B\u0435 \u0441\u043C\u0435\u043B\u044B\u0435 \u0438\u0434\u0435\u0438, \u0430 \u0440\u0438\u0441\u043A\u0438 \u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435 \u043C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number breakLast" }, { children: "5" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C" }), (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ className: "withPadding" }, { children: "\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439? \u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C, \u043F\u0440\u0438\u0448\u043B\u0438 \u0444\u043E\u0442\u043E/\u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u0438 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u0447\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C" }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mobileContainer" }, { children: (0, jsx_runtime_1.jsxs)(react_1.Swiper, Object.assign({}, swiperProps, { children: [(0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number" }, { children: "1" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041E\u0444\u043E\u0440\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0440\u0435\u043D\u0442\u0430\u043B\u0430. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F" })] })) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number" }, { children: "2" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041E\u043F\u043B\u0430\u0442\u0430" }), (0, jsx_runtime_1.jsxs)(Text_1.default, { children: ["\u0421\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043C\u044B \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443. \u0421 \u0446\u0435\u043D\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#prices" }, { children: "\u0442\u0443\u0442" }))] })] })) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number" }, { children: "3" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435" }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u043E\u0447\u0442\u0443 \u2014 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0443\u0436\u0435 \u0442\u0430\u043C. \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E" })] })) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number" }, { children: "4" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u0421\u044A\u0435\u043C\u043A\u0430" }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439 \u0441\u0430\u043C\u044B\u0435 \u0441\u043C\u0435\u043B\u044B\u0435 \u0438\u0434\u0435\u0438, \u0430 \u0440\u0438\u0441\u043A\u0438 \u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0435 \u043C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F" })] })) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "number" }, { children: "5" })), (0, jsx_runtime_1.jsx)(Subtitle_1.default, { children: "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C" }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: "\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439? \u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C, \u043F\u0440\u0438\u0448\u043B\u0438 \u0444\u043E\u0442\u043E/\u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u0438 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u0447\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C" })] })) })] })) }))] }));
};
exports.default = HowDoesItWork;
//# sourceMappingURL=HowDoesItWork.js.map