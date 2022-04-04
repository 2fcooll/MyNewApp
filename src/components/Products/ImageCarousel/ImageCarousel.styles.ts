import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { w } from "../../../styles/scale";

const styles = StyleSheet.create({
    Wrapper: {
        display: "flex",
        alignItems: 'center',
        position: 'relative'
    },
    Image: {
        width: w(313.4),
        height: w(336.95),
        borderRadius: w(10),
        marginTop: w(69),
    },
    ButtonLike: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: w(45),
        height: w(45),
        backgroundColor: Colors.MATTERHORN,
        borderRadius: w(45/2),
    }
});

export { styles };