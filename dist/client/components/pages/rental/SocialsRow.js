"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const styles_1 = require("../../../utils/styles");
const SocialsRow = styled_components_1.default.div `
  display: flex;
  color: ${({ theme }) => theme.colors.text.additional};
  font-weight: 400;
  line-height: 140%;
  align-items: center;
  margin-bottom: 12px;
  font-size: 12px;

  :not(:last-child) {
    margin-right: 24px;
  }

  ${({ fullWidth }) => fullWidth &&
    (0, styled_components_1.css) `
      width: 100%;
    `}

  ${({ halfWidth }) => halfWidth &&
    (0, styled_components_1.css) `
      width: 50%;
      margin-right: 0 !important;
    `}

  a {
    display: flex;
    ${styles_1.lintStyles};
    align-items: center;
  }
`;
exports.default = SocialsRow;
//# sourceMappingURL=SocialsRow.js.map