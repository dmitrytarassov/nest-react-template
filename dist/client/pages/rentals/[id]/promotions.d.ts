/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
interface RentalPromotionsPageProps {
    rental?: ICrudRental;
    promotions?: ICrudPromotion[];
}
declare const RentalPromotions: ({ rental, promotions, }: RentalPromotionsPageProps & PageProps) => JSX.Element;
export declare function getServerSideProps(context: any): Promise<{
    props: RentalPromotionsPageProps & PageProps;
}>;
export default RentalPromotions;
