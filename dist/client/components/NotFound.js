"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const imageUrl_1 = require("../utils/imageUrl");
const theme_1 = require("../utils/theme");
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
`;
const Text = styled_components_1.default.span `
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: pre-line;
  margin-top: 40px;
  text-align: center;
`;
const NotFound = () => {
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('not_found.svg') }), (0, jsx_runtime_1.jsxs)(Text, { children: ["\u0421\u043E\u0436\u0430\u043B\u0435\u0435\u043C, \u043D\u043E \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ", '\n', "\u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E."] })] }));
};
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map