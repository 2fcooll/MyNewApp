import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface Props extends ViewProps {
    containerStyle?: StyleProp<ViewStyle>,
};