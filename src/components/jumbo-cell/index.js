/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import type { Theme } from '../../store/types'
import Asset from '../../components/asset'

import styles from './styles'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  title?: string,
  subtitle?: string,
  onPress?: Function,
  onLogoPress?: Function,
}

class JumboCell extends React.Component<Props> {
  themeStyle = (name: 'title' | 'subtitle' | 'separator' | 'logo') => {
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
      <TouchableHighlight onPress={this.props.onPress && this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Asset.Button.LogoDark
              iconStyle={this.themeStyle('logo')}
              onPress={this.props.onLogoPress && this.props.onLogoPress}
            />
          </View>
          <Text numberOfLines={2} style={[styles.title, this.themeStyle('title')]}>
            {this.props.title}
          </Text>
          <Text numberOfLines={1} style={[styles.subtitle, this.themeStyle('subtitle')]}>
            {this.props.subtitle}
          </Text>
          <View style={[styles.separator, this.themeStyle('separator')]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default JumboCell
