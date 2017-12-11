/* @flow */
import { createSelector } from 'reselect'
import _ from 'lodash'

const greetings = state => state.news.greetings
const items = state => state.news.items
const date = state => state.news.date

export const sortedNewsItems = createSelector(items, items =>
  _.sortBy(items, item => item.published_at).reverse()
)

export const selectRandomGreetings = createSelector(
  greetings,
  items,
  (greetings, items) => _.sample(greetings)
)

export const newsUpdatedDate = createSelector(items, date, (_, date) => date)
