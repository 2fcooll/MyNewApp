import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: w(12.65),
        paddingVertical: w(8.05),
        borderRadius: w(11.5),
    },
    textContent: {
        fontSize: w(16.1),
        fontWeight: "600",
        color: Colors.WHITE_SMOKE,
        fontFamily: Fonts.Roboto_Bold
    },
    textTitle: {
        fontSize: w(18),
        fontWeight: "600",
        color: Colors.WHITE_SMOKE,
        fontFamily: Fonts.Roboto_Bold
    }
});

export { styles };