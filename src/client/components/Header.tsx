import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@frontend/layout/Container';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import Content from '@frontend/layout/Content';
import Link from 'next/link';
import logo from '@frontend/assets/logo.svg';
import { getCityName } from '@frontend/utils/getCityName';
import { useCity } from '@frontend/hooks/useCity';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }: WithTheme) => theme.colors.background.header};
  min-height: unset;
  height: 72px;
  color: ${({ theme }: WithTheme) => theme.colors.text.alternate};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 10;
  overflow: visible;

  & + div {
    padding-top: 72px;
  }
`;

const StyledContent = styled(Content)`
  padding: 0;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  max-width: 1212px;

  &.withMap {
    max-width: unset;
  }
`;

const CityDisplay = styled.div`
  background: rgba(241, 245, 246, 0.1);
  border-radius: 16px;
  height: 32px;
  position: relative;
`;

const CityName = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  line-height: 30px;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(
      css`
        font-size: 14px;
      `,
    )}

  svg {
    margin-right: 12px;
  }
`;

const CitySelectContainer = styled.div`
  position: absolute;
  right: 0;
  top: 64px;
  padding: 8px;
  background-color: ${({ theme }: WithTheme) => theme.colors.background.header};
  border-radius: 8px;
  z-index: 2;
  width: 212px;
  display: flex;
  flex-direction: column;

  .corner {
    top: -10px;
    right: 20px;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 2;
    transform: scaleX(-0.6) scaleY(0.9);

    :after {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: ${({ theme }: WithTheme) =>
        theme.colors.background.header};
      content: '';
      border-top-left-radius: 8px;
      transform: rotate(45deg);
    }
  }
`;

const Logo = styled.img`
  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(
      css`
        width: 148px;
      `,
    )}
`;

interface CityButtonProps {
  active: boolean;
}

const CityButton = styled.div<CityButtonProps>`
  ${({ theme, active }: WithThemeAndProps<CityButtonProps>) => css`
    color: ${theme.colors.links.alternate.default};
    background-color: ${active && theme.colors.options.active};

    :hover {
      background-color: ${theme.colors.options.active};
    }
  `}

  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  padding: 8px;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  cursor: pointer;

  & + & {
    margin-top: 4px;
  }
`;

const Header = () => {
  const router = useRouter();
  const selectRef = useRef();
  const { city, setCity } = useCity();
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(true);

  const close = () => setSelectIsOpen(false);

  const toggle = () => setSelectIsOpen((value) => !value);

  useEffect(() => {
    close();
  }, [city]);

  console.log('==HEADER', city);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      let _target = e.target;
      while (_target) {
        // @ts-ignore
        if (selectRef && selectRef.current?.isSameNode(_target)) {
          return;
        }
        // @ts-ignore
        _target = _target.parentNode;
      }
      close();
    });
  }, []);

  const isPageWithMap = router.pathname !== '/';

  return (
    <StyledContainer>
      <StyledContent className={classNames({ withMap: isPageWithMap })}>
        <Link href="/" passHref>
          <Logo src={logo.src} />
        </Link>
        <CityDisplay ref={selectRef}>
          {selectIsOpen && (
            <CitySelectContainer>
              <div className="corner" />
              <CityButton
                active={city === 'spb'}
                onClick={() => setCity('spb')}
              >
                {getCityName('spb')}
              </CityButton>
              <CityButton
                active={city === 'moscow'}
                onClick={() => setCity('moscow')}
              >
                {getCityName('moscow')}
              </CityButton>
            </CitySelectContainer>
          )}
          <CityName onClick={toggle}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6673 6.90909C12.6673 10.7273 8.00065 14 8.00065 14C8.00065 14 3.33398 10.7273 3.33398 6.90909C3.33398 5.60712 3.82565 4.35847 4.70082 3.43784C5.57599 2.51721 6.76297 2 8.00065 2C9.23833 2 10.4253 2.51721 11.3005 3.43784C12.1757 4.35847 12.6673 5.60712 12.6673 6.90909Z"
                stroke="#13EC50"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99935 7.99992C8.73573 7.99992 9.33268 7.40296 9.33268 6.66659C9.33268 5.93021 8.73573 5.33325 7.99935 5.33325C7.26297 5.33325 6.66602 5.93021 6.66602 6.66659C6.66602 7.40296 7.26297 7.99992 7.99935 7.99992Z"
                stroke="#13EC50"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {getCityName(city)}
          </CityName>
        </CityDisplay>
      </StyledContent>
    </StyledContainer>
  );
};

export default Header;
