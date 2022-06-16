import { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

export const lintStyles = css`
  color: ${({ theme }: WithTheme) => theme.colors.links.default};
  :hover {
    color: ${({ theme }: WithTheme) => theme.colors.links.hover}!important;
  }
  :visited,
  :active,
  :focus,
  :focus-visible,
  :focus-within {
    color: ${({ theme }: WithTheme) => theme.colors.links.active};
  }
`;
