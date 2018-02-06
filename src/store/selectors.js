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
// Coins
// ================

const coins = (state: State) => state.coins
export const sortedCoins = createSelector(coins, coins => coins.items)

// ================
// Config
// ================

const theme = (state: State) => state.config.theme
const tokens = (state: State) => state.config.tokens

export const currentTheme = createSelector(theme, theme => theme.current)
export const currentNewsToken = createSelector(tokens, tokens => tokens.news)
