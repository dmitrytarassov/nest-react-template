"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const StyledBox = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
const Box = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(StyledBox, { children: children });
};
exports.default = Box;
//# sourceMappingURL=Box.js.map