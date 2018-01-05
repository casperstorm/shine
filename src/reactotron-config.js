/* @flow */
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

/*  Wrapping Reactotron in __DEV__ to ensure it's not run in production.
    Reason is ES6 module loading is a compile-time thing, so it complains if we have it as a dev-dependency */

if (__DEV__) {
  Reactotron.configure({ name: 'Shine' })
    .useReactNative()
    .use(reactotronRedux())
    .connect()
}
