import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@frontend/components/Card';
import CarouselFooter from '@frontend/components/CarouselFooter';
import Button from '@frontend/components/Button';
import CarouselContainer from '@frontend/components/CarouselContainer';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import imageUrl from '@frontend/utils/imageUrl';
import { WithTheme } from '@frontend/utils/theme';
import CarouselControlsWithMap from '@frontend/components/CarouselControlsWithMap';
import Title from '@frontend/components/pages/Title';
import { loadPromotionsByRentalId } from '@frontend/utils/loaders';

const StyledPromotionsCarousel = styled(CarouselContainer)`
  //margin-bottom: 24px;
  width: 100%;
  .swiper {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCarouselFooterMobile = styled(CarouselFooter)`
  display: none;

  ${({ theme }: WithTheme) =>
    theme.mixins.laptop(css`
      display: flex;
    `)}
`;

const StyledCarouselFooterDesktop = styled(CarouselFooter)`
  display: flex;

  ${({ theme }: WithTheme) =>
    theme.mixins.laptop(css`
      display: none;
    `)}
`;

const PositionsContainer = styled.div`
  margin: 0 -24px 0 -24px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.primary};
  padding: 32px 24px 0;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledCarouselPromotionsButton = styled(Button)`
  display: flex;

  ${({ theme }: WithTheme) =>
    theme.mixins.laptop(css`
      display: none;
    `)}
`;

interface PromotionsCarouselProps {
  id: string;
  url: string;
}

const PromotionsCarousel = ({ id, url }: PromotionsCarouselProps) => {
  const [allPromotions, setAllPromotions] = useState<ICrudPromotion[]>([]);
  useEffect(() => {
    loadPromotionsByRentalId(id).then((data) => {
      setAllPromotions(data);
    });
  }, [id]);

  return (
    <>
      {allPromotions.length > 0 && (
        <PositionsContainer>
          <StyledTitle>
            Акции и новости рентала
            <StyledCarouselPromotionsButton
              type="link"
              href={`/rentals/${url}/promotions`}
            >
              Посмотреть все
            </StyledCarouselPromotionsButton>
          </StyledTitle>
          <StyledPromotionsCarousel>
            <Swiper {...halfPageSwiperProps}>
              {allPromotions.map((promotion) => (
                <SwiperSlide key={promotion.id}>
                  <Card
                    title={promotion.name}
                    description={promotion.shortText}
                    image={
                      promotion.photos[0]
                        ? imageUrl(promotion.photos[0])
                        : '/public/logoWithCover.svg'
                    }
                    link={promotion.url}
                    tag={{
                      type: promotion.promotionType,
                      text: promotion.promotionText,
                    }}
                    date={promotion.date}
                    rentalLogo={promotion.rentalLogo}
                  />
                </SwiperSlide>
              ))}

              {allPromotions.length > 2 && (
                <StyledCarouselFooterDesktop>
                  <CarouselControlsWithMap
                    count={allPromotions.length}
                    size="small"
                  />
                </StyledCarouselFooterDesktop>
              )}

              <StyledCarouselFooterMobile>
                <Button type="link" href={`/rentals/${id}/promotions`}>
                  Посмотреть все
                </Button>
                <CarouselControlsWithMap
                  count={allPromotions.length}
                  size="large"
                />
              </StyledCarouselFooterMobile>
            </Swiper>
          </StyledPromotionsCarousel>
        </PositionsContainer>
      )}
    </>
  );
};

export default PromotionsCarousel;
