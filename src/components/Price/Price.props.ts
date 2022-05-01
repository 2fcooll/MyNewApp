import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"

export interface Props extends TouchableOpacityProps {
    price?: string;
    horizontal?: boolean;
    time?: string;
    containerStyle?: StyleProp<ViewStyle>,
}