import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import lightningLine from '@frontend/assets/lightning-line.svg';
import useSWR, { SWRResponse } from 'swr';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IProduct } from '@lib/interfaces/IProduct';
import Heading from '@frontend/components/Heading';
import { get } from '@frontend/utils/fetcher';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import Card, { ICardProps } from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselFooter from '@frontend/components/CarouselFooter';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import ContainerWithRadius from '@frontend/components/ContainerWithRadius';
import { useCity } from '@frontend/hooks/useCity';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import imageUrl from '@frontend/utils/imageUrl';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import { loadUniques } from '@frontend/utils/loaders';

const CarouselContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(${lightningLine.src});
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    background-size: auto calc(100% - 80px);
  }
`;

const StyledHeading = styled(Heading)`
  ${({ theme }: WithTheme) => css`
    color: ${theme.colors.text.alternate};
  `};
  margin-bottom: 48px;
`;

interface UniquesProps {
  _positions: (ICardProps & { id: string })[];
}

const Uniques: React.FC<UniquesProps> = ({ _positions }) => {
  const { city } = useCity();
  const [products, setProducts] =
    useState<(ICardProps & { id: string })[]>(_positions);

  useEffect(() => {
    loadUniques(city).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ContainerWithRadius alternateColors>
      <StyledHeading level="h3" useLines>
        Уникальные позиции
      </StyledHeading>
      <CarouselContainer>
        <Swiper {...fullPageSwiperProps}>
          {products.map(({ id, ...card }) => (
            <SwiperSlide key={id}>
              <Card {...card} />
            </SwiperSlide>
          ))}
          <CarouselFooter>
            <Button type="link" href="/uniques">
              Посмотреть все
            </Button>
            <CarouselControls count={products.length} revertColors />
          </CarouselFooter>
        </Swiper>
      </CarouselContainer>
    </ContainerWithRadius>
  );
};

export default Uniques;
