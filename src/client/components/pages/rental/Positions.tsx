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
import { useCity } from '@frontend/hooks/useCity';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';

const CarouselContainer = styled.div<{ useLines: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;

  ${({ useLines }) =>
    useLines &&
    css`
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
    `}
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
  id: string;
}

interface UniquesProps {
  loadPositionUrl: string;
  linkToAll: string;
  revertColors: boolean;
}

const Positions = ({
  loadPositionUrl,
  linkToAll,
  revertColors,
}: UniquesProps) => {
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
  > = useSWR(loadPositionUrl, get);

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
            id: _product.id,
          };
        }),
      );
    }
  }, [data, uniqueProductsData]);

  useEffect(() => {
    if (init) {
      console.log('asd');
      uniqueProductsResponse.mutate();
    }
  }, [city]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <CarouselContainer useLines={revertColors}>
      <Swiper {...halfPageSwiperProps}>
        {uniqueProducts.map(({ price, discountPrice, id, product }) => (
          <SwiperSlide key={product.id}>
            <Card
              title={product.name}
              image={product.photos[0]!}
              link={`/products/${id}`}
              description={product.shortDescription}
              price={price}
              discountPrice={discountPrice}
            />
          </SwiperSlide>
        ))}
        <CarouselFooter>
          <Button type="link" href={linkToAll}>
            Посмотреть все
          </Button>
          <CarouselControls revertColors={revertColors} />
        </CarouselFooter>
      </Swiper>
    </CarouselContainer>
  );
};

export default Positions;
