"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const IProduct_1 = require("../../../../lib/interfaces/IProduct");
const theme_1 = require("../../../utils/theme");
const Tabs_1 = require("@frontend/components/pages/product/Tabs");
const StyledInfo = styled_components_1.default.div `
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
const Buttons = styled_components_1.default.div `
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
`;
const Title = styled_components_1.default.div `
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  margin-bottom: 24px;
`;
const base = (0, styled_components_1.css) `
  font-family: 'Roboto Mono';
  white-space: pre;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
const PropName = styled_components_1.default.div `
  ${base};
  margin-right: 8px;
`;
const PropValue = styled_components_1.default.div `
  ${base};
  margin-left: 8px;
`;
const PropValueLine = styled_components_1.default.p `
  margin: 0;
  width: 100%;
  text-align: right;
`;
const PropSeparator = styled_components_1.default.div `
  width: 100%;
  border-bottom: 1px dashed #d8dde2;
  margin-top: 14px;
`;
const PropText = styled_components_1.default.div `
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.additional};
  white-space: pre-line;
`;
const Props = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  width: 100%;

  & + ${PropText} {
    margin-top: 24px;
  }

  & + & {
    margin-top: 16px;
  }
`;
const Info = ({ product }) => {
    var _a;
    const [show, setShow] = (0, react_1.useState)(((_a = product.properties) === null || _a === void 0 ? void 0 : _a.length) || product.propertiesText
        ? 'properties'
        : 'description');
    const _properties = product.properties
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
    return ((0, jsx_runtime_1.jsxs)(StyledInfo, { children: [(product.propertiesText || _properties.length > 0) &&
                product.description && ((0, jsx_runtime_1.jsx)(Buttons, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { options: [
                        { name: 'Характеристики', value: 'properties' },
                        { name: 'Описание', value: 'description' },
                    ], active: show, onChange: setShow }) })), show === 'properties' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title, { children: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438" }), _properties.map(([name, value]) => ((0, jsx_runtime_1.jsx)(Props, { children: name === '**' ? ((0, jsx_runtime_1.jsx)(PropValue, { children: value })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PropName, { children: name }), (0, jsx_runtime_1.jsx)(PropSeparator, {}), (0, jsx_runtime_1.jsx)(PropValue, { children: value.split('==').map((e) => ((0, jsx_runtime_1.jsx)(PropValueLine, { children: e }, e))) })] })) }))), product.propertiesText && ((0, jsx_runtime_1.jsx)(PropText, { children: product.propertiesText }))] })), show === 'description' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title, { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }), product.description && (0, jsx_runtime_1.jsx)(PropText, { children: product.description })] }))] }));
};
exports.default = Info;
//# sourceMappingURL=Info.js.map