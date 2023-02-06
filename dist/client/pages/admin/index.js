"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dynamic_1 = require("next/dynamic");
const ReactAdmin = (0, dynamic_1.default)(() => Promise.resolve().then(() => require('../../admin/AdminNoSsrPage')), {
    ssr: false,
});
const AdminPage = () => (0, jsx_runtime_1.jsx)(ReactAdmin, {});
exports.default = (0, dynamic_1.default)(() => Promise.resolve(AdminPage), {
    ssr: false,
});
//# sourceMappingURL=index.js.map