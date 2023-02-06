import React from 'react';
interface ImageProps {
    src: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    layout?: string;
    alt?: string;
}
declare const Image: React.FC<ImageProps>;
export default Image;
