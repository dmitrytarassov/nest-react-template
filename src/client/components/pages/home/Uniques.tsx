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
import Card from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import CarouselFooter from '@frontend/components/CarouselFooter';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import ContainerWithRadius from '@frontend/components/ContainerWithRadius';
import { useCity } from '@frontend/hooks/useCity';

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

interface IUniqueProduct {
  product: IProduct;
  price: number;
  discountPrice?: number;
}

const Uniques = () => {
  const [uniqueProducts, setUniqueProducts] = useState<IUniqueProduct[]>([]);
  const [init, setInit] = useState<boolean>(false);
  const { city } = useCity();
  const [ids, setIds] = useState<string[]>([]);

  const { data }: SWRResponse<IControllerResponse<IProduct[]>> = useSWR(
    `/api/products?ids=${ids.join(',')}`,
    get,
  );

  const uniqueProductsResponse: SWRResponse<
    IControllerResponse<IRentalProduct[]>
  > = useSWR('/api/rentals/unique_products', get);

  const { data: uniqueProductsData } = uniqueProductsResponse;

  useEffect(() => {
    if (uniqueProductsData?.data) {
      setIds(uniqueProductsData.data.map(({ productId }) => productId));
    }
  }, [uniqueProductsData]);

  useEffect(() => {
    if (data?.data?.length) {
      setUniqueProducts(
        data.data.map((product) => {
          const _product = uniqueProductsData.data.find(
            ({ productId }) => productId === product.id,
          );
          return {
            product,
            price: _product?.price,
            discountPrice: _product?.discountPrice,
          };
        }),
      );
    }
  }, [data, uniqueProductsData]);

  useEffect(() => {
    if (init) {
      uniqueProductsResponse.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <ContainerWithRadius alternateColors>
      <StyledHeading level="h3" useLines>
        Уникальные позиции
      </StyledHeading>
      <CarouselContainer>
        <Swiper {...fullPageSwiperProps}>
          {uniqueProducts.map(({ price, discountPrice, product }) => (
            <SwiperSlide key={product.id}>
              <Card
                title={product.name}
                image={product.photos[0]!}
                link={`/products/${product.id}`}
                description={product.shortDescription}
                price={price}
                discountPrice={discountPrice}
              />
            </SwiperSlide>
          ))}
          <CarouselFooter>
            <Button type="link" href="/uniques">
              Посмотреть все
            </Button>
            <CarouselControls revertColors />
          </CarouselFooter>
        </Swiper>
      </CarouselContainer>
    </ContainerWithRadius>
  );
};

export default Uniques;
