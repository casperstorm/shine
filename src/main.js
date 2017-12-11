import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import NewsScreen from './screens/news'
import configureStore from './store/configure-store'

class Main {
  constructor() {
    const store = configureStore(() => {})
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
