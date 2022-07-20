import React from 'react';
import styles from './Service.module.scss';

interface ServiceProps {
  children: React.ReactNode;
}

const Service = ({ children }: ServiceProps) => {
  return (
    <div className={styles.service}>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.5" r="8" fill="#22C56D" />
      </svg>
      {children}
    </div>
  );
};

export default Service;
