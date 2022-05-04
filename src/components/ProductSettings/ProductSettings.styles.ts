import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    settingsButton: {
        paddingHorizontal: w(25),
        paddingVertical: w(12),
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        fontFamily: Fonts.Roboto_Bold,
        fontWeight: '700',
        fontSize: w(14),
        letterSpacing: w(0.18),
        color: Colors.WHITE_SMOKE,
        marginLeft: w(16),
    },
    redText: {
        color: Colors.RED,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: w(20),
    },
    firstbButtonContainer: {
        marginLeft: 0,
    },
    settingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.DIM_GRAY,
        borderRadius: w(12),
        marginLeft: w(4),
        paddingHorizontal: w(30),
    },
});

export { styles };