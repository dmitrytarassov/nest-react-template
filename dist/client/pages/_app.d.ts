import React from 'react';
import { AppProps } from 'next/app';
import 'swiper/css';
import './theme.css';
import './index.css';
import { Router } from 'next/router';
import { City } from '@lib/types/City';
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
    pageProps: IHeadProps & PageProps & {
        children?: React.ReactNode;
    };
    router: Router;
}
declare function Client(props: IApp): JSX.Element;
export default Client;
