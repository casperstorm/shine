/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const black = StyleSheet.create({
  title: { color: colors.white.primary },
  subtitle: { color: colors.white.primary },
  input: {
    color: colors.white.primary,
    borderBottomColor: colors.black.secondary,
  },
  separator: { borderColor: colors.black.secondary },
})

const white = StyleSheet.create({
  title: { color: colors.black.primary },
  subtitle: { color: colors.black.primary },
  input: {
    color: colors.black.primary,
    borderBottomColor: colors.white.secondary,
  },
  separator: { borderColor: colors.white.secondary },
})

const pink = StyleSheet.create({
  title: { color: colors.white.primary },
  subtitle: { color: colors.white.primary },
  input: {
    color: colors.white.primary,
    borderBottomColor: colors.pink.secondary,
  },
  separator: { borderColor: colors.pink.secondary },
})

const blue = StyleSheet.create({
  title: { color: colors.white.primary },
  subtitle: { color: colors.white.primary },
  input: {
    color: colors.white.primary,
    borderBottomColor: colors.blue.secondary,
  },
  separator: { borderColor: colors.blue.secondary },
})

export type ThemeTypes = 'title' | 'subtitle' | 'input' | 'separator'
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
