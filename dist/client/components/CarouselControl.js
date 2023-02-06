"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CarouselControl_module_scss_1 = require("./CarouselControl.module.scss");
const classnames_1 = require("classnames");
const CarouselControl = ({ size, direction, onClick, color = 'lite', }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(CarouselControl_module_scss_1.default.control, CarouselControl_module_scss_1.default[size], CarouselControl_module_scss_1.default[direction], CarouselControl_module_scss_1.default[color]), onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "20", height: "24", viewBox: "0 0 20 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { className: CarouselControl_module_scss_1.default.element, d: "M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z" }) })) })));
};
exports.default = CarouselControl;
//# sourceMappingURL=CarouselControl.js.map