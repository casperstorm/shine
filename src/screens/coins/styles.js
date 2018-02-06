/* @flow */
import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window')

export const navigatorStyle = {
  navBarHidden: true,
}

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },

  list: {
    marginTop: 16,
  },

  shadowContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    zIndex: 999,
  },
})
