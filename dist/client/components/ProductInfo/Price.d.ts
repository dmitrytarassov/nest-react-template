/// <reference types="react" />
interface PriceProps {
    price: number;
    discountPrice?: number;
    link?: string;
}
declare const Price: ({ price, discountPrice, link }: PriceProps) => JSX.Element;
export default Price;
