import React from 'react';
import Link from 'next/link';
import styles from './BackButton.module.scss';

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  return (
    <Link href={to} passHref>
      <a className={styles.button}>
        <svg
          width="38"
          height="38"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4995 14.5L15.9995 20M15.9995 20L20.4995 25.5M15.9995 20H25"
            stroke="#0F0E0E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </Link>
  );
};

export default BackButton;
