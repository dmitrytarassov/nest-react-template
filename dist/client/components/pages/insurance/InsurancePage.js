"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Container_1 = require("@frontend/layout/Container");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../../utils/theme");
const Content_1 = require("@frontend/layout/Content");
const Block_1 = require("@frontend/components/pages/insurance/components/Block");
const Title_1 = require("@frontend/components/pages/insurance/components/Title");
const WhyUs_1 = require("@frontend/components/pages/insurance/WhyUs");
const HowDoesItWork_1 = require("@frontend/components/pages/insurance/HowDoesItWork");
const Risks_1 = require("@frontend/components/pages/insurance/Risks");
const Prices_1 = require("@frontend/components/pages/insurance/Prices");
const Form_1 = require("@frontend/components/pages/insurance/Form");
const classnames_1 = require("classnames");
const Banner_1 = require("@frontend/components/pages/insurance/Banner");
const StyledContainer = (0, styled_components_1.default)(Container_1.Container) `
  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      background-color: ${({ theme }) => theme.colors.background.insurance};
      position: relative;
      z-index: 0;
      margin-bottom: -32px;
      padding-bottom: 64px;
    `)}
`;
const StyledContent = styled_components_1.default.div `
  background-color: ${({ theme }) => theme.colors.background.insurance};
  width: 100%;
  border-radius: 32px;
  padding: 40px;
  min-height: 100vh;

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      padding: 32px 24px;
      margin: -56px -24px;
      border-radius: 0;
    `)}

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      padding: 32px 16px;
      margin: -32px -16px;
      border-radius: 0;
    `)}
`;
const BixWithImage = (0, styled_components_1.default)(Block_1.default) `
  background-image: url(/public/insurance-end.png);
  min-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;

  &.formIsSent {
    background-image: url(/public/sended.png);
    background-position: bottom center;
    background-size: cover;
  }

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      background-image: unset;
      &.formIsSent {
        background-position: bottom center;
        background-size: auto 80%;
      }
    `)}
`;
const InsurancePage = ({ canSend }) => {
    const [formIsSent, setFormIsSent] = (0, react_1.useState)(!canSend);
    return ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(Content_1.default, { children: (0, jsx_runtime_1.jsxs)(StyledContent, { children: [(0, jsx_runtime_1.jsx)(Banner_1.default, {}), (0, jsx_runtime_1.jsxs)(Block_1.default, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430?" }), (0, jsx_runtime_1.jsx)(WhyUs_1.default, {})] }), (0, jsx_runtime_1.jsxs)(Block_1.default, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 Kinoscope Insurance?" }), (0, jsx_runtime_1.jsx)(HowDoesItWork_1.default, {})] }), (0, jsx_runtime_1.jsxs)(Block_1.default, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "\u041A\u0430\u043A\u0438\u0435 \u0440\u0438\u0441\u043A\u0438 \u043F\u043E\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430?" }), (0, jsx_runtime_1.jsx)(Risks_1.default, {})] }), (0, jsx_runtime_1.jsxs)(Block_1.default, Object.assign({ id: "prices" }, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0446\u0435\u043D" }), (0, jsx_runtime_1.jsx)(Prices_1.default, {})] })), (0, jsx_runtime_1.jsxs)(BixWithImage, Object.assign({ className: (0, classnames_1.default)({ formIsSent }) }, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: formIsSent
                                    ? 'Спасибо за вашу заявку!'
                                    : 'Хотите застраховать свою технику?' }), (0, jsx_runtime_1.jsx)(Form_1.default, { onSend: () => setFormIsSent(true), canSend: canSend })] }))] }) }) }));
};
exports.default = InsurancePage;
//# sourceMappingURL=InsurancePage.js.map