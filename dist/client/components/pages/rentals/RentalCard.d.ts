/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
interface RentalCardProps {
    rental: ICrudRental;
    active: boolean;
}
declare const RentalCard: ({ rental, active }: RentalCardProps) => JSX.Element;
export default RentalCard;
