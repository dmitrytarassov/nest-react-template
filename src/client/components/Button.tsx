import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'link' | 'button';
  href?: string;
  blank?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'whiteOrange' | 'grayViolet';
}

const Button = ({
  onClick = () => {
    /* do nothing */
  },
  children,
  disabled,
  type = 'button',
  href = '',
  blank = false,
  className,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) => {
  const target = blank ? { target: '_blank' } : {};

  return type === 'button' ? (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <Link href={href} passHref {...target}>
      <a
        className={classNames(
          styles.button,
          styles[variant],
          styles[size],
          styles.aButton,
          className,
        )}
        data-button-link
        {...target}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
