/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const utilColors = {
  black: { refresh: 'rgba(255, 255, 255, 1.0' },
  white: { refresh: 'rgba(0, 0, 0, 1.0' },
  pink: { refresh: 'rgba(255, 255, 255, 1.0' },
  blue: { refresh: 'rgba(255, 255, 255, 1.0' },
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
