/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const utilColors = {
  white: {
    container: 'rgba(246, 247, 246, 1.0)',
    icon: 'rgba(0, 0, 0, 1.0)',
  },
  black: {
    container: 'rgba(37, 37, 37, 1.0)',
    icon: 'rgba(255, 255, 255, 1.0)',
  },
  pink: {
    container: 'rgba(186, 0, 72, 1.0)',
    icon: 'rgba(255, 255, 255, 1.0)',
  },
  blue: {
    container: 'rgba(12, 0, 126, 1.0)',
    icon: 'rgba(255, 255, 255, 1.0)',
  },
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    title: { color: colors[theme].text },
    container: { backgroundColor: utilColors[theme].container },
    icon: { tintColor: utilColors[theme].icon },
  })

export type ThemeTypes = 'container' | 'title' | 'icon'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

export default {
  style,
}
