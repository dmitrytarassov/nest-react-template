"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const link_1 = require("next/link");
const IBreadCrumb_1 = require("../dtos/IBreadCrumb");
const BreadCrumbs_module_scss_1 = require("./BreadCrumbs.module.scss");
const classnames_1 = require("classnames");
const BreadCrumbs = ({ breadcrumbs, revertColors }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(BreadCrumbs_module_scss_1.default.container, {
            reverted: revertColors,
        }) }, { children: breadcrumbs.map((breadcrumb, index) => index !== breadcrumbs.length - 1 ? ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: breadcrumb.link, passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: BreadCrumbs_module_scss_1.default.element }, { children: breadcrumb.name })) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: BreadCrumbs_module_scss_1.default.slash }, { children: ' / ' }))] }, breadcrumb.name)) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: BreadCrumbs_module_scss_1.default.current }, { children: breadcrumb.name }), breadcrumb.name))) })));
};
exports.default = BreadCrumbs;
//# sourceMappingURL=BreadCrumbs.js.map