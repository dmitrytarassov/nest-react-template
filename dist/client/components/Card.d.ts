/// <reference types="react" />
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
export interface ICardProps {
    title: string;
    description?: string;
    image: string;
    link: string;
    price?: number;
    discountPrice?: number;
    tag?: IPromotionTag;
    date?: string;
    promotionText?: string;
    rentalLogo?: string;
    size?: 'small' | 'large';
}
declare const Card: ({ size, link, image, title, description, price, discountPrice, tag, date, promotionText, rentalLogo, }: ICardProps) => JSX.Element;
export default Card;
