const color = {
  white: '#FFFFFF',
  black: '#000000',
  base1: '#444444'
}

const text = {
  contentHeader: {
    fontFamily: 'Rubik-Bold',
    fontSize: 30,
    lineHeight: 29,
    color: color.white
  },

  contentDescription: {
    fontFamily: 'Rubik-Light',
    fontSize: 15,
    color: color.white,
    opacity: 0.7
  },

  tag: {
    fontFamily: 'Rubik-Bold',
    fontSize: 12,
    color: color.white
  },

  vote: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    color: color.white
  },

  listBody: {
    fontFamily: 'Rubik-Regular',
    lineHeight: 22.0,
    fontSize: 17,
    color: color.white
  },

  buttonSmall: {
    fontFamily: 'Rubik-Light',
    fontSize: 16,
    color: color.white
  }
}

const navigatorStyle = {
  common: {
    statusBarTextColorSchemeSingleScreen: 'light',
    navBarHidden: true,
    screenBackgroundColor: color.black
  }
}

export default {
  color,
  text,
  navigatorStyle
}
