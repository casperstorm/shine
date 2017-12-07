/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList, Linking, ActivityIndicator } from 'react-native'
import moment from 'moment'

import JumboCell from '../../components/jumbo-cell'
import NewsCell from '../../components/news-cell'
import Intro from '../../components/intro'
import Asset from '../../components/asset'
import FadeView from '../../components/fade-view'

import * as newsActions from '../../store/news/actions'
import * as selectors from '../../store/selectors'

import styles, { navigatorStyle } from './styles'

type Props = {
  itemsFetch: Function,
  items: Array<Object>,

  greetings: Function,
  greeting?: string,

  updatedDate: Function,
  date?: Date,
}

type State = {
  hasContent: boolean,
  hasShownIntro: boolean,
  isRefreshing: boolean,
  lastRefreshedDate: ?string,
}

class NewsScreen extends React.Component<Props, State> {
  static navigatorStyle = navigatorStyle

  static defaultProps = {
    items: [],
  }

  state = {
    hasContent: false,
    hasShownIntro: false,
    isRefreshing: false,
    lastRefreshedDate: null,
  }

  componentDidMount = () => {
    this.props.greetings()
    this.refreshData()
  }

  onIntroEnd = () => {
    this.setState({ hasShownIntro: true })
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.refreshData()
  }

  refreshData = () => {
    this.props
      .itemsFetch()
      .then(() => this.props.updatedDate(new Date()))
      .then(() => this.setState({ isRefreshing: false, hasContent: true }))

    setInterval(() => {
      moment.updateLocale('en', {
        relativeTime: {
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: 'only %d days',
        },
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
    return <JumboCell title={item.title} description={item.description} />
  }

  renderNewsCell = ({ item }) => {
    return (
      <NewsCell
        title={item.title}
        currencies={item.currencies}
        votes={item.votes}
        published={item.published_at}
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
        <ActivityIndicator animating={true} size="large" />
      </View>
    </View>
  )

  renderContent = () => (
    <FadeView duration={450} style={styles.content}>
      <View pointerEvents="none" style={styles.shadowContainer}>
        <Asset.Icon.Shadow />
      </View>
      <SectionList
        renderItem={() => null}
        refreshing={this.state.isRefreshing}
        onRefresh={() => this.onRefresh()}
        sections={this.sections()}
        keyExtractor={this.keyExtractor}
      />
    </FadeView>
  )

  render() {
    return (
      <View style={styles.container}>
        {!this.state.hasShownIntro && this.renderIntro()}
        {this.state.hasShownIntro &&
          !this.state.hasContent &&
          this.renderActivityIndicator()}
        {this.state.hasShownIntro && this.state.hasContent && this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  items: selectors.sortedNewsItems(state),
  greeting: selectors.selectRandomGreetings(state),
  date: selectors.newsUpdatedDate(state),
})

const mapDispatchToProps = {
  itemsFetch: newsActions.itemsFetch,
  updatedDate: newsActions.updatedDate,
  greetings: newsActions.greetings,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
