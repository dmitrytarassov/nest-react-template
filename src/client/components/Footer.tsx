import React from 'react';
import ContainerWithRadius from '@frontend/components/ContainerWithRadius';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import logo from '@frontend/assets/logo.svg';
import telegram from '@frontend/assets/telegram.svg';
import vk from '@frontend/assets/vk.svg';
import Link from 'next/link';
import Vk from '@frontend/components/logos/Vk';
import Telegram from '@frontend/components/logos/Telegram';
import classNames from 'classnames';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      flex-direction: column;
    `)}

  &.half_screen {
    margin: -64px 0 -48px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .half_screen & {
    width: 48%;
    :first-child {
      width: 100%;
      margin-bottom: 32px;
    }
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.laptop(css`
      width: 48%;
      :first-child {
        width: 100%;
        margin-bottom: 32px;
      }
    `)};

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      width: 100%;
      margin-bottom: 0 !important;
      & + & {
        margin-top: 64px;
      }
    `)};

  a {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-transform: capitalize;
    text-decoration: none;

    & + * {
      margin-top: 12px;
    }

    ${({ theme }: WithTheme) => css`
      color: ${theme.colors.links.alternate.default};

      :hover {
        color: ${theme.colors.links.alternate.hover};
      }

      :active,
      :focus,
      :focus-within {
        color: ${theme.colors.links.alternate.active};
      }
    `}
  }
`;

const Logo = styled.img`
  max-width: 172px;
`;

const Socials = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
  }

  a {
    margin: 0;
  }

  a + a {
    margin-left: 8px;
    margin-top: 0 !important;
  }
`;

interface FooterProps {
  halfScreen?: boolean;
}

const Footer = ({ halfScreen }: FooterProps) => {
  return (
    <ContainerWithRadius alternateColors>
      <Container className={classNames(halfScreen && 'half_screen')}>
        <Column>
          <Link href="/" passHref>
            <Logo src={logo.src} />
          </Link>
        </Column>
        <Column>
          <Link href={'/?'} passHref>
            Link 1
          </Link>
          <Link href={'/?'} passHref>
            Link 2
          </Link>
        </Column>
        <Column>
          <a href="mailto:kinoscope@inbox.ru">kinoscope@inbox.ru</a>
          <a href="tel:+79999222535">8 (999) 922-25-35</a>
          <Socials>
            <a href="https://vk.com">
              <Vk />
            </a>
            <a href="https://t.me">
              <Telegram />
            </a>
          </Socials>
        </Column>
      </Container>
    </ContainerWithRadius>
  );
};

export default Footer;
