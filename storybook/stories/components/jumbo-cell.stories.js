/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react-native'

import JumboCell from '../../../src/components/jumbo-cell'
import ColorWrapper from '../addons/color-wrapper'

storiesOf('jumbo-cell', module).add('default', () => (
  <ColorWrapper type="black">
    <JumboCell
      title={'Phasellus dolor nunc, faucibus 🤔'}
      description={'updated 5min ago'}
    />
    <JumboCell title={'Lorem ipsum dolor'} description={'updated 5min ago'} />
  </ColorWrapper>
))
