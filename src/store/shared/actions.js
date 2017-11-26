import _ from 'lodash'

import * as Types from './types'

const messages = [
  `Latest news\nfrom Cryptoland 🚀`,
  `Enjoy todays\ncrypto news 🙂`,
  `Lets hope it is\na green day today!`,
  `Greetings, here\nis the latest news`,
  `Maybe one day\nyou'll get a lambo 🚗`,
  `Today could\nbe moon day 🌙`,
  `You are looking\ngood today 😁`,
  `Hello friend!\nHere is the news 📰`,
  `Where we're going\nwe dont need fiat 🚀`,
  `Today is a\ngood day to HODL 🙌`,
]

const welcome = () => (dispatch, getState) =>
  dispatch({ type: Types.WELCOME_MESSAGE, data: _.sample(messages) })

export { welcome }
