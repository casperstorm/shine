/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'
import { colors } from '../../utils/colors'

const black = StyleSheet.create({
  container: { backgroundColor: colors.black.secondary },
  title: { color: colors.white.primary },
  icon: { tintColor: colors.white.primary },
})

const white = StyleSheet.create({
  container: { backgroundColor: colors.white.secondary },
  title: { color: colors.black.primary },
  icon: { tintColor: colors.black.primary },
})

const pink = StyleSheet.create({
  container: { backgroundColor: colors.pink.secondary },
  title: { color: colors.white.primary },
  icon: { tintColor: colors.white.primary },
})

const blue = StyleSheet.create({
  container: { backgroundColor: colors.blue.secondary },
  title: { color: colors.white.primary },
  icon: { tintColor: colors.white.primary },
})

export type ThemeTypes = 'container' | 'title' | 'icon'
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

export default {
  style,
}
