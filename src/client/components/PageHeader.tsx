import React from 'react';
import BackButton from '@frontend/components/BackButton';
import styles from './PageHeader.module.scss';
import Image from '@frontend/components/Image';
import classNames from 'classnames';

interface PageHeaderProps {
  backLink: string;
  title: string;
  children?: React.ReactNode;
  image?: string;
  rating?: number;
  revertColors?: boolean;
}

const PageHeader = ({
  backLink,
  title,
  children,
  image,
  rating,
  revertColors,
}: PageHeaderProps) => {
  return (
    <div className={classNames(styles.container, { reverted: revertColors })}>
      <div className={styles.title}>
        <BackButton to={backLink} />
        {image && (
          <div className={styles.imageContainer}>
            <Image src={image} width={48} height={48} />
          </div>
        )}
        <h1 className={styles.heading}>{title}</h1>
        {rating && (
          <div className={styles.ratingContainer}>
            <div className={styles.text}>{rating}</div>
            <div className={styles.ratingImgContainer}>
              <Image src="/public/star.svg" width={22} height={22} />
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
