import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { Itag } from "../Tags/Tags.props";

export interface Props extends TouchableOpacityProps {
    containerStyle?: StyleProp<ViewStyle>,
    data: IProduct,
};

export type IProduct = {
    image: string,
    tags: Array<Itag>,
    price: string,
    time: string,
};