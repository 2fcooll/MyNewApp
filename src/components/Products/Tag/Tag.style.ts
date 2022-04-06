import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { Fonts } from "../../../styles/fonts";
import { w } from "../../../styles/scale";

const styles = StyleSheet.create({
    wrapper: {
        height: w(34.5),
        paddingHorizontal: w(12.65),
        paddingVertical: w(8.05),
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(11.5),
    },
    innerTextHorizontal: {
        fontSize: w(16.1),
        lineHeight: w(18.87),
        color: Colors.WHITE_SMOKE,
        fontFamily: Fonts.Roboto_Bold
    },
    wrapperVertical: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerTextVertical: {
        fontSize: w(18),
        lineHeight: w(19),
        color: Colors.WHITE_SMOKE,
        fontFamily: Fonts.Roboto_Bold
    }
});

export { styles };