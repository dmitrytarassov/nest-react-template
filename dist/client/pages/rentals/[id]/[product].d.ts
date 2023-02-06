import React from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { PageProps } from '@frontend/pages/_app';
type RentalProductPageProps = {
    rental?: ICrudRental;
    product?: ICrudProduct;
    rentalProduct?: ICrudRentalProduct;
};
declare const RentalProductPage: React.FC<RentalProductPageProps & PageProps>;
export declare function getServerSideProps(context: any): Promise<{
    props: RentalProductPageProps & PageProps;
}>;
export default RentalProductPage;
