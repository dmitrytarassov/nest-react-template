import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { theme, WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import { useRouter } from 'next/router';
import Footer from '@frontend/components/Footer';
import Header from './Header';
import { CityProvider } from '@frontend/providers/city.provider';
import getLocationIcon from '@frontend/assets/get_location.svg';
import getLocation from '@frontend/utils/getLocation';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@frontend/components/Map'),
  { ssr: false },
);

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row-reverse;
  position: relative;
  overflow: hidden;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-direction: column;
    `)};
`;

interface MapContainerProps {
  size: 'big' | 'small';
}

const MapContainer = styled.div<MapContainerProps>`
  width: 40%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;

  ${({ theme, size }: WithThemeAndProps<MapContainerProps>) =>
    css`
      ${theme.mixins.halfScreenBreak(css`
        width: 30%;
      `)}

      ${theme.mixins.tablet(css`
        width: 100%;

        ${size === 'small' &&
        css`
          height: 30%;
        `}
      `)}
    `}
`;

const ContentContainer = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.primary};
  box-shadow: 0px 8px 16px rgba(156, 164, 169, 0.32);
  z-index: 2;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      width: 70%;
    `)};

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      width: 100%;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      margin-top: -16px;
    `)};
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  width: 100%;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      min-height: unset;
      /* height: 100%; */
    `)};
`;

interface GetLocationIconProps {
  disabled?: boolean;
}
const GetLocationIcon = styled.div<{ disabled?: boolean }>`
  z-index: 10;
  position: absolute;
  background-image: url(${getLocationIcon.src});
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
`;

const ContainerWithMap = ({ children }: { children: React.ReactNode }) => {
  const isClient = typeof window !== 'undefined';
  const [currentLocation, setCurrentLocation] = useState<[number, number]>();
  const router = useRouter();
  const [loadLocation, setLoadLocation] = useState<boolean>(false);

  const isSmallMap = [
    '/products/[id]',
    '/rentals/[id]',
    '/promotion/[id]',
  ].includes(router.route);

  const isError = // @ts-ignore
    +children?.props?.statusCode >= 400 || children.type?.name?.includes('404');

  // @ts-ignore
  const city = children.props.city;

  const handleGetLocation = async () => {
    try {
      setLoadLocation(true);
      const location = await getLocation();
      setCurrentLocation(location);
    } catch (e) {
      console.log(e);
    }
    setLoadLocation(false);
  };

  return (
    <CityProvider currentCity={city}>
      <Container>
        <Header />
        <MapContainer size={isSmallMap || isError ? 'small' : 'big'}>
          {isClient && (
            <DynamicComponentWithNoSSR currentLocation={currentLocation} />
          )}
          <GetLocationIcon
            disabled={loadLocation}
            onClick={handleGetLocation}
          />
        </MapContainer>
        <ContentContainer>
          <ChildrenContainer>
            {children}
            <Footer halfScreen />
          </ChildrenContainer>
        </ContentContainer>
      </Container>
    </CityProvider>
  );
};

export default ContainerWithMap;
