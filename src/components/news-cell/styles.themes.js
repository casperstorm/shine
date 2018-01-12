/* @flow */
import { StyleSheet } from 'react-native'

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pinkSeparator: '#E2216C',
}

const fonts = {
  regular: 'Rubik-Regular',
  light: 'Rubik-Light',
}

const black = StyleSheet.create({
  title: {
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 22.0,
    color: colors.white,
  },

  subtitle: {
    fontFamily: fonts.light,
    fontSize: 15,
    color: colors.white,
  },

  separator: {
    borderColor: colors.white,
    opacity: 0.1,
  },
})

const pink = StyleSheet.create({
  title: {
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 22.0,
    color: colors.white,
  },

  subtitle: {
    fontFamily: fonts.light,
    fontSize: 15,
    color: colors.white,
  },

  separator: {
    borderColor: colors.pinkSeparator,
  },
})

const white = StyleSheet.create({
  title: {
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 22.0,
    color: colors.black,
  },

  subtitle: {
    fontFamily: fonts.light,
    fontSize: 15,
    color: colors.black,
  },

  separator: {
    borderColor: colors.black,
    opacity: 0.1,
  },
})

export default {
  pink,
  black,
  white,
}
