"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("swiper/react");
const fullPageSwiperProps_1 = require("../../../utils/fullPageSwiperProps");
const Card_1 = require("@frontend/components/Card");
const Button_1 = require("@frontend/components/Button");
const CarouselControls_1 = require("@frontend/components/CarouselControls");
const useCity_1 = require("../../../hooks/useCity");
const loaders_1 = require("../../../utils/loaders");
const Uniques_module_scss_1 = require("./Uniques.module.scss");
const Content_1 = require("@frontend/layout/Content");
const classnames_1 = require("classnames");
const Heading_module_scss_1 = require("../../Heading.module.scss");
const Uniques = ({ _positions }) => {
    const { city } = (0, useCity_1.useCity)();
    const [products, setProducts] = (0, react_1.useState)(_positions);
    (0, react_1.useEffect)(() => {
        (0, loaders_1.loadUniques)(city, true).then((data) => {
            setProducts(data);
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: products.length > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Uniques_module_scss_1.default.container }, { children: (0, jsx_runtime_1.jsxs)(Content_1.default, Object.assign({ className: Uniques_module_scss_1.default.content }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: (0, classnames_1.default)(Uniques_module_scss_1.default.heading, Heading_module_scss_1.default.useLines) }, { children: (0, jsx_runtime_1.jsx)("div", { children: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Uniques_module_scss_1.default.carousel }, { children: (0, jsx_runtime_1.jsxs)(react_2.Swiper, Object.assign({}, fullPageSwiperProps_1.fullPageSwiperProps, { children: [products.map((_a) => {
                                    var { id } = _a, card = __rest(_a, ["id"]);
                                    return ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, Object.assign({}, card, { size: "large" })) }, id));
                                }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Uniques_module_scss_1.default.footer }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: "/unique_positions", size: "large" }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435" })), (0, jsx_runtime_1.jsx)(CarouselControls_1.default, { count: 4, color: "lite" })] }))] })) }))] })) }))) }));
};
exports.default = Uniques;
//# sourceMappingURL=Uniques.js.map