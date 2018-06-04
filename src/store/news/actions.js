/* @flow */
import type { ThunkAction, State, Dispatch } from '../types'

export const actionTypes = {
  NEWS_FETCH: 'NEWS_FETCH',
}

export type ActionNewsFetch = {
  type: 'NEWS_FETCH',
  value: Array<Object>,
}

export type Action = ActionNewsFetch

const endpoint = (state: State) => {
  return state.news.url
}

export const itemsFetch = (): ThunkAction => (dispatch: Dispatch, getState: Function) => {
  return fetch(endpoint(getState()))
    .then(response => response.json())
    .then(json => dispatch({ type: actionTypes.NEWS_FETCH, value: json.articles }))
    .catch(() => {
      /* API only allows to fetch every 2 seconds.
     We could add some better error handling than now. */
    })
}
