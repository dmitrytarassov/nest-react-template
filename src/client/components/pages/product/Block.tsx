import styled from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export default Block;
