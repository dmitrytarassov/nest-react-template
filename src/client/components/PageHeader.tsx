import React from 'react';
import BackButton from '@frontend/components/BackButton';
import styles from './PageHeader.module.scss';
import Image from '@frontend/components/Image';

interface PageHeaderProps {
  backLink: string;
  title: string;
  children?: React.ReactNode;
  image?: string;
}

const PageHeader = ({ backLink, title, children, image }: PageHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <BackButton to={backLink} />
        {image && (
          <div className={styles.imageContainer}>
            <Image src={image} width={48} height={48} />
          </div>
        )}
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
