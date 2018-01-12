/* @flow */
import React from 'react'
import { Text, View } from 'react-native'

import type { Theme } from '../../store/types'
import Asset from '../../components/asset'

import styles from './styles'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  title: string,
  type: 'positive' | 'negative' | 'important',
}

class VoteTag extends React.Component<Props> {
  themeStyle = (name: 'vote') => {
    switch (this.props.theme) {
      case 'black':
        return themes.black[name]
      case 'white':
        return themes.white[name]
      case 'pink':
        return themes.pink[name]
    }
  }

  render() {
    return (
      <View style={[styles.container, this.themeStyle('vote')]}>
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
