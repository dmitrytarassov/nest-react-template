/// <reference types="react" />
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
interface CardTagProps {
    tag: IPromotionTag['type'];
    text: string;
    size: 'small' | 'large';
}
declare const CardTag: ({ tag, text, size }: CardTagProps) => JSX.Element;
export default CardTag;
