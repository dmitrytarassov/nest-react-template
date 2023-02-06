"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const link_1 = require("next/link");
const phoneFormat_1 = require("../../../utils/phoneFormat");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const imageUrl_1 = require("../../../utils/imageUrl");
const Image_1 = require("@frontend/components/Image");
const RentalCard_module_scss_1 = require("./RentalCard.module.scss");
const classnames_1 = require("classnames");
const RentalCard = ({ rental, active }) => {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        var _a;
        if (active && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoViewIfNeeded();
        }
    }, [active]);
    return ((0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: `/rentals/${rental.url}`, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: (0, classnames_1.default)(RentalCard_module_scss_1.default.card, active && RentalCard_module_scss_1.default.active), ref: ref }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: (0, imageUrl_1.default)(rental.icon), width: "128px", height: "128px" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalCard_module_scss_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalCard_module_scss_1.default.rentalName }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.imageMobileContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: (0, imageUrl_1.default)(rental.icon), width: "48px", height: "48px" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalCard_module_scss_1.default.nameAndStar }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.name }, { children: (0, jsx_runtime_1.jsx)("span", { children: rental.name }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalCard_module_scss_1.default.rating }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.text }, { children: rental.rating })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.star }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/star.svg", width: "20", height: "20", alt: "" }) }))] }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(RentalCard_module_scss_1.default.contact, RentalCard_module_scss_1.default.address) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.icon }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/location.svg", width: "24", height: "24", alt: "" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.value }, { children: rental.address }))] })), (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: `tel:${rental.phone}`, className: (0, classnames_1.default)(RentalCard_module_scss_1.default.contact, RentalCard_module_scss_1.default.phone) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.icon }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: "/public/phone.svg", width: "24", height: "24" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalCard_module_scss_1.default.value }, { children: (0, phoneFormat_1.phoneFormat)(`+${rental.phone}`) }))] }))] }))] })) })));
};
exports.default = RentalCard;
//# sourceMappingURL=RentalCard.js.map