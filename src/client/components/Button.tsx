import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import Link from 'next/link';

const base = css`
  font-family: 'Roboto Mono';
  border: 0;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  line-height: 16px;
  padding: 16px 32px;
  border-radius: 12px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.15em;
  transition: all 0.3s ease-in-out;

  color: ${({ theme }: WithTheme) => theme.colors.buttons.default.color};
  background: ${({ theme }: WithTheme) =>
    theme.colors.buttons.default.background};

  &[data-button-link] {
    :hover {
      color: ${({ theme }: WithTheme) =>
        theme.colors.buttons.hover.color}!important;
      background: ${({ theme }: WithTheme) =>
        theme.colors.buttons.hover.background}!important;
    }

    :disabled {
      color: ${({ theme }: WithTheme) => theme.colors.buttons.disabled.color};
      background: ${({ theme }: WithTheme) =>
        theme.colors.buttons.disabled.background};
    }
  }
`;

const StyledButton = styled.button`
  ${base}
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  ${base};
`;

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'link' | 'button';
  href?: string;
  blank?: boolean;
  className?: string;
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
}: ButtonProps) => {
  const target = blank ? { target: '_blank' } : {};
  return type === 'button' ? (
    <StyledButton
      className={className}
      data-button-link
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  ) : (
    <Link href={href} passHref {...target}>
      <StyledLink className={className} data-button-link {...target}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default Button;
