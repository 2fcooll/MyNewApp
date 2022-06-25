import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: w(20),
        marginTop: w(33),
    },
    details: {
      paddingBottom: w(25),
    },
});

export { styles };