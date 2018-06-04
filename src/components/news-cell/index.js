/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import type { Theme } from '../../types'

import styles from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  title: string,
  published: string,
  onPress: Function,
}

class NewsCell extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)
  render() {
    return (
      <TouchableHighlight
        underlayColor={null}
        onPress={this.props.onPress && this.props.onPress}
      >
        <View style={styles.container}>
          <Text style={[styles.title, this.themeStyle('title')]}>
            {[this.props.title]}
          </Text>
          <View style={styles.information}>
            <Text style={[styles.subtitle, this.themeStyle('subtitle')]}>
              {this.props.published}
            </Text>
          </View>
          <View style={[styles.separator, this.themeStyle('separator')]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default NewsCell
