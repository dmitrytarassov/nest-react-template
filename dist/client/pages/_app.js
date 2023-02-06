"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../utils/theme");
require("swiper/css");
require("./theme.css");
require("./index.css");
const ContainerWithMap_1 = require("@frontend/components/ContainerWithMap");
const City_1 = require("../../lib/types/City");
const seo_1 = require("../utils/seo");
const head_1 = require("next/head");
const imageUrl_1 = require("../utils/imageUrl");
function Client(props) {
    const { Component, pageProps } = props;
    const isMainTemplate = ['/', '/insurance', '/terms'].includes(props.router.route);
    const seoData = (0, seo_1.default)(props.pageProps);
    const _theme = props.router.route === '/unique_positions' ? theme_1.dark : theme_1.theme;
    return props.router.route.startsWith('/admin') ? ((0, jsx_runtime_1.jsx)(Component, Object.assign({}, pageProps))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("title", { children: seoData.title }), (0, jsx_runtime_1.jsx)("meta", { name: "og:title", content: seoData.title }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:title", content: seoData.title }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: seoData.description }), (0, jsx_runtime_1.jsx)("meta", { name: "og:description", content: seoData.description }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:description", content: seoData.description }), (0, jsx_runtime_1.jsx)("meta", { name: "keywords", content: seoData.keywords }), (0, jsx_runtime_1.jsx)("link", { rel: "canonnical", href: props.pageProps.site_url +
                            props.router.asPath.split('#')[0].split('?')[0] }), (0, jsx_runtime_1.jsx)("meta", { name: "og:url", content: props.pageProps.site_url +
                            props.router.asPath.split('#')[0].split('?')[0] }), (0, jsx_runtime_1.jsx)("link", { rel: "image_src", href: props.pageProps.site_url + (0, imageUrl_1.default)('cover.png') }), (0, jsx_runtime_1.jsx)("meta", { name: "og:image", content: props.pageProps.site_url + (0, imageUrl_1.default)('cover.png') })] }), (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: _theme }, { children: isMainTemplate ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Component, Object.assign({}, pageProps)) })) : ((0, jsx_runtime_1.jsx)(ContainerWithMap_1.default, Object.assign({}, pageProps, { children: (0, jsx_runtime_1.jsx)(Component, Object.assign({}, pageProps)) }))) }))] }));
}
exports.default = Client;
//# sourceMappingURL=_app.js.map