"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IPromotionTag_1 = require("../../lib/interfaces/IPromotionTag");
const classnames_1 = require("classnames");
const CardTag_module_scss_1 = require("./CardTag.module.scss");
const Badge_module_scss_1 = require("./Badge.module.scss");
const CardTag = ({ tag, text, size }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(CardTag_module_scss_1.default.badge, Badge_module_scss_1.default[tag], CardTag_module_scss_1.default[size]) }, { children: text })));
};
exports.default = CardTag;
//# sourceMappingURL=CardTag.js.map