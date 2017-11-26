import { StyleSheet } from 'react-native'

import theme from '../../theme'

export default StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    height: 23,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    flexDirection: 'row',
  },

  icon: {
    marginLeft: 8,
    marginTop: 1,
  },

  title: {
    ...theme.text.vote,
    marginLeft: 8,
    marginRight: 8,
  },
})
