"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const theme_1 = require("../../utils/theme");
const imageUrl_1 = require("../../utils/imageUrl");
const StyledImages = styled_components_1.default.div `
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 2;
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      flex-direction: row-reverse;
    `)};
`;
const Logo = styled_components_1.default.div `
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.buttons.alternate.default.background};

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      height: 48px;
      width: 48px;
      margin-left: 24px;

      img {
        width: 30px;
        height: 30px;
      }
    `)};
`;
const ImagesLine = styled_components_1.default.div `
  display: block;
  overflow-x: auto;
  margin-left: 24px;
  width: calc(100% - 80px);

  ${Logo} {
    display: flex;
    margin-left: 12px;
  }

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      width: calc(100% - 68px);
      margin-left: 0;
    `)};
`;
const ImagesLineScroll = styled_components_1.default.div `
  display: flex;
  float: right;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      float: left;
    `)};
`;
const Image = styled_components_1.default.img `
  height: 48px;
  width: 48px;
  object-fit: contain;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ active, theme }) => active ? theme.colors.borders.active : theme.colors.borders.default};
  cursor: pointer;
  box-sizing: border-box;
  background: #fff;

  ${({ theme }) => theme.mixins.mobile((0, styled_components_1.css) `
      height: 48px;
    `)};

  ${({ active, theme }) => active
    ? (0, styled_components_1.css) `
          border-color: ${theme.colors.thumbs.active};
        `
    : (0, styled_components_1.css) `
          border-color: ${theme.colors.thumbs.default};
          :hover {
            border-color: ${theme.colors.thumbs.hover};
          }
        `}

  ${({ theme, logo }) => logo &&
    (0, styled_components_1.css) `
      display: none;
      
      ${theme.mixins.laptop((0, styled_components_1.css) `
        display: block;
      `)}}
    `}

  :not(:first-child) {
    margin-left: 12px;
  }
`;
const Images = ({ logo, images, current, onChange }) => {
    return ((0, jsx_runtime_1.jsxs)(StyledImages, { children: [(0, jsx_runtime_1.jsx)(Logo, { children: (0, jsx_runtime_1.jsx)("img", { src: logo }) }), (0, jsx_runtime_1.jsx)(ImagesLine, { children: (0, jsx_runtime_1.jsx)(ImagesLineScroll, { children: images.map((image) => ((0, jsx_runtime_1.jsx)(Image, { src: (0, imageUrl_1.default)(image), active: current === image, onClick: () => onChange(image) }, image))) }) })] }));
};
exports.default = Images;
//# sourceMappingURL=Images.js.map