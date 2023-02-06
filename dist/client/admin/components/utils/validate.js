"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhone = exports.validateRequired = exports.validateEmail = void 0;
const react_admin_1 = require("react-admin");
exports.validateEmail = [(0, react_admin_1.required)(), (0, react_admin_1.email)()];
exports.validateRequired = (0, react_admin_1.required)();
exports.validatePhone = [
    (0, react_admin_1.required)(),
    (value) => value < 79999999999 && value > 71000000000
        ? null
        : 'Please set phone un format 79000000',
];
//# sourceMappingURL=validate.js.map