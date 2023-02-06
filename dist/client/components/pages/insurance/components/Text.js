"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const Text = styled_components_1.default.div `
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &.withPadding {
    padding: 0 24px;
  }

  a {
    color: #fe6b01 !important;
    text-decoration: none;

    &:hover {
      color: #fe6b01 !important;
      text-decoration: underline;
    }
  }
`;
exports.default = Text;
//# sourceMappingURL=Text.js.map