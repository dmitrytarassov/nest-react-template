"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__dataProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_admin_1 = require("react-admin");
const react_router_dom_1 = require("react-router-dom");
const ra_data_nest_crud_1 = require("@fusionworks/ra-data-nest-crud");
const RentalsList_1 = require("@admin/components/rentals/RentalsList");
const RentalAdd_1 = require("@admin/components/rentals/RentalAdd");
const reactAdmin = require("react-admin");
const RentalEdit_1 = require("@admin/components/rentals/RentalEdit");
const ProductsList_1 = require("@admin/components/products/ProductsList");
const ProductAdd_1 = require("@admin/components/products/ProductAdd");
const ProductEdit_1 = require("@frontend/admin/components/products/ProductEdit");
const RentalProductsList_1 = require("@frontend/admin/components/rental_products/RentalProductsList");
const RentalProductAdd_1 = require("@frontend/admin/components/rental_products/RentalProductAdd");
const RentalProductEdit_1 = require("@frontend/admin/components/rental_products/RentalProductEdit");
const dynamic_1 = require("next/dynamic");
const PromotionsList_1 = require("./components/promotions/PromotionsList");
const PromotionsAdd_1 = require("./components/promotions/PromotionsAdd");
const PromotionsEdit_1 = require("./components/promotions/PromotionsEdit");
const ProductsWithWeightList_1 = require("@admin/components/weight/ProductsWithWeightList");
const react_admin_2 = require("react-admin");
const react_admin_3 = require("react-admin");
const Label_1 = require("@mui/icons-material/Label");
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
    options.headers.set('Authorization', `Bearer ${token}`);
    return react_admin_1.fetchUtils.fetchJson(url, options);
};
const dataProvider = (0, ra_data_nest_crud_1.default)('/crud', httpClient);
const convertFileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file.rawFile);
});
const __dataProvider = async (type, resource, params) => {
    var _a;
    if (type === reactAdmin.CREATE || type === reactAdmin.UPDATE) {
        for (const paramName of Object.keys(params.data)) {
            if (Array.isArray(params.data[paramName])) {
                const data = [];
                for (const img of params.data[paramName]) {
                    if (img.rawFile) {
                        const pic = await convertFileToBase64(img);
                        data.push(pic);
                    }
                    else if (typeof img === 'string') {
                        data.push(img);
                    }
                }
                params.data[paramName] = data;
            }
            else {
                if (((_a = params.data[paramName]) === null || _a === void 0 ? void 0 : _a.rawFile) instanceof File) {
                    const img = params.data[paramName];
                    if (img.rawFile) {
                        const pic = await convertFileToBase64(img);
                        params.data[paramName] = pic;
                    }
                    else if (typeof img === 'string') {
                        params.data[paramName] = img;
                    }
                }
            }
        }
        const response = await dataProvider(type, resource, params);
        return Object.assign(Object.assign({}, response), { data: Object.assign(Object.assign({}, response.data), { id: response.data._id }) });
    }
    else if (type === reactAdmin.GET_LIST) {
        const response = await dataProvider(type, resource, params);
        const data = response.data;
        return Object.assign(Object.assign({}, response), { data });
    }
    const response = await dataProvider(type, resource, params);
    if (type === reactAdmin.GET_MANY) {
        return response.data;
    }
    return response;
};
exports.__dataProvider = __dataProvider;
const MyMenu = () => ((0, jsx_runtime_1.jsxs)(react_admin_3.Menu, { children: [(0, jsx_runtime_1.jsx)(react_admin_3.Menu.ResourceItem, { name: "rental" }), (0, jsx_runtime_1.jsx)(react_admin_3.Menu.ResourceItem, { name: "product" }), (0, jsx_runtime_1.jsx)(react_admin_3.Menu.ResourceItem, { name: "rental_products" }), (0, jsx_runtime_1.jsx)(react_admin_3.Menu.ResourceItem, { name: "promotions" }), (0, jsx_runtime_1.jsx)(react_admin_3.Menu.Item, { to: "/products_with_weight", primaryText: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u0435\u0441\u043E\u043C", leftIcon: (0, jsx_runtime_1.jsx)(Label_1.default, {}) })] }));
const MyLayout = (props) => (0, jsx_runtime_1.jsx)(react_admin_2.Layout, Object.assign({}, props, { menu: MyMenu }));
const App = () => {
    return ((0, jsx_runtime_1.jsxs)(react_admin_1.Admin, Object.assign({ layout: MyLayout, dataProvider: exports.__dataProvider }, { children: [(0, jsx_runtime_1.jsx)(react_admin_1.Resource, { name: "rental", list: RentalsList_1.default, create: RentalAdd_1.default, edit: RentalEdit_1.default }), (0, jsx_runtime_1.jsx)(react_admin_1.Resource, { name: "product", list: ProductsList_1.default, create: ProductAdd_1.default, edit: ProductEdit_1.default }), (0, jsx_runtime_1.jsx)(react_admin_1.Resource, { name: "rental_products", list: RentalProductsList_1.default, create: RentalProductAdd_1.default, edit: RentalProductEdit_1.default }), (0, jsx_runtime_1.jsx)(react_admin_1.Resource, { name: "promotions", list: PromotionsList_1.default, create: PromotionsAdd_1.default, edit: PromotionsEdit_1.default }), (0, jsx_runtime_1.jsx)(react_admin_1.CustomRoutes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "products_with_weight", element: (0, jsx_runtime_1.jsx)(ProductsWithWeightList_1.default, {}) }) })] })));
};
exports.default = (0, dynamic_1.default)(() => Promise.resolve(App), {
    ssr: false,
});
//# sourceMappingURL=AdminNoSsrPage.js.map