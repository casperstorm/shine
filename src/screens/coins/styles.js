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
})
