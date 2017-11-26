import * as Types from './types'

export const initialState = {
  data: [],
  updated: null,
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case Types.NEWS_LOAD:
      return {
        ...state,
        data: action.data,
      }
    case Types.NEWS_UPDATED:
      return {
        ...state,
        updated: action.data,
      }
    default:
      return state
  }
}

export default news
