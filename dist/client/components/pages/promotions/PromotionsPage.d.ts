/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
interface PromotionsProps {
    promotions: ICrudPromotion[];
}
declare const RentalPromotionsPage: ({ promotions }: PromotionsProps) => JSX.Element;
export default RentalPromotionsPage;
