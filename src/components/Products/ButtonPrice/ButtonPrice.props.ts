import { TouchableOpacityProps } from "react-native"
import { IconNames } from "../../Icon/Icon.props";

export interface Props extends TouchableOpacityProps {
    price: string;
    horizontal?: boolean;
    time?: string;
    iconName?: IconNames;
    iconColor?: string;
    iconSize?: number;
}