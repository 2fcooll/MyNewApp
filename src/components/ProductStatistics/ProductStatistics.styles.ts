import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(12),
        paddingHorizontal: w(15),
        marginRight: 'auto',
    },
    title: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(17),
        letterSpacing: w(0.18),
        color: Colors.WHITE_SMOKE,
        marginLeft: w(9),
    },
    tRow: {
        flexDirection: 'row',
        marginLeft: w(40),
    },
    firstTRow: {
        marginLeft: 0,
    },
});

export { styles };