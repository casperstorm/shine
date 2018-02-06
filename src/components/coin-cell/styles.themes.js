/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const styles = (theme: Theme) =>
  StyleSheet.create({
    text: { color: colors[theme].text },
    separator: { borderColor: colors[theme].separator },
  })

export type ThemeTypes = 'text' | 'separator'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

export default {
  style,
}
