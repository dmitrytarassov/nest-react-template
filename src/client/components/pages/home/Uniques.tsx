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

const Uniques = () => {
  const { city } = useCity();

  const rentalsData: SWRResponse<IControllerResponse<ICrudRental[]>> = useSWR(
    `/api/rental?filter[]=city,${city}`,
    get,
  );

  const rentals = rentalsData?.data?.data || [];
  const rentalIds = rentals.map(({ id }) => id);

  const rentalProductsData: SWRResponse<
    IControllerResponse<ICrudRentalProduct[]>
  > = useSWR(
    rentalIds.length
      ? `/api/rental_products?filter[]=rentalId,in,${rentalIds.join('|')}`
      : null,
    get,
  );

  const rentalProducts = rentalProductsData?.data?.data || [];
  const productsIds = rentalProducts.map(({ productId }) => productId);

  const productsData: SWRResponse<IControllerResponse<ICrudProduct[]>> = useSWR(
    productsIds.length > 0
      ? `/api/product?filter[]=_id,in,${productsIds.join('|')}`
      : null,
    get,
  );

  const products = productsData?.data?.data || [];

  const _rentalProducts = rentalProducts
    .map((rentalProduct) => {
      const product = products.find(({ id }) => id === rentalProduct.productId);

      const rental = rentals.find(({ id }) => id === rentalProduct.rentalId);

      if (!rental) {
        console.log(
          'can not find rental with id ',
          rentalProduct.rentalId,
          rentals,
        );
      }
      if (!product) {
        console.log(
          'can not find product with id ',
          rentalProduct.productId,
          products,
        );
      }
      if (product && rental) {
        return {
          product,
          rentalProduct,
          rental,
        };
      }
    })
    .filter(Boolean);

  const cards: (ICardProps & { id: string })[] = _rentalProducts.map((el) => ({
    id: el.rentalProduct.id,
    title: el.product.name,
    description: el.product.shortDescription,
    image: imageUrl(el.product.photos[0]),
    link: `/rentals/${el.rental.url}/${el.rentalProduct.url}`,
    price: el.rentalProduct.price,
    discountPrice: el.rentalProduct.discountPrice,
    date: el.rentalProduct.date?.toString(),
    promotionText: el.rentalProduct.promotionShortDescription,
    rentalLogo: imageUrl(el.rental.icon),
    ...(el.rentalProduct.promotionType && el.rentalProduct.promotionText
      ? {
          tag: {
            type: el.rentalProduct.promotionType,
            text: el.rentalProduct.promotionText,
          } as IPromotionTag,
        }
      : {}),
  }));

  return (
    <ContainerWithRadius alternateColors>
      <StyledHeading level="h3" useLines>
        Уникальные позиции
      </StyledHeading>
      <CarouselContainer>
        <Swiper {...fullPageSwiperProps}>
          {cards.map(({ id, ...card }) => (
            <SwiperSlide key={id}>
              <Card {...card} />
            </SwiperSlide>
          ))}
          <CarouselFooter>
            <Button type="link" href="/uniques">
              Посмотреть все
            </Button>
            <CarouselControls count={cards.length} revertColors />
          </CarouselFooter>
        </Swiper>
      </CarouselContainer>
    </ContainerWithRadius>
  );
};

export default Uniques;
