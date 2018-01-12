/* @flow */
import { StyleSheet } from 'react-native'

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  pinkSeparator: '#E2216C',

  blackLogo: '#757675',
  pinkLogo: '#E2216C',
  whiteLogo: '#D4D5D4',
}

const fonts = {
  title: 'Rubik-Bold',
  light: 'Rubik-Light',
}

const black = StyleSheet.create({
  title: {
    fontFamily: fonts.title,
    fontSize: 30,
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

  logo: {
    tintColor: colors.blackLogo,
  },
})

const pink = StyleSheet.create({
  title: {
    fontFamily: fonts.title,
    fontSize: 30,
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

  logo: {
    tintColor: colors.pinkLogo,
  },
})

const white = StyleSheet.create({
  title: {
    fontFamily: fonts.title,
    fontSize: 30,
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

  logo: {
    tintColor: colors.whiteLogo,
  },
})

export default {
  pink,
  black,
  white,
}
