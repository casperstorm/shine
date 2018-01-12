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

  theme: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  close: {
    marginLeft: 16,
    marginTop: 32,
  },
})
