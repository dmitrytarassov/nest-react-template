"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ErrorPage_1 = require("@frontend/components/pages/errors/ErrorPage");
function Page404() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, { statusCode: 404 }) }));
}
exports.default = Page404;
//# sourceMappingURL=404.js.map