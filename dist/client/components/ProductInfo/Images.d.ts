/// <reference types="react" />
interface ImagesProps {
    logo: string;
    images: string[];
    current: string;
    onChange: (value: string) => void;
}
declare const Images: ({ logo, images, current, onChange }: ImagesProps) => JSX.Element;
export default Images;
