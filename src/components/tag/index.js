/* @flow */
import React from 'react'
import { Text, View } from 'react-native'
import stc from 'string-to-color'

import styles from './styles'

export type Props = { title: string }

class Tag extends React.Component<Props> {
  props: Props
  render() {
    const generatedStyle = {
      background: {
        backgroundColor: '#' + stc.generate(this.props.title),
      },
    }
    return (
      <View style={[styles.container, generatedStyle.background]}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

export default Tag
