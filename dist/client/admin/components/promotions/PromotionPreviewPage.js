"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IPromotionTag_1 = require("../../../../lib/interfaces/IPromotionTag");
const ProductPagePreview_1 = require("../previews/ProductPagePreview");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
function PromotionPreviewPage() {
    const [record, setRecord] = (0, react_1.useState)({});
    const _record = {
        id: '0',
        unique: false,
        properties: '',
        photos: record.photos || [],
        name: record === null || record === void 0 ? void 0 : record.name,
        description: record === null || record === void 0 ? void 0 : record.text,
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
    return (0, jsx_runtime_1.jsx)(ProductPagePreview_1.default, { record: _record });
}
exports.default = PromotionPreviewPage;
//# sourceMappingURL=PromotionPreviewPage.js.map