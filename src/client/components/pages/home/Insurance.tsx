import React from 'react';
import Button from '@frontend/components/Button';
import styles from './Insurance.module.scss';
import classNames from 'classnames';
import Content from '@frontend/layout/Content';

const Insurance: React.FC<{ haveUniques: boolean }> = ({ haveUniques }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.haveUniques]: haveUniques,
      })}
    >
      <Content className={styles.content}>
        <div className={styles.banner}>
          <h3 className={styles.heading}>Страховка оборудования</h3>
          <div className={styles.text}>
            Хотите застраховать технику {'\n'}на время аренды?
          </div>
          <Button
            type="link"
            href="/insurance"
            size="large"
            variant="whiteOrange"
          >
            Подробнее
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default Insurance;
