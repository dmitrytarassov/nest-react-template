import React from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
type HomePageProps = {
    rentals: ICrudRental[];
};
declare const Rentals: React.FC<HomePageProps & PageProps>;
export declare function getServerSideProps(context: any): Promise<{
    props: HomePageProps & PageProps;
}>;
export default Rentals;
