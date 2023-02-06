"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = require("styled-components");
const theme_1 = require("../utils/theme");
const styles_1 = require("../utils/styles");
exports.Container = styled_components_1.default.div `
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      padding: 0 16px;
    `)}

  a {
    ${styles_1.lintStyles}
  }
`;
//# sourceMappingURL=Container.js.map