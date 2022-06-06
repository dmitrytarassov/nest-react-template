import React from 'react';
import styled, { css } from 'styled-components';
import { moneyFormat } from '@frontend/utils/moneyFormat';
import { WithTheme } from '@frontend/utils/theme';
import Button from '@frontend/components/Button';
import ShareButton from '@frontend/components/ShareButton';

const StyledPrice = styled.div`
  font-family: 'Roboto';
  display: flex;
  width: 100%;
  padding: 16px 24px;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      flex-direction: column;
      align-items: flex-start;
    `)};
`;

const Prices = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 16px;
    `)}
`;

const Text = styled.div`
  font-family: 'Roboto Mono';
  margin-right: 12px;

  ${({ theme }: WithTheme) =>
    theme.mixins.halfScreenBreak(css`
      margin-right: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    `)}
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

interface PriceProps {
  price: number;
  discountPrice?: number;
  link?: string;
}

const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
`;

const OldPrice = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-decoration-line: line-through;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};
  margin-left: 12px;
`;

const Price = ({ price, discountPrice, link }: PriceProps) => {
  return (
    <StyledPrice>
      <Prices>
        <Text>Стоимость за сутки:</Text>
        <CurrentPrice>{moneyFormat(discountPrice || price)}</CurrentPrice>
        {discountPrice && <OldPrice>{moneyFormat(price)}</OldPrice>}
      </Prices>
      <Buttons>
        <ShareButton />
        {link && (
          <Button href={link} blank>
            Арендовать
          </Button>
        )}
      </Buttons>
    </StyledPrice>
  );
};

export default Price;
