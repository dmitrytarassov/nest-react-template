"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tabs_module_scss_1 = require("./Tabs.module.scss");
const classnames_1 = require("classnames");
const Tabs = ({ options, active, onChange }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Tabs_module_scss_1.default.tabs }, { children: options.map((option) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Tabs_module_scss_1.default.tab, {
                [Tabs_module_scss_1.default.active]: option.value === active,
            }), onClick: () => onChange(option.value) }, { children: option.name }), option.value))) })));
};
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map