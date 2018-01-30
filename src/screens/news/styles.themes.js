/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const statusBarColors = {
  white: 'light',
  black: 'default',
}

const black = StyleSheet.create({
  container: { backgroundColor: colors.black.primary },
  shadow: { tintColor: colors.black.primary },
})

const pink = StyleSheet.create({
  container: { backgroundColor: colors.pink.primary },
  shadow: { tintColor: colors.pink.primary },
})

const white = StyleSheet.create({
  container: { backgroundColor: colors.white.primary },
  shadow: { tintColor: colors.white.primary },
})

const blue = StyleSheet.create({
  container: { backgroundColor: colors.blue.primary },
  shadow: { tintColor: colors.blue.primary },
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
      return colors.white.primary
    case 'white':
      return colors.black.primary
    case 'pink':
      return colors.white.primary
    case 'blue':
      return colors.white.primary
  }
}

export default {
  statusBar,
  refreshControl,
  style,
}
