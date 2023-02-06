"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useRentals_1 = require("../../../hooks/useRentals");
const ESelectRental_1 = require("../../../dtos/ESelectRental");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const updateMapRentals_1 = require("../../../utils/updateMapRentals");
const RentalCard_1 = require("@frontend/components/pages/rentals/RentalCard");
const NotFound_1 = require("@frontend/components/NotFound");
const useMap_1 = require("../../../hooks/useMap");
const RentalsPage = () => {
    const { rentals } = (0, useRentals_1.useRentals)();
    const [active, setActive] = (0, react_1.useState)('');
    const [searchString, setSearchString] = (0, react_1.useState)('');
    const { activeRental } = (0, useMap_1.useMap)();
    (0, react_1.useEffect)(() => {
        (0, updateMapRentals_1.updateMapRentals)(rentals, active);
    }, [rentals, active]);
    (0, react_1.useEffect)(() => {
        function callBack(e) {
            setSearchString('');
            setActive(e.detail || '');
        }
        window.addEventListener(ESelectRental_1.ESelectRental, callBack);
        return () => {
            window.removeEventListener(ESelectRental_1.ESelectRental, callBack);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (activeRental) {
            setSearchString('');
            setActive(activeRental);
        }
    }, [activeRental]);
    const breadcrumbs = [
        {
            name: 'Главная',
            link: '/',
        },
        {
            name: 'Список ренталов',
            link: '/rentals',
        },
    ];
    const filteredRentals = searchString === ''
        ? rentals
        : rentals.filter(({ name, address }) => name.toLowerCase().includes(searchString.toLowerCase()) ||
            address.toLowerCase().includes(searchString.toLowerCase()));
    return ((0, jsx_runtime_1.jsxs)(PageMainColumnContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: "/", title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u043D\u0442\u0430\u043B\u043E\u0432", search: {
                    value: searchString,
                    onChange: setSearchString,
                    placeholder: 'Поиск по ренталам',
                } }), filteredRentals.length > 0 ? (filteredRentals.map((rental) => ((0, jsx_runtime_1.jsx)(RentalCard_1.default, { rental: rental, active: active === rental.id }, rental.id)))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: rentals.length > 0 ? (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) : null }))] }));
};
exports.default = RentalsPage;
//# sourceMappingURL=RentalsPage.js.map