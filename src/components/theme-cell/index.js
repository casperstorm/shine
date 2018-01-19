/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import styles from './styles'

export type Props = {
  onPress: Function,
}

class ThemeCell extends React.Component<Props> {
  render() {
    return (
      <TouchableHighlight underlayColor={null} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text>{`sup`}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ThemeCell
