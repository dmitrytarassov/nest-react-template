import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import getLocation from '@frontend/utils/getLocation';
import { useCurrentLocation } from '@frontend/hooks/useCurrentLocation';

interface GetLocationIconProps {
  disabled?: boolean;
}

const GetLocationIcon = styled.div<{ disabled?: boolean }>`
  z-index: 10;
  position: absolute;
  background-image: url('/public/get_location.svg');
  width: 64px;
  height: 64px;
  background-color: ${({
    disabled,
    theme,
  }: WithThemeAndProps<GetLocationIconProps>) =>
    disabled
      ? theme.colors.buttons.disabled.background
      : theme.colors.buttons.default.background};
  bottom: 48px;
  right: 48px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    ${({ disabled }) => css`
      ${!disabled &&
      css`
        background-color: ${({ theme }) =>
          theme.colors.buttons.hover.background};
      `}
    `}
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      bottom: 32px;
      right: 16px;
    `)}
`;

const CurrentLocation: React.FC = ({}) => {
  const { setCoordinates } = useCurrentLocation();
  const [loadLocation, setLoadLocation] = useState<boolean>(false);

  const handleGetLocation = async () => {
    try {
      setLoadLocation(true);
      const location = await getLocation();
      setCoordinates(location);
    } catch (e) {
      console.log(e);
    }
    setLoadLocation(false);
  };

  return (
    <GetLocationIcon disabled={loadLocation} onClick={handleGetLocation} />
  );
};

export default CurrentLocation;
