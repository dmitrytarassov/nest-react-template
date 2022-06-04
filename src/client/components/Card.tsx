import React from 'react';
import styled from 'styled-components';
import { Theme, WithTheme } from '@frontend/utils/theme';
import Link from 'next/link';
import { moneyFormat } from '@frontend/utils/moneyFormat';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import CardTag from '@frontend/components/CardTag';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
import CardDate from '@frontend/components/CardDate';
import { getExpirationDateText } from '@frontend/utils/getExpirationDateText';

const StyledCard = styled.a`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  text-decoration: none;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  cursor: pointer;
  height: 100%;
  justify-content: space-between;
`;

const CardMainContent = styled.div``;

const CardImage = styled.div<{ src: string }>`
  display: block;
  width: 100%;
  padding: 25% 0;
  position: relative;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CardContent = styled.div`
  padding: 24px 32px 0;
  display: flex;
  flex-direction: column;
`;

const CardFooter = styled.div`
  padding: 24px 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CardTitle = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  padding: 8px 0;
  margin-bottom: 8px;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardDescription = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};
`;

const Price = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
`;

const OldPrice = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-decoration: line-through;
  margin-right: 12px;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};
`;

export interface ICardProps {
  title: string;
  description?: string;
  image: string;
  link: string;
  price?: number;
  discountPrice?: number;
  tag?: IPromotionTag;
  date?: string;
  promotionText?: string;
}

const Card = ({
  link,
  image,
  title,
  description,
  price,
  discountPrice,
  tag,
  date,
  promotionText,
}: ICardProps) => {
  const dateText = getExpirationDateText(date);

  return (
    <Link href={link} passHref>
      <StyledCard>
        {tag && <CardTag tag={tag} text={tag.text} />}
        {dateText && <CardDate>{dateText}</CardDate>}
        <CardContainer>
          <CardMainContent>
            <CardImage src={image} />
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{promotionText || description}</CardDescription>
            </CardContent>
          </CardMainContent>
          {price && (
            <CardFooter>
              {discountPrice && <OldPrice>{moneyFormat(price)}</OldPrice>}
              <Price>{moneyFormat(discountPrice || price)}</Price>
            </CardFooter>
          )}
        </CardContainer>
      </StyledCard>
    </Link>
  );
};

export default Card;
