/* @flow */
import React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import type { Theme } from '../../../src/types'
import JumboCell from '../../../src/components/jumbo-cell'
import ColorWrapper from '../addons/color-wrapper'

function cell(theme: Theme) {
  return (
    <JumboCell
      theme={theme}
      title={'Phasellus dolor nunc, faucibus 🤔'}
      description={'updated 5min ago'}
    />
  )
}

storiesOf('jumbo-cell', module).add('default', () => (
  <ScrollView>
    <ColorWrapper theme="black">{cell('black')}</ColorWrapper>
    <ColorWrapper theme="white">{cell('white')}</ColorWrapper>
    <ColorWrapper theme="pink">{cell('pink')}</ColorWrapper>
  </ScrollView>
))
