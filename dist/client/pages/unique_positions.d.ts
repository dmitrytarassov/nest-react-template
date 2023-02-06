import React from 'react';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { PageProps } from '@frontend/pages/_app';
import { ICardProps } from '@frontend/components/Card';
type UniquePositionsPageProps = {
    rentals?: ICrudRental[];
    uniques?: (ICardProps & {
        id: string;
    })[];
};
declare const UniquePositions: React.FC<UniquePositionsPageProps & PageProps>;
export declare function getServerSideProps(context: any): Promise<{
    props: UniquePositionsPageProps & PageProps;
}>;
export default UniquePositions;
