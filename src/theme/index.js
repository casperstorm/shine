/* @flow */
import type { Theme } from '../store/types'
export function configureStore(theme: Theme) {}

const color = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  pink: 'rgba(253, 62, 129, 1)',
  base1: 'rgba(68, 68, 68, 1)',
}

const text = {
  tag: {
    fontFamily: 'Rubik-Bold',
    fontSize: 12,
    color: color.white,
  },
  buttonSmall: {
    fontFamily: 'Rubik-Light',
    fontSize: 16,
    color: color.white,
  },
}

const navigatorStyle = {
  common: {
    statusBarTextColorSchemeSingleScreen: 'light',
    navBarHidden: true,
  },
}

export default {
  color,
  text,
  navigatorStyle,
}
