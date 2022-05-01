import { StyleProp, ViewStyle } from "react-native";

export type Props = {
    data: Array<Itag>,
    price?: string,
    time?: string,
    contentContainerStyle?: StyleProp<ViewStyle>,
};

export interface Itag {
    title?: string;
    content: string;
    backgroundColor?: string
};