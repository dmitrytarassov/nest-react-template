import React from 'react';
import Banner from '@frontend/components/pages/home/Banner';
import { Container } from '@frontend/layout/Container';
import SecondBanner from '@frontend/components/pages/home/SecondBanner';
import PromotionsCarousel from '@frontend/components/pages/home/PromotionsCarousel';
import Uniques from '@frontend/components/pages/home/Uniques';
import FeedbackForm from '@frontend/components/pages/home/FeedbackForm';
import Footer from '@frontend/components/Footer';
import { ICardProps } from '@frontend/components/Card';
import Insurance from '@frontend/components/pages/home/Insurance';
import { Head } from 'next/document';

interface HomePageProps {
  uniques: (ICardProps & { id: string })[];
}

const HomePage: React.FC<HomePageProps> = ({ uniques }) => {
  return (
    <>
      <Container>
        <Banner />
        <SecondBanner />
        <PromotionsCarousel />
      </Container>
      <Uniques _positions={uniques} />
      <Insurance />
      <Footer />
    </>
  );
};

export default HomePage;
