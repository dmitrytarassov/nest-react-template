"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const rentals_provider_1 = require("@frontend/providers/rentals.provider");
const getCity_1 = require("../utils/getCity");
const ICrudRental_1 = require("../../lib/interfaces/ICrudRental");
const loaders_1 = require("../utils/loaders");
const clearify_1 = require("../utils/clearify");
const UniquePositions_1 = require("@frontend/components/pages/unique_positions/UniquePositions");
const City_1 = require("../../lib/types/City");
const loadData = async (city) => {
    const rentals = await (0, loaders_1.getAllRentalsForCity)(city);
    const uniques = await (0, loaders_1.loadUniques)(city);
    return {
        rentals,
        uniques,
    };
};
const UniquePositions = ({ rentals, uniques, city, }) => {
    const [_rentals, _setRentals] = (0, react_1.useState)(rentals || []);
    const [_uniques, _setUniques] = (0, react_1.useState)(uniques || []);
    (0, react_1.useEffect)(() => {
        if (!rentals || !uniques) {
            loadData(city).then((data) => {
                _setRentals(data.rentals);
                _setUniques(data.uniques);
            });
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(rentals_provider_1.RentalsProvider, Object.assign({ _rentals: rentals }, { children: (0, jsx_runtime_1.jsx)(UniquePositions_1.default, { rentals: _rentals, uniques: _uniques }) })));
};
async function getServerSideProps(context) {
    const city = (0, getCity_1.getCity)(context.req.session.city);
    const { rentals, uniques } = await loadData(city);
    return {
        props: Object.assign({ rentals,
            uniques,
            city }, (0, clearify_1.default)({
            seo_title: 'Уникальные позиции ренталов',
            seo_description: 'Уникальные позиции ренталов',
            seo_keywords: null,
            site_url: process.env.SITE_URL,
        })),
    };
}
exports.getServerSideProps = getServerSideProps;
exports.default = UniquePositions;
//# sourceMappingURL=unique_positions.js.map