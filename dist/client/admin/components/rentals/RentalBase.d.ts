/// <reference types="react" />
type Props = {
    setCity: (value: string) => void;
    coordinates: number[];
    setMapIsOpen: (value: boolean) => void;
};
export default function RentalBase({ setCity, coordinates, setMapIsOpen, }: Props): JSX.Element;
export {};
