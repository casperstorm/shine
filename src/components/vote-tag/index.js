/* @flow */
import React from 'react'
import { Text, View } from 'react-native'

import type { Theme } from '../../types'
import Asset from '../../components/asset'

import styles from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  title: string,
  type: 'positive' | 'negative' | 'important',
}

class VoteTag extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  render() {
    return (
      <View style={[styles.container, this.themeStyle('container')]}>
        {this.props.type === 'positive' && (
          <View style={styles.icon}>
            <Asset.Icon.Positive style={this.themeStyle('icon')} />
          </View>
        )}
        {this.props.type === 'negative' && (
          <View style={styles.icon}>
            <Asset.Icon.Negative style={this.themeStyle('icon')} />
          </View>
        )}
        {this.props.type === 'important' && (
          <View style={styles.icon}>
            <Asset.Icon.Important style={this.themeStyle('icon')} />
          </View>
        )}
        <Text style={[styles.title, this.themeStyle('title')]}>{this.props.title}</Text>
      </View>
    )
  }
}

export default VoteTag
