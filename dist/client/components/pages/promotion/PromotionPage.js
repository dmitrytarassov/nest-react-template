"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IRental_1 = require("../../../../lib/interfaces/IRental");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const router_1 = require("next/router");
const useCity_1 = require("../../../hooks/useCity");
const useRentals_1 = require("../../../hooks/useRentals");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const updateMapRentals_1 = require("../../../utils/updateMapRentals");
const ESelectRental_1 = require("../../../dtos/ESelectRental");
const ProductInfo_1 = require("@frontend/components/ProductInfo/ProductInfo");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const imageUrl_1 = require("../../../utils/imageUrl");
const styled_components_1 = require("styled-components");
const useMap_1 = require("../../../hooks/useMap");
const StyledPageMainColumnContainer = (0, styled_components_1.default)(PageMainColumnContainer_1.default) ``;
const PromotionPage = ({ rental, promotion }) => {
    const router = (0, router_1.useRouter)();
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
            link: `/promotions/${promotion.id}`,
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
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    const _product = {
        photos: promotion.photos,
        date: promotion.date,
        promotionText: promotion.text,
        promotion: {
            tag: promotion.promotionType,
            tagText: promotion.promotionText,
        },
        externalUrl: promotion.externalUrl,
    };
    return ((0, jsx_runtime_1.jsxs)(StyledPageMainColumnContainer, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: `/rentals/${rental.url}`, title: promotion.name, image: (0, imageUrl_1.default)(rental.icon) }), (0, jsx_runtime_1.jsx)(ProductInfo_1.default, { rental: rental, product: _product })] }));
};
exports.default = PromotionPage;
//# sourceMappingURL=PromotionPage.js.map