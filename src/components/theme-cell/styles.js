import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12,
  },

  title: {
    backgroundColor: 'transparent',
    fontFamily: 'Rubik-Regular',
    fontSize: 17,
    marginLeft: 4,
    marginTop: 24,
    marginBottom: 24,
  },

  theme: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  circle: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    margin: 4,
  },

  separator: {
    position: 'absolute',
    borderTopWidth: 0.5,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
