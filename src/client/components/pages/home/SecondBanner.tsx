import React from 'react';
import Content from '@frontend/layout/Content';
import styled, { css } from 'styled-components';
import banner from './assets/banner-map.png';
import bannerMobile from './assets/banner-map-mobile.png';
import { WithTheme } from '@frontend/utils/theme';
import Heading from '@frontend/components/Heading';
import InfoText from '@frontend/components/InfoText';
import BannerBase from '@frontend/components/pages/home/BannerBase';
import Button from '@frontend/components/Button';
import { useRouter } from 'next/router';

const StyledBanner = styled(BannerBase)`
  background-image: url(${banner.src});
  padding: 64px;
  align-items: flex-start;

  ${({ theme }: WithTheme) => theme.mixins.tablet(css``)}

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      background-image: url(${bannerMobile.src});
      background-position: bottom right;
      background-size: contain;

      padding: 32px;
      height: 560px;
    `)}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledInfoText = styled(InfoText)`
  margin-bottom: 32px;
`;

const SecondBanner = () => {
  const router = useRouter();

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/promotions');
  };

  return (
    <Content>
      <StyledBanner>
        <StyledHeading level="h3">Ренталы на карте</StyledHeading>
        <StyledInfoText>
          Посмотрите на карте, где{'\n'}находятся ренталы в вашем{'\n'}городе
        </StyledInfoText>
        <Button type="link" href="/rentals">
          Посмотреть на карте
        </Button>
      </StyledBanner>
    </Content>
  );
};

export default SecondBanner;
