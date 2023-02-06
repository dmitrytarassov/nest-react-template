export declare const validateEmail: ((value: any, values?: any) => string | {
    message: string;
    args: any;
})[];
export declare const validateRequired: ((value: any, values: any) => string | {
    message: string;
    args: any;
}) & {
    isRequired: boolean;
};
export declare const validatePhone: ((((value: any, values: any) => string | {
    message: string;
    args: any;
}) & {
    isRequired: boolean;
}) | ((value: any) => string))[];
