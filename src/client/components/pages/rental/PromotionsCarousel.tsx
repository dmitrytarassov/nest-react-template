import React from 'react';
import styled, { css } from 'styled-components';
import useSWR, { SWRResponse } from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import Card from '@frontend/components/Card';
import logoWithCover from '@frontend/assets/logoWithCover.svg';
import CarouselFooter from '@frontend/components/CarouselFooter';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselContainer from '@frontend/components/CarouselContainer';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import imageUrl from '@frontend/utils/imageUrl';
import { WithTheme } from '@frontend/utils/theme';
import CarouselControlsWithMap from '@frontend/components/CarouselControlsWithMap';
import Title from '@frontend/components/pages/Title';

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
  padding: 32px 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

const PromotionsCarousel = ({ id }: PromotionsCarouselProps) => {
  const promotions: SWRResponse<IControllerResponse<IPromotion[]>> = useSWR(
    `/api/promotions?filter[]=rentalId,${id}&filter[]=date,gte,now`,
    get,
  );

  const promotionsWithoutDate: SWRResponse<IControllerResponse<IPromotion[]>> =
    useSWR(`/api/promotions?filter[]=rentalId,${id}&filter[]=date,`, get);

  const promotionsFullInfo: IPromotion[] = [
    ...(promotions?.data?.data || []),
    ...(promotionsWithoutDate?.data?.data || []),
  ];

  return (
    <>
      {promotionsFullInfo.length > 0 && (
        <PositionsContainer>
          <StyledTitle>
            Акции и новости рентала
            <StyledCarouselPromotionsButton
              type="link"
              href={`/rentals/${id}/promotions`}
            >
              Посмотреть все
            </StyledCarouselPromotionsButton>
          </StyledTitle>
          <StyledPromotionsCarousel>
            <Swiper {...halfPageSwiperProps}>
              {promotionsFullInfo.map((promotion) => (
                <SwiperSlide key={promotion.id}>
                  <Card
                    title={promotion.name}
                    description={promotion.shortText}
                    image={
                      promotion.photos[0]
                        ? imageUrl(promotion.photos[0])
                        : logoWithCover.src
                    }
                    link={`/promotion/${promotion.url}`}
                    tag={{
                      type: promotion.promotionType,
                      text: promotion.promotionText,
                    }}
                    date={promotion.date}
                  />
                </SwiperSlide>
              ))}
              {promotionsFullInfo.length > 2 && (
                <StyledCarouselFooterDesktop>
                  <CarouselControlsWithMap count={promotionsFullInfo.length} />
                </StyledCarouselFooterDesktop>
              )}

              <StyledCarouselFooterMobile>
                <Button type="link" href={`/rentals/${id}/promotions`}>
                  Посмотреть все
                </Button>
                <CarouselControlsWithMap count={promotionsFullInfo.length} />
              </StyledCarouselFooterMobile>
            </Swiper>
          </StyledPromotionsCarousel>
        </PositionsContainer>
      )}
    </>
  );
};

export default PromotionsCarousel;
