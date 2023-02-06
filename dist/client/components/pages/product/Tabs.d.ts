/// <reference types="react" />
interface TabsProps {
    options: {
        name: string;
        value: string;
    }[];
    active: string;
    onChange: (value: string) => void;
}
declare const Tabs: ({ options, active, onChange }: TabsProps) => JSX.Element;
export default Tabs;
