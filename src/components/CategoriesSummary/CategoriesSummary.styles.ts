import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: w(14),
        paddingLeft: w(22),
        paddingRight: w(23),
        borderRadius: w(12),
    },
    title: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        color: Colors.SONIC_SILVER,
        fontSize: w(15),
        lineHeight: w(17),
    },
    buttonRightIconContainer: {
        backgroundColor: Colors.EMPEROR,
        justifyContent: 'center',
        alignItems: 'center',
        width: w(22),
        height: w(22),
        borderRadius: w(22),
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        color: Colors.BLACK,
        fontSize: w(12),
        marginRight: w(10),
    },
});

export { styles };