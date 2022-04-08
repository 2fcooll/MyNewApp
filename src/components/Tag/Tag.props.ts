import { StyleProp, ViewStyle } from "react-native";

export type Props = {
    content: string,
    title?: string,
    horizontal: boolean,
    containerStyle?: StyleProp<ViewStyle> | undefined,
}