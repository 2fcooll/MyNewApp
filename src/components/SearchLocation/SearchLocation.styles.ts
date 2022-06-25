import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: w(12),
        marginTop: w(9),
    },
    detailsContainer: {
        paddingLeft: w(38),
        paddingBottom: w(20),
    }
});

export { styles };