import {StyleSheet} from 'react-native';
import commonStyles from '../../../constants/commonStyles';

export default StyleSheet.create({
  ...commonStyles,
  center: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#015383',
    marginTop: 20,
  },
});
