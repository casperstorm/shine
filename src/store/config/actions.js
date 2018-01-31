/* @flow */
import type { Theme } from '../../types'

export const actionTypes = {
  CONFIG_SET_NEWS_TOKEN: 'CONFIG_SET_NEWS_TOKEN',
  CONFIG_SET_THEME: 'CONFIG_SET_THEME',
}

export type ActionConfigSetNewsToken = {
  type: 'CONFIG_SET_NEWS_TOKEN',
  value: string | null,
}

export type ActionConfigSetTheme = {
  type: 'CONFIG_SET_THEME',
  value: Theme,
}

export type Action = ActionConfigSetNewsToken | ActionConfigSetTheme

export const setNewsToken = (token: string | null): ActionConfigSetNewsToken => ({
  type: actionTypes.CONFIG_SET_NEWS_TOKEN,
  value: token,
})

export const setTheme = (theme: Theme): ActionConfigSetTheme => ({
  type: actionTypes.CONFIG_SET_THEME,
  value: theme,
})
