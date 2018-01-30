/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  pinkSeparator: '#E2216C',
  blueSeparator: 'rgba(255, 255, 255, 0.3)',
}

const black = StyleSheet.create({
  title: { color: colors.white },
  subtitle: { color: colors.white },
  separator: {
    borderColor: colors.white,
    opacity: 0.1,
  },
})

const white = StyleSheet.create({
  title: { color: colors.black },
  subtitle: { color: colors.black },
  separator: {
    borderColor: colors.black,
    opacity: 0.1,
  },
})

const pink = StyleSheet.create({
  title: { color: colors.white },
  subtitle: { color: colors.white },
  separator: {
    borderColor: colors.pinkSeparator,
  },
})

const blue = StyleSheet.create({
  title: { color: colors.white },
  subtitle: { color: colors.white },
  separator: {
    borderColor: colors.blueSeparator,
  },
})

export type ThemeTypes = 'title' | 'subtitle' | 'separator'
function style(theme: Theme, type: ThemeTypes) {
  switch (theme) {
    case 'black':
      return black[type]
    case 'white':
      return white[type]
    case 'pink':
      return pink[type]
    case 'blue':
      return blue[type]
  }
}

export default {
  style,
}
