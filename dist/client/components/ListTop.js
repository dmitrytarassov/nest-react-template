"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BreadCrumbs_1 = require("@frontend/components/BreadCrumbs");
const IBreadCrumb_1 = require("../dtos/IBreadCrumb");
const PageHeader_1 = require("@frontend/components/PageHeader");
const Image_1 = require("@frontend/components/Image");
const ListTop_module_scss_1 = require("./ListTop.module.scss");
const ListTop = ({ breadcrumbs, backLink, title, search, image, rating, revertColors, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(BreadCrumbs_1.default, { breadcrumbs: breadcrumbs, revertColors: revertColors }), (0, jsx_runtime_1.jsx)(PageHeader_1.default, Object.assign({ backLink: backLink, title: title, image: image, rating: rating, revertColors: revertColors }, { children: search && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ListTop_module_scss_1.default.inputContainer }, { children: [(0, jsx_runtime_1.jsx)("input", { className: ListTop_module_scss_1.default.input, value: search.value, onChange: (e) => search.onChange(e.target.value), placeholder: search.placeholder || 'Поиск' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ListTop_module_scss_1.default.search }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/search.svg", width: "24px", height: "24px" }) }))] }))) }))] }));
};
exports.default = ListTop;
//# sourceMappingURL=ListTop.js.map