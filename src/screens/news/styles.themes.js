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

const blue = StyleSheet.create({
  container: { backgroundColor: colors.blue },
  shadow: { tintColor: colors.blue },
})

export type ThemeTypes = 'container' | 'shadow'
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

function refreshControl(theme: Theme) {
  switch (theme) {
    case 'black':
      return colors.white
    case 'white':
      return colors.black
    case 'pink':
      return colors.white
    case 'blue':
      return colors.white
  }
}

export default {
  statusBar,
  refreshControl,
  style,
}
