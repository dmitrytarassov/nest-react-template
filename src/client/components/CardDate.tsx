import React from 'react';
import Image from '@frontend/components/Image';
import styles from './CardDate.module.scss';
import classNames from 'classnames';

interface CardDateProps {
  children: React.ReactNode;
  size: 'small' | 'large';
}

const CardDate = ({ children, size }: CardDateProps) => {
  return (
    <div className={classNames(styles.badge, styles[size])}>
      <Image src="/public/clocks.svg" width={20} height={14} />
      <span className={styles.text}>{children}</span>
    </div>
  );
};

export default CardDate;
