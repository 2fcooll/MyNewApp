import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    content: {},
    tagContainer: {
        margin: w(3.5),
    },
    firstRow: {
        marginLeft: 0,
    },
    row: {
        flexDirection: 'row',
        marginLeft: w(28),
    },
});

export { styles };