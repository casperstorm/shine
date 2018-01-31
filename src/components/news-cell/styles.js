import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: 'transparent',
  },

  title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 17,
    lineHeight: 22.0,
    margin: 12,
    marginBottom: 16,
  },

  subtitle: {
    fontFamily: 'Rubik-Light',
    fontSize: 13,
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
