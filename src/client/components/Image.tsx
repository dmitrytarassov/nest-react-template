import React from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  layout?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  layout,
  className,
  width,
  height,
  alt,
}) => {
  return (
    <NextImage
      src={src}
      className={className}
      // @ts-ignore
      width={width}
      // @ts-ignore
      height={height}
      // @ts-ignore
      layout={layout}
      alt={alt}
    />
  );
};

export default Image;
