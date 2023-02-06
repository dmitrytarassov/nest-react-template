"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
const ProductPagePreview_1 = require("../previews/ProductPagePreview");
function ProductPreviewPage() {
    const [record, setRecord] = (0, react_1.useState)({
        id: '',
        name: '',
        photos: [],
        description: '',
        properties: '',
        propertiesText: '',
        unique: false,
    });
    const update = () => {
        const formData = new FormData(document.forms.product_form);
        const name = `${formData.get('name')}`;
        const description = `${formData.get('shortDescription')}`;
        const propertiesText = `${formData.get('propertiesText')}`;
        const properties = `${formData.get('properties')}`;
        setRecord((record) => (Object.assign(Object.assign({}, record), { name,
            description,
            propertiesText,
            properties })));
    };
    (0, react_1.useEffect)(() => {
        const id = setInterval(update, 3000);
        setTimeout(update, 100);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (0, jsx_runtime_1.jsx)(ProductPagePreview_1.default, { record: record });
}
exports.default = ProductPreviewPage;
//# sourceMappingURL=ProductPreviewPage.js.map