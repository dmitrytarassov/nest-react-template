"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const BlockColumn = styled_components_1.default.div `
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.additional};
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  align-items: center;
  margin-bottom: 12px;
`;
exports.default = BlockColumn;
//# sourceMappingURL=BlockColumn.js.map