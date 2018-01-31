/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const utilColors = {
  black: { refresh: '#FFFFFF' },
  white: { refresh: '#000000' },
  pink: { refresh: '#FFFFFF' },
  blue: { refresh: '#FFFFFF' },
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: { backgroundColor: colors[theme].primary },
    shadow: { tintColor: colors[theme].primary },
  })

export type ThemeTypes = 'container' | 'shadow'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

const statusBar = (theme: Theme) => {
  return { statusBarTextColorSchemeSingleScreen: colors[theme].statusBar }
}

function refreshControl(theme: Theme) {
  return utilColors[theme].refresh
}

export default {
  statusBar,
  refreshControl,
  style,
}
