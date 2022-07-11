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
  padding: 16px;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-direction: column;
      align-items: flex-start;
    `)};
`;

const Text = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-right: 24px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    `)}
`;

const Prices = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-wrap: wrap;
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
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  font-family: 'Roboto Mono';

  span {
    font-family: 'Roboto';
    font-weight: 500;
  }
`;

const OldPrice = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-decoration-line: line-through;
  color: ${({ theme }: WithTheme) => theme.colors.text.oldPrice};
  margin-left: 12px;
  font-family: 'Roboto Mono';

  span {
    font-family: 'Roboto';
    font-weight: 400;
    margin-top: 1px;
  }
`;

const Price = ({ price, discountPrice, link }: PriceProps) => {
  console.log({ link });
  const isPromotion = !(price || discountPrice);
  return (
    <StyledPrice>
      <Prices>
        {isPromotion ? (
          <Text>Посмотреть на сайте рентала</Text>
        ) : (
          <>
            <Text>Стоимость за сутки:</Text>
            <CurrentPrice>
              {moneyFormat(discountPrice || price, false)}
              <span>₽</span>
            </CurrentPrice>
            {discountPrice > 0 && (
              <OldPrice>
                {moneyFormat(price, false)} <span>₽</span>
              </OldPrice>
            )}
          </>
        )}
      </Prices>
      <Buttons>
        <ShareButton />
        {link && (
          <Button href={link} blank type="link">
            {isPromotion ? 'Открыть' : 'Арендовать'}
          </Button>
        )}
      </Buttons>
    </StyledPrice>
  );
};

export default Price;
