/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight, TextInput } from 'react-native'

import type { Theme } from '../../types'
import type { ThemeTypes } from './styles.themes'
import styles from './styles'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  value: string | null,
  onPress: Function,
  onTextInputChange: Function,
}

class TokenCell extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={[styles.title, this.themeStyle('title')]}>{`API token`}</Text>
          <TextInput
            value={this.props.value ? this.props.value : ''}
            style={[styles.input, this.themeStyle('input')]}
            onChangeText={this.props.onTextInputChange}
          />
        </View>
        <TouchableHighlight underlayColor={null} onPress={this.props.onPress}>
          <View style={styles.container}>
            <Text
              style={[styles.subtitle, this.themeStyle('subtitle')]}
            >{`Shine uses CryptoPanic API to fetch news. Please provide your own token, by pressing here.`}</Text>
          </View>
        </TouchableHighlight>
        <View style={[styles.separator, this.themeStyle('separator')]} />
      </View>
    )
  }
}

export default TokenCell
