import React from 'react';
import Content from '@frontend/layout/Content';
import styled, { css } from 'styled-components';
import banner from './assets/banner.png';
import bannerMobile from './assets/banner-mobile.png';
import { WithTheme } from '@frontend/utils/theme';
import Heading from '@frontend/components/Heading';
import InfoText from '@frontend/components/InfoText';
import BannerBase from '@frontend/components/pages/home/BannerBase';

const StyledBanner = styled(BannerBase)`
  background-image: url(${banner.src});
  height: 538px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      height: 420px;
    `)}

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      background-image: url(${bannerMobile.src});
      background-position: bottom right;
      background-size: contain;

      height: 570px;
    `)}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const Banner = () => {
  return (
    <Content>
      <StyledBanner>
        <StyledHeading level="h1" useLines>
          Kinoscope
        </StyledHeading>
        <InfoText>
          Информационный сервис{'\n'}о акциях и новинках во всех{'\n'}ренталах в
          твоем городе
        </InfoText>
      </StyledBanner>
    </Content>
  );
};

export default Banner;
