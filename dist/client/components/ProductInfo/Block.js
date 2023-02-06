"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../../utils/theme");
const Block = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background.default};
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;
exports.default = Block;
//# sourceMappingURL=Block.js.map