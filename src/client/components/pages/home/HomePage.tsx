import React from 'react';
import Banner from '@frontend/components/pages/home/Banner';
import SecondBanner from '@frontend/components/pages/home/SecondBanner';
import PromotionsCarousel from '@frontend/components/pages/home/PromotionsCarousel';
import Uniques from '@frontend/components/pages/home/Uniques';
import Footer from '@frontend/components/Footer';
import { ICardProps } from '@frontend/components/Card';
import Insurance from '@frontend/components/pages/home/Insurance';
import containerStyles from '../../../layout/Container.module.scss';

interface HomePageProps {
  uniques: (ICardProps & { id: string })[];
}

const HomePage: React.FC<HomePageProps> = ({ uniques }) => {
  return (
    <>
      <div className={containerStyles.container}>
        <Banner />
        <SecondBanner />
        <PromotionsCarousel />
      </div>
      <Uniques _positions={uniques} />
      <Insurance />
      <Footer />
    </>
  );
};

export default HomePage;
