import React from 'react';
import InsurancePage from '@frontend/components/pages/insurance/InsurancePage';
import { PageProps } from '@frontend/pages/_app';
import { getCity } from '@frontend/utils/getCity';
import { CityProvider } from '@frontend/providers/city.provider';
import Header from '@frontend/components/Header';
import Footer from '@frontend/components/Footer';

interface InsuranceProps {
  canSend: boolean;
}

const Insurance: React.FC<PageProps & InsuranceProps> = ({ city, canSend }) => {
  return (
    <CityProvider currentCity={city}>
      <Header />
      <InsurancePage canSend={canSend} />
      <Footer />
    </CityProvider>
  );
};

export default Insurance;

export async function getServerSideProps(
  context,
): Promise<{ props: PageProps & InsuranceProps }> {
  const lastSend = context.req.session.insuranceRequestSend
    ? new Date(context.req.session.insuranceRequestSend)
    : new Date(+new Date() - 10000001);

  const goodTimeToSend = +new Date() - +lastSend >= 10000000;

  return {
    props: {
      city: getCity(context.req.session.city),
      canSend: goodTimeToSend,
    },
  };
}
