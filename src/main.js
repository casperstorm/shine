import { Navigation } from 'react-native-navigation'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import NewsScreen from './screens/news'

import * as reducers from './store/reducers'

class Main {
  constructor() {
    const middleware = applyMiddleware(thunk)
    const reducer = combineReducers(reducers)
    const store = createStore(reducer, middleware)

    this.registerScreens(store, Provider)
  }

  registerScreens(store, provider) {
    /* eslint-disable prettier/prettier */
    Navigation.registerComponent('Shine.News', () => NewsScreen, store, provider)
    /* eslint-enable prettier/prettier */
  }

  start() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Shine.News',
      },
    })
  }
}

export default Main
