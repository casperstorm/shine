/* @flow */
import Config from 'react-native-config'

import { actionTypes } from './actions'
import type { Action } from '../types'

export const initialState = {
  url: Config.API_URL,
  items: [],
  date: null,
  greetings: [],
}

export type State = {
  url: string,
  items: Array<Object>,
  date: ?Date,
  greetings: Array<String>,
}

const news = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.NEWS_FETCH:
      return {
        ...state,
        items: action.value,
      }

    case actionTypes.NEWS_DATE:
      return {
        ...state,
        date: action.value,
      }

    case actionTypes.NEWS_GREETINGS:
      return {
        ...state,
        greetings: action.value,
      }

    default:
      return state
  }
}

export default news
