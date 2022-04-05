import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { w } from "../../../styles/scale";


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'black'
    },

    image: {
        width: '100%',
        height: w(336.95),
        borderRadius: w(10),
    }
});

export { styles };