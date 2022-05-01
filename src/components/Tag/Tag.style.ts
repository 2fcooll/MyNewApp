import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    wrapperVertical: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: w(7),
        paddingLeft: w(17),
        borderRadius: w(10),
        paddingRight: w(17),
    },
    textContentVertical: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(18),
        letterSpacing: w(0.32),
        color: Colors.WHITE_SMOKE,
        marginLeft: 'auto'
    },
    textTitleVertical: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(18),
        letterSpacing: w(0.32),
        color: Colors.WHITE_SMOKE,
    },
    wrapperHorizontal: {
        flexDirection: 'row',
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(10),
        paddingHorizontal: w(13),
        paddingVertical: w(8),
    },
    textContentHorizontal: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(16),
        color: Colors.WHITE_SMOKE,
    },
    textTitleHorizontal: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(16),
        color: Colors.WHITE_SMOKE,
    }
});

export { styles };