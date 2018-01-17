/* @flow */
import { actionTypes } from './actions'
import type { Action } from '../types'
import type { Theme } from '../../types'

export type State = {
  current: Theme,
  all: Array<Theme>,
}

export const initialState = {
  current: 'pink',
  all: ['white', 'black', 'pink'],
}

const theme = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.THEME_CHANGE:
      return {
        ...state,
        current: action.value,
      }

    default:
      return state
  }
}

export default theme
