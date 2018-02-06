/* @flow */
import React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import type { Theme } from '../../../src/types'
import CoinCell from '../../../src/components/coin-cell'
import ColorWrapper from '../addons/color-wrapper'

function cell(theme: Theme) {
  return (
    <CoinCell
      theme={theme}
      symbol={'BTC'}
      price={'$6812.9'}
      change1h={'5.62'}
      change24h={'-11.24'}
      change7d={'-36.8'}
      marketcap={'$114,793,699,660'}
      onPress={action('onSubtitlePress')}
    />
  )
}

storiesOf('coin-cell', module).add('default', () => (
  <ScrollView>
    <ColorWrapper theme="black">{cell('black')}</ColorWrapper>
    <ColorWrapper theme="white">{cell('white')}</ColorWrapper>
    <ColorWrapper theme="pink">{cell('pink')}</ColorWrapper>
    <ColorWrapper theme="blue">{cell('blue')}</ColorWrapper>
  </ScrollView>
))
