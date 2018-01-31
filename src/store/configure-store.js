/* @flow */
import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
// $FlowFixMe: not getting redux-persist library
import storage from 'redux-persist/lib/storage'
// $FlowFixMe: not getting redux-persist library
import { persistStore, persistCombineReducers } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools' //eslint-disable-line
import Reactotron from 'reactotron-react-native'
import thunk from 'redux-thunk'
import reducers from './reducers'
import type { State } from './types'

const persistConfig = {
  key: '@Shine:store',
  storage,
  whitelist: ['config'],
}

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
  const reducer = persistCombineReducers(persistConfig, reducers)
  const store = __DEV__
    ? Reactotron.createStore(reducer, initialState, enhancer)
    : createStore(reducer, initialState, enhancer)

  persistStore(store, {}, onStoreReady)

  return store
}
