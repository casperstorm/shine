/* @flow */
import { Platform } from 'react-native'
import { combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools' //eslint-disable-line
import Reactotron from 'reactotron-react-native'
import thunk from 'redux-thunk'
import reducers from './reducers'
import type { State } from './types'

export default function configureStore(onStoreReady: () => void, initialState?: State) {
  const middleware = [thunk]
  const devToolsComposeEnhancers = composeWithDevTools({
    realtime: true,
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678,
  })
  const enhancerBase = compose(applyMiddleware(...middleware))
  const enhancer = __DEV__ ? devToolsComposeEnhancers(enhancerBase) : enhancerBase
  const reducer = combineReducers(reducers)
  const store = Reactotron.createStore(reducer, initialState, enhancer)

  return store
}
