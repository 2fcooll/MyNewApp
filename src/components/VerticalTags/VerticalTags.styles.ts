import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: w(34),
        marginHorizontal: w(14),
    },
    moreButtonText: {
        fontFamily: Fonts.Roboto_Regular,
        fontWeight: '400',
        fontSize: w(14),
        lineHeight: w(16),
        color: Colors.OYSTER_PINK,
        marginRight: w(24),
    },
    moreButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: w(33),
        marginTop: w(16),
    },
    table: {
        flexDirection: 'row',
        marginTop: w(34),
        marginHorizontal: w(25)
    },
    listContent: {
        marginTop: w(34),
        paddingHorizontal: w(25),
    },
    tagContainer: {
        marginTop: w(13),
    },
    firstTagContainer: {
        marginTop: 0,
    },
});

export { styles };