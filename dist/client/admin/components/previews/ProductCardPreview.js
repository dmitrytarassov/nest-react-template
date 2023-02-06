"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = require("@frontend/components/Card");
const theme_1 = require("../../../utils/theme");
const styled_components_1 = require("styled-components");
const PreviewContainer_1 = require("./PreviewContainer");
function ProductCardPreview({ record }) {
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.default, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.PreviewCardContainer, { children: (0, jsx_runtime_1.jsx)(Card_1.default, Object.assign({}, record)) }) }) })));
}
exports.default = ProductCardPreview;
//# sourceMappingURL=ProductCardPreview.js.map