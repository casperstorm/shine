/* @flow */
import React from 'react'
import SafariView from 'react-native-safari-view'
import { connect } from 'react-redux'
import {
  View,
  SectionList,
  Linking,
  ActivityIndicator,
  RefreshControl,
  Platform,
} from 'react-native'
import moment from 'moment'

import type { Theme, Navigator } from '../../types'
import type { Dispatch, State } from '../../store/types'
import JumboCell from '../../components/jumbo-cell'
import NewsCell from '../../components/news-cell'
import Intro from '../../components/intro'
import Asset from '../../components/asset'
import FadeView from '../../components/fade-view'

import * as selectors from '../../store/selectors'
import { itemsFetch } from '../../store/news/actions'

import styles, { navigatorStyle } from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

// var SafariView = require('react-native-safari-view')

type Props = {
  navigator: Navigator,

  // Redux
  dispatch: Dispatch,
  items: Array<Object>,
  theme: Theme,
}

type ComponentState = {
  hasContent: boolean,
  hasShownIntro: boolean,
  isRefreshing: boolean,
}

const relativeTimes = {
  past: '%s',
  s: '< 1 m',
  m: '1 m',
  mm: '%d m',
  h: '1 h',
  hh: '%d h',
  d: '1 d',
  dd: '%d d',
}

class NewsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  state = {
    hasContent: false,
    hasShownIntro: false,
    isRefreshing: false,
  }

  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  componentDidMount = () => {
    this.refreshData()
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.theme) {
      this.props.navigator.setStyle({
        ...themes.statusBar(nextProps.theme),
      })
    }
  }

  onIntroEnd = () => {
    this.setState({ hasShownIntro: true })
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.refreshData()
  }

  refreshData = () => {
    this.props.dispatch(itemsFetch()).then(() =>
      this.setState({
        isRefreshing: false,
        hasContent: true,
      })
    )
  }

  sections = () => {
    return [
      {
        data: [{ key: 'jumbo' }],
        renderItem: this.renderJumboCell,
      },
      {
        data: this.props.items,
        renderItem: this.renderNewsCell,
      },
    ]
  }

  keyExtractor = item => {
    return item.key || item.publishedAt
  }

  renderJumboCell = ({ item }) => {
    return (
      <JumboCell
        theme={this.props.theme}
        onLogoPress={() => {
          this.props.navigator.showModal({ screen: 'Shine.Settings' })
        }}
      />
    )
  }

  renderNewsCell = ({ item }) => {
    moment.updateLocale('en', {
      relativeTime: relativeTimes,
    })

    return (
      <NewsCell
        theme={this.props.theme}
        title={item.title}
        subtitle={item.description}
        published={moment(item.publishedAt).fromNow(true)}
        onPress={() => {
          switch (Platform.OS) {
            case 'ios':
              SafariView.show({ url: item.url })
              break
            case 'android':
              Linking.openURL(item.url)
              break
            default:
              break
          }
        }}
      />
    )
  }

  renderIntro = () => (
    <View style={styles.loaders}>
      <View style={styles.intro}>
        <Intro onEnd={this.onIntroEnd} />
      </View>
    </View>
  )

  renderActivityIndicator = () => (
    <View style={styles.loaders}>
      <View
        active={!this.state.hasShownIntro}
        animationDuration={700}
        style={styles.activityIndicator}
      >
        <ActivityIndicator
          animating={true}
          size="large"
          color={themes.refreshControl(this.props.theme)}
        />
      </View>
    </View>
  )

  renderContent = () => (
    <FadeView duration={450} style={styles.content}>
      <View pointerEvents="none" style={styles.shadowContainer}>
        <Asset.Icon.Shadow style={this.themeStyle('shadow')} />
      </View>
      <SectionList
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
    </FadeView>
  )

  render() {
    return (
      <View style={[styles.container, this.themeStyle('container')]}>
        {!this.state.hasShownIntro && this.renderIntro()}
        {this.state.hasShownIntro &&
          !this.state.hasContent &&
          this.renderActivityIndicator()}
        {this.state.hasShownIntro && this.state.hasContent && this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (state: State) => ({
  items: selectors.sortedNewsItems(state),
  theme: selectors.currentTheme(state),
})

export default connect(mapStateToProps)(NewsScreen)
