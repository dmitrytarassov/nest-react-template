import React from 'react';
import { ICardProps } from '@frontend/components/Card';
interface HomePageProps {
    uniques: (ICardProps & {
        id: string;
    })[];
}
declare const HomePage: React.FC<HomePageProps>;
export default HomePage;
