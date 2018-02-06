import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },

  symbol: {
    fontFamily: 'Rubik-Bold',
    fontSize: 17,
  },

  price: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },

  change: {
    textAlign: 'right',
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },

  row: {
    margin: 24,
  },

  separator: {
    position: 'absolute',
    borderTopWidth: 0.5,
    left: 12,
    right: 12,
    bottom: 0,
  },
})
