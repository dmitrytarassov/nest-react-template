import React, { useEffect, useState } from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { getCity } from '@frontend/utils/getCity';
import { loadPromotion, loadRentalById } from '@frontend/utils/loaders';
import { PageProps } from '@frontend/pages/_app';
import { useRouter } from 'next/router';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import PromotionPage from '@frontend/components/pages/promotion/PromotionPage';
import clearify from '@frontend/utils/clearify';

type RentalProductPageProps = {
  rental?: ICrudRental;
  promotion?: ICrudPromotion;
};

const loadData = async (promotionUrl): Promise<RentalProductPageProps> => {
  const promotion = await loadPromotion(promotionUrl);
  if (promotion) {
    const rental = await loadRentalById(promotion.rentalId);
    if (rental) {
      return {
        rental,
        promotion,
      };
    }
  }
};

const RentalProductPage: React.FC<RentalProductPageProps & PageProps> = ({
  rental,
  promotion,
}) => {
  const router = useRouter();
  const [data, setData] = useState<RentalProductPageProps>({
    rental,
    promotion,
  });

  useEffect(() => {
    if (!promotion) {
      loadData(router.query.id).then(setData);
    }
  }, []);

  const _rental = rental || data.rental;
  const _promotion = promotion || data.promotion;

  return (
    <RentalsProvider>
      <PromotionPage rental={_rental} promotion={_promotion} />
    </RentalsProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: RentalProductPageProps & PageProps }> {
  try {
    const [promotionUrl] = context.req.originalUrl
      .split('/')
      .reverse()
      .map((e) => e.split('.')[0]);

    const data = await loadData(promotionUrl);
    if (data) {
      return {
        props: {
          ...clearify(data),
          city: getCity(context.req.session.city),
          ...clearify({
            seo_title: data.promotion.seo_title,
            seo_description: data.promotion.seo_description,
            seo_keywords: data.promotion.seo_keywords,
            site_url: process.env.SITE_URL,
          }),
        },
      };
    }
  } catch (e) {
    console.error(e);
  }
  return {
    props: { statusCode: 404, city: getCity(context.req.session.city) },
  };
}

export default RentalProductPage;
