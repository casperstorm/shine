import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import RootScreen from './screens/root'
import NewsScreen from './screens/news'
import CoinsScreen from './screens/coins'
import SettingsScreen from './screens/settings'
import configureStore from './store/configure-store'

import './reactotron-config'

class Main {
  constructor() {
    const store = configureStore(() => {})
    this.registerScreens(store, Provider)
  }

  registerScreens(store, provider) {
    /* eslint-disable prettier/prettier */
    Navigation.registerComponent('Shine.Root', () => RootScreen, store, provider)
    Navigation.registerComponent('Shine.News', () => NewsScreen, store, provider)
    Navigation.registerComponent('Shine.Coins', () => CoinsScreen, store, provider)
    Navigation.registerComponent('Shine.Settings', () => SettingsScreen, store, provider)
    /* eslint-enable prettier/prettier */
  }

  start() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Shine.Root',
        // screen: 'Shine.News',
      },
    })
  }
}

export default Main
