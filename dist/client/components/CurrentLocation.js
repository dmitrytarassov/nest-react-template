"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const theme_1 = require("../utils/theme");
const getLocation_1 = require("../utils/getLocation");
const useCurrentLocation_1 = require("../hooks/useCurrentLocation");
const GetLocationIcon = styled_components_1.default.div `
  z-index: 10;
  position: absolute;
  background-image: url('/public/get_location.svg');
  width: 64px;
  height: 64px;
  background-color: ${({ disabled, theme, }) => disabled
    ? theme.colors.buttons.disabled.background
    : theme.colors.buttons.default.background};
  bottom: 48px;
  right: 48px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    ${({ disabled }) => (0, styled_components_1.css) `
      ${!disabled &&
    (0, styled_components_1.css) `
        background-color: ${({ theme }) => theme.colors.buttons.hover.background};
      `}
    `}
  }

  ${({ theme }) => theme.mixins.tablet((0, styled_components_1.css) `
      bottom: 32px;
      right: 16px;
    `)}
`;
const CurrentLocation = ({}) => {
    const { setCoordinates } = (0, useCurrentLocation_1.useCurrentLocation)();
    const [loadLocation, setLoadLocation] = (0, react_1.useState)(false);
    const handleGetLocation = async () => {
        try {
            setLoadLocation(true);
            const location = await (0, getLocation_1.default)();
            setCoordinates(location);
        }
        catch (e) {
            console.log(e);
        }
        setLoadLocation(false);
    };
    return ((0, jsx_runtime_1.jsx)(GetLocationIcon, { disabled: loadLocation, onClick: handleGetLocation }));
};
exports.default = CurrentLocation;
//# sourceMappingURL=CurrentLocation.js.map