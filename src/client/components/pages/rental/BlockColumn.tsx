import React from 'react';
import styled from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const BlockColumn = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`;

export default BlockColumn;
