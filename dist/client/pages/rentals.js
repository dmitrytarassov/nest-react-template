"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const getCity_1 = require("../utils/getCity");
const RentalsPage_1 = require("@frontend/components/pages/rentals/RentalsPage");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const loaders_1 = require("../utils/loaders");
const clearify_1 = require("../utils/clearify");
const Rentals = ({ rentals, city }) => {
    return (0, jsx_runtime_1.jsx)(RentalsPage_1.default, {});
};
async function getServerSideProps(context) {
    const rentals = await (0, loaders_1.getAllRentalsForCity)(context.req.session.city);
    return {
        props: Object.assign({ rentals, city: (0, getCity_1.getCity)(context.req.session.city) }, (0, clearify_1.default)({
            seo_title: 'Найти ренталов на карте',
            seo_description: 'Ренталы на карте онлайн',
            seo_keywords: null,
            site_url: process.env.SITE_URL,
        })),
    };
}
exports.getServerSideProps = getServerSideProps;
exports.default = Rentals;
//# sourceMappingURL=rentals.js.map