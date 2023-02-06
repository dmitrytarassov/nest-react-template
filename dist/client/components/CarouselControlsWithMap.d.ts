import React from 'react';
interface CarouselControlsProps {
    revertColors?: boolean;
    hide?: number;
    count?: number;
    size: 'large' | 'small' | 'medium';
    color?: 'lite' | 'black';
}
declare const CarouselControlsWithMap: React.FC<CarouselControlsProps>;
export default CarouselControlsWithMap;
