/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ScrollView } from 'react-native'

import Intro from '../../../src/components/intro'
import ColorWrapper from '../addons/color-wrapper'

storiesOf('intro-view', module).add('default', () => (
  <ScrollView>
    <ColorWrapper theme="black">
      <Intro />
    </ColorWrapper>
    <ColorWrapper theme="white">
      <Intro />
    </ColorWrapper>
    <ColorWrapper theme="pink">
      <Intro />
    </ColorWrapper>
  </ScrollView>
))
