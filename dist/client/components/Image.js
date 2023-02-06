"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = require("next/image");
const Image = ({ src, layout, className, width, height, alt, }) => {
    return ((0, jsx_runtime_1.jsx)(image_1.default, { src: src, className: className, width: width, height: height, layout: layout, alt: alt }));
};
exports.default = Image;
//# sourceMappingURL=Image.js.map