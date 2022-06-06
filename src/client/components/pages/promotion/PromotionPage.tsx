import React, { useEffect } from 'react';
import { IRental } from '@lib/interfaces/IRental';
import { IPromotion } from '@lib/interfaces/IPromotion';
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

interface PromotionPageProps {
  rental: IRental;
  promotion: IPromotion;
}

const PromotionPage = ({ rental, promotion }: PromotionPageProps) => {
  const router = useRouter();
  const { city } = useCity();

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
      link: `/rentals/${rental.id}`,
    },
    {
      name: 'Новинки и акции',
      link: `/promotions/${promotion.id}`,
    },
  ];

  useEffect(() => {
    updateMapRentals(rentals, rental.id, 500);
  }, [rental.id, rentals]);

  useEffect(() => {
    updateMapRentals([rental], rental.id);
    function callBack(e) {
      // @ts-ignore
      router.push(`/rentals/${e.detail}/promotions`);
    }

    window.addEventListener(ESelectRental, callBack);

    return () => {
      window.removeEventListener(ESelectRental, callBack);
    };
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
    <PageMainColumnContainer>
      <ListTop
        breadcrumbs={breadcrumbs}
        backLink={`/rentals/${rental.id}`}
        title={promotion.name}
        // image={rental.icon}
      />
      <ProductInfo rental={rental} product={_product} />
    </PageMainColumnContainer>
  );
};

export default PromotionPage;
