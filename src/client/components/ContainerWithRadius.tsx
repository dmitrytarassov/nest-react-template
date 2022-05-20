import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@frontend/layout/Container';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import Content from '@frontend/layout/Content';

interface StyledContainerProps {
  alternateColors?: boolean;
}

const StyledContainer = styled(Container)<StyledContainerProps>`
  ${({
    theme,
    alternateColors,
  }: WithThemeAndProps<StyledContainerProps>) => css`
    background-color: ${alternateColors
      ? theme.colors.background.alternate
      : theme.colors.background.primary};
    color: ${alternateColors
      ? theme.colors.text.alternate
      : theme.colors.text.additional};
  `}
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  min-height: unset;
  overflow: hidden;
  padding-bottom: 96px;
  padding-top: 64px;

  :last-child {
    padding-bottom: 64px;
  }

  & + & {
    margin-top: -32px;
  }
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
`;

interface ContainerWithRadius extends StyledContainerProps {
  children: React.ReactNode;
}

const ContainerWithRadius = ({
  children,
  alternateColors = false,
}: ContainerWithRadius) => {
  return (
    <StyledContainer alternateColors={alternateColors}>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default ContainerWithRadius;
