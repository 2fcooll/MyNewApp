import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

export interface Props extends ScrollViewProps {
    containerStyle?: StyleProp<ViewStyle>,
    isTabBar?: boolean,
}

export type IScrollToProps = { x?: number | undefined, y?: number | undefined, animated?: boolean | undefined };

export type IListHandles = {
    scrollTo: (props: IScrollToProps) => void,
};

