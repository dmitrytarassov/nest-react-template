import React from 'react';
import classNames from 'classnames';
import styles from './InfoText.module.scss';

interface IInfoTextProps {
  children: React.ReactNode;
  className?: string;
}

const InfoText = ({ children, className }: IInfoTextProps) => {
  return <p className={classNames(styles.text, className)}>{children}</p>;
};

export default InfoText;
