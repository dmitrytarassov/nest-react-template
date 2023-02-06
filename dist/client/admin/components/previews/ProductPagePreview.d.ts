/// <reference types="react" />
import { IProduct } from '@lib/interfaces/IProduct';
type Props = {
    record: IProduct;
};
export default function ProductPagePreview({ record }: Props): JSX.Element;
export {};
