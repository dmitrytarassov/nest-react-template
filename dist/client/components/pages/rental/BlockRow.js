"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const BlockColumn_1 = require("@frontend/components/pages/rental/BlockColumn");
const BlockRow = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;

  ${BlockColumn_1.default} {
    ${({ columns }) => columns === 2
    ? (0, styled_components_1.css) `
            width: 50%;
            :nth-child(3),
            :nth-child(4) {
              margin-top: 16px;
            }
          `
    : (0, styled_components_1.css) `
            width: 100%;
          `}
  }
`;
exports.default = BlockRow;
//# sourceMappingURL=BlockRow.js.map