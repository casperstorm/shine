/* @flow */
import { StyleSheet } from 'react-native'

const colors = {
  white: '#F6F7F6',
  black: '#252525',
  pink: '#E2216C',
}

const black = StyleSheet.create({
  vote: { backgroundColor: colors.black },
})

const pink = StyleSheet.create({
  vote: { backgroundColor: colors.pink },
})

const white = StyleSheet.create({
  vote: { backgroundColor: colors.white },
})

export default {
  pink,
  black,
  white,
}
