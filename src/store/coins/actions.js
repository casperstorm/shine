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
  console.log('hello world')
  return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(json => {
      console.log(json)
      return json
    })
    .catch(err => {
      console.log(`error: ${err}`)
    })
}
