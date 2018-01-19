/* @flow */

/*
  For react-native-anmiation to transition between colors,
  they need to be written as rgba.
*/

const colors = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  pink: 'rgba(253, 62, 129, 1)',
}

export const themeWhiteBlack = {
  from: {
    backgroundColor: colors.white,
  },
  to: {
    backgroundColor: colors.black,
  },
}

export const themeWhitePink = {
  from: {
    backgroundColor: colors.white,
  },
  to: {
    backgroundColor: colors.pink,
  },
}

export const themeBlackWhite = {
  from: {
    backgroundColor: colors.black,
  },
  to: {
    backgroundColor: colors.white,
  },
}

export const themeBlackPink = {
  from: {
    backgroundColor: colors.black,
  },
  to: {
    backgroundColor: colors.pink,
  },
}

export const themePinkWhite = {
  from: {
    backgroundColor: colors.pink,
  },
  to: {
    backgroundColor: colors.white,
  },
}

export const themePinkBlack = {
  from: {
    backgroundColor: colors.pink,
  },
  to: {
    backgroundColor: colors.black,
  },
}
