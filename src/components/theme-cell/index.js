/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import type { Theme } from '../../types'
import type { ThemeTypes } from './styles.themes'
import styles from './styles'
import themes from './styles.themes'
import { colors } from '../../utils/colors'

export type Props = {
  theme: Theme,
  onPress: Function,
}

class ThemeCell extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, this.themeStyle('title')]}>{`Theme`}</Text>
        <View style={styles.theme}>{this.themes()}</View>
        <View style={[styles.separator, this.themeStyle('separator')]} />
      </View>
    )
  }

  circle = (color: string, theme: Theme) => {
    return (
      <TouchableHighlight
        underlayColor={null}
        key={theme}
        onPress={() => this.props.onPress(theme)}
      >
        <View style={[styles.circle, { backgroundColor: color }]} />
      </TouchableHighlight>
    )
  }

  themes = () => {
    const circles = []
    circles.push(this.circle(colors.white.primary, 'white'))
    circles.push(this.circle(colors.black.primary, 'black'))
    circles.push(this.circle(colors.pink.primary, 'pink'))
    circles.push(this.circle(colors.blue.primary, 'blue'))
    return circles
  }
}

export default ThemeCell
