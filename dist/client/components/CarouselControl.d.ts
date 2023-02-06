/// <reference types="react" />
interface CarouselControlProps {
    size: 'large' | 'small' | 'medium';
    direction: 'left' | 'right';
    onClick: () => void;
    revertColors?: boolean;
    color?: 'lite' | 'black';
}
declare const CarouselControl: ({ size, direction, onClick, color, }: CarouselControlProps) => JSX.Element;
export default CarouselControl;
