/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const utilColors = {
  white: { close: '#000000' },
  black: { close: '#FFFFFF' },
  pink: { close: '#FFFFFF' },
  blue: { close: '#FFFFFF' },
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: { backgroundColor: colors[theme].primary },
    close: { tintColor: utilColors[theme].close },
  })

export type ThemeTypes = 'container' | 'close'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

const statusBar = (theme: Theme) => {
  return { statusBarTextColorSchemeSingleScreen: colors[theme].statusBar }
}

export default {
  statusBar,
  style,
}
