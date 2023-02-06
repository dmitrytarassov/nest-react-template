"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ICrudRental_1 = require("../../../../lib/interfaces/ICrudRental");
const getCity_1 = require("../../../utils/getCity");
const loaders_1 = require("../../../utils/loaders");
const ICrudProduct_1 = require("../../../../lib/interfaces/ICrudProduct");
const ICrudRentalProduct_1 = require("../../../../lib/interfaces/ICrudRentalProduct");
const router_1 = require("next/router");
const NewProductPage_1 = require("@frontend/components/pages/product/NewProductPage");
const clearify_1 = require("../../../utils/clearify");
const loadData = async (rentalProductUrl, rentalUrl) => {
    const rentalProduct = await (0, loaders_1.loadRentalProduct)(rentalProductUrl);
    if (rentalProduct) {
        const rental = await (0, loaders_1.loadRental)(rentalUrl);
        if (rental) {
            const product = await (0, loaders_1.loadProductById)(rentalProduct.productId);
            if (product) {
                return {
                    rental,
                    product,
                    rentalProduct,
                };
            }
        }
    }
};
const RentalProductPage = ({ rental, rentalProduct, product, }) => {
    const router = (0, router_1.useRouter)();
    const [data, setData] = (0, react_1.useState)({
        rental,
        rentalProduct,
        product,
    });
    (0, react_1.useEffect)(() => {
        if (!product) {
            loadData(router.query.id, router.query.product).then(setData);
        }
    }, []);
    const _rental = rental || data.rental;
    const _rentalProduct = rentalProduct || data.rentalProduct;
    const _product = product || data.product;
    return ((0, jsx_runtime_1.jsx)(NewProductPage_1.default, { rental: _rental, product: _product, rentalProduct: _rentalProduct }));
};
async function getServerSideProps(context) {
    try {
        const [rentalProductUrl, rentalUrl] = context.req.originalUrl
            .split('/')
            .reverse()
            .map((e) => e.split('.')[0]);
        const data = await loadData(rentalProductUrl, rentalUrl);
        if (data) {
            return {
                props: Object.assign(Object.assign(Object.assign({}, (0, clearify_1.default)(data)), { city: (0, getCity_1.getCity)(context.req.session.city) }), (0, clearify_1.default)({
                    seo_title: data.rentalProduct.seo_title,
                    seo_description: data.rentalProduct.seo_description,
                    seo_keywords: data.rentalProduct.seo_keywords,
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
//# sourceMappingURL=%5Bproduct%5D.js.map