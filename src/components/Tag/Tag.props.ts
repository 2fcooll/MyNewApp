import { LayoutChangeEvent, StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

export interface Props extends ViewProps {
    content?: string,
    title?: string,
    horizontal: boolean,
    containerStyle?: StyleProp<ViewStyle> | undefined,
    onTitleLayout?: (e: LayoutChangeEvent) => void,
    titleStyle?: StyleProp<TextStyle>,
}