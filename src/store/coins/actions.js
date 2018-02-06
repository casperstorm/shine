/* @flow */
import type { ThunkAction, Dispatch } from '../types'

export const actionTypes = {
  COINS_FETCH: 'COINS_FETCH',
}

export type ActionCoinsFetch = {
  type: 'COINS_FETCH',
  value: Array<Object>,
}

export type Action = ActionCoinsFetch

export const coinsFetch = (): ThunkAction => (dispatch: Dispatch, getState: Function) => {
  return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
    .then(response => response.json())
    .then(json => dispatch({ type: actionTypes.COINS_FETCH, value: json }))
    .catch(err => {})
}
