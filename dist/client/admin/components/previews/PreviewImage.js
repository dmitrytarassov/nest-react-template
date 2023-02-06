"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const styled_components_1 = require("styled-components");
const StyledImageField = (0, styled_components_1.default)(react_admin_1.ImageField) `
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;
const PreviewImage = ({ record, source, }) => {
    if (typeof record == 'string') {
        record = {
            [source]: `/public/${record}`,
        };
    }
    return (0, jsx_runtime_1.jsx)(StyledImageField, { record: record, source: source });
};
exports.PreviewImage = PreviewImage;
//# sourceMappingURL=PreviewImage.js.map