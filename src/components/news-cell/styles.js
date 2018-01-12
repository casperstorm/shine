import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: 'transparent',
  },

  title: {
    margin: 12,
    marginBottom: 16,
  },

  subtitle: {
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 12,
  },

  tags: {
    flexDirection: 'row',
    marginLeft: 12,
    marginBottom: 12,
  },

  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
  },

  separator: {
    position: 'absolute',
    borderTopWidth: 0.5,
    left: 12,
    right: 12,
    bottom: 0,
  },
})
