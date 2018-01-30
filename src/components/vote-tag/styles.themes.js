/* @flow */
import { StyleSheet } from 'react-native'
import type { Theme } from '../../types'

const colors = {
  white: '#F6F7F6',
  black: '#252525',
  pink: '#E2216C',
  blue: '#1900FF',
}

const black = StyleSheet.create({
  container: { backgroundColor: colors.black },
  title: { color: colors.white },
  icon: { tintColor: colors.white },
})

const white = StyleSheet.create({
  container: { backgroundColor: colors.white },
  title: { color: colors.black },
  icon: { tintColor: colors.black },
})

const pink = StyleSheet.create({
  container: { backgroundColor: colors.pink },
  title: { color: colors.white },
  icon: { tintColor: colors.white },
})

const blue = StyleSheet.create({
  container: { backgroundColor: colors.blue },
  title: { color: colors.white },
  icon: { tintColor: colors.white },
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
