import React from 'react';
import CarouselControl from '@frontend/components/CarouselControl';
import { useSwiper } from 'swiper/react';
import classNames from 'classnames';
import styles from './CarouselControls.module.scss';

interface CarouselControlsProps {
  revertColors?: boolean;
  hide?: number;
  count?: number;
  maxCount?: number;
  size?: 'large' | 'small';
  color?: 'black' | 'lite';
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  revertColors,
  count,
  size = 'large',
  color,
}) => {
  const swiper = useSwiper();

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <div
      className={classNames(
        styles.container,
        count > 0 && count <= 3 && styles['hide-on-laptop'],
        count > 0 && count <= 2 && styles['hide-on-tablet'],
        count === 1 && styles['hide-on-mobile'],
      )}
    >
      <CarouselControl
        size={size}
        onClick={prev}
        revertColors={revertColors}
        direction="left"
        color={color}
      />
      <CarouselControl
        size={size}
        onClick={next}
        revertColors={revertColors}
        direction="right"
        color={color}
      />
    </div>
  );
};

export default CarouselControls;
