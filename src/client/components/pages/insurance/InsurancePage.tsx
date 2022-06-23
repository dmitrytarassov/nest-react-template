import React from 'react';
import { Container } from '@frontend/layout/Container';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import Content from '@frontend/layout/Content';
import Block from '@frontend/components/pages/insurance/components/Block';
import Title from '@frontend/components/pages/insurance/components/Title';
import WhyUs from '@frontend/components/pages/insurance/WhyUs';
import HowDoesItWork from '@frontend/components/pages/insurance/HowDoesItWork';

const StyledContainer = styled(Container)`
  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      background-color: ${({ theme }: WithTheme) =>
        theme.colors.background.insurance};
      position: relative;
      z-index: 0;
      margin-bottom: -32px;
      padding-bottom: 64px;
    `)}
`;

const StyledContent = styled.div`
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.insurance};
  width: 100%;
  border-radius: 32px;
  padding: 40px;
  min-height: 100vh;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      padding: 32px 24px;
      margin: -56px -24px;
      border-radius: 0;
    `)}

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      padding: 32px 16px;
      margin: -32px -16px;
      border-radius: 0;
    `)}
`;

const InsurancePage: React.FC = () => {
  return (
    <StyledContainer>
      <Content>
        <StyledContent>
          <Block>
            <Title>Почему именно наша страховка?</Title>
            <WhyUs />
          </Block>
          <Block>
            <Title>Как работает Kinoscope Insurance?</Title>
            <HowDoesItWork />
          </Block>
          <Block>
            <Title>Какие риски покрывает наша страховка?</Title>
          </Block>
          <Block>
            <Title>Таблица цен</Title>
          </Block>
          <Block>
            <Title>Хотите застраховать свою технику?</Title>
          </Block>
        </StyledContent>
      </Content>
    </StyledContainer>
  );
};

export default InsurancePage;
