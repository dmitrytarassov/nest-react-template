"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_admin_1 = require("react-admin");
const IPromotionTag_1 = require("../../../../lib/interfaces/IPromotionTag");
const ProductCardPreview_1 = require("../previews/ProductCardPreview");
function RentalProductPreviewCard() {
    var _a, _b, _c;
    const [record, setRecord] = (0, react_1.useState)({});
    const rental = (0, react_admin_1.useReference)({
        id: record === null || record === void 0 ? void 0 : record.rentalId,
        reference: 'rental',
    });
    const product = (0, react_admin_1.useReference)({
        id: record === null || record === void 0 ? void 0 : record.productId,
        reference: 'product',
    });
    const photo = (_a = product.referenceRecord) === null || _a === void 0 ? void 0 : _a.photos[0];
    const tag = record.promotionType !== ''
        ? {
            type: record.promotionType,
            text: record.promotionText,
        }
        : undefined;
    const _record = {
        link: '#',
        image: photo ? `/public/${photo}` : '',
        title: (_b = product.referenceRecord) === null || _b === void 0 ? void 0 : _b.name,
        description: (_c = product.referenceRecord) === null || _c === void 0 ? void 0 : _c.shortDescription,
        price: record.price,
        discountPrice: record.discountPrice,
        promotionText: record.promotionShortDescription,
        tag,
        date: record.date,
    };
    const update = () => {
        const formData = new FormData(document.forms.rental_product_form);
        const rentalId = formData.get('rentalId');
        const productId = `${formData.get('productId')}`;
        const promotionType = `${formData.get('promotionType')}`;
        const promotionText = `${formData.get('promotionText')}`;
        const date = formData.get('date') || undefined;
        const price = +`${formData.get('price')}`;
        const discountPrice = +`${formData.get('discountPrice')}`;
        const promotionShortDescription = `${formData.get('promotionShortDescription')}`;
        setRecord((record) => (Object.assign(Object.assign({}, record), { rentalId: rentalId || undefined, productId: productId || undefined, promotionType: promotionType || undefined, promotionText: promotionText || undefined, date: date || undefined, price: price || undefined, discountPrice: discountPrice || undefined, promotionShortDescription: promotionShortDescription || undefined })));
    };
    (0, react_1.useEffect)(() => {
        const id = setInterval(update, 3000);
        setTimeout(update, 100);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (0, jsx_runtime_1.jsx)(ProductCardPreview_1.default, { record: _record });
}
exports.default = RentalProductPreviewCard;
//# sourceMappingURL=RentalProductPreviewCard.js.map