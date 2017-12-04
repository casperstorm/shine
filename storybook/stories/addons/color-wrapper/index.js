/* @flow */
import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export type Props = {
  type: 'black' | 'white',
  children: any,
}
export class ColorWrapper extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.main, styles[this.props.type]]}>{this.props.children}</View>
    )
  }
}

export default ColorWrapper
