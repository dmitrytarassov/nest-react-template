"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const getExpirationDateText_1 = require("../../utils/getExpirationDateText");
const imageUrl_1 = require("../../utils/imageUrl");
const IRental_1 = require("../../../lib/interfaces/IRental");
const react_1 = require("react");
const Tags_1 = require("../pages/product/Tags");
const Block_1 = require("./Block");
const Image_1 = require("./Image");
const Images_1 = require("./Images");
const Info_1 = require("./Info");
const Price_1 = require("./Price");
const Tag_1 = require("./Tag");
const ICrudRental_1 = require("../../../lib/interfaces/ICrudRental");
function ProductInfo({ product, rental }) {
    const [currentImage, setCurrentImage] = (0, react_1.useState)(product.photos[0]);
    const dateText = product.date
        ? (0, getExpirationDateText_1.getExpirationDateText)(product.date)
        : undefined;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Block_1.default, { children: [(0, jsx_runtime_1.jsx)(Image_1.default, { src: (0, imageUrl_1.default)(currentImage) }), (0, jsx_runtime_1.jsxs)(Tags_1.default, { children: [product.promotion && ((0, jsx_runtime_1.jsx)(Tag_1.default, { tag: product.promotion.tag, text: product.promotion.tagText })), dateText && (0, jsx_runtime_1.jsx)(Tag_1.default, { tag: "date", text: dateText })] }), (0, jsx_runtime_1.jsx)(Images_1.default, { logo: (0, imageUrl_1.default)(rental.icon), images: product.photos, current: currentImage, onChange: setCurrentImage })] }), (0, jsx_runtime_1.jsx)(Block_1.default, { children: (0, jsx_runtime_1.jsx)(Price_1.default, { price: +product.price, discountPrice: +product.discountPrice, link: product.externalUrl }) }), (0, jsx_runtime_1.jsx)(Block_1.default, { children: (0, jsx_runtime_1.jsx)(Info_1.default, { promotion: product.promotionText, description: product.description, properties: product.properties, propertiesText: product.propertiesText }) })] }));
}
exports.default = ProductInfo;
//# sourceMappingURL=ProductInfo.js.map