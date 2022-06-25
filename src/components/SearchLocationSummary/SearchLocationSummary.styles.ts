import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: w(14),
        paddingLeft: w(22),
        paddingRight: w(23),
        borderRadius: w(12),
    },
    input: {
        flex: 1,
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        color: Colors.SONIC_SILVER,
        fontSize: w(15),
        lineHeight: w(17),
    },
});

export { styles };