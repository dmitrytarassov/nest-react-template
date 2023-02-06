"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Banner_1 = require("@frontend/components/pages/home/Banner");
const SecondBanner_1 = require("@frontend/components/pages/home/SecondBanner");
const PromotionsCarousel_1 = require("@frontend/components/pages/home/PromotionsCarousel");
const Uniques_1 = require("@frontend/components/pages/home/Uniques");
const Footer_1 = require("@frontend/components/Footer");
const Insurance_1 = require("@frontend/components/pages/home/Insurance");
const Container_module_scss_1 = require("../../../layout/Container.module.scss");
const HomePage = ({ uniques }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Container_module_scss_1.default.container }, { children: [(0, jsx_runtime_1.jsx)(Banner_1.default, {}), (0, jsx_runtime_1.jsx)(SecondBanner_1.default, {}), (0, jsx_runtime_1.jsx)(PromotionsCarousel_1.default, {})] })), (0, jsx_runtime_1.jsx)(Uniques_1.default, { _positions: uniques }), (0, jsx_runtime_1.jsx)(Insurance_1.default, { haveUniques: uniques.length > 0 }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map