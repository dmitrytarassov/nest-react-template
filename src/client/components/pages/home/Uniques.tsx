import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fullPageSwiperProps } from '@frontend/utils/fullPageSwiperProps';
import Card, { ICardProps } from '@frontend/components/Card';
import Button from '@frontend/components/Button';
import CarouselControls from '@frontend/components/CarouselControls';
import { useCity } from '@frontend/hooks/useCity';
import { loadUniques } from '@frontend/utils/loaders';
import styles from './Uniques.module.scss';
import Content from '@frontend/layout/Content';
import classNames from 'classnames';
import headingStyles from '../../Heading.module.scss';

interface UniquesProps {
  _positions: (ICardProps & { id: string })[];
}

const Uniques: React.FC<UniquesProps> = ({ _positions }) => {
  const { city } = useCity();
  const [products, setProducts] =
    useState<(ICardProps & { id: string })[]>(_positions);

  useEffect(() => {
    loadUniques(city, true).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className={styles.container}>
          <Content className={styles.content}>
            <h3 className={classNames(styles.heading, headingStyles.useLines)}>
              <div>Уникальные позиции</div>
            </h3>
            <div className={styles.carousel}>
              <Swiper {...fullPageSwiperProps}>
                {products.map(({ id, ...card }) => (
                  <SwiperSlide key={id}>
                    <Card {...card} size="large" />
                  </SwiperSlide>
                ))}
                <div className={styles.footer}>
                  <Button type="link" href="/unique_positions" size="large">
                    Посмотреть все
                  </Button>
                  <CarouselControls count={4} color="lite" />
                </div>
              </Swiper>
            </div>
          </Content>
        </div>
      )}
    </>
  );
};

export default Uniques;
