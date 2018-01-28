/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: '#FD3E81',

  pinkSeparator: 'rgba(226, 33, 108, 1)',
  blackSeparator: 'rgba(255, 255, 255, 0.1)',
  whiteSeparator: 'rgba(0, 0, 0, 0.1)',
}

const black = StyleSheet.create({
  title: { color: colors.white },
  input: {
    color: colors.white,
    borderBottomColor: colors.blackSeparator,
  },
  separator: {
    borderColor: colors.white,
    opacity: 0.1,
  },
})

const pink = StyleSheet.create({
  title: { color: colors.white },
  input: {
    color: colors.white,
    borderBottomColor: colors.pinkSeparator,
  },
  separator: {
    borderColor: colors.pinkSeparator,
  },
})

const white = StyleSheet.create({
  title: { color: colors.black },
  input: {
    color: colors.black,
    borderBottomColor: colors.whiteSeparator,
  },
  separator: {
    borderColor: colors.black,
    opacity: 0.1,
  },
})

export type ThemeTypes = 'title' | 'separator' | 'border'
function style(theme: Theme, type: ThemeTypes) {
  switch (theme) {
    case 'black':
      return black[type]
    case 'white':
      return white[type]
    case 'pink':
      return pink[type]
  }
}

export default {
  style,
}
