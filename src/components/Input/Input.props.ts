import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { IconNames } from "../Icon/Icon.props";

export interface Props extends TextInputProps {
    leftIconColor?: string, 
    leftIconName?: IconNames, 
    leftIconSize?: number,
    onLeftIconPress?: () => void,
    rightIconColor?: string,
    rightIconName?: IconNames,
    rightIconSize?: number,
    onRightIconPress?: () => void,
    containerStyle?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>,
};