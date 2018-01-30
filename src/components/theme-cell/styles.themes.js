/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: '#FD3E81',
  blue: '#1900FF',

  pinkSeparator: 'rgba(226, 33, 108, 1)',
  blackSeparator: 'rgba(255, 255, 255, 0.1)',
  whiteSeparator: 'rgba(0, 0, 0, 0.1)',
  blueSeparator: 'rgba(255, 255, 255, 0.3)',
}

const black = StyleSheet.create({
  title: { color: colors.white },
  separator: {
    borderColor: colors.white,
    opacity: 0.1,
  },
})

const white = StyleSheet.create({
  title: { color: colors.black },
  separator: {
    borderColor: colors.black,
    opacity: 0.1,
  },
})

const pink = StyleSheet.create({
  title: { color: colors.white },
  separator: {
    borderColor: colors.pinkSeparator,
  },
})

const blue = StyleSheet.create({
  title: { color: colors.white },
  separator: {
    borderColor: colors.blueSeparator,
  },
})

export type ThemeTypes = 'title' | 'separator'
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
