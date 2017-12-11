/* @flow */
import Config from 'react-native-config'

import type { ThunkAction } from '../types'
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

export const itemsFetch = (): ThunkAction => (dispatch, getState) =>
  fetch(Config.API_URL)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: actionTypes.NEWS_FETCH, value: json.results })
    })

export const refreshDate = (date: Date): ActionNewsDate => ({
  type: actionTypes.NEWS_DATE,
  value: date,
})

export const greetings = (): ActionNewsGreetings => ({
  type: actionTypes.NEWS_GREETINGS,
  value: Greetings,
})
