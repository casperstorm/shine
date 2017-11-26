import { StyleSheet } from 'react-native'

import theme from '../../theme'

export default StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: 'transparent',
  },

  title: {
    ...theme.text.listBody,
    margin: 12,
    marginBottom: 16,
  },

  tags: {
    flexDirection: 'row',
    marginLeft: 12,
    marginBottom: 12,
  },

  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    ...theme.text.contentDescription,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 12,
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
