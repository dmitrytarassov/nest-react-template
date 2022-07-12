import React from 'react';
import classNames from 'classnames';
import styles from './Content.module.scss';

interface IContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: IContentProps) => {
  return (
    <div className={classNames(styles.content, className)}>{children}</div>
  );
};

export default Content;
