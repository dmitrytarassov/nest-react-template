"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactAdmin = require("react-admin");
const react_admin_1 = require("react-admin");
const AdminNoSsrPage_1 = require("@admin/AdminNoSsrPage");
const Table_1 = require("@mui/material/Table");
const TableBody_1 = require("@mui/material/TableBody");
const TableCell_1 = require("@mui/material/TableCell");
const TableContainer_1 = require("@mui/material/TableContainer");
const TableHead_1 = require("@mui/material/TableHead");
const TableRow_1 = require("@mui/material/TableRow");
const Paper_1 = require("@mui/material/Paper");
const Button_1 = require("@mui/material/Button");
const ButtonGroup_1 = require("@mui/material/ButtonGroup");
const ProductsWithWeightList = ({}) => {
    const [city, set_city] = react_1.default.useState('spb');
    const [showOnMainPage, set_showOnMainPage] = react_1.default.useState(true);
    const [list, set_list] = react_1.default.useState([]);
    const load = async () => {
        const promotions = await (0, AdminNoSsrPage_1.__dataProvider)(reactAdmin.GET_LIST, 'promotions', {
            filter: {},
            meta: undefined,
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'weight', order: 'DESC' },
        });
        const _promotions = promotions.data.filter(({ weight }) => weight);
        const _rentalsIds = _promotions.map((e) => e.rentalId);
        const __rentals = await fetch(`/api/rental?filter[]=_id,in,${_rentalsIds.join('|')}`);
        const ___rentals = await __rentals.json();
        const _promos = _promotions
            .map((p) => {
            const rental = ___rentals.data.find((a) => a.id === p.rentalId);
            if (rental) {
                return {
                    id: p.id,
                    name: `${p.name} (${rental.name})`,
                    type: 'Акция',
                    weight: p.weight,
                    city: rental.city,
                    unique: false,
                    showOnMainPage: p.showOnMainPage,
                };
            }
        })
            .filter(Boolean);
        const rentalProducts = await (0, AdminNoSsrPage_1.__dataProvider)(reactAdmin.GET_LIST, 'rental_products', {
            filter: {},
            meta: undefined,
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'weight', order: 'DESC' },
        });
        const rp = rentalProducts.data.filter((e) => e.weight > 0);
        const ids = rp.map((e) => e.productId);
        const products = await fetch(`/crud/product?filter[]=_id,in,${ids.join('|')}`);
        const _products = await products.json();
        const rentalsIds = rp.map((e) => e.rentalId);
        const rentals = await fetch(`/crud/rental?filter[]=_id,in,${rentalsIds.join('|')}`);
        const _rentals = await rentals.json();
        const _rentalProducts = rp
            .map((e) => {
            const product = _products.data.find((a) => a.id === e.productId);
            const rental = _rentals.data.find((a) => a.id === e.rentalId);
            if (product && rental) {
                return {
                    name: `${product.name} (${rental.name})`,
                    type: 'Позиция',
                    id: e.id,
                    weight: e.weight,
                    city: rental.city,
                    unique: product.unique,
                    showOnMainPage: e.showOnMainPage,
                };
            }
        })
            .filter(Boolean);
        set_list([..._rentalProducts, ..._promos].sort((a, b) => a.weight < b.weight ? 1 : -1));
    };
    react_1.default.useEffect(() => {
        load();
    }, []);
    console.log(list);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_admin_1.Title, { title: "My Page" }), (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonGroup_1.default, Object.assign({ size: "small", "aria-label": "small button group", style: { marginTop: 20 } }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: city === 'spb' ? 'contained' : undefined, onClick: () => set_city('spb') }, { children: "Spb" })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: city === 'moscow' ? 'contained' : undefined, onClick: () => set_city('moscow') }, { children: "Msk" }))] })), (0, jsx_runtime_1.jsxs)(ButtonGroup_1.default, Object.assign({ size: "small", "aria-label": "small button group", style: { marginTop: 20 } }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: showOnMainPage ? 'contained' : undefined, onClick: () => set_showOnMainPage(true) }, { children: "\u0422\u043E\u043B\u044C\u043A\u043E \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430" })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: !showOnMainPage ? 'contained' : undefined, onClick: () => set_showOnMainPage(false) }, { children: "\u0412\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A" }))] })), (0, jsx_runtime_1.jsx)(TableContainer_1.default, Object.assign({ component: Paper_1.default, style: { marginTop: 20 } }, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, Object.assign({ sx: { minWidth: 650 }, size: "small", "aria-label": "a dense table" }, { children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: "\u0422\u0438\u043F" })), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: "\u0412\u0435\u0441" }))] }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: list
                                        .filter((e) => e.city === city)
                                        .filter((e) => (showOnMainPage ? e.showOnMainPage : true))
                                        .map((row) => ((0, jsx_runtime_1.jsxs)(TableRow_1.default, Object.assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ component: "th", scope: "row" }, { children: (0, jsx_runtime_1.jsx)(react_admin_1.Link, Object.assign({ to: `${row.type === 'Акция'
                                                        ? '/promotions'
                                                        : '/rental_products'}/${row.id}` }, { children: row.name })) })), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: row.type })), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: row.weight || 0 }))] }), row.name))) })] })) }))] })] }));
};
exports.default = ProductsWithWeightList;
//# sourceMappingURL=ProductsWithWeightList.js.map