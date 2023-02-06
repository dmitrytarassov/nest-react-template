"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const promotions_provider_1 = require("@frontend/providers/promotions.provider");
const rentals_provider_1 = require("@frontend/providers/rentals.provider");
const getCity_1 = require("../utils/getCity");
const ICrudPromotion_1 = require("../../lib/interfaces/ICrudPromotion");
const loaders_1 = require("../utils/loaders");
const PromotionsPage_1 = require("@frontend/components/pages/promotions/PromotionsPage");
const useCity_1 = require("../hooks/useCity");
const loadData = async (city) => {
    const rentals = await (0, loaders_1.loadRentalsByCity)(city);
    const promotions = await (0, loaders_1.loadPromotionsByRentals)(rentals);
    return {
        promotions,
    };
};
const Promotions = ({ promotions, city }) => {
    const [_promotions, set_promotions] = (0, react_1.useState)(promotions);
    const { city: _city } = (0, useCity_1.useCity)();
    (0, react_1.useEffect)(() => {
        if (!promotions) {
            loadData(city).then((data) => {
                set_promotions(data.promotions);
            });
        }
    }, []);
    (0, react_1.useEffect)(() => {
        loadData(_city).then((data) => {
            set_promotions(data.promotions);
        });
    }, [_city]);
    const promotionsData = _promotions.length ? _promotions : promotions || [];
    return ((0, jsx_runtime_1.jsx)(promotions_provider_1.PromotionsProvider, { children: (0, jsx_runtime_1.jsx)(rentals_provider_1.RentalsProvider, { children: promotionsData.length && ((0, jsx_runtime_1.jsx)(PromotionsPage_1.default, { promotions: promotionsData })) }) }));
};
async function getServerSideProps(context) {
    try {
        const data = await loadData(context.req.session.city);
        return {
            props: Object.assign(Object.assign({}, data), { city: (0, getCity_1.getCity)(context.req.session.city), seo_title: `Акции и новинки ренталов`, seo_description: `Акции и новинки ренталов` }),
        };
    }
    catch (e) {
        console.log(e);
        return {
            props: { statusCode: 404, city: (0, getCity_1.getCity)(context.req.session.city) },
        };
    }
}
exports.getServerSideProps = getServerSideProps;
exports.default = Promotions;
//# sourceMappingURL=promotions.js.map