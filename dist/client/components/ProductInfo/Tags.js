"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../utils/theme");
const TagBase_1 = require("@frontend/components/TagBase");
const StyledTags = styled_components_1.default.div `
  position: absolute;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  top: 24px;

  ${({ theme }) => (0, styled_components_1.css) `
    ${theme.mixins.halfScreenBreak((0, styled_components_1.css) `
      justify-content: flex-start;

      ${TagBase_1.default} + ${TagBase_1.default} {
        margin-left: 12px;
      }
    `)}
  `};
`;
const Tags = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(StyledTags, { children: children });
};
exports.default = Tags;
//# sourceMappingURL=Tags.js.map