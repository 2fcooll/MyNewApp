import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/colors";
import { w } from "../../../styles/scale";

const styles = StyleSheet.create({
    wrapper: {
        height: w(364.95), // высота сразу с отступом для тегов
        display: "flex",
        alignItems: 'center',
        marginTop: w(40), //высота между постами
    },

    wrapperImage: {
        height: w(336.95),
        position: 'relative', // огрфничение позиции для кнопки лайка
    },

    image: {
        width: w(313.4),
        height: w(336.95),
        borderRadius: w(10),
    },
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
        borderRadius: w(51.75/2),
    }
});

export { styles };