/* @flow */
import { StyleSheet } from 'react-native'

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: '#FD3E81',
}

const black = StyleSheet.create({
  container: { backgroundColor: colors.black },
  shadow: { tintColor: colors.black },
})

const pink = StyleSheet.create({
  container: { backgroundColor: colors.pink },
  shadow: { tintColor: colors.pink },
})

const white = StyleSheet.create({
  container: { backgroundColor: colors.white },
  shadow: { tintColor: colors.white },
})

export default {
  pink,
  black,
  white,
}
