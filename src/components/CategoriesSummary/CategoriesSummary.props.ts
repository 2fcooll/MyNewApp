import { ReactElement, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { IconNames } from "../Icon/Icon.props";

export type Props = {
    isDetailsOpened: boolean,
    renderSummary?: () => ReactNode | ReactElement,
    hasRightIcon?: boolean,
    rightIconSize?: number,
    rightIconName?: IconNames,
    rightIconColor?: string,
    containerStyle?: StyleProp<ViewStyle>,
    hasPaddingAnimation?: boolean,
};