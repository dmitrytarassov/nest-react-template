"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../../utils/theme");
const Image = styled_components_1.default.img `
  position: relative;
  padding: 32px 0;
  width: 100%;
  max-height: 400px;
  object-fit: contain;

  ${({ theme }) => theme.mixins.halfScreenBreak((0, styled_components_1.css) `
      padding: 96px 0;
    `)};
`;
exports.default = Image;
//# sourceMappingURL=Image.js.map