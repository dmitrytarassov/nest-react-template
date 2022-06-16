import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import { lintStyles } from '@frontend/utils/styles';

export const Container = styled.div<WithTheme>`
  min-height: 100vh;
  color: ${({ theme }: WithTheme) => theme.colors.text.primary};
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.primary};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      padding: 0 16px;
    `)}

  a {
    ${lintStyles}
  }
`;
