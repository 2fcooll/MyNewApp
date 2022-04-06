export type Props = {
    hasPrice: boolean
    horizontal: boolean
    data: Array<Idata>,
    price?: string,
    time?: string
}

export interface Idata {
    title?: string;
    content: string;
}