/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Asset from '../../components/asset'

import styles from './styles'

export type Props = {
  title?: string,
  description?: string,
  onPress?: Function,
}

class JumboCell extends React.Component<Props> {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress && this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Asset.Button.LogoDark />
          </View>
          <Text numberOfLines={2} style={styles.title}>
            {this.props.title}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            {this.props.description}
          </Text>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default JumboCell
