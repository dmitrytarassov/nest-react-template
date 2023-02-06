"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const router_1 = require("next/router");
const useRentals_1 = require("../../../hooks/useRentals");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const updateMapRentals_1 = require("../../../utils/updateMapRentals");
const ESelectRental_1 = require("../../../dtos/ESelectRental");
const ProductInfo_1 = require("@frontend/components/ProductInfo/ProductInfo");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const ICrudProduct_1 = require("../../../../lib/interfaces/ICrudProduct");
const ICrudRentalProduct_1 = require("../../../../lib/interfaces/ICrudRentalProduct");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const styled_components_1 = require("styled-components");
const useMap_1 = require("../../../hooks/useMap");
const useCity_1 = require("../../../hooks/useCity");
const StyledPageMainColumnContainer = (0, styled_components_1.default)(PageMainColumnContainer_1.default) ``;
const NewProductPage = ({ rental, product, rentalProduct, }) => {
    const { city } = (0, useCity_1.useCity)();
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
            name: product.name,
            link: `/rentals/${rental.url}/${rentalProduct.url}`,
        },
    ];
    (0, react_1.useEffect)(() => {
        setInit(true);
        return () => {
            setInit(false);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (init) {
            router.push(`/rentals/`);
        }
    }, [city]);
    (0, react_1.useEffect)(() => {
        if (activeRental && init) {
            const rental = rentals.find(({ id }) => id === activeRental);
            if (rental) {
                router.push(`/rentals/${rental.url}`);
            }
        }
    }, [activeRental]);
    const _product = {
        photos: product.photos,
        date: rentalProduct.date ? rentalProduct.date.toString() : undefined,
        promotionText: rentalProduct.promotionText,
        promotion: {
            tag: rentalProduct.promotionType,
            tagText: rentalProduct.promotionText,
        },
        price: rentalProduct.price ? rentalProduct.price.toString() : undefined,
        discountPrice: rentalProduct.discountPrice
            ? rentalProduct.discountPrice.toString()
            : undefined,
        description: product.description,
        properties: product.properties,
        propertiesText: product.propertiesText,
        externalUrl: rentalProduct.externalUrl,
    };
    return ((0, jsx_runtime_1.jsxs)(StyledPageMainColumnContainer, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: `/rentals/${rental.url}`, title: product.name }), (0, jsx_runtime_1.jsx)(ProductInfo_1.default, { rental: rental, product: _product })] }));
};
exports.default = NewProductPage;
//# sourceMappingURL=NewProductPage.js.map