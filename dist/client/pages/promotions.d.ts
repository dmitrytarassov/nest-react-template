/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { PageProps } from '@frontend/pages/_app';
interface PromotionsPageProps {
    promotions?: ICrudPromotion[];
}
declare const Promotions: ({ promotions, city }: PromotionsPageProps & PageProps) => JSX.Element;
export declare function getServerSideProps(context: any): Promise<{
    props: PromotionsPageProps & PageProps;
}>;
export default Promotions;
