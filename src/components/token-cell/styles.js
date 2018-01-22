import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },

  input: {
    fontFamily: 'Rubik-Italic',
    fontSize: 13,
    height: 20,
    width: '70%',
    borderBottomWidth: 0.5,
    marginTop: 16,
    marginLeft: 8,
  },

  title: {
    backgroundColor: 'transparent',
    fontFamily: 'Rubik-Regular',
    fontSize: 17,
    marginTop: 16,
    marginRight: 8,
  },

  subtitle: {
    backgroundColor: 'transparent',
    fontFamily: 'Rubik-Light',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 16,
  },

  separator: {
    position: 'absolute',
    borderTopWidth: 0.5,
    left: 12,
    right: 12,
    bottom: 0,
  },
})
