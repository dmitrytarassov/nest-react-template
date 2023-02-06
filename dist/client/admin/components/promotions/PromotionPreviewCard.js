"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IPromotionTag_1 = require("../../../../lib/interfaces/IPromotionTag");
const ProductCardPreview_1 = require("../previews/ProductCardPreview");
function PromotionPreviewCard() {
    var _a;
    const [record, setRecord] = (0, react_1.useState)({});
    const tag = record.promotionType !== ''
        ? {
            type: record.promotionType,
            text: record.promotionText,
        }
        : undefined;
    const _record = {
        link: '#',
        image: ((_a = record.photos) === null || _a === void 0 ? void 0 : _a[0]) || '',
        title: record === null || record === void 0 ? void 0 : record.name,
        description: record === null || record === void 0 ? void 0 : record.shortText,
        tag,
        date: record.date,
    };
    const update = () => {
        var _a, _b;
        const formData = new FormData(document.forms.promotion_form);
        const rentalId = formData.get('rentalId');
        const name = `${formData.get('name')}`;
        const shortText = `${formData.get('shortText')}`;
        const text = `${formData.get('text')}`;
        const promotionType = formData.get('promotionType') || undefined;
        const promotionText = `${formData.get('promotionText')}`;
        const date = `${formData.get('date')}`;
        const photos = ((_b = [
            ...(((_a = document.forms.promotion_form) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.previews img')) ||
                []),
        ]) === null || _b === void 0 ? void 0 : _b.map((e) => e.src)) || [];
        setRecord((record) => (Object.assign(Object.assign({}, record), { rentalId,
            name,
            shortText,
            text,
            promotionType,
            promotionText,
            date,
            photos })));
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
exports.default = PromotionPreviewCard;
//# sourceMappingURL=PromotionPreviewCard.js.map