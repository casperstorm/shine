/* @flow */
import news from './news/reducer'
import coins from './coins/reducer'
import config from './config/reducer'

import type { State as StateNews } from './news/reducer'
import type { State as StateCoins } from './coins/reducer'
import type { State as StateConfig } from './config/reducer'

export default {
  news,
  config,
  coins,
}

export type State = {|
  news: StateNews,
  config: StateConfig,
  coins: StateCoins,
|}
