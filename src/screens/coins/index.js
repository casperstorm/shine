/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList, RefreshControl } from 'react-native'

import type { Navigator } from '../../types'
import type { Dispatch, State } from '../../store/types'

// import NewsScreen from '../news'
// import JumboCell from '../../components/jumbo-cell'
import CoinCell from '../../components/coin-cell'
// import Intro from '../../components/intro'
// import Asset from '../../components/asset'
// import FadeView from '../../components/fade-view'

// import * as selectors from '../../store/selectors'
import { coinsFetch } from '../../store/coins/actions'

import styles, { navigatorStyle } from './styles'
// import { refreshDate } from '../../store/news/actions'
// import type { ThemeTypes } from './styles.themes'
// import themes from './styles.themes'

type Props = {
  navigator: Navigator,

  // Redux
  dispatch: Dispatch,
}

type ComponentState = {
  isRefreshing: boolean,
}

class CoinsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  state = {
    isRefreshing: false,
  }

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
        data: [
          { key: 'btc' },
          { key: 'eth' },
          { key: 'megamegamegamegamegamegamegamegalang mønt' },
        ],
        renderItem: this.renderCoinCell,
      },
    ]
  }

  renderCoinCell = ({ item }) => {
    return <CoinCell theme={'white'} title={item.key} />
  }

  keyExtractor = item => {
    return item.key || item.id
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={() => null}
          refreshing={this.state.isRefreshing}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onRefresh()}
              // tintColor={themes.refreshControl(this.props.theme)}
            />
          }
          sections={this.sections()}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: State) => ({})

export default connect(mapStateToProps)(CoinsScreen)
