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
const react_1 = require("swiper/react");
const Card_1 = require("@frontend/components/Card");
const halfPageSwiperProps_1 = require("../../../utils/halfPageSwiperProps");
const CarouselControlsHalfScreen_1 = require("@frontend/components/CarouselControlsHalfScreen");
const Positions_module_scss_1 = require("./Positions.module.scss");
const Positions = ({ positions }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Positions_module_scss_1.default.styles }, { children: (0, jsx_runtime_1.jsxs)(react_1.Swiper, Object.assign({}, halfPageSwiperProps_1.halfPageSwiperProps, { children: [positions.map((_a) => {
                    var { id } = _a, card = __rest(_a, ["id"]);
                    return ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, Object.assign({}, card)) }, id));
                }), (0, jsx_runtime_1.jsx)(CarouselControlsHalfScreen_1.default, { className: Positions_module_scss_1.default.controls, revertColors: true, count: positions.length, size: "small" })] })) })));
};
exports.default = Positions;
//# sourceMappingURL=Positions.js.map