/* @flow */
import { actionTypes } from './actions'
import type { Action } from '../types'
import type { Theme } from '../../types'

export type State = {
  theme: {
    current: Theme,
  },
}

export const initialState = {
  theme: {
    current: 'white',
  },
}

const config = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.CONFIG_SET_THEME:
      return {
        ...state,
        theme: {
          current: action.value,
        },
      }

    default:
      return state
  }
}

export default config
