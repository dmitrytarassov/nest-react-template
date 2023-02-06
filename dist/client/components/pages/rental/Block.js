"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Block_module_scss_1 = require("./Block.module.scss");
const Block = ({ children, title, blockName }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Block_module_scss_1.default.block, style: { gridArea: blockName } }, { children: [title && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Block_module_scss_1.default.title }, { children: title })), children] })));
};
exports.default = Block;
//# sourceMappingURL=Block.js.map