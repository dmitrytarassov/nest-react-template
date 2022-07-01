import React, { useEffect, useState } from 'react';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import { getCity } from '@frontend/utils/getCity';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { PageProps } from '@frontend/pages/_app';
import {
  loadPromotionsByRentals,
  loadRentalsByCity,
} from '@frontend/utils/loaders';
import PromotionsPage from '@frontend/components/pages/promotions/PromotionsPage';
import { useCity } from '@frontend/hooks/useCity';

interface PromotionsPageProps {
  promotions?: ICrudPromotion[];
}

const loadData = async (city): Promise<PromotionsPageProps> => {
  const rentals = await loadRentalsByCity(city);
  const promotions = await loadPromotionsByRentals(rentals);

  return {
    promotions,
  };
};

const Promotions = ({ promotions, city }: PromotionsPageProps & PageProps) => {
  const [_promotions, set_promotions] = useState<ICrudPromotion[]>(promotions);
  const { city: _city } = useCity();

  useEffect(() => {
    if (!promotions) {
      loadData(city).then((data) => {
        set_promotions(data.promotions);
      });
    }
  }, []);

  useEffect(() => {
    loadData(_city).then((data) => {
      set_promotions(data.promotions);
    });
  }, [_city]);

  const promotionsData = _promotions.length ? _promotions : promotions || [];

  return (
    <PromotionsProvider>
      <RentalsProvider>
        <PromotionsPage promotions={promotionsData} />
      </RentalsProvider>
    </PromotionsProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: PromotionsPageProps & PageProps }> {
  try {
    const data = await loadData(context.req.session.city);

    return {
      props: {
        ...data,
        city: getCity(context.req.session.city),
        seo_title: `Новинки и акции ренталов`,
        seo_description: `Новинки и акции ренталов`,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: { statusCode: 404, city: getCity(context.req.session.city) },
    };
  }
}

export default Promotions;
