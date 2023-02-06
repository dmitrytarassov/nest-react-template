/// <reference types="react" />
import { IProduct } from '@lib/interfaces/IProduct';
interface InfoProps {
    product: IProduct;
}
declare const Info: ({ product }: InfoProps) => JSX.Element;
export default Info;
