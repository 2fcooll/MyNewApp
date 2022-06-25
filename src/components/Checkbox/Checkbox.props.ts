import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Props = {
    titleStyle?: StyleProp<TextStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    iconSize?: number,
    wrapperStyle?: StyleProp<ViewStyle>,
};