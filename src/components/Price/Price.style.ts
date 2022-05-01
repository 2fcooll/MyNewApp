import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';
import {w} from '../../styles/scale';

const styles = StyleSheet.create({
  wrapperHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    paddingHorizontal: w(12.65),
    paddingVertical: w(8.05),
    borderRadius: w(11.5),
  },
  wrapperVertical: {
    backgroundColor: Colors.GREEN,
    borderRadius: w(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: w(32),
    paddingRight: w(25),
    paddingVertical: w(8),
    alignItems: 'center',
  },
  textPriceHorizontal: {
    marginLeft: w(6.9),
    fontSize: w(16.1),
    lineHeight: w(18.87),
    fontFamily: Fonts.Roboto_Bold,
    fontWeight: '600',
    color: Colors.EMPEROR,
  },
  textTimeVertical: {
    fontFamily: Fonts.Roboto_Bold,
    fontWeight: '700',
    fontSize: w(16),
    letterSpacing: w(0.32),
    color: Colors.EMPEROR,
  },
  textPriceVertical: {
    fontFamily: Fonts.Roboto_Bold,
    fontWeight: '700',
    fontSize: w(20),
    letterSpacing: w(0.32),
    color: Colors.EMPEROR,
  },
});

export { styles };
