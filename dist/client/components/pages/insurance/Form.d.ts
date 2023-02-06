/// <reference types="react" />
declare const Form: ({ onSend, canSend, }: {
    onSend: () => void;
    canSend: boolean;
}) => JSX.Element;
export default Form;
