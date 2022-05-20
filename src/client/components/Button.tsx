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

  color: ${({ theme }: WithTheme) => theme.colors.buttons.default.color};
  background: ${({ theme }: WithTheme) =>
    theme.colors.buttons.default.background};

  :hover {
    color: ${({ theme }: WithTheme) => theme.colors.buttons.hover.color};
    background: ${({ theme }: WithTheme) =>
      theme.colors.buttons.hover.background};
  }

  :disabled {
    color: ${({ theme }: WithTheme) => theme.colors.buttons.disabled.color};
    background: ${({ theme }: WithTheme) =>
      theme.colors.buttons.disabled.background};
  }
`;

const StyledButton = styled.button`
  ${base}
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  ${base}
`;

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'link' | 'button';
  href?: string;
  blank?: boolean;
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
}: ButtonProps) => {
  const target = blank ? { target: '_blank' } : {};
  return type === 'button' ? (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  ) : (
    <Link href={href} passHref {...target}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default Button;
