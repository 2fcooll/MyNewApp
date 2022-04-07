import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';
import {w} from '../../styles/scale';

const styles = StyleSheet.create({
  wrapperHorizontal: {
    height: w(34.5),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    paddingHorizontal: w(12.65),
    paddingVertical: w(8.05),
    borderRadius: w(11.5),
  },

  wrapperVertical: {
    height: w(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    paddingHorizontal: w(12.65),
    paddingVertical: w(8.05),
    borderRadius: w(11.5),
  },

  textPriceHorizontal: {
    marginLeft: w(6.9),
    fontSize: w(16.1),
    lineHeight: w(18.87),
    fontFamily: Fonts.Roboto_Bold,
  },

  textTimeVertical: {
    fontSize: w(16),
    lineHeight: w(18.75),
    fontFamily: Fonts.Roboto_Bold,
  },

  textPriceVertical: {
    fontSize: w(20),
    lineHeight: w(21.44),
    fontFamily: Fonts.Roboto_Bold,
  },
});

export {styles};
