export type Props = {
    hasPrice: boolean
    data: Array<Itag>,
    price?: string,
    time?: string
}

export interface Itag {
    title?: string;
    content: string;
    backgroundColor?: string
}

export type IColumns = {
    left: Array<any>,
    right: Array<any>,
};