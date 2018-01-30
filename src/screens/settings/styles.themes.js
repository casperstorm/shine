/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: '#FD3E81',
  blue: '#1900FF',
}

const statusBarColors = {
  white: 'light',
  black: 'default',
}

const black = StyleSheet.create({
  container: { backgroundColor: colors.black },
  close: { tintColor: colors.white },
})

const pink = StyleSheet.create({
  container: { backgroundColor: colors.pink },
  close: { tintColor: colors.white },
})

const white = StyleSheet.create({
  container: { backgroundColor: colors.white },
  close: { tintColor: colors.black },
})

const blue = StyleSheet.create({
  container: { backgroundColor: colors.blue },
  close: { tintColor: colors.white },
})

export type ThemeTypes = 'container' | 'close'
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

function statusBar(theme: Theme) {
  switch (theme) {
    case 'black':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.white }
    case 'white':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.black }
    case 'pink':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.white }
    case 'blue':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.white }
  }
}

export default {
  statusBar,
  style,
}
