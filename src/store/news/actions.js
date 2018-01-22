/* @flow */
import type { ThunkAction, State, Dispatch } from '../types'
import { Greetings } from '../../utils/greetings'

export const actionTypes = {
  NEWS_FETCH: 'NEWS_FETCH',
  NEWS_DATE: 'NEWS_DATE',
  NEWS_GREETINGS: 'NEWS_GREETINGS',
}

export type ActionNewsFetch = {
  type: 'NEWS_FETCH',
  value: Array<Object>,
}

export type ActionNewsGreetings = {
  type: 'NEWS_GREETINGS',
  value: Array<string>,
}

export type ActionNewsDate = {
  type: 'NEWS_DATE',
  value: Date,
}

export type Action = ActionNewsGreetings | ActionNewsDate | ActionNewsFetch

const endpoint = (state: State) => {
  const base = state.news.url
  const token = state.config.tokens.news
  return base + '?auth_token=' + token
}

export const itemsFetch = (): ThunkAction => (dispatch: Dispatch, getState: Function) => {
  return fetch(endpoint(getState()))
    .then(response => response.json())
    .then(json => dispatch({ type: actionTypes.NEWS_FETCH, value: json.results }))
    .catch(() => {
      /* API only allows to fetch every 2 seconds.
     We could add some better error handling than now. */
    })
}

export const refreshDate = (date: Date): ActionNewsDate => ({
  type: actionTypes.NEWS_DATE,
  value: date,
})

export const greetings = (): ActionNewsGreetings => ({
  type: actionTypes.NEWS_GREETINGS,
  value: Greetings,
})
