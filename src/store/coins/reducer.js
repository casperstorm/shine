/* @flow */
import { actionTypes } from './actions'
import type { Action } from '../types'

export const initialState = {
  items: [],
}

export type State = {
  items: Array<Object>,
}

const coins = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.COINS_FETCH:
      return {
        ...state,
        items: action.value,
      }

    default:
      return state
  }
}

export default coins
