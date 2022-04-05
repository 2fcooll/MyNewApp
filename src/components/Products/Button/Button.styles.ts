import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { w } from "../../../styles/scale";

const styles = StyleSheet.create({
    buttonLike: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: w(-51.75/2),
        left: w(150),
        width: w(51.75),
        height: w(51.75),
        backgroundColor: Colors.MATTERHORN,
        borderRadius: w(51.75)
    }
});

export { styles };