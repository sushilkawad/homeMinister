import {StyleSheet} from 'react-native';
import commonStyles from '../../../constants/commonStyles';

export default StyleSheet.create({
  ...commonStyles,
  flex: {
    display: 'flex',
    flex: 0,
    marginRight: 5,
  },
  menuBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#015383',
    elevation: 0,
  },
  backBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#015383',
    elevation: 0,
  },
  badge: {position: 'relative', marginRight: 10},
  top10: {top: 10},
  topM13: {top: -13},
  topM0: {top: 0},
});
