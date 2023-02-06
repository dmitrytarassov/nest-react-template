"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../utils/theme");
const classnames_1 = require("classnames");
const styledHeading = (0, styled_components_1.css) `
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 700;
  line-height: 100%;

  span {
    ${({ useLines }) => useLines &&
    (0, styled_components_1.css) `
        padding-right: 32px;
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;
        background-image: url('/public/lines.svg');
      `}
  }
`;
const H1 = styled_components_1.default.h1 `
  ${styledHeading};
  font-size: 72px;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      font-size: 64px;
    `)}

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      font-size: 48px;
    `)}
`;
const H2 = styled_components_1.default.h2 `
  ${styledHeading};
`;
const H3 = styled_components_1.default.h3 `
  ${styledHeading};
  font-size: 40px;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      font-size: 36px;
    `)}

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      font-size: 32px;
    `)}
`;
const H4 = styled_components_1.default.h4 `
  ${styledHeading};
`;
const componentsMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
};
const Heading = ({ level, useLines, children, className }) => {
    const Component = componentsMap[level];
    return ((0, jsx_runtime_1.jsx)(Component, Object.assign({ useLines: useLines, className: (0, classnames_1.default)(className) }, { children: (0, jsx_runtime_1.jsx)("span", { children: children }) })));
};
exports.default = Heading;
//# sourceMappingURL=Heading.js.map