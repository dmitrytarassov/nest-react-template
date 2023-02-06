import React from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
type RentalProductPageProps = {
    rental?: ICrudRental;
    promotion?: ICrudPromotion;
};
declare const RentalProductPage: React.FC<RentalProductPageProps & PageProps>;
export declare function getServerSideProps(context: any): Promise<{
    props: RentalProductPageProps & PageProps;
}>;
export default RentalProductPage;
