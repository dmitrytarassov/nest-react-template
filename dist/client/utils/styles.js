"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintStyles = void 0;
const styled_components_1 = require("styled-components");
const theme_1 = require("./theme");
exports.lintStyles = (0, styled_components_1.css) `
  color: ${({ theme }) => theme.colors.links.default};
  :hover {
    color: ${({ theme }) => theme.colors.links.hover}!important;
  }
  :visited,
  :active,
  :focus,
  :focus-visible,
  :focus-within {
    color: ${({ theme }) => theme.colors.links.active};
  }
`;
//# sourceMappingURL=styles.js.map