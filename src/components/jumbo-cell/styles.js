import { StyleSheet } from 'react-native'

import theme from '../../theme'

export default StyleSheet.create({
  container: {
    marginLeft: 16,
    marginBottom: 16,
    marginRight: 16,
  },

  logo: {
    marginLeft: 16,
    marginBottom: 15,
    marginTop: 59,
  },

  title: {
    ...theme.text.contentHeader,
    marginLeft: 12,
    marginRight: 12,
    textAlign: 'left',
    lineHeight: 38,
  },

  description: {
    ...theme.text.contentDescription,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 25,
    marginTop: 10,
  },

  separator: {
    position: 'absolute',
    borderTopWidth: 0.5,
    borderTopColor: theme.color.base1,
    opacity: 0.8,
    left: 12,
    right: 12,
    bottom: 0,
  },
})
