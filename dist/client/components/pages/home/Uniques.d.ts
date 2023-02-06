import React from 'react';
import { ICardProps } from '@frontend/components/Card';
interface UniquesProps {
    _positions: (ICardProps & {
        id: string;
    })[];
}
declare const Uniques: React.FC<UniquesProps>;
export default Uniques;
