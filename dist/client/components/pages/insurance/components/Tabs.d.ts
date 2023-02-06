/// <reference types="react" />
interface TabsProps {
    options: {
        name: string;
        value: string;
    }[];
    active: string;
    onChange: (value: string) => void;
    className?: string;
}
declare const Tabs: ({ options, active, onChange, className }: TabsProps) => JSX.Element;
export default Tabs;
