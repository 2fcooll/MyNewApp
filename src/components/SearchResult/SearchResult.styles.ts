import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    resultSection: {
        marginTop: w(15)
    },
    firstResultSection: {
        marginTop: 0
    },
    resultTitle: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(18),
        color: Colors.MATTERHORN,
    },
    resultNote: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(13),
        color: Colors.GRAY_X11,
        marginTop: w(6),
    },
});

export { styles };