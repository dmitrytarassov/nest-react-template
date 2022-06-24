import React, { useEffect } from 'react';
import { IRental } from '@lib/interfaces/IRental';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { useRouter } from 'next/router';
import { useCity } from '@frontend/hooks/useCity';
import { useRentals } from '@frontend/hooks/useRentals';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import ListTop from '@frontend/components/ListTop';
import PageMainColumnContainer from '@frontend/components/PageMainColumnContainer';
import { updateMapRentals } from '@frontend/utils/updateMapRentals';
import { ESelectRental } from '@frontend/dtos/ESelectRental';
import ProductInfo, {
  ProductLike,
} from '@frontend/components/ProductInfo/ProductInfo';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';
import styled from 'styled-components';

const StyledPageMainColumnContainer = styled(PageMainColumnContainer)``;

interface PromotionPageProps {
  rental: ICrudRental;
  promotion: ICrudPromotion;
}

const PromotionPage = ({ rental, promotion }: PromotionPageProps) => {
  const router = useRouter();

  const { rentals } = useRentals();
  const breadcrumbs: IBreadCrumb[] = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Ренталы',
      link: '/rentals',
    },
    {
      name: rental.name,
      link: `/rentals/${rental.url}`,
    },
    {
      name: 'Новинки и акции',
      link: `/promotions/${promotion.id}`,
    },
  ];

  useEffect(() => {
    updateMapRentals(rentals, rental.id, 500);

    function callBack(e) {
      // @ts-ignore
      const rental = rentals.find(({ id }) => id === e.detail);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
  }, [rental.id, rentals]);

  useEffect(() => {
    updateMapRentals([rental], rental.id);
  }, []);

  const _product: ProductLike = {
    photos: promotion.photos,
    date: promotion.date,
    promotionText: promotion.text,
    promotion: {
      tag: promotion.promotionType,
      tagText: promotion.promotionText,
    },
  };

  return (
    <StyledPageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/rentals/${rental.url}`}
        title={promotion.name}
        image={imageUrl(rental.icon)}
      />
      <ProductInfo rental={rental} product={_product} />
    </StyledPageMainColumnContainer>
  );
};

export default PromotionPage;
