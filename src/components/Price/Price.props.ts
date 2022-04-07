import { TouchableOpacityProps } from "react-native"

export interface Props extends TouchableOpacityProps {
    price?: string;
    horizontal?: boolean;
    time?: string;
}