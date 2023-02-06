"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const Text_1 = require("@frontend/components/pages/insurance/components/Text");
const Subtitle_1 = require("@frontend/components/pages/insurance/components/Subtitle");
const theme_1 = require("../../../utils/theme");
const classnames_1 = require("classnames");
const imageUrl_1 = require("../../../utils/imageUrl");
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  .block {
    background: #f1f5f6;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    cursor: pointer;

    & + .block {
      margin-top: 24px;

      ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
          margin-top: 16px;
        `)}
    }

    ${Subtitle_1.default} {
      position: relative;

      img {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    ${Text_1.default} {
      display: none;
      margin-top: 18px;
    }

    &.open {
      ${Text_1.default} {
        display: block;
      }

      ${Subtitle_1.default} {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
const Risks = () => {
    const [current, setCurrent] = (0, react_1.useState)(-1);
    const blocks = [
        [
            'Внешнее воздействие',
            'Повреждение или уничтожение оборудования в результате удара, падения и других механических воздействий',
        ],
        [
            'Противоправное действие третьих лиц',
            'Кража, грабеж, разбой и другие противоправные действия со стороны третьих лиц, в результате которых был причинен ущерб оборудованию со стороны третьих лиц',
        ],
        [
            'Страховое покрытие',
            'При наступлении страхового случая 90% стоимости ущерба компенсирует страховка, остальные 10% стоимости ущерба оплачивает клиент',
        ],
    ];
    const updateCurrent = (value) => () => {
        setCurrent((_value) => {
            return _value === value ? -1 : value;
        });
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: blocks.map(([name, value], index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('block', { open: index === current }), onClick: updateCurrent(index) }, { children: [(0, jsx_runtime_1.jsxs)(Subtitle_1.default, { children: [name, (0, jsx_runtime_1.jsx)("img", { src: (0, imageUrl_1.default)('arrowDown.svg') })] }), (0, jsx_runtime_1.jsx)(Text_1.default, { children: value })] }), name))) }));
};
exports.default = Risks;
//# sourceMappingURL=Risks.js.map