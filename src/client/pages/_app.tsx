import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '@frontend/utils/theme';

import 'swiper/css';
import './index.css';
import { Router } from 'next/router';
import ContainerWithMap from '@frontend/components/ContainerWithMap';

export interface IMetaTags {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface IHeadProps {
  metaTags?: IMetaTags;
  defaultMetaTags?: IMetaTags;
}

interface IApp extends AppProps {
  pageProps: IHeadProps & {
    children?: React.ReactNode;
  };
  router: Router;
}

function Client(props: IApp) {
  const { Component, pageProps } = props;

  // @ts-ignore
  return props.router.route.startsWith('/admin') ? (
    // @ts-ignore
    <Component {...pageProps} />
  ) : (
    <ThemeProvider theme={theme}>
      {props.router.route === '/' ? (
        <>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </>
      ) : (
        <ContainerWithMap>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ContainerWithMap>
      )}
    </ThemeProvider>
  );
}

export default Client;
