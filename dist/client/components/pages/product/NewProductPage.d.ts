import React from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
type NewProductPageProps = {
    rental: ICrudRental;
    product: ICrudProduct;
    rentalProduct: ICrudRentalProduct;
};
declare const NewProductPage: React.FC<NewProductPageProps>;
export default NewProductPage;
