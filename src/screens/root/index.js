/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import type { Navigator } from '../../types'
import type { State } from '../../store/types'

import NewsScreen from '../news'
import CoinScreen from '../coins'

import { navigatorStyle } from './styles'

type Props = {
  navigator: Navigator,
}

type ComponentState = {}

class RootScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  componentDidMount = () => {}
  render() {
    return (
      <ScrollView pagingEnabled={true} horizontal={true}>
        <NewsScreen navigator={this.props.navigator} />
        <CoinScreen navigator={this.props.navigator} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state: State) => ({})

export default connect(mapStateToProps)(RootScreen)
