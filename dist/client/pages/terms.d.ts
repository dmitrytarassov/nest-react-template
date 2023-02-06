import React from 'react';
import { PageProps } from '@frontend/pages/_app';
declare const Terms: React.FC<PageProps>;
export default Terms;
export declare function getServerSideProps(context: any): Promise<{
    props: PageProps;
}>;
