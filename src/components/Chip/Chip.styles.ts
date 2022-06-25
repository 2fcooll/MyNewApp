import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(222, 185, 142, 0.46)',
        borderRadius: w(20),
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: w(8),
        paddingLeft: w(15),
        paddingRight: w(11),
        marginRight: 'auto'
    },
    title: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(16),
        color: Colors.EMPEROR,
    },
    closeButton: {
        width: w(28),
        height: w(28),
        backgroundColor: Colors.EMPEROR,
        borderRadius: w(19),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: w(10),
    },
});

export { styles };