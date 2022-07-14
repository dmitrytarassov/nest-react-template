import React from 'react';
import styles from './CarouselControl.module.scss';
import classNames from 'classnames';

interface CarouselControlProps {
  size: 'large' | 'small';
  direction: 'left' | 'right';
  onClick: () => void;
  revertColors?: boolean;
  color?: 'lite' | 'black';
}

const CarouselControl = ({
  size,
  direction,
  onClick,
  color = 'lite',
}: CarouselControlProps) => {
  return (
    <div
      className={classNames(
        styles.control,
        styles[size],
        styles[direction],
        styles[color],
      )}
      onClick={onClick}
    >
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.element}
          d="M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z"
        />
      </svg>
    </div>
  );
};

export default CarouselControl;
