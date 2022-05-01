import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../constants/screenSizes";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    buttonLike: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: w(-51.75/2),
        left: w(172.5),
        width: w(51.75),
        height: w(51.75),
        backgroundColor: Colors.MATTERHORN,
        borderRadius: w(51.75)
    },
    image: {
        width: w(341),
        height: w(341),
        borderRadius: w(12),
        marginLeft: w(8),
    },
    firstImage: {
        marginLeft: 0,
    },
    contentContainer: {
        paddingHorizontal: (SCREEN_WIDTH - w(341) ) / 2,
    },
});

export { styles };