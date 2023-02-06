"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const Container_1 = require("@frontend/layout/Container");
const theme_1 = require("../utils/theme");
const Content_1 = require("@frontend/layout/Content");
const classnames_1 = require("classnames");
const StyledContainer = (0, styled_components_1.default)(Container_1.Container) `
  ${({ theme, alternateColors, }) => (0, styled_components_1.css) `
    background-color: ${alternateColors
    ? theme.colors.background.alternate
    : theme.colors.background.primary};
    color: ${alternateColors
    ? theme.colors.text.alternate
    : theme.colors.text.additional};
  `}
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  min-height: unset;
  overflow: hidden;
  padding-bottom: 96px;
  padding-top: 64px;
  height: max-content;

  :last-child {
    padding-bottom: 64px;
  }

  & + & {
    margin-top: -32px;
  }
`;
const StyledContent = (0, styled_components_1.default)(Content_1.default) `
  display: flex;
  flex-direction: column;
`;
const ContainerWithRadius = ({ children, alternateColors = false, className, }) => {
    return ((0, jsx_runtime_1.jsx)(StyledContainer, Object.assign({ alternateColors: alternateColors, className: (0, classnames_1.default)(className) }, { children: (0, jsx_runtime_1.jsx)(StyledContent, { children: children }) })));
};
exports.default = ContainerWithRadius;
//# sourceMappingURL=ContainerWithRadius.js.map