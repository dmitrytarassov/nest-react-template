import React, { useState } from 'react';
import { Container } from '@frontend/layout/Container';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import Content from '@frontend/layout/Content';
import Block from '@frontend/components/pages/insurance/components/Block';
import Title from '@frontend/components/pages/insurance/components/Title';
import WhyUs from '@frontend/components/pages/insurance/WhyUs';
import HowDoesItWork from '@frontend/components/pages/insurance/HowDoesItWork';
import Risks from '@frontend/components/pages/insurance/Risks';
import Prices from '@frontend/components/pages/insurance/Prices';
import Form from '@frontend/components/pages/insurance/Form';
import classNames from 'classnames';
import Banner from '@frontend/components/pages/insurance/Banner';

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

const BixWithImage = styled(Block)`
  background-image: url(/public/insurance-end.png);
  min-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;

  &.formIsSent {
    background-image: url(/public/sended.png);
    background-position: bottom center;
    background-size: cover;
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      background-image: unset;
      &.formIsSent {
        background-position: bottom center;
        background-size: auto 80%;
      }
    `)}
`;

interface InsurancePageProps {
  canSend: boolean;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ canSend }) => {
  const [formIsSent, setFormIsSent] = useState<boolean>(!canSend);

  return (
    <StyledContainer>
      <Content>
        <StyledContent>
          <Banner />
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
            <Risks />
          </Block>
          <Block id="prices">
            <Title>Таблица цен</Title>
            <Prices />
          </Block>
          <BixWithImage className={classNames({ formIsSent })}>
            <Title>
              {formIsSent
                ? 'Спасибо за вашу заявку!'
                : 'Хотите застраховать свою технику?'}
            </Title>
            <Form onSend={() => setFormIsSent(true)} canSend={canSend} />
          </BixWithImage>
        </StyledContent>
      </Content>
    </StyledContainer>
  );
};

export default InsurancePage;
