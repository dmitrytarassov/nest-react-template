"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const IPromotionTag_1 = require("../../../lib/interfaces/IPromotionTag");
const TagBase_1 = require("@frontend/components/TagBase");
const StyledTag = (0, styled_components_1.default)(TagBase_1.default) ``;
const Tag = ({ tag, text }) => {
    return (0, jsx_runtime_1.jsx)(StyledTag, Object.assign({ type: tag }, { children: text }));
};
exports.default = Tag;
//# sourceMappingURL=Tag.js.map