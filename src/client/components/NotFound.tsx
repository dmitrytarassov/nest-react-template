import React from 'react';
import styled from 'styled-components';
import imageUrl from '@frontend/utils/imageUrl';
import { WithTheme } from '@frontend/utils/theme';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
`;

const Text = styled.span`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 130%;
  color: ${({ theme }: WithTheme) => theme.colors.text.primary};
  white-space: pre-line;
  margin-top: 40px;
  text-align: center;
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src={imageUrl('not_found.svg')} />
      <Text>Сожалеем, но по вашему запросу {'\n'}ничего не найдено.</Text>
    </Container>
  );
};

export default NotFound;
