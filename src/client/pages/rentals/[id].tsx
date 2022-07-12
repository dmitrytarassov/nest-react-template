import React, { useEffect, useState } from 'react';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { getCity } from '@frontend/utils/getCity';
import RentalPage from '@frontend/components/pages/rental/RentalPage';
import { useRouter } from 'next/router';
import { loadRental } from '@frontend/utils/loaders';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import clearify from '@frontend/utils/clearify';

interface RentalPageProps {
  rental?: ICrudRental;
}

const loadData = async (rentalUrl): Promise<ICrudRental> => {
  return await loadRental(rentalUrl);
};

const Rental = ({ rental }: RentalPageProps & PageProps) => {
  const router = useRouter();
  const [_rental, set_rental] = useState<ICrudRental>(rental);

  useEffect(() => {
    loadData(router.query.id).then(set_rental);
  }, [router.query.id]);

  const rentalData = rental || _rental;

  return (
    <ProductsProvider>
      <PromotionsProvider>
        {rentalData && <RentalPage rental={rentalData} />}
      </PromotionsProvider>
    </ProductsProvider>
  );
};

export async function getServerSideProps(
  context,
): Promise<{ props: RentalPageProps & PageProps }> {
  try {
    const id = (context.req.originalUrl.split('rentals/')[1] || '')
      .split('?')[0]
      .split('#')[0]
      .split('.')[0];

    if (id) {
      const rental = await loadData(id);

      if (!rental) {
        throw new Error();
      }

      return {
        props: {
          rental: rental || null,
          city: getCity(context.req.session.city),
          ...clearify({
            seo_title: rental.seo_title,
            seo_description: rental.seo_description,
            seo_keywords: rental.seo_keywords,
            site_url: process.env.SITE_URL,
          }),
        },
      };
    }
  } catch (e) {
    return {
      props: { statusCode: 404, city: getCity(context.req.session.city) },
    };
  }
}

export default Rental;
