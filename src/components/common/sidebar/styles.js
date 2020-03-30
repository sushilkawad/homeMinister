import {StyleSheet} from 'react-native';
import commonStyles from '../../../constants/commonStyles';

export default StyleSheet.create({
  ...commonStyles,
  contentBackground: {
    backgroundColor: '#FFF',
    flexGrow: 1,
  },
  userImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  userIcon: {
    borderRadius: 50,
    height: 100,
    width: 100,
    fontSize: 100,
  },
  listItem: {height: 55},
  removeBorderBottom: {borderBottomWidth: 0},
  topListItem: {
    backgroundColor: '#5CBFDC',
    height: 150,
    marginLeft: 0,
    paddingLeft: 10,
  },
  blurIcon: {color: '#555'},
  flexEnd: {alignSelf: 'flex-end'},
  sideFooter: {
    position: 'absolute',
    bottom: 20,
    paddingLeft: 5,
    right: 20,
  },
  sideImage: {
    position: 'absolute',
    width: '110%',
    height: '100%',
    right: 0,
  },
  flex1: {flex: 1},
});
