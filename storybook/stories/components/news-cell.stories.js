/* @flow */
import React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import type { Theme } from '../../../src/types'
import NewsCell from '../../../src/components/news-cell'
import ColorWrapper from '../addons/color-wrapper'

function cell(theme: Theme) {
  return (
    <NewsCell
      theme={theme}
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      published={'2m'}
      onPress={action('onPress')}
    />
  )
}

storiesOf('news-cell', module).add('default', () => (
  <ScrollView>
    <ColorWrapper theme="black">{cell('black')}</ColorWrapper>
    <ColorWrapper theme="white">{cell('white')}</ColorWrapper>
    <ColorWrapper theme="pink">{cell('pink')}</ColorWrapper>
  </ScrollView>
))
