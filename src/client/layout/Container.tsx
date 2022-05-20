import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

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
    color: ${({ theme }: WithTheme) => theme.colors.links.default};
    :hover {
      color: ${({ theme }: WithTheme) => theme.colors.links.hover};
    }
    :visited,
    :active,
    :focus,
    :focus-visible,
    :focus-within {
      color: ${({ theme }: WithTheme) => theme.colors.links.active};
    }
  }
`;
