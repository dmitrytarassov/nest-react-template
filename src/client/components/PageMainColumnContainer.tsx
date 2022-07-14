import React from 'react';
import styles from './PageMainColumnContainer.module.scss';

interface PageMainColumnContainerProps {
  children: React.ReactNode;
}

const PageMainColumnContainer: React.FC<PageMainColumnContainerProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageMainColumnContainer;
