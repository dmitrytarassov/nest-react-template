import React from 'react';
interface CarouselControlsProps {
    revertColors?: boolean;
    hide?: number;
    count?: number;
    maxCount?: number;
    size?: 'large' | 'small';
    color?: 'black' | 'lite';
}
declare const CarouselControls: React.FC<CarouselControlsProps>;
export default CarouselControls;
