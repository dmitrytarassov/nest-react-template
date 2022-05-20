import React from 'react';
import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import { useRouter } from 'next/router';
import Footer from '@frontend/components/Footer';

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

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-direction: column;
    `)};
`;

interface MapContainerProps {
  size: 'big' | 'small';
}

const MapContainer = styled.div<MapContainerProps>`
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  padding-top: 72px;
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
          height: 50%;
        `}
      `)}
    `}
`;

const ContentContainer = styled.div`
  width: 50%;
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

const ContainerWithMap = ({ children }: { children: React.ReactNode }) => {
  const isClient = typeof window !== 'undefined';
  const router = useRouter();

  const isSmallMap = [
    '/products/[id]',
    '/rentals/[id]',
    '/rentals/[id]/promotions',
  ].includes(router.route);

  return (
    <Container>
      <MapContainer size={isSmallMap ? 'small' : 'big'}>
        {isClient && <DynamicComponentWithNoSSR />}
      </MapContainer>
      <ContentContainer>
        {children}
        <Footer halfScreen />
      </ContentContainer>
    </Container>
  );
};

export default ContainerWithMap;
