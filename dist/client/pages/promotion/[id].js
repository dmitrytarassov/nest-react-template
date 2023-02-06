"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ICrudRental_1 = require("../../../lib/interfaces/ICrudRental");
const getCity_1 = require("../../utils/getCity");
const loaders_1 = require("../../utils/loaders");
const router_1 = require("next/router");
const ICrudPromotion_1 = require("../../../lib/interfaces/ICrudPromotion");
const PromotionPage_1 = require("@frontend/components/pages/promotion/PromotionPage");
const clearify_1 = require("../../utils/clearify");
const loadData = async (promotionUrl) => {
    const promotion = await (0, loaders_1.loadPromotion)(promotionUrl);
    if (promotion) {
        const rental = await (0, loaders_1.loadRentalById)(promotion.rentalId);
        if (rental) {
            return {
                rental,
                promotion,
            };
        }
    }
};
const RentalProductPage = ({ rental, promotion, }) => {
    const router = (0, router_1.useRouter)();
    const [data, setData] = (0, react_1.useState)({
        rental,
        promotion,
    });
    (0, react_1.useEffect)(() => {
        if (!promotion) {
            loadData(router.query.id).then(setData);
        }
    }, []);
    const _rental = rental || data.rental;
    const _promotion = promotion || data.promotion;
    return (0, jsx_runtime_1.jsx)(PromotionPage_1.default, { rental: _rental, promotion: _promotion });
};
async function getServerSideProps(context) {
    try {
        const [promotionUrl] = context.req.originalUrl
            .split('/')
            .reverse()
            .map((e) => e.split('.')[0]);
        const data = await loadData(promotionUrl);
        if (data) {
            return {
                props: Object.assign(Object.assign(Object.assign({}, (0, clearify_1.default)(data)), { city: (0, getCity_1.getCity)(context.req.session.city) }), (0, clearify_1.default)({
                    seo_title: data.promotion.seo_title,
                    seo_description: data.promotion.seo_description,
                    seo_keywords: data.promotion.seo_keywords,
                    site_url: process.env.SITE_URL,
                })),
            };
        }
    }
    catch (e) {
        console.error(e);
    }
    return {
        props: { statusCode: 404, city: (0, getCity_1.getCity)(context.req.session.city) },
    };
}
exports.getServerSideProps = getServerSideProps;
exports.default = RentalProductPage;
//# sourceMappingURL=%5Bid%5D.js.map