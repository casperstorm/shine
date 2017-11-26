import * as Types from './types'

export const initialState = {
  welcome: null,
}

const shared = (state = initialState, action) => {
  switch (action.type) {
    case Types.WELCOME_MESSAGE:
      return {
        ...state,
        welcome: action.data,
      }

    default:
      return state
  }
}

export default shared
