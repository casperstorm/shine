/* @flow */
import type { Theme } from '../../types'

export const actionTypes = {
  THEME_CHANGE: 'THEME_CHANGE',
}

export type ActionThemeChange = {
  type: 'THEME_CHANGE',
  value: Theme,
}

export type Action = ActionThemeChange

export const change = (theme: Theme): ActionThemeChange => ({
  type: actionTypes.THEME_CHANGE,
  value: theme,
})
