import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
     container: { 
          backgroundColor: Colors.WHITE, 
          borderRadius: w(12),
     },
     results: {
          paddingHorizontal: w(38),
     },
});

export { styles };