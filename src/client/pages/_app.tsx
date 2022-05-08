import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '@frontend/utils/theme';
import { Container } from '@frontend/layout/Container';

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
}

function Client({ Component, pageProps }: IApp) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default Client;
