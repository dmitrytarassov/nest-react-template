import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Block = styled.div`
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      padding: 32px 24px;
      overflow-x: hidden;
    `)}
`;

export default Block;
