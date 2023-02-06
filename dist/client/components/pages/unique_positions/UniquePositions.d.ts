/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICardProps } from '@frontend/components/Card';
interface UniquePositionsPageProps {
    rentals: ICrudRental[];
    uniques: (ICardProps & {
        id: string;
    })[];
}
declare const UniquePositionsPage: ({ rentals, uniques, }: UniquePositionsPageProps) => JSX.Element;
export default UniquePositionsPage;
