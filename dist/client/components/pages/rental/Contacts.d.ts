/// <reference types="react" />
interface ContactsProps {
    phone?: number;
    email?: string;
}
declare const Contacts: ({ phone, email }: ContactsProps) => JSX.Element;
export default Contacts;
