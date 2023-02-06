import React from 'react';
import { PageProps } from '@frontend/pages/_app';
interface InsuranceProps {
    canSend: boolean;
}
declare const Insurance: React.FC<PageProps & InsuranceProps>;
export default Insurance;
export declare function getServerSideProps(context: any): Promise<{
    props: PageProps & InsuranceProps;
}>;
