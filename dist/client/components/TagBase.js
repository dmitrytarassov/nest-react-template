"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../utils/theme");
const TagBase = styled_components_1.default.div `
  font-family: 'Neue Machina';
  padding: 0 12px;
  height: 48px;
  z-index: 2;
  display: flex;
  align-items: center;
  border-radius: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  ${({ theme, type }) => (0, styled_components_1.css) `
    background-color: ${theme.colors.tags[type]};
    color: ${theme.colors.tags.text};

    ${theme.mixins.tablet((0, styled_components_1.css) `
      height: 32px;
      font-size: 14px;
    `)}
  `};
`;
exports.default = TagBase;
//# sourceMappingURL=TagBase.js.map