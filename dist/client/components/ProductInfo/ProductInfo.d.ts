/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
export type ProductLike = {
    photos: string[];
    promotion?: {
        tag: string;
        tagText: string;
    };
    promotionText?: string;
    date?: string;
    price?: string;
    discountPrice?: string;
    externalUrl?: string;
    description?: string;
    properties?: string;
    propertiesText?: string;
};
type Props = {
    product: ProductLike;
    rental: ICrudRental;
};
export default function ProductInfo({ product, rental }: Props): JSX.Element;
export {};
