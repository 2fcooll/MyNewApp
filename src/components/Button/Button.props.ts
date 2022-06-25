import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { IconNames } from "../Icon/Icon.props";

export interface Props extends TouchableOpacityProps {
    iconName?: IconNames;
    iconColor?: string; 
    iconSize?: number; 
    innerText?: string;
    containerStyle?: StyleProp<ViewStyle>;
    containerStyleText?: StyleProp<TextStyle>;
    rightIconName?: IconNames,
    rightIconColor?: string,
    rightIconSize?: number,
    rightIconStrokeColor?: string,
    rightIconContainerStyle?: StyleProp<ViewStyle>,
};



