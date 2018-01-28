/* @flow */
import { actionTypes } from './actions'
import type { Action } from '../types'
import type { Theme } from '../../types'

export type State = {
  tokens: {
    news: ?string,
  },
  theme: {
    current: Theme,
  },
}

export const initialState = {
  tokens: {
    news: null,
  },
  theme: {
    current: 'pink',
  },
}

const config = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.CONFIG_SET_NEWS_TOKEN:
      return {
        ...initialState,
        tokens: {
          news: action.value,
        },
      }

    case actionTypes.CONFIG_SET_THEME:
      return {
        ...initialState,
        theme: {
          current: action.value,
        },
      }

    default:
      return state
  }
}

export default config
