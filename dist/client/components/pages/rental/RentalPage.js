"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const ListTop_1 = require("@frontend/components/ListTop");
const useRentals_1 = require("../../../hooks/useRentals");
const router_1 = require("next/router");
const Block_1 = require("@frontend/components/pages/rental/Block");
const PromotionsCarousel_1 = require("@frontend/components/pages/rental/PromotionsCarousel");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const imageUrl_1 = require("../../../utils/imageUrl");
const phoneFormat_1 = require("../../../utils/phoneFormat");
const Service_1 = require("@frontend/components/pages/rental/Service");
const socials_1 = require("../../../utils/socials");
const useMap_1 = require("../../../hooks/useMap");
const RentalPage_module_scss_1 = require("./RentalPage.module.scss");
const Image_1 = require("@frontend/components/Image");
const classnames_1 = require("classnames");
const RentalPage = ({ rental }) => {
    const router = (0, router_1.useRouter)();
    const { rentals } = (0, useRentals_1.useRentals)();
    const { activeRental, selectRental } = (0, useMap_1.useMap)();
    const [init, setInit] = (0, react_1.useState)(false);
    const breadcrumbs = [
        {
            name: 'Главная',
            link: '/',
        },
        {
            name: 'Ренталы',
            link: '/rentals',
        },
        {
            name: rental.name,
            link: `/rentals/${rental.id}`,
        },
    ];
    (0, react_1.useEffect)(() => {
        if (init) {
            const rental = rentals.find(({ id }) => id === activeRental);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    (0, react_1.useEffect)(() => {
        setInit(true);
        selectRental(rental.id);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(PageMainColumnContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: "/rentals", title: rental.name, image: (0, imageUrl_1.default)(rental.icon), rating: rental.rating }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalPage_module_scss_1.default.blocks }, { children: [(0, jsx_runtime_1.jsx)(Block_1.default, Object.assign({ title: "\u0410\u0434\u0440\u0435\u0441:", blockName: "address" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.fullRow }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.text }, { children: rental.address })) })) })), (0, jsx_runtime_1.jsxs)(Block_1.default, Object.assign({ title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:", blockName: "contacts" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.fullRow }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: RentalPage_module_scss_1.default.contactsLink, href: `tel:+${rental.phone}` }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.contactsLinkIconContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { className: RentalPage_module_scss_1.default.contactsIcon, width: 24, height: 24, src: "/public/icons/phone.svg" }) })), (0, phoneFormat_1.phoneFormat)(`+${rental.phone}`)] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.fullRow }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: RentalPage_module_scss_1.default.contactsLink, href: `mailto:${rental.email}` }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.contactsLinkIconContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { className: RentalPage_module_scss_1.default.contactsIcon, width: 24, height: 24, src: "/public/icons/email.svg" }) })), rental.email] })) }))] })), (0, jsx_runtime_1.jsx)(Block_1.default, Object.assign({ title: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438:", blockName: "socials" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(RentalPage_module_scss_1.default.flexibleContainer, RentalPage_module_scss_1.default.fullRow) }, { children: [rental.telegram && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.fullRow }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: rental.telegram, target: "_blank", className: (0, classnames_1.default)(RentalPage_module_scss_1.default.contactsLink) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.contactsLinkIconContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { className: RentalPage_module_scss_1.default.contactsIcon, width: 24, height: 24, src: "/public/icons/telegram.svg" }) })), (0, socials_1.parseTelegram)(rental.telegram)] })) }))), rental.vk && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.row }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: rental.vk, target: "_blank", className: (0, classnames_1.default)(RentalPage_module_scss_1.default.contactsLink, RentalPage_module_scss_1.default.socialLink) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.contactsLinkIconContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { className: RentalPage_module_scss_1.default.contactsIcon, width: 24, height: 24, src: "/public/icons/vk.svg" }) })), (0, socials_1.parseVk)(rental.vk)] })) }))), rental.web && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.row }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: rental.web, target: "_blank", className: (0, classnames_1.default)(RentalPage_module_scss_1.default.contactsLink, RentalPage_module_scss_1.default.socialLink) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.contactsLinkIconContainer }, { children: (0, jsx_runtime_1.jsx)(Image_1.default, { className: RentalPage_module_scss_1.default.contactsIcon, width: 24, height: 24, src: "/public/icons/web.svg" }) })), (0, socials_1.parseUrl)(rental.web)] })) })))] })) })), (0, jsx_runtime_1.jsx)(Block_1.default, Object.assign({ title: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:", blockName: "workingtime" }, { children: rental.workingTime.split('\n').map((e) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.wtRow }, { children: e }), e))) })), (0, jsx_runtime_1.jsx)(Block_1.default, Object.assign({ title: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B:", blockName: "services" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: RentalPage_module_scss_1.default.servicesContainer }, { children: [rental.delivery && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.servicesRow }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: RentalPage_module_scss_1.default.serviceLink, href: rental.delivery, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Service_1.default, { children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430" }) })) }))), rental.selfService && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.servicesRow }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: RentalPage_module_scss_1.default.serviceLink, href: rental.selfService, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Service_1.default, { children: "Self Service" }) })) }))), rental.repair && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.servicesRow }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: RentalPage_module_scss_1.default.serviceLink, href: rental.repair, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Service_1.default, { children: "\u0420\u0435\u043C\u043E\u043D\u0442" }) })) }))), rental.insurance && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: RentalPage_module_scss_1.default.servicesRow }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: RentalPage_module_scss_1.default.serviceLink, href: rental.insurance, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Service_1.default, { children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430" }) })) })))] })) }))] })), (0, jsx_runtime_1.jsx)(PromotionsCarousel_1.default, { id: rental.id, url: rental.url })] }));
};
exports.default = RentalPage;
//# sourceMappingURL=RentalPage.js.map