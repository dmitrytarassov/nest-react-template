"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const TagBase_1 = require("@frontend/components/TagBase");
const StyledTag = (0, styled_components_1.default)(TagBase_1.default) `
  font-size: 14px;

  img {
    margin-right: 8px;
    width: 14px;
  }
`;
const DateTag = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)(StyledTag, Object.assign({ type: "date" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "/public/clocks.svg" }), " ", children] })));
};
exports.default = DateTag;
//# sourceMappingURL=DateTag.js.map