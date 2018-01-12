import { StyleSheet } from 'react-native'

import theme from '../../theme'

export default StyleSheet.create({
  container: {
    height: 23,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },

  title: {
    ...theme.text.tag,
    marginLeft: 8,
    marginRight: 8,
  },
})
