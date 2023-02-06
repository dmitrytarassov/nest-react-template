/// <reference types="react" />
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
interface TagProps {
    tag: IPromotionTag;
    text: string;
}
declare const CardTag: ({ tag, text }: TagProps) => JSX.Element;
export default CardTag;
