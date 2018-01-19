/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight, TextInput } from 'react-native'

import styles from './styles'

export type Props = {
  onPress: Function,
  onTextInputChange: Function,
}

class APICell extends React.Component<Props> {
  render() {
    return (
      <TouchableHighlight underlayColor={null} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{`API key`}</Text>
          <TextInput style={styles.input} onChangeText={this.props.onTextInputChange} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default APICell
