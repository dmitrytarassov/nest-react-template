import React from 'react';
import Content from '@frontend/layout/Content';
import Button from '@frontend/components/Button';
import styles from './SecondBanner.module.scss';

const SecondBanner = () => {
  return (
    <Content className={styles.content}>
      <div className={styles.banner}>
        <h2 className={styles.heading}>Ренталы на карте</h2>
        <p className={styles.text}>
          Посмотрите на карте, где {'\n'}находятся ренталы в вашем городе
        </p>
        <Button type="link" href="/rentals" size="large">
          Посмотреть на карте
        </Button>
      </div>
    </Content>
  );
};

export default SecondBanner;
