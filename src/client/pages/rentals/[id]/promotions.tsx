import React, { useEffect, useState } from 'react';
import { getCity } from '@frontend/utils/getCity';
import { useRouter } from 'next/router';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import RentalPromotionsPage from '@frontend/components/pages/rentalPromotions/RentalPromotionsPage';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { loadPromotionsByRentalId, loadRental } from '@frontend/utils/loaders';

interface RentalPromotionsPageProps {
  rental?: ICrudRental;
  promotions?: ICrudPromotion[];
}

const loadData = async (rentalUrl): Promise<RentalPromotionsPageProps> => {
  const rental = await loadRental(rentalUrl);
  const promotions = await loadPromotionsByRentalId(rental.id);

  return {
    rental,
    promotions,
  };
};

const RentalPromotions = ({
  rental,
  promotions,
}: RentalPromotionsPageProps & PageProps) => {
  const router = useRouter();
  const [_rental, set_rental] = useState<ICrudRental>(rental);
  const [_promotions, set_promotions] = useState<ICrudPromotion[]>(promotions);

  useEffect(() => {
    if (!rental || !promotions) {
      loadData(router.query.id).then((data) => {
        set_rental(data.rental);
        set_promotions(data.promotions);
      });
    }
  }, []);

  const rentalData = rental || _rental;
  const promotionsData = promotions || _promotions;

  return (
    <RentalPromotionsPage rental={rentalData} promotions={promotionsData} />
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: RentalPromotionsPageProps & PageProps }> {
  try {
    const id =
      (context.req.originalUrl.split('rentals/')[1] || '').split(
        '/promotions',
      )[0] || '';
    if (id) {
      const data = await loadData(id);

      return {
        props: {
          ...data,
          city: getCity(context.req.session.city),
          seo_title: `${data.rental.name} | Акции и новинки`,
          seo_description: `${data.rental.name} | Акции и новинки`,
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: { statusCode: 404, city: getCity(context.req.session.city) },
    };
  }
}

export default RentalPromotions;
