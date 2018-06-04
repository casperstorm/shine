/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  SectionList,
  Linking,
  ActivityIndicator,
  RefreshControl,
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
import { itemsFetch, greetings } from '../../store/news/actions'

import styles, { navigatorStyle } from './styles'
import type { ThemeTypes } from './styles.themes'
import themes from './styles.themes'

type Props = {
  navigator: Navigator,

  // Redux
  dispatch: Dispatch,
  items: Array<Object>,
  greeting?: string,
  date?: Date,
  theme: Theme,
  token: string | null,
}

type ComponentState = {
  hasContent: boolean,
  hasShownIntro: boolean,
  isRefreshing: boolean,
  lastRefreshedDate: ?string,
}

const relativeTimes = {
  short: {
    past: '%s',
    s: '< 1 m',
    m: '1 m',
    mm: '%d m',
    h: '1 h',
    hh: '%d h',
    d: '1 d',
    dd: '%d d',
  },
  medium: {
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: 'only %d days',
  },
}

class NewsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  state = {
    hasContent: false,
    hasShownIntro: false,
    isRefreshing: false,
    lastRefreshedDate: null,
  }

  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  componentDidMount = () => {
    this.props.dispatch(greetings())
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

    setInterval(() => {
      moment.updateLocale('en', {
        relativeTime: relativeTimes.medium,
      })

      this.setState({ lastRefreshedDate: moment(this.props.date).fromNow() })
    }, 1000)
  }

  sections = () => {
    return [
      {
        data: [
          {
            key: 'jumbo',
            title: this.props.greeting,
            description: this.state.lastRefreshedDate
              ? `Updated ${this.state.lastRefreshedDate}`
              : null,
          },
        ],
        renderItem: this.renderJumboCell,
      },
      {
        data: this.props.items,
        renderItem: this.renderNewsCell,
      },
    ]
  }

  keyExtractor = item => {
    return item.key || item.id
  }

  renderJumboCell = ({ item }) => {
    const hasToken = this.props.token
    const title = hasToken ? item.title : '👆🏻'
    const subtitle = hasToken
      ? item.description
      : 'In order for Shine to fetch news we need a token. Press the above settings button to get started.'
    return (
      <JumboCell
        theme={this.props.theme}
        title={title}
        subtitle={subtitle}
        onLogoPress={() => {
          this.props.navigator.showModal({ screen: 'Shine.Settings' })
        }}
      />
    )
  }

  renderNewsCell = ({ item }) => {
    moment.updateLocale('en', {
      relativeTime: relativeTimes.short,
    })

    return (
      <NewsCell
        theme={this.props.theme}
        title={item.title}
        currencies={[]}
        votes={[]}
        published={moment(item.publishedAt).fromNow(true)}
        onPress={() => {
          Linking.openURL(item.url)
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
  greeting: selectors.selectRandomGreetings(state),
  date: selectors.newsUpdatedDate(state),
  theme: selectors.currentTheme(state),
  token: selectors.currentNewsToken(state),
})

export default connect(mapStateToProps)(NewsScreen)
