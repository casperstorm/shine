/* @flow */
import React from 'react'
import { View, TouchableHighlight } from 'react-native'

import type { Theme } from '../../types'
import Asset from '../../components/asset'

import styles from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  onPress?: Function,
  onLogoPress?: Function,
}

class JumboCell extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

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
          <View style={[styles.separator, this.themeStyle('separator')]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default JumboCell
