import React from 'react';
import classNames from 'classnames';
import styles from './BannerBase.module.scss';

interface BannerBaseProps {
  children: React.ReactNode;
  className?: string;
}

const BannerBase = ({ children, className }: BannerBaseProps) => {
  return <div className={classNames(styles.base, className)}>{children}</div>;
};

export default BannerBase;
