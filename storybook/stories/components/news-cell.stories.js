/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
// import { action } from '@storybook/addon-actions'

// import NewsCell from '../../../src/components/news-cell'
import ColorWrapper from '../addons/color-wrapper'

storiesOf('news-cell', module).add('default', () => (
  <ColorWrapper type="black">
    {/* <NewsCell
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      currencies={[
        { code: 'BTC', title: 'BTC' },
        { code: 'VTC', title: 'VTC' },
        { code: 'GRS', title: 'GRS' },
        { code: 'SYS', title: 'SYS' },
      ]}
      votes={{ important: 1, negative: 2, positive: 3 }}
      published={'2m'}
      onPress={action('onPress')}
    />
  </ColorWrapper>
))

storiesOf('news-cell', module).add('no-currencies', () => (
  <ColorWrapper type="black">
    <NewsCell
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      currencies={[]}
      votes={{
        negative: 10,
        positive: 1,
        important: 5,
      }}
      published={'2m'}
      onPress={action('onPress')}
    />
  </ColorWrapper>
))

storiesOf('news-cell', module).add('no-votes', () => (
  <ColorWrapper type="black">
    <NewsCell
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      currencies={[
        { code: 'BTC', title: 'BTC' },
        { code: 'VTC', title: 'VTC' },
        { code: 'GRS', title: 'GRS' },
        { code: 'SYS', title: 'SYS' },
      ]}
      votes={{ important: 0, negative: 0, positive: 0 }}
      published={'2m'}
      onPress={action('onPress')}
    />
  </ColorWrapper>
))

storiesOf('news-cell', module).add('empty', () => (
  <ColorWrapper type="black">
    <NewsCell
      title={'Phasellus dolor nunc, faucibus eget accumsan ac, mollis sit amet lorem.'}
      currencies={[]}
      votes={{ important: 0, negative: 0, positive: 0 }}
      published={'2m'}
      onPress={action('onPress')}
    /> */}
  </ColorWrapper>
))
