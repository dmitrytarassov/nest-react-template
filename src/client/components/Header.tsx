import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getCityName } from '@frontend/utils/getCityName';
import { useCity } from '@frontend/hooks/useCity';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const selectRef = useRef();
  const { city, setCity } = useCity();
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);
  const lazyRoot = React.useRef(null);

  const close = () => setSelectIsOpen(false);

  const toggle = () => setSelectIsOpen((value) => !value);

  useEffect(() => {
    close();
  }, [city]);

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

  const isPageWithMap =
    router.pathname !== '/' &&
    router.pathname !== '/insurance' &&
    router.pathname !== '/terms';

  return (
    <div className={classNames(styles.container)}>
      <div
        className={classNames(styles.content, {
          [styles.withMap]: isPageWithMap,
        })}
      >
        <Link href="/" passHref ref={lazyRoot}>
          <a className={styles.logoLink}>
            <Image
              src="/public/logo.svg"
              className={styles.logo}
              layout="fill"
            />
          </a>
        </Link>
        <div className={styles.cityDisplay} ref={selectRef}>
          {selectIsOpen && (
            <div className={styles.citySelectContainer}>
              <div className={styles.corner} />
              <div
                className={classNames(styles.cityButton, {
                  [styles.cityButtonActive]: city === 'spb',
                })}
                onClick={() => setCity('spb')}
              >
                {getCityName('spb')}
              </div>
              <div
                className={classNames(styles.cityButton, {
                  [styles.cityButtonActive]: city === 'moscow',
                })}
                onClick={() => setCity('moscow')}
              >
                {getCityName('moscow')}
              </div>
            </div>
          )}
          <div className={styles.cityName} onClick={toggle}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
