"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const HomePage_1 = require("@frontend/components/pages/home/HomePage");
const rentals_provider_1 = require("@frontend/providers/rentals.provider");
const promotions_provider_1 = require("@frontend/providers/promotions.provider");
const products_provider_1 = require("@frontend/providers/products.provider");
const city_provider_1 = require("@frontend/providers/city.provider");
const Header_1 = require("@frontend/components/Header");
const getCity_1 = require("../utils/getCity");
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const loaders_1 = require("../utils/loaders");
const clearify_1 = require("../utils/clearify");
const Home = ({ city, promotions, uniques, }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(city_provider_1.CityProvider, Object.assign({ currentCity: city }, { children: (0, jsx_runtime_1.jsx)(products_provider_1.ProductsProvider, { children: (0, jsx_runtime_1.jsx)(promotions_provider_1.PromotionsProvider, Object.assign({ _promotions: promotions }, { children: (0, jsx_runtime_1.jsxs)(rentals_provider_1.RentalsProvider, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(HomePage_1.default, { uniques: uniques })] }) })) }) })) }));
};
async function getServerSideProps(context) {
    const promotions = await (0, loaders_1.loadAllPromotions)((0, getCity_1.getCity)(context.req.session.city), true);
    const uniques = await (0, loaders_1.loadUniques)((0, getCity_1.getCity)(context.req.session.city), true);
    return {
        props: {
            city: (0, getCity_1.getCity)(context.req.session.city),
            promotions: (0, clearify_1.default)(promotions),
            uniques: (0, clearify_1.default)(uniques),
            seo_keywords: null,
            seo_title: null,
            seo_description: null,
            site_url: process.env.SITE_URL || null,
        },
    };
}
exports.getServerSideProps = getServerSideProps;
exports.default = Home;
//# sourceMappingURL=index.js.map