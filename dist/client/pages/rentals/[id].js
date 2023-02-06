"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const products_provider_1 = require("@frontend/providers/products.provider");
const promotions_provider_1 = require("@frontend/providers/promotions.provider");
const getCity_1 = require("../../utils/getCity");
const RentalPage_1 = require("@frontend/components/pages/rental/RentalPage");
const router_1 = require("next/router");
const loaders_1 = require("../../utils/loaders");
const ICrudRental_1 = require("../../../lib/interfaces/ICrudRental");
const clearify_1 = require("../../utils/clearify");
const loadData = async (rentalUrl) => {
    return await (0, loaders_1.loadRental)(rentalUrl);
};
const Rental = ({ rental }) => {
    const router = (0, router_1.useRouter)();
    const [_rental, set_rental] = (0, react_1.useState)(rental);
    (0, react_1.useEffect)(() => {
        loadData(router.query.id).then(set_rental);
    }, [router.query.id]);
    const rentalData = rental || _rental;
    return ((0, jsx_runtime_1.jsx)(products_provider_1.ProductsProvider, { children: (0, jsx_runtime_1.jsx)(promotions_provider_1.PromotionsProvider, { children: rentalData && (0, jsx_runtime_1.jsx)(RentalPage_1.default, { rental: rentalData }) }) }));
};
async function getServerSideProps(context) {
    try {
        const id = (context.req.originalUrl.split('rentals/')[1] || '')
            .split('?')[0]
            .split('#')[0]
            .split('.')[0];
        if (id) {
            const rental = await loadData(id);
            if (!rental) {
                throw new Error();
            }
            return {
                props: Object.assign({ rental: rental || null, city: (0, getCity_1.getCity)(context.req.session.city) }, (0, clearify_1.default)({
                    seo_title: rental.seo_title,
                    seo_description: rental.seo_description,
                    seo_keywords: rental.seo_keywords,
                    site_url: process.env.SITE_URL,
                })),
            };
        }
    }
    catch (e) {
        return {
            props: { statusCode: 404, city: (0, getCity_1.getCity)(context.req.session.city) },
        };
    }
}
exports.getServerSideProps = getServerSideProps;
exports.default = Rental;
//# sourceMappingURL=%5Bid%5D.js.map