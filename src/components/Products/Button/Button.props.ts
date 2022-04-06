import { StyleProp, TouchableOpacity, ViewStyle } from "react-native"
import { IconNames } from "../../Icon/Icon.props";

export interface Props extends TouchableOpacity {
    iconName: IconNames,
    iconColor: string,
    iconSize: number
    activeOpacity: number,
    containerStyle?: StyleProp<ViewStyle>
}



