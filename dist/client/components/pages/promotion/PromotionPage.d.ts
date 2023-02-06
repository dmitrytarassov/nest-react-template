/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
interface PromotionPageProps {
    rental: ICrudRental;
    promotion: ICrudPromotion;
}
declare const PromotionPage: ({ rental, promotion }: PromotionPageProps) => JSX.Element;
export default PromotionPage;
