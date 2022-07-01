import React from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import NotFound from '@frontend/components/NotFound';
import PromotionsCarousel from '@frontend/components/pages/rentalPromotions/PromotionsCarousel';
import classNames from 'classnames';
import styled from 'styled-components';
import Title from '@frontend/components/pages/Title';

const StyledTitle = styled(Title)`
  &.not_alone {
    margin-top: 32px;
  }
`;

const NFContainer = styled.div`
  min-height: 420px;
`;

interface NewsAndPromotionsProps {
  news: ICrudPromotion[];
  promotions: ICrudPromotion[];
}

const NewsAndPromotions: React.FC<NewsAndPromotionsProps> = ({
  news,
  promotions,
}) => {
  return (
    <>
      {promotions.length === 0 && news.length === 0 && (
        <NFContainer>
          <NotFound />
        </NFContainer>
      )}
      {promotions.length > 0 && (
        <>
          <StyledTitle>Акции</StyledTitle>
          <PromotionsCarousel promotions={promotions} />
        </>
      )}

      {news.length > 0 && (
        <>
          <StyledTitle
            className={classNames({ not_alone: promotions.length > 0 })}
          >
            Новинки
          </StyledTitle>
          <PromotionsCarousel promotions={news} />
        </>
      )}
    </>
  );
};

export default NewsAndPromotions;
