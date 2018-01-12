/* @flow */
import news from './news/reducer'
import theme from './theme/reducer'

import type { State as StateNews } from './news/reducer'
import type { State as StateTheme } from './theme/reducer'

export default {
  news,
  theme,
}

export type State = {|
  news: StateNews,
  theme: StateTheme,
|}
