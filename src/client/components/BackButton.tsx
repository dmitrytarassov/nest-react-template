import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WithTheme } from '@frontend/utils/theme';

const StyledBackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const BackgroundPath = styled.path`
  fill: ${({ theme }: WithTheme) =>
    theme.colors.buttons.additional.default.background};

  :hover {
    fill: ${({ theme }: WithTheme) =>
      theme.colors.buttons.additional.hover.background};
  }
`;

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  return (
    <Link href={to} passHref>
      <StyledBackButton>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <BackgroundPath d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" />
          <path
            d="M20.4995 14.5L15.9995 20M15.9995 20L20.4995 25.5M15.9995 20H25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </StyledBackButton>
    </Link>
  );
};

export default BackButton;
