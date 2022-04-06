import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { w } from "../../../styles/scale";
import { Fonts } from "../../../styles/fonts";


const styles = StyleSheet.create({
    wrapper: {
        marginTop: w(28.75),
        flex: 1,
        alignItems: 'flex-start'
    },
    wrapperTag: {
        height: w(34.5),
        paddingHorizontal: w(12.65),
        paddingVertical: w(8.05),
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(11.5),
    },
    innerText: {
        fontSize: w(16.1),
        lineHeight: w(18.87),
        color: Colors.WHITE_SMOKE,
        fontFamily: Fonts.Roboto_Bold
    }
});

export { styles };