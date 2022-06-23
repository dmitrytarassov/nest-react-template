import React from 'react';
import InsurancePage from '@frontend/components/pages/insurance/InsurancePage';
import { PageProps } from '@frontend/pages/_app';
import { getCity } from '@frontend/utils/getCity';
import { CityProvider } from '@frontend/providers/city.provider';
import Header from '@frontend/components/Header';
import Footer from '@frontend/components/Footer';

const Insurance: React.FC<PageProps> = ({ city }) => {
  return (
    <CityProvider currentCity={city}>
      <Header />
      <InsurancePage />
      <Footer />
    </CityProvider>
  );
};

export default Insurance;

export async function getServerSideProps(
  context,
): Promise<{ props: PageProps }> {
  return {
    props: {
      city: getCity(context.req.session.city),
    },
  };
}
