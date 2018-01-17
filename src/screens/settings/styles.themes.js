/* @flow */
import type { Theme } from '../../types'

const statusBarColors = {
  white: 'light',
  black: 'default',
}

function statusBar(theme: Theme) {
  switch (theme) {
    case 'black':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.white }
    case 'white':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.black }
    case 'pink':
      return { statusBarTextColorSchemeSingleScreen: statusBarColors.white }
  }
}

export default {
  statusBar,
}
