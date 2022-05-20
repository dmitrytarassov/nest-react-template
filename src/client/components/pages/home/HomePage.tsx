import React from 'react';
import Banner from '@frontend/components/pages/home/Banner';
import { Container } from '@frontend/layout/Container';
import SecondBanner from '@frontend/components/pages/home/SecondBanner';
import PromotionsCarousel from '@frontend/components/pages/home/PromotionsCarousel';
import Uniques from '@frontend/components/pages/home/Uniques';
import FeedbackForm from '@frontend/components/pages/home/FeedbackForm';
import Footer from '@frontend/components/Footer';

const HomePage = () => {
  return (
    <>
      <Container>
        <Banner />
        <SecondBanner />
        <PromotionsCarousel />
      </Container>
      <Uniques />
      <FeedbackForm />
      <Footer />
    </>
  );
};

export default HomePage;
