import { StyleProp, TextStyle, ViewStyle } from "react-native"

export type Props = {
    innerText: string,
    containerStyleWrapper: StyleProp<ViewStyle>
    containerStyleText: StyleProp<TextStyle>
}