"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
const IRental_1 = require("../../../../lib/interfaces/IRental");
const IRentalProduct_1 = require("../../../../lib/interfaces/IRentalProduct");
const updateMapRentals_1 = require("../../../utils/updateMapRentals");
const ESelectRental_1 = require("../../../dtos/ESelectRental");
const useRentals_1 = require("../../../hooks/useRentals");
const IBreadCrumb_1 = require("../../../dtos/IBreadCrumb");
const ListTop_1 = require("@frontend/components/ListTop");
const PageMainColumnContainer_1 = require("@frontend/components/PageMainColumnContainer");
const router_1 = require("next/router");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const Block_1 = require("@frontend/components/ProductInfo/Block");
const Image_1 = require("@frontend/components/ProductInfo/Image");
const getExpirationDateText_1 = require("../../../utils/getExpirationDateText");
const Images_1 = require("@frontend/components/ProductInfo/Images");
const Price_1 = require("@frontend/components/ProductInfo/Price");
const Info_1 = require("@frontend/components/pages/product/Info");
const Tags_1 = require("@frontend/components/pages/product/Tags");
const ProductPage = ({ product, rental, rentalProduct, promotions, }) => {
    return null;
    const [currentImage, setCurrentImage] = (0, react_1.useState)(product.photos[0]);
    const { rentals } = (0, useRentals_1.useRentals)();
    const router = (0, router_1.useRouter)();
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
        {
            name: product.name,
            link: `/products/${rentalProduct.id}`,
        },
    ];
    (0, react_1.useEffect)(() => {
        const _rentals = rentals.find(({ id }) => id === rental.id)
            ? rentals
            : [...rentals, rental];
        (0, updateMapRentals_1.updateMapRentals)(_rentals, rental.id, 500);
    }, [rentals, rental.id]);
    (0, react_1.useEffect)(() => {
        (0, updateMapRentals_1.updateMapRentals)([rental], rental.id);
        function callBack(e) {
            router.push(`/rentals/${e.detail}`);
        }
        window.addEventListener(ESelectRental_1.ESelectRental, callBack);
        return () => {
            window.removeEventListener(ESelectRental_1.ESelectRental, callBack);
        };
    }, []);
    const [promotion] = promotions;
    return ((0, jsx_runtime_1.jsxs)(PageMainColumnContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(ListTop_1.default, { breadcrumbs: breadcrumbs, backLink: `/rentals/${rental.url}`, title: product.name }), (0, jsx_runtime_1.jsxs)(Block_1.default, { children: [(0, jsx_runtime_1.jsx)(Image_1.default, { src: currentImage }), promotion && ((0, jsx_runtime_1.jsx)(Tags_1.default, {})), (0, jsx_runtime_1.jsx)(Images_1.default, { logo: rental.icon, images: product.photos, current: currentImage, onChange: setCurrentImage })] }), (0, jsx_runtime_1.jsx)(Block_1.default, { children: (0, jsx_runtime_1.jsx)(Price_1.default, { price: rentalProduct.price, link: rentalProduct.url }) }), (0, jsx_runtime_1.jsx)(Block_1.default, { children: (0, jsx_runtime_1.jsx)(Info_1.default, { product: product }) })] }));
};
exports.default = ProductPage;
//# sourceMappingURL=ProductPage.js.map