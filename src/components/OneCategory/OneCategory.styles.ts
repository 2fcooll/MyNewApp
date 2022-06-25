import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {},
    summaryContainer: {
        paddingLeft: w(35),
        paddingRight: w(26),
        paddingVertical: 0
    },
    subCategoryTitle: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        fontSize: w(14),
        color: Colors.MATTERHORN,
        marginLeft: w(21),
    },
    subCategoryCheckbox: {
        width: w(17),
        height: w(17),
        borderWidth: w(2),
        borderColor: Colors.MATTERHORN,
    },
    subCategoryCheckboxWrapper: {
        marginTop: w(17),
        marginLeft: w(38),
    }
});

export { styles };