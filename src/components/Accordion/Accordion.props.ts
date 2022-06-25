import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type Props = {
    renderSummary: ReactNode,
    isDetailsOpened: boolean,
    setIsDetailsOpened: (isDetailsOpened: boolean) => void, 
    children: ReactNode,
    onChangeTotalVisibilityPos?: (offset: number) => void,
    containerStyle?: StyleProp<ViewStyle>,
    detailsStyle?: StyleProp<ViewStyle>,
};