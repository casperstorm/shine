/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const styles = (theme: Theme) =>
  StyleSheet.create({
    title: { color: colors[theme].text },
    separator: { borderColor: colors[theme].separator },
  })

export type ThemeTypes = 'title' | 'separator'
const style = (theme: Theme, type: ThemeTypes) => styles(theme)[type]

export default {
  style,
}
