import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

export interface Props extends ScrollViewProps {
    containerStyle?: StyleProp<ViewStyle>,
    isTabBar?: boolean,
    yPos?: number,
    insideBottomSheet?: boolean,
}