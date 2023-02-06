/// <reference types="react" />
import { ICardProps } from '@frontend/components/Card';
interface UniquesProps {
    positions: (ICardProps & {
        id: string;
    })[];
}
declare const Positions: ({ positions }: UniquesProps) => JSX.Element;
export default Positions;
