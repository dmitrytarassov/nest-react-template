"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const StyledTabs = styled_components_1.default.div `
  display: flex;
  height: 56px;
  padding: 3px;
  box-sizing: border-box;
  border-radius: 28px;
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.borders.default};
`;
const Option = styled_components_1.default.div `
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 24px;

  ${({ theme, active }) => active
    ? (0, styled_components_1.css) `
          background-color: ${theme.colors.buttons.default};
          color: ${theme.colors.text.additional};
          border-radius: 32px;
          cursor: default;
        `
    : (0, styled_components_1.css) `
          color: ${theme.colors.text.additional};
          cursor: pointer;
        `}
`;
const Tabs = ({ options, active, onChange }) => {
    return ((0, jsx_runtime_1.jsx)(StyledTabs, { children: options.map((option) => ((0, jsx_runtime_1.jsx)(Option, Object.assign({ active: option.value === active, onClick: () => onChange(option.value) }, { children: option.name })))) }));
};
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map