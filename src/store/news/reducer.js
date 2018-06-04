/* @flow */
import Config from 'react-native-config'

import { actionTypes } from './actions'
import type { Action } from '../types'

export const initialState = {
  url: Config.API_URL,
  items: [],
}

export type State = {
  url: string,
  items: Array<Object>,
}

const news = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.NEWS_FETCH:
      return {
        ...state,
        items: action.value,
      }

    default:
      return state
  }
}

export default news
