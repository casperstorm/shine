/* @flow */
import React from 'react'
import { Text, View } from 'react-native'

import Asset from '../../components/asset'

import styles from './styles'

export type Props = {
  title: string,
  type: 'positive' | 'negative' | 'important',
}

class VoteTag extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.type === 'positive' && (
          <View style={styles.icon}>
            <Asset.Icon.Positive />
          </View>
        )}
        {this.props.type === 'negative' && (
          <View style={styles.icon}>
            <Asset.Icon.Negative />
          </View>
        )}
        {this.props.type === 'important' && (
          <View style={styles.icon}>
            <Asset.Icon.Important />
          </View>
        )}
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

export default VoteTag
