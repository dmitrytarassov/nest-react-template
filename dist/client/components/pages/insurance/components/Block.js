"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../../utils/theme");
const Block = styled_components_1.default.div `
  background-color: ${({ theme }) => theme.colors.background.default};
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      padding: 32px 24px;
      overflow-x: hidden;
    `)}
`;
exports.default = Block;
//# sourceMappingURL=Block.js.map