"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Info_1 = require("@frontend/components/pages/product/Info");
const theme_1 = require("../../../utils/theme");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
const styled_components_1 = require("styled-components");
const PreviewContainer_1 = require("./PreviewContainer");
function ProductPagePreview({ record }) {
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.default, { children: (0, jsx_runtime_1.jsx)(PreviewContainer_1.PreviewPageContainer, { children: record && (0, jsx_runtime_1.jsx)(Info_1.default, { product: record }) }) }) })));
}
exports.default = ProductPagePreview;
//# sourceMappingURL=ProductPagePreview.js.map