/* @flow */
import { Platform } from 'react-native'
import { applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools' //eslint-disable-line
import Reactotron from 'reactotron-react-native'
import thunk from 'redux-thunk'
import reducers from './reducers'
import type { State } from './types'

const persistConfig = {
  key: '@Shine:store',
  storage,
  whitelist: ['theme'],
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
  const store = Reactotron.createStore(reducer, initialState, enhancer)

  persistStore(store, {}, onStoreReady)

  return store
}
