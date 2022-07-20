import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card, { ICardProps } from '@frontend/components/Card';
import { halfPageSwiperProps } from '@frontend/utils/halfPageSwiperProps';
import CarouselControlsHalfScreen from '@frontend/components/CarouselControlsHalfScreen';
import styles from './Positions.module.scss';

interface UniquesProps {
  positions: (ICardProps & { id: string })[];
}

const Positions = ({ positions }: UniquesProps) => {
  return (
    <div className={styles.styles}>
      <Swiper {...halfPageSwiperProps}>
        {positions.map(({ id, ...card }) => (
          <SwiperSlide key={id}>
            <Card {...card} />
          </SwiperSlide>
        ))}
        <CarouselControlsHalfScreen
          className={styles.controls}
          revertColors
          count={positions.length}
          size="small"
        />
      </Swiper>
    </div>
  );
};

export default Positions;
