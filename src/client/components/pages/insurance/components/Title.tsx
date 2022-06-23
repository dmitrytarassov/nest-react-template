import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Title = styled.h3`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 0;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
    `)}
`;

export default Title;
