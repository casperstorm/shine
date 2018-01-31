/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const utilColors = {
  black: { logo: 'rgba(120, 123, 120, 1.0)' },
  white: { logo: 'rgba(210, 211, 210, 1.0)' },
  pink: { logo: 'rgba(186, 0, 72, 1.0)' },
  blue: { logo: 'rgba(18, 0, 184, 1.0)' },
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    title: { color: colors[theme].text },
    subtitle: { color: colors[theme].text },
    separator: { borderColor: colors[theme].separator },
    logo: { tintColor: utilColors[theme].logo },
  })

export type ThemeTypes = 'title' | 'subtitle' | 'separator' | 'logo'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

export default {
  style,
}
