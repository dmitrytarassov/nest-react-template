"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Tabs_1 = require("./Tabs");
const Info_module_scss_1 = require("./Info.module.scss");
const classnames_1 = require("classnames");
const Info = ({ properties = '', propertiesText, description, promotion, }) => {
    const [show, setShow] = (0, react_1.useState)(properties || propertiesText ? 'properties' : 'description');
    const _properties = properties
        .split('\n')
        .map((e) => {
        if (e.startsWith('**')) {
            return ['**', e.replace('**', '')];
        }
        else {
            const [param = '', value = ''] = e.split('===');
            return [param, value];
        }
    })
        .filter(([a, b]) => a && b);
    const showButtons = (propertiesText || properties) && (description || promotion);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Info_module_scss_1.default.info }, { children: [showButtons && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.buttons }, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { options: [
                        { name: 'Характеристики', value: 'properties' },
                        { name: 'Описание', value: 'description' },
                    ], active: show, onChange: setShow }) }))), show === 'properties' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.title }, { children: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438" })), _properties.map(([name, value]) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.props }, { children: name === '**' ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.propTitle }, { children: value }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Info_module_scss_1.default.base, Info_module_scss_1.default.name) }, { children: name })), (0, jsx_runtime_1.jsx)("div", { className: Info_module_scss_1.default.separator }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Info_module_scss_1.default.base, Info_module_scss_1.default.value) }, { children: value.split('==').map((e, i) => ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: Info_module_scss_1.default.line }, { children: e }), `${name}_${e}_${i}`))) }))] })) }), `${name}_${value}`))), propertiesText && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.propText }, { children: propertiesText })))] })), show === 'description' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.title }, { children: promotion && !description
                            ? 'Описание акци'
                            : 'Описание устройства' })), promotion && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.description }, { children: promotion })), description && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Info_module_scss_1.default.description }, { children: description })))] }))] })));
};
exports.default = Info;
//# sourceMappingURL=Info.js.map