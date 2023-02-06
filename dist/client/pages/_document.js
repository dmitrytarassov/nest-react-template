"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const document_1 = require("next/document");
class MyDocument extends document_1.default {
    render() {
        return ((0, jsx_runtime_1.jsxs)(document_1.Html, { children: [(0, jsx_runtime_1.jsxs)(document_1.Head, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700;900&display=swap", rel: "stylesheet" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap", rel: "stylesheet" }), (0, jsx_runtime_1.jsx)("script", { src: "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=b7864477-45e4-4183-8d4d-95c71da0e7c4", type: "text/javascript" }), (0, jsx_runtime_1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" })] }), (0, jsx_runtime_1.jsxs)("body", { children: [(0, jsx_runtime_1.jsx)(document_1.Main, {}), (0, jsx_runtime_1.jsx)(document_1.NextScript, {})] })] }));
    }
}
exports.default = MyDocument;
//# sourceMappingURL=_document.js.map