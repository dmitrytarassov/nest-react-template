import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '@frontend/utils/theme';

import 'swiper/css';
import './index.css';
import { Router } from 'next/router';
import ContainerWithMap from '@frontend/components/ContainerWithMap';
import { City } from '@lib/types/City';
import seo from '@frontend/utils/seo';
import Head from 'next/head';
import imageUrl from '@frontend/utils/imageUrl';

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

export type PageProps = {
  statusCode?: number;
  city: City;
  seo_title?: string;
  seo_keywords?: string;
  seo_description?: string;
  seo_name?: string;
  site_url?: string;
};

export interface IApp extends AppProps {
  pageProps: IHeadProps &
    PageProps & {
      children?: React.ReactNode;
    };
  router: Router;
}

function Client(props: IApp) {
  const { Component, pageProps } = props;

  const isMainTemplate = ['/', '/insurance'].includes(props.router.route);

  const seoData = seo(props.pageProps);

  // @ts-ignore
  return props.router.route.startsWith('/admin') ? (
    // @ts-ignore
    <Component {...pageProps} />
  ) : (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="og:description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta
          name="og:url"
          content={
            props.pageProps.site_url +
            props.router.asPath.split('#')[0].split('?')[0]
          }
        />
        <meta
          name="og:image"
          content={props.pageProps.site_url + imageUrl('cover.png')}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {isMainTemplate ? (
          <>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </>
        ) : (
          <ContainerWithMap {...pageProps}>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </ContainerWithMap>
        )}
      </ThemeProvider>
    </>
  );
}

export default Client;
