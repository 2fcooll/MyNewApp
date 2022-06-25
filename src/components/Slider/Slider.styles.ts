import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: w(29),
        paddingHorizontal: w(13),
    },
    thumb: {
        width: w(19),
        height: w(19),
        borderRadius: w(19),
        borderWidth: w(2.5),
        borderColor: Colors.DIM_GRAY,
        backgroundColor: Colors.BURLYWOOD,
    },
    track: {
        height: w(2.5),
        backgroundColor: Colors.DIM_GRAY,
    },
    tRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: w(10),
    },
    label: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(15),
        color: Colors.DIM_GRAY,
        marginLeft: w(16),
    },
    priceUpTo: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '600',
        fontSize: w(15),
        color: Colors.MATTERHORN,
        marginRight: w(16),
    },
});

export { styles };