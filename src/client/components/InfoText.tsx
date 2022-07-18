import React from 'react';
import classNames from 'classnames';
import styles from './InfoText.module.scss';

interface IInfoTextProps {
  children: React.ReactNode;
  className?: string;
  onlyMobile?: boolean;
  onlyDesktop?: boolean;
}

const InfoText = ({
  children,
  className,
  onlyMobile,
  onlyDesktop,
}: IInfoTextProps) => {
  return (
    <p
      className={classNames(styles.text, className, {
        [styles.onlyDesktop]: onlyDesktop,
        [styles.onlyMobile]: onlyMobile,
      })}
    >
      {children}
    </p>
  );
};

export default InfoText;
