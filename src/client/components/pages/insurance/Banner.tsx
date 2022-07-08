import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import Block from '@frontend/components/pages/insurance/components/Block';
import Link from 'next/link';

const StyledBlock = styled(Block)`
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(/public/insurance.png);
  background-position-x: 95%;
  background-position-y: 50%;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      background-image: url(/public/insurance-mobile.png);
      height: 560px;
    `)}
`;

const Component = styled.div`
  max-width: 535px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    color: #0f0e0e;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
    color: #6c768a;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    background: #f1f5f6;
    border-radius: 12px;
    color: #000000;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    text-decoration: none;
    transition: 0.3s ease all;

    svg {
      margin-right: 12px;
    }

    :hover {
      color: #7749d9 !important;
      transform: translateX(-20px);
      path {
        stroke: #7749d9;
      }
    }
  }
`;

const Banner = () => {
  return (
    <StyledBlock>
      <Component>
        <Link href={'/'}>
          <a>
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49953 1.5L1.99953 7M1.99953 7L6.49953 12.5M1.99953 7H11"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Вернуться
          </a>
        </Link>
        <h1>Kinoscope Insurance</h1>
        <p>
          Kinoscope Insurance это сервис современного страхования арендованного
          оборудования для съемок
        </p>
      </Component>
    </StyledBlock>
  );
};

export default Banner;
