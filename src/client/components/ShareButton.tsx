import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { WithTheme } from '@frontend/utils/theme';

import vk from '@frontend/assets/share/vk.svg';
import whatsapp from '@frontend/assets/share/whatsapp.svg';
import telegram from '@frontend/assets/share/telegram.svg';
import copy from '@frontend/assets/share/copy.svg';

const StyledShareButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  position: relative;
  cursor: pointer;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.buttons.alternate.default.background};
  border-radius: 12px;
  margin-left: 16px;

  :hover {
    background-color: ${({ theme }: WithTheme) =>
      theme.colors.buttons.alternate.hover.background};
  }
`;

const PopUp = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  box-shadow: 0 8px 16px rgba(156, 164, 169, 0.32);
  border-radius: 16px;
  background-color: ${({ theme }: WithTheme) =>
    theme.colors.background.default};
  padding: 16px;
  z-index: 2;
  display: flex;
  cursor: default;
  flex-wrap: wrap;
  flex-direction: column;
`;

const PopUpText = styled.div`
  width: 100%;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 16px;
`;

const PopUpContent = styled.div`
  width: 100%;
  display: flex;

  a {
    display: flex;
    img {
      width: 32px;
      height: 32px;
    }
  }

  a + a {
    margin-left: 16px;
  }
`;

interface ShareButtonProps {}

const ShareButton = ({}: ShareButtonProps) => {
  const ref = useRef();
  const [open, setOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setUrl(typeof window !== 'undefined' ? window.location.href : '');
  }, []);

  const close = (e) => {
    e?.stopPropagation();
    setOpen(false);
  };

  const copyClick = (e) => {
    e?.preventDefault();
    navigator.clipboard.writeText(url);
    close(e);
  };

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      let _target = e.target;
      while (_target) {
        // @ts-ignore
        if (ref && ref.current?.isSameNode(_target)) {
          return;
        }
        // @ts-ignore
        _target = _target.parentNode;
      }
      close(e);
    });
  }, []);

  return (
    <StyledShareButton onClick={() => setOpen((open) => !open)} ref={ref}>
      {open && (
        <PopUp onClick={(e) => e.stopPropagation()}>
          <PopUpText>Поделиться</PopUpText>
          <PopUpContent>
            <a href="#" onClick={copyClick}>
              <img src={copy.src} />
            </a>
            <a
              href={`https://vk.com/share.php?url=${url}`}
              target="_blank"
              onClick={close}
            >
              <img src={vk.src} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${url}`}
              data-action="share/whatsapp/share"
              target="_blank"
              onClick={close}
            >
              <img src={whatsapp.src} />
            </a>
            <a
              href={`https://t.me/share/url?url=${url}`}
              target="_blank"
              onClick={close}
            >
              <img src={telegram.src} />
            </a>
          </PopUpContent>
        </PopUp>
      )}

      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8004 9.3C18.1259 9.3 19.2004 8.22548 19.2004 6.9C19.2004 5.57452 18.1259 4.5 16.8004 4.5C15.4749 4.5 14.4004 5.57452 14.4004 6.9C14.4004 8.22548 15.4749 9.3 16.8004 9.3Z"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.20078 14.9001C8.52626 14.9001 9.60078 13.8256 9.60078 12.5001C9.60078 11.1746 8.52626 10.1001 7.20078 10.1001C5.8753 10.1001 4.80078 11.1746 4.80078 12.5001C4.80078 13.8256 5.8753 14.9001 7.20078 14.9001Z"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8004 20.5002C18.1259 20.5002 19.2004 19.4257 19.2004 18.1002C19.2004 16.7747 18.1259 15.7002 16.8004 15.7002C15.4749 15.7002 14.4004 16.7747 14.4004 18.1002C14.4004 19.4257 15.4749 20.5002 16.8004 20.5002Z"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.27344 13.708L14.7374 16.892"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7294 8.10791L9.27344 11.2919"
          stroke="#0F0E0E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledShareButton>
  );
};

export default ShareButton;
