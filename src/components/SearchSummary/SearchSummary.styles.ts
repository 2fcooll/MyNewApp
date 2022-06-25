import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        overflow: 'hidden',
        paddingHorizontal: w(9),
        borderRadius: w(12),
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: w(15),
        paddingHorizontal: w(17),
        borderRadius: w(12),
   },
   inputLeftIconContainer: {
       width: 'auto',
       height: 'auto',
   },
   inputLeftIconFiling: { 
        opacity: 0,  
        backgroundColor: Colors.BURLYWOOD, 
        position: 'absolute', 
        borderColor: Colors.MATTERHORN,
        width: w(23),
        height: w(23),
        borderRadius: w(23),
        borderWidth: w(1.5),
    },
    input: {
        fontFamily: Fonts.Roboto_Medium,
        fontWeight: '500',
        color: Colors.BLACK,
        fontSize: w(14),
        marginLeft: w(18),
   },
   inputRightIconContainer: {
        width: w(22),
        height: w(22),
        backgroundColor: Colors.EMPEROR,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        borderRadius: w(22),
   },
   inputInnerContainer: { 
       width: '100%', 
       flex: 1 
    },
});

export { styles };