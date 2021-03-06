/* @flow */
import React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import type { Theme } from '../../../src/types'
import ThemeCell from '../../../src/components/theme-cell'
import ColorWrapper from '../addons/color-wrapper'

function cell(theme: Theme) {
  return <ThemeCell theme={theme} onPress={action('onPress')} />
}

storiesOf('theme-cell', module).add('default', () => (
  <ScrollView>
    <ColorWrapper theme="black">{cell('black')}</ColorWrapper>
    <ColorWrapper theme="white">{cell('white')}</ColorWrapper>
    <ColorWrapper theme="pink">{cell('pink')}</ColorWrapper>
  </ScrollView>
))
