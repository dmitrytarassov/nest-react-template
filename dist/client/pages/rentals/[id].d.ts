/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
interface RentalPageProps {
    rental?: ICrudRental;
}
declare const Rental: ({ rental }: RentalPageProps & PageProps) => JSX.Element;
export declare function getServerSideProps(context: any): Promise<{
    props: RentalPageProps & PageProps;
}>;
export default Rental;
