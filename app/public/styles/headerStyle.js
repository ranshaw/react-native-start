import { StyleSheet, Platform } from 'react-native'
import { isIphoneX } from '../../utils/screenUtil'

export default StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: isIphoneX ? 88 : 64,
    paddingTop: Platform.OS === 'android' ? 25 : isIphoneX ? 40 : 16,
    zIndex: 5000,
  },
  text: {
    fontSize: 18,
  },
  left: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: isIphoneX ? 88 : 64,
    paddingTop: Platform.OS === 'android' ? 25 : isIphoneX ? 40 : 16,
  },
  right: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: isIphoneX ? 88 : 64,
    paddingTop: Platform.OS === 'android' ? 25 : isIphoneX ? 40 : 16,
  },
  btnText: {
    fontSize: 15,
    padding: 10,
  },
  icon: {
    fontSize: 18,
    padding: 10,
  },
  titleIcon: {
    fontSize: 14,
    paddingLeft: 5,
  },
  iconTextBtn: {
    padding: 10,
  },
  iconTop: {
    fontSize: 18,
    marginBottom: 2,
  },
  btnTextBottom: {
    fontSize: 7,
  },
  input: {
    backgroundColor: '#626CB8',
    borderRadius: 4,
    height: 32.5,
    marginLeft: 15,
  },
})
