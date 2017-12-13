/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import NewsCell from '../../../src/components/news-cell'
import ColorWrapper from '../addons/color-wrapper'

storiesOf('news-cell', module).add('default', () => (
  <ColorWrapper type="black">
    <NewsCell
      title={'Lorem ipsum dolor sit amet'}
      currencies={[
        { code: 'BTC', title: 'BTC' },
        { code: 'VTC', title: 'VTC' },
        { code: 'GRS', title: 'GRS' },
      ]}
      votes={{ important: 1, negative: 2, positive: 3 }}
      published={'2m'}
      onPress={action('onPress')}
    />
    <NewsCell
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      currencies={[]}
      votes={{ important: 0, negative: 0, positive: 0 }}
      published={'2m'}
      onPress={action('onPress')}
    />
    <NewsCell
      title={
        'Vivamus bibendum enim nec ex malesuada, in luctus enim pulvinar. Mauris consequat nunc sed velit elementum, dictum sagittis ex ultrices.'
      }
      currencies={[]}
      votes={{ important: 1, negative: 2, positive: 0 }}
      published={'2m'}
      onPress={action('onPress')}
    />
  </ColorWrapper>
))
