import {StyleSheet} from 'react-native';
import commonStyles from '../../../constants/commonStyles';

export default StyleSheet.create({
  ...commonStyles,
  buyNowButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  thumbnail: {height: 140, width: 140, borderRadius: 5, margin: 5},
  boldText: {fontWeight: '400', fontSize: 14},
});
