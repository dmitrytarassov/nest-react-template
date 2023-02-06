interface Props {
    statusCode?: number;
}
export interface PageProps<T> {
    props: T & Props;
}
export {};
