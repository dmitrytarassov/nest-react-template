import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ShareButton.module.scss';
import classNames from 'classnames';
import Image from '@frontend/components/Image';

interface ShareButtonProps {
  alone: boolean;
}

const ShareButton = ({ alone }: ShareButtonProps) => {
  const ref = useRef();
  const popupRef = useRef();
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

    toast.success('🚀 Ссылка скопирована в буфер обмена.', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

  useEffect(() => {
    const el: HTMLDivElement = popupRef.current;
    if (el) {
      const position = el.getBoundingClientRect();
      if (position.x < 0) {
        el.style.marginRight = `${position.x - 16}px`;
      }
    }
  }, [open]);

  return (
    <>
      <div
        className={classNames(styles.button, { [styles.alone]: alone })}
        onClick={() => setOpen((open) => !open)}
        ref={ref}
      >
        {open && (
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
            ref={popupRef}
          >
            <div className={styles.text}>Поделиться</div>
            <div className={styles.content}>
              <a href="#" onClick={copyClick}>
                <Image width="32" height="32" src="/public/share/copy.svg" />
              </a>
              <a
                href={`https://vk.com/share.php?url=${url}`}
                target="_blank"
                onClick={close}
              >
                <Image width="32" height="32" src="/public/share/vk.svg" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${url}`}
                data-action="share/whatsapp/share"
                target="_blank"
                onClick={close}
              >
                <Image
                  width="32"
                  height="32"
                  src="/public/share/whatsapp.svg"
                />
              </a>
              <a
                href={`https://t.me/share/url?url=${url}`}
                target="_blank"
                onClick={close}
              >
                <Image
                  width="32"
                  height="32"
                  src="/public/share/telegram.svg"
                />
              </a>
            </div>
          </div>
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
      </div>
      <div className={styles.toast}>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </>
  );
};

export default ShareButton;
