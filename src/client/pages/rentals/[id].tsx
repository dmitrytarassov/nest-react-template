import React, { useEffect, useState } from 'react';
import { ProductsProvider } from '@frontend/providers/products.provider';
import { PromotionsProvider } from '@frontend/providers/promotions.provider';
import { RentalsProvider } from '@frontend/providers/rentals.provider';
import Header from '@frontend/components/Header';
import { CityProvider } from '@frontend/providers/city.provider';
import { getCity } from '@frontend/utils/getCity';
import RentalPage from '@frontend/components/pages/rental/RentalPage';
import { useRouter } from 'next/router';
import { loadRental } from '@frontend/utils/loaders';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';

interface RentalPageProps {
  rental?: ICrudRental;
}

const loadData = async (rentalUrl): Promise<ICrudRental> => {
  return await loadRental(rentalUrl);
};

const Rental = ({ city, rental }: RentalPageProps & PageProps) => {
  const router = useRouter();
  const [_rental, set_rental] = useState<ICrudRental>(rental);

  useEffect(() => {
    loadData(router.query.id).then(set_rental);
  }, []);

  const rentalData = rental || _rental;

  return (
    <CityProvider currentCity={city}>
      <ProductsProvider>
        <PromotionsProvider>
          <RentalsProvider>
            <Header />
            {rentalData && <RentalPage rental={rentalData} />}
          </RentalsProvider>
        </PromotionsProvider>
      </ProductsProvider>
    </CityProvider>
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

      return {
        props: {
          rental: rental || null,
          city: getCity(context.req.session.city),
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
