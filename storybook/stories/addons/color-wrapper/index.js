/* @flow */
import React from 'react'
import { View } from 'react-native'

import type { Theme } from '../../../../src/types'
import styles from './styles'

export type Props = {
  theme: Theme,
  children: any,
}
export class ColorWrapper extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container, styles[this.props.theme]]}>
        {this.props.children}
      </View>
    )
  }
}

export default ColorWrapper
