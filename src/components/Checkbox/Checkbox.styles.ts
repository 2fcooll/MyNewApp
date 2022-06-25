import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BURLYWOOD,
        borderColor: Colors.MATTERHORN,
        justifyContent: 'center',
        alignItems: 'center',
        width: w(22),
        height: w(22),
        borderRadius: w(22),
        borderWidth: w(2),
    },
    title: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        color: Colors.MATTERHORN,
        fontSize: w(17),
        marginLeft: w(19),
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export { styles };