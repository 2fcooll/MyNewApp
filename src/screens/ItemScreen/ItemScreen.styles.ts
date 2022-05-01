import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MATTERHORN,
    },
    city: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(16),
        lineHeight: w(19),
        letterSpacing: w(0.32),
        color: Colors.WHITE_SMOKE,
    },
    phoneNumber: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(16),
        letterSpacing: w(0.64),
        color: Colors.WHITE_SMOKE,
        marginRight: w(12),
    },
    productDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: w(46),
        paddingRight: w(33),
        paddingTop: w(36),
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export { styles };