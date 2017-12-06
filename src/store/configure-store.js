/* @flow */
import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import type { State } from './types'

export default function configureStore(onStoreReady: () => void, initialState?: State) {
  console.log(initialState)

  const middleware = applyMiddleware(thunk)
  const reducer = combineReducers(reducers)
  const store = createStore(reducer, initialState, middleware)

  return store
}
