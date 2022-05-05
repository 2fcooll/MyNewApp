import { StyleSheet } from "react-native";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: w(29),
        paddingVertical: w(29),
        backgroundColor: Colors.EMPEROR,
        borderRadius: w(23),
        marginHorizontal: w(20),
        position: 'absolute',
        bottom: COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET,
        left: 0, 
        right: 0,
    },
});

export { styles };