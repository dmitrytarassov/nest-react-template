"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const getCity_1 = require("../../../utils/getCity");
const router_1 = require("next/router");
const ICrudPromotion_1 = require("../../../../lib/interfaces/ICrudPromotion");
const RentalPromotionsPage_1 = require("@frontend/components/pages/rentalPromotions/RentalPromotionsPage");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const loaders_1 = require("../../../utils/loaders");
const loadData = async (rentalUrl) => {
    const rental = await (0, loaders_1.loadRental)(rentalUrl);
    const promotions = await (0, loaders_1.loadPromotionsByRentalId)(rental.id);
    return {
        rental,
        promotions,
    };
};
const RentalPromotions = ({ rental, promotions, }) => {
    const router = (0, router_1.useRouter)();
    const [_rental, set_rental] = (0, react_1.useState)(rental);
    const [_promotions, set_promotions] = (0, react_1.useState)(promotions);
    (0, react_1.useEffect)(() => {
        if (!rental || !promotions) {
            loadData(router.query.id).then((data) => {
                set_rental(data.rental);
                set_promotions(data.promotions);
            });
        }
    }, []);
    const rentalData = rental || _rental;
    const promotionsData = promotions || _promotions;
    return ((0, jsx_runtime_1.jsx)(RentalPromotionsPage_1.default, { rental: rentalData, promotions: promotionsData }));
};
async function getServerSideProps(context) {
    try {
        const id = (context.req.originalUrl.split('rentals/')[1] || '').split('/promotions')[0] || '';
        if (id) {
            const data = await loadData(id);
            return {
                props: Object.assign(Object.assign({}, data), { city: (0, getCity_1.getCity)(context.req.session.city), seo_title: `${data.rental.name} | Акции и новинки`, seo_description: `${data.rental.name} | Акции и новинки` }),
            };
        }
    }
    catch (e) {
        console.log(e);
        return {
            props: { statusCode: 404, city: (0, getCity_1.getCity)(context.req.session.city) },
        };
    }
}
exports.getServerSideProps = getServerSideProps;
exports.default = RentalPromotions;
//# sourceMappingURL=promotions.js.map