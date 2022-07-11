import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import { useRouter } from 'next/router';
import Footer from '@frontend/components/Footer';
import Header from './Header';
import { CityProvider } from '@frontend/providers/city.provider';
import { CurrentLocationProvider } from '@frontend/providers/current_location.provider';
import { IApp } from '@frontend/pages/_app';
import ErrorPage from '@frontend/components/pages/errors/ErrorPage';
import { RentalsProvider } from '@frontend/providers/rentals.provider';

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
      height: unset;
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
          height: calc(70vh + 72px);
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
  box-shadow: 0 8px 16px rgba(156, 164, 169, 0.32);
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
      position: relative;
      overflow: visible;
      padding-top: 16px;

      :after {
        content: '';
        height: 8px;
        width: 56px;
        background: #fff;
        left: calc(50% - 28px);
        position: absolute;
        top: -24px;
        border-radius: 4px;
      }
    `)};
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
  width: 100%;
  justify-content: space-between;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      padding-top: 0;
    `)};
`;

const ContainerWithMap = ({ children, statusCode }: IApp['pageProps']) => {
  const isClient = typeof window !== 'undefined';
  const router = useRouter();
  const ref = useRef();

  const isSmallMap = [
    '/rentals/[id]',
    '/rentals/[id]/[product]',
    '/promotion/[id]',
    '/rentals',
    '/unique_positions',
  ].includes(router.route);

  const showMap = [
    '/delete_products/[id]',
    '/rentals/[id]',
    '/rentals/[id]/[product]',
    '/promotion/[id]',
    '/unique_positions',
  ].includes(router.route);

  const isError = typeof statusCode !== 'undefined' && statusCode >= 400;

  // @ts-ignore
  const city = children.props.city;

  useEffect(() => {
    if (showMap) {
      setTimeout(() => {
        // @ts-ignore
        window.scrollTo(0, window.innerHeight - 172 - 300);
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
    if (ref) {
      // @ts-ignore
      ref.current.scrollTo(0, 0);
    }
  }, [router.route]);

  return (
    <CityProvider currentCity={city || 'spb'}>
      <CurrentLocationProvider>
        <Container>
          <Header />
          <MapContainer size={isSmallMap ? 'small' : 'big'}>
            {isClient && <DynamicComponentWithNoSSR />}
          </MapContainer>
          <ContentContainer ref={ref}>
            <ChildrenContainer>
              {isError ? (
                <RentalsProvider>
                  <ErrorPage statusCode={statusCode} />
                </RentalsProvider>
              ) : (
                children
              )}
              <Footer halfScreen />
            </ChildrenContainer>
          </ContentContainer>
        </Container>
      </CurrentLocationProvider>
    </CityProvider>
  );
};

export default ContainerWithMap;
