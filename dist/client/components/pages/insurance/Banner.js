"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const Block_1 = require("@frontend/components/pages/insurance/components/Block");
const link_1 = require("next/link");
const StyledBlock = (0, styled_components_1.default)(Block_1.default) `
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(/public/insurance.png);
  background-position-x: 95%;
  background-position-y: 50%;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      background-image: url(/public/insurance-mobile.png);
      height: 560px;
    `)}
`;
const Component = styled_components_1.default.div `
  max-width: 535px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    color: #0f0e0e;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
    color: #6c768a;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    background: #f1f5f6;
    border-radius: 12px;
    color: #000000;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    text-decoration: none;
    transition: 0.3s ease all;

    svg {
      margin-right: 12px;
    }

    :hover {
      color: #7749d9 !important;
      transform: translateX(-20px);
      path {
        stroke: #7749d9;
      }
    }
  }
`;
const Banner = () => {
    return ((0, jsx_runtime_1.jsx)(StyledBlock, { children: (0, jsx_runtime_1.jsxs)(Component, { children: [(0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: '/' }, { children: (0, jsx_runtime_1.jsxs)("a", { children: [(0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.49953 1.5L1.99953 7M1.99953 7L6.49953 12.5M1.99953 7H11", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }) })), "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"] }) })), (0, jsx_runtime_1.jsx)("h1", { children: "Kinoscope Insurance" }), (0, jsx_runtime_1.jsx)("p", { children: "Kinoscope Insurance \u044D\u0442\u043E \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u044A\u0435\u043C\u043E\u043A" })] }) }));
};
exports.default = Banner;
//# sourceMappingURL=Banner.js.map