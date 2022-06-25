import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    line: {
        width: w(110),
        height: w(3),
        backgroundColor: Colors.OLD_SILVER,
        alignSelf: 'center',
        marginTop: w(17),
        marginBottom: w(24),
    },
    sheet: {
        marginHorizontal: w(20),
    },
    sheetHandle: {
        height: 0,
    },
    sheetBackground: {
        borderRadius: w(20),
        backgroundColor: Colors.WHITE_SMOKE,
    },
    content: {
        paddingHorizontal: w(18),
        paddingBottom: w(20),
    },
});

export { styles };