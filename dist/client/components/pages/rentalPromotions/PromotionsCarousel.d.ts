/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
interface PromotionsCarouselProps {
    promotions: ICrudPromotion[];
}
declare const PromotionsCarousel: ({ promotions }: PromotionsCarouselProps) => JSX.Element;
export default PromotionsCarousel;
