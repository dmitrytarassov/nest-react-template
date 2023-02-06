"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewPageContainer = exports.PreviewCardContainer = void 0;
const styled_components_1 = require("styled-components");
const PreviewContainer = styled_components_1.default.div `
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 72px 0;
`;
exports.PreviewCardContainer = styled_components_1.default.div `
  width: 300px;
`;
exports.PreviewPageContainer = styled_components_1.default.div `
  background-color: #fff;
  width: 600px;
`;
exports.default = PreviewContainer;
//# sourceMappingURL=PreviewContainer.js.map