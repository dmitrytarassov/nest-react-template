/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
interface RentalPromotionsProps {
    rental: ICrudRental;
    promotions: ICrudPromotion[];
}
declare const RentalPromotionsPage: ({ rental, promotions, }: RentalPromotionsProps) => JSX.Element;
export default RentalPromotionsPage;
