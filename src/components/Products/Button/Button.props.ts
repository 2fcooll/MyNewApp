import { StyleProp, TouchableOpacity } from "react-native"
import { IconNames } from "../../Icon/Icon.props";

export interface Props extends TouchableOpacity {
    iconName: IconNames,
    activeOpacity: number,
}



