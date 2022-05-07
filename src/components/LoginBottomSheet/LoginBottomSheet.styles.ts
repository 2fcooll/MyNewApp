import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    input: {
        height: w(57),
        backgroundColor: Colors.WHITE_SMOKE,
        borderWidth: w(1),
        borderRadius: w(10),
        borderColor: Colors.OLD_SILVER,
        width: '100%',
        paddingHorizontal: w(25),
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(14),
        letterSpacing: w(0.32),
    },
    content: {
        paddingHorizontal: w(22),
    },
    line: {
        width: w(110),
        height: w(3),
        backgroundColor: Colors.OLD_SILVER,
        alignSelf: 'center',
        marginTop: w(17),
        marginBottom: w(24),
    },
    form: {
        marginTop: w(11),
        backgroundColor: Colors.WHITE_SMOKE,
        borderWidth: w(1),
        borderColor: Colors.OLD_SILVER,
        borderRadius: w(10),
        paddingHorizontal: w(10),
        paddingBottom: w(12),
        paddingTop: w(16),
    },
    resetPasswordButton: {
        marginBottom: w(15),
        alignSelf: 'flex-end',
        marginRight: w(14),
    },
    resetPasswordText: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(13),
        letterSpacing: w(0.32),
        color: Colors.MATTERHORN,
    },
    sheet: {
        marginHorizontal: w(23),
    },
    sheetHandle: {
        height: 0,
    },
    sheetBackground: {
        borderRadius: w(20),
    },
});

export { styles };