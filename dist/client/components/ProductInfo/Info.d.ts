/// <reference types="react" />
interface InfoProps {
    description?: string;
    properties?: string;
    propertiesText?: string;
    promotion?: string;
}
declare const Info: ({ properties, propertiesText, description, promotion, }: InfoProps) => JSX.Element;
export default Info;
