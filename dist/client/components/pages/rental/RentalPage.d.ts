/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
interface RentalPageProps {
    rental: ICrudRental;
}
declare const RentalPage: ({ rental }: RentalPageProps) => JSX.Element;
export default RentalPage;
