/* @flow */
import React from 'react'
import { Text, View } from 'react-native'

import type { Theme } from '../../types'

import styles from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  symbol: string,
  price: string,
  change1h: string,
  change24h: string,
  change7d: string,
  marketcap: string,
}

class CoinCell extends React.Component<Props> {
  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={[styles.symbol, this.themeStyle('text')]}>
            {this.props.symbol}
          </Text>
          <Text numberOfLines={1} style={[styles.price, this.themeStyle('text')]}>
            {this.props.price}
          </Text>
          <Text numberOfLines={1} style={[styles.price, this.themeStyle('text')]}>
            {this.props.marketcap}
          </Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} style={[styles.change, this.themeStyle('text')]}>
            {this.props.change1h + ' 1h'}
          </Text>
          <Text numberOfLines={1} style={[styles.change, this.themeStyle('text')]}>
            {this.props.change24h + ' 1d'}
          </Text>
          <Text numberOfLines={1} style={[styles.change, this.themeStyle('text')]}>
            {this.props.change7d + ' 7d'}
          </Text>
        </View>
        <View style={[styles.separator, this.themeStyle('separator')]} />
      </View>
    )
  }
}

export default CoinCell
