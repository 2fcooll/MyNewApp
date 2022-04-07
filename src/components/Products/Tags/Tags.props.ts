export type Props = {
    hasPrice: boolean
    horizontal: boolean
    data: Array<Itag>,
    price?: string,
    time?: string
}

export interface Itag {
    title?: string;
    content: string;
}