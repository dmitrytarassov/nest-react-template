"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const router_1 = require("next/router");
const useRentals_1 = require("../../../hooks/useRentals");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const imageUrl_1 = require("../../../utils/imageUrl");
const NewsAndPromotions_1 = require("@frontend/components/pages/rentalPromotions/NewsAndPromotions");
const useMap_1 = require("../../../hooks/useMap");
const RentalPromotionsPage = ({ rental, promotions, }) => {
    const router = (0, router_1.useRouter)();
    const [searchString, setSearchString] = (0, react_1.useState)('');
    const { rentals } = (0, useRentals_1.useRentals)();
    const { activeRental } = (0, useMap_1.useMap)();
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
            link: `/rentals/${rental.url}`,
        },
        {
            name: 'Акции и новинки',
            link: `/rentals/${rental.url}/promotions`,
        },
    ];
    (0, react_1.useEffect)(() => {
        setInit(true);
        return () => {
            setInit(false);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (activeRental && init) {
            const rental = rentals.find(({ id }) => id === activeRental);
            console.log(`go to: /rentals/${rental.url}`);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    const actions = promotions
        .filter(({ promotionType }) => promotionType === 'sale')
        .filter((e) => searchString.length === 0
        ? true
        : e.name.toLowerCase().includes(searchString.toLowerCase()));
    const news = promotions
        .filter(({ promotionType }) => promotionType === 'new')
        .filter((e) => searchString.length === 0
        ? true
        : e.name.toLowerCase().includes(searchString.toLowerCase()));
    return ((0, jsx_runtime_1.jsxs)(PageMainColumnContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: `/rentals/${rental.url}`, title: `${rental.name}: Акции и новинки`, image: (0, imageUrl_1.default)(rental.icon), search: { value: searchString, onChange: setSearchString } }), (0, jsx_runtime_1.jsx)(NewsAndPromotions_1.default, { news: news, promotions: actions })] }));
};
exports.default = RentalPromotionsPage;
//# sourceMappingURL=RentalPromotionsPage.js.map