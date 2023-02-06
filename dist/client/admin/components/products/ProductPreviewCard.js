"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProductCardPreview_1 = require("../previews/ProductCardPreview");
function ProductPreviewCard() {
    const [record, setRecord] = (0, react_1.useState)({
        title: '',
        image: '',
        description: '',
        price: 10000,
        discountPrice: 9000,
        tag: {
            type: 'new',
            text: 'Пример',
        },
        date: new Date().toString(),
        link: '',
    });
    const update = () => {
        var _a, _b;
        const formData = new FormData(document.forms.product_form);
        const title = `${formData.get('name')}`;
        const photos = ((_b = [
            ...(((_a = document.forms.product_form) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.previews img')) ||
                []),
        ]) === null || _b === void 0 ? void 0 : _b.map((e) => e.src)) || [];
        const description = `${formData.get('shortDescription')}`;
        setRecord((record) => (Object.assign(Object.assign({}, record), { title, image: photos[0] || '', description })));
    };
    (0, react_1.useEffect)(() => {
        const id = setInterval(update, 3000);
        setTimeout(update, 100);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (0, jsx_runtime_1.jsx)(ProductCardPreview_1.default, { record: record });
}
exports.default = ProductPreviewCard;
//# sourceMappingURL=ProductPreviewCard.js.map