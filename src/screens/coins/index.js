/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList, RefreshControl } from 'react-native'

import type { Theme, Navigator } from '../../types'
import type { Dispatch, State } from '../../store/types'

import CoinCell from '../../components/coin-cell'
import Asset from '../../components/asset'

import * as selectors from '../../store/selectors'
import { coinsFetch } from '../../store/coins/actions'

import styles, { navigatorStyle } from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

type Props = {
  navigator: Navigator,

  // Redux
  dispatch: Dispatch,
  theme: Theme,
  coins: Array<Object>,
}

type ComponentState = {
  isRefreshing: boolean,
}

class CoinsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  state = {
    isRefreshing: false,
  }

  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  componentDidMount = () => {}

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.refreshData()
  }

  refreshData = () => {
    this.props.dispatch(coinsFetch()).then(() => {
      this.setState({
        isRefreshing: false,
      })
    })
  }

  sections = () => {
    return [
      {
        data: this.props.coins,
        renderItem: this.renderCoinCell,
      },
    ]
  }

  renderCoinCell = ({ item }) => {
    return (
      <CoinCell
        symbol={item.symbol}
        price={item.price_usd}
        change1h={item.percent_change_1h}
        change24h={item.percent_change_24h}
        change7d={item.percent_change_7d}
        marketcap={item.market_cap_usd}
        theme={this.props.theme}
      />
    )
  }

  keyExtractor = item => {
    return item.key || item.id
  }

  render() {
    return (
      <View style={[styles.container, this.themeStyle('container')]}>
        <SectionList
          style={styles.list}
          renderItem={() => null}
          refreshing={this.state.isRefreshing}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onRefresh()}
              tintColor={themes.refreshControl(this.props.theme)}
            />
          }
          sections={this.sections()}
          keyExtractor={this.keyExtractor}
        />
        <View pointerEvents="none" style={styles.shadowContainer}>
          <Asset.Icon.Shadow style={this.themeStyle('shadow')} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: State) => ({
  coins: selectors.sortedCoins(state),
  theme: selectors.currentTheme(state),
})

export default connect(mapStateToProps)(CoinsScreen)
