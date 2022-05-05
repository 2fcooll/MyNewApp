import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      backgroundColor: Colors.MATTERHORN,
  },
  productContainer: {
    marginTop: w(46),
  },
  firstProductContainer: {
    marginTop: 0,
  },
});

export { styles };