"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BackButton_1 = require("@frontend/components/BackButton");
const PageHeader_module_scss_1 = require("./PageHeader.module.scss");
const Image_1 = require("@frontend/components/Image");
const classnames_1 = require("classnames");
const PageHeader = ({ backLink, title, children, image, rating, revertColors, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(PageHeader_module_scss_1.default.container, { reverted: revertColors }) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PageHeader_module_scss_1.default.title }, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, { to: backLink }), image && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: PageHeader_module_scss_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: image, width: 48, height: 48 }) }))), (0, jsx_runtime_1.jsx)("h1", Object.assign({ className: PageHeader_module_scss_1.default.heading }, { children: title })), rating && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: PageHeader_module_scss_1.default.ratingContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: PageHeader_module_scss_1.default.text }, { children: rating })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: PageHeader_module_scss_1.default.ratingImgContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/star.svg", width: 22, height: 22 }) }))] })))] })), children] })));
};
exports.default = PageHeader;
//# sourceMappingURL=PageHeader.js.map