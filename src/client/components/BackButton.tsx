import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WithTheme } from '@frontend/utils/theme';

const StyledBackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  width: 40px;
  height: 40px;

  &:hover {
    background: #d8dde2;
    border: 1px solid #e9eaee;
    border-radius: 12px;
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
      </StyledBackButton>
    </Link>
  );
};

export default BackButton;
