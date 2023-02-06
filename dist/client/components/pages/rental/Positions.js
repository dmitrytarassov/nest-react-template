"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const swr_1 = require("swr");
const IControllerResponse_1 = require("../../../../lib/interfaces/IControllerResponse");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
const Heading_1 = require("@frontend/components/Heading");
const fetcher_1 = require("../../../utils/fetcher");
const react_2 = require("swiper/react");
const Card_1 = require("@frontend/components/Card");
const Button_1 = require("@frontend/components/Button");
const CarouselControls_1 = require("@frontend/components/CarouselControls");
const CarouselFooter_1 = require("@frontend/components/CarouselFooter");
const IRentalProduct_1 = require("../../../../lib/interfaces/IRentalProduct");
const useCity_1 = require("../../../hooks/useCity");
const halfPageSwiperProps_1 = require("../../../utils/halfPageSwiperProps");
const CarouselContainer = styled_components_1.default.div `
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;

  ${({ useLines }) => useLines &&
    (0, styled_components_1.css) `
      :after {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background-image: url('/public/lightning-line.svg');
        background-repeat-x: repeat;
        background-repeat-y: no-repeat;
        background-size: auto calc(100% - 80px);
      }
    `}
`;
const StyledHeading = (0, styled_components_1.default)(Heading_1.default) `
  ${({ theme }) => (0, styled_components_1.css) `
    color: ${theme.colors.text.alternate};
  `};
  margin-bottom: 48px;
`;
const Positions = ({ loadPositionUrl, linkToAll, revertColors, }) => {
    const [uniqueProducts, setUniqueProducts] = (0, react_1.useState)([]);
    const [init, setInit] = (0, react_1.useState)(false);
    const { city } = (0, useCity_1.useCity)();
    const [ids, setIds] = (0, react_1.useState)([]);
    const { data } = (0, swr_1.default)(`/api/products?ids=${ids.join(',')}`, fetcher_1.get);
    const uniqueProductsResponse = (0, swr_1.default)(loadPositionUrl, fetcher_1.get);
    const { data: uniqueProductsData } = uniqueProductsResponse;
    (0, react_1.useEffect)(() => {
        if (uniqueProductsData === null || uniqueProductsData === void 0 ? void 0 : uniqueProductsData.data) {
            setIds(uniqueProductsData.data.map(({ productId }) => productId));
        }
    }, [uniqueProductsData]);
    (0, react_1.useEffect)(() => {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.length) {
            setUniqueProducts(data.data.map((product) => {
                const _product = uniqueProductsData.data.find(({ productId }) => productId === product.id);
                return {
                    product,
                    price: _product === null || _product === void 0 ? void 0 : _product.price,
                    discountPrice: _product === null || _product === void 0 ? void 0 : _product.discountPrice,
                    id: _product.id,
                };
            }));
        }
    }, [data, uniqueProductsData]);
    (0, react_1.useEffect)(() => {
        if (init) {
            uniqueProductsResponse.mutate();
        }
    }, [city]);
    (0, react_1.useEffect)(() => {
        setInit(true);
    }, []);
    return ((0, jsx_runtime_1.jsx)(CarouselContainer, Object.assign({ useLines: revertColors }, { children: (0, jsx_runtime_1.jsxs)(react_2.Swiper, Object.assign({}, halfPageSwiperProps_1.halfPageSwiperProps, { children: [uniqueProducts.map(({ price, discountPrice, id, product }) => ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { title: product.name, image: product.photos[0], link: `/products/${id}`, description: product.shortDescription, price: price, discountPrice: discountPrice }) }, product.id))), (0, jsx_runtime_1.jsxs)(CarouselFooter_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "link", href: linkToAll }, { children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435" })), (0, jsx_runtime_1.jsx)(CarouselControls_1.default, { revertColors: revertColors })] })] })) })));
};
exports.default = Positions;
//# sourceMappingURL=Positions.js.map