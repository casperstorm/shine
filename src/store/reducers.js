/* @flow */
import news from './news/reducer'

import type { State as StateNews } from './news/reducer'

export default {
  news,
}

export type State = {|
  news: StateNews,
|}
