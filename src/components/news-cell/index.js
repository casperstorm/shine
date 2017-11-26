/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import moment from 'moment'
import _ from 'lodash'

import Tag from '../../components/tag'
import Vote from '../../components/vote'

import styles from './styles'

export type Props = {
  title: string,
  onPress: Function,
  currencies?: Array<Object>,
  votes?: Object,
  published: Date,
}

class NewsCell extends React.Component<Props> {
  tags = (currencies: Array<any> | void) => {
    if (currencies === undefined) return null
    return _.uniqBy(currencies, 'code').map(currency => (
      <Tag key={currency.code} title={currency.code} />
    ))
  }

  votes = (votes: Object | void) => {
    if (votes === undefined) return null
    return [
      votes.important > 0 ? (
        <Vote key={'important'} type={'important'} title={votes.important.toString()} />
      ) : null,
      votes.positive > 0 ? (
        <Vote key={'positive'} type={'positive'} title={votes.positive.toString()} />
      ) : null,
      votes.negative > 0 ? (
        <Vote key={'negative'} type={'negative'} title={votes.negative.toString()} />
      ) : null,
    ]
  }

  date = (date: Date) => {
    moment.updateLocale('en', {
      relativeTime: {
        past: '%s',
        s: '< 1 m',
        m: '1 m',
        mm: '%d m',
        h: '1 h',
        hh: '%d h',
        d: '1 d',
        dd: '%d d',
      },
    })

    return <Text style={styles.date}>{moment(date).fromNow(true)}</Text>
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress && this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.information}>
            <View style={styles.tags}>
              {this.tags(this.props.currencies)}
              {this.votes(this.props.votes)}
            </View>
            {this.date(this.props.published)}
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default NewsCell
