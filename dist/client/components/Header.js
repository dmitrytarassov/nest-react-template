"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const link_1 = require("next/link");
const getCityName_1 = require("../utils/getCityName");
const useCity_1 = require("../hooks/useCity");
const router_1 = require("next/router");
const classnames_1 = require("classnames");
const Header_module_scss_1 = require("./Header.module.scss");
const Image_1 = require("@frontend/components/Image");
const Header = () => {
    const router = (0, router_1.useRouter)();
    const selectRef = (0, react_1.useRef)();
    const { city, setCity } = (0, useCity_1.useCity)();
    const [selectIsOpen, setSelectIsOpen] = (0, react_1.useState)(false);
    const close = () => setSelectIsOpen(false);
    const toggle = () => setSelectIsOpen((value) => !value);
    (0, react_1.useEffect)(() => {
        close();
    }, [city]);
    (0, react_1.useEffect)(() => {
        document.body.addEventListener('click', (e) => {
            var _a;
            let _target = e.target;
            while (_target) {
                if (selectRef && ((_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.isSameNode(_target))) {
                    return;
                }
                _target = _target.parentNode;
            }
            close();
        });
    }, []);
    const isPageWithMap = router.pathname !== '/' &&
        router.pathname !== '/insurance' &&
        router.pathname !== '/terms';
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Header_module_scss_1.default.container) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Header_module_scss_1.default.content, {
                [Header_module_scss_1.default.withMap]: isPageWithMap,
            }) }, { children: [(0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: "/", passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: Header_module_scss_1.default.logoLink }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/logo.svg", className: Header_module_scss_1.default.logo, layout: "fill" }) })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Header_module_scss_1.default.cityDisplay, ref: selectRef }, { children: [selectIsOpen && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Header_module_scss_1.default.citySelectContainer }, { children: [(0, jsx_runtime_1.jsx)("div", { className: Header_module_scss_1.default.corner }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Header_module_scss_1.default.cityButton, {
                                        [Header_module_scss_1.default.cityButtonActive]: city === 'spb',
                                    }), onClick: () => setCity('spb') }, { children: (0, getCityName_1.getCityName)('spb') })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Header_module_scss_1.default.cityButton, {
                                        [Header_module_scss_1.default.cityButtonActive]: city === 'moscow',
                                    }), onClick: () => setCity('moscow') }, { children: (0, getCityName_1.getCityName)('moscow') }))] }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Header_module_scss_1.default.cityName, onClick: toggle }, { children: [(0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.6673 6.90909C12.6673 10.7273 8.00065 14 8.00065 14C8.00065 14 3.33398 10.7273 3.33398 6.90909C3.33398 5.60712 3.82565 4.35847 4.70082 3.43784C5.57599 2.51721 6.76297 2 8.00065 2C9.23833 2 10.4253 2.51721 11.3005 3.43784C12.1757 4.35847 12.6673 5.60712 12.6673 6.90909Z", stroke: "#13EC50", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.99935 7.99992C8.73573 7.99992 9.33268 7.40296 9.33268 6.66659C9.33268 5.93021 8.73573 5.33325 7.99935 5.33325C7.26297 5.33325 6.66602 5.93021 6.66602 6.66659C6.66602 7.40296 7.26297 7.99992 7.99935 7.99992Z", stroke: "#13EC50", strokeLinecap: "round", strokeLinejoin: "round" })] })), (0, getCityName_1.getCityName)(city)] }))] }))] })) })));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map