import React from 'react';
import ContainerWithRadius from '@frontend/components/ContainerWithRadius';
import Button from '@frontend/components/Button';
import styled, { css } from 'styled-components';
import BannerBase from '@frontend/components/pages/home/BannerBase';
import { WithTheme } from '@frontend/utils/theme';
import Heading from '@frontend/components/Heading';
import InfoText from '@frontend/components/InfoText';

const StyledBanner = styled(BannerBase)`
  background-image: url(/public/insurance.png);
  padding: 64px;
  align-items: flex-start;
  ${({ theme }: WithTheme) => theme.mixins.tablet(css``)};

  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.insurance};

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      background-image: url(/public/insurance-mobile.png);
      background-position: bottom right;
      background-size: contain;

      padding: 32px;
      height: 560px;
    `)}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 16px;
  font-family: 'Neue Machina';
  font-size: 32px;
  color: ${({ theme }: WithTheme) => theme.colors.text.alternate};
`;

const StyledInfoText = styled(InfoText)`
  margin-bottom: 58px;
  color: ${({ theme }: WithTheme) => theme.colors.text.alternate};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.buttons.insurance.default.background};
  color: ${({ theme }: WithTheme) =>
    theme.colors.buttons.insurance.default.color};

  &[data-button-link]:hover {
    background-color: ${({ theme }: WithTheme) =>
      theme.colors.buttons.insurance.hover.background}!important;
    color: ${({ theme }: WithTheme) =>
      theme.colors.buttons.insurance.hover.color}!important;
  }
`;

const StyledContainerWithRadius = styled(ContainerWithRadius)`
  padding-top: 32px;
`;

const Insurance: React.FC = () => {
  return (
    <StyledContainerWithRadius alternateColors>
      <StyledBanner>
        <StyledHeading level="h3">Страховка оборудования</StyledHeading>
        <StyledInfoText>
          Хотите застраховать технику {'\n'}на время аренды?
        </StyledInfoText>
        <StyledButton type="link" href="/insurance">
          Подробнее
        </StyledButton>
      </StyledBanner>
    </StyledContainerWithRadius>
  );
};

export default Insurance;
