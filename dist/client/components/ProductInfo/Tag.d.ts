/// <reference types="react" />
interface TagProps {
    tag: 'new' | 'sale' | 'date';
    text: string;
}
declare const Tag: ({ tag, text }: TagProps) => JSX.Element;
export default Tag;
