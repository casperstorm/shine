/* @flow */
import { createSelector } from 'reselect'
import _ from 'lodash'

import type { State } from './types'

// ================
// News
// ================

const items = (state: State) => state.news.items

export const sortedNewsItems = createSelector(items, items =>
  _.sortBy(items, item => item.publishedAt).reverse()
)

// ================
// Config
// ================

const theme = (state: State) => state.config.theme

export const currentTheme = createSelector(theme, theme => theme.current)
