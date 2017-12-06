/* @flow */
import { StyleSheet } from 'react-native'

import theme from '../../theme'

export const navigatorStyle = {
  ...theme.navigatorStyle.common,
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  loaders: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    zIndex: 999,
  },

  intro: {
    position: 'absolute',
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
