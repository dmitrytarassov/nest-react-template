import { NextPage } from 'next';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { PageProps } from '@frontend/pages/_app';
import { ICardProps } from '@frontend/components/Card';
type HomePageProps = {
    promotions: ICrudPromotion[];
    uniques: (ICardProps & {
        id: string;
    })[];
};
declare const Home: NextPage;
export declare function getServerSideProps(context: any): Promise<{
    props: HomePageProps & PageProps;
}>;
export default Home;
