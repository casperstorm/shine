/* @flow */
import news from './news/reducer'
import config from './config/reducer'

import type { State as StateNews } from './news/reducer'
import type { State as StateConfig } from './config/reducer'

export default {
  news,
  config,
}

export type State = {|
  news: StateNews,
  config: StateConfig,
|}
