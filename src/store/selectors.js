/* @flow */
import { createSelector } from 'reselect'
import _ from 'lodash'

import type { State } from './types'

// ================
// News
// ================

const greetings = (state: State) => state.news.greetings
const items = (state: State) => state.news.items
const date = (state: State) => state.news.date

export const sortedNewsItems = createSelector(items, items =>
  _.sortBy(items, item => item.published_at).reverse()
)

export const selectRandomGreetings = createSelector(
  greetings,
  items,
  (greetings, items) => _.sample(greetings)
)

export const newsUpdatedDate = createSelector(items, date, (_, date) => date)

// ================
// Config
// ================

const theme = (state: State) => state.config.theme

export const currentTheme = createSelector(theme, theme => {
  console.log(theme)
  return theme.current
})
