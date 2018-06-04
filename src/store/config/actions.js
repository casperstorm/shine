/* @flow */
import type { Theme } from '../../types'

export const actionTypes = {
  CONFIG_SET_THEME: 'CONFIG_SET_THEME',
}

export type ActionConfigSetTheme = {
  type: 'CONFIG_SET_THEME',
  value: Theme,
}

export type Action = ActionConfigSetTheme

export const setTheme = (theme: Theme): ActionConfigSetTheme => ({
  type: actionTypes.CONFIG_SET_THEME,
  value: theme,
})
