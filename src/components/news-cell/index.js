/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import _ from 'lodash'

import Tag from '../../components/tag'
import Vote from '../../components/vote'

import styles from './styles'

export type Props = {
  title: string,
  published: string,
  onPress: Function,
  currencies: ?Array<Object>,
  votes: ?Object,
}

class NewsCell extends React.Component<Props> {
  tags = (currencies: Array<Object>) => {
    return _.uniqBy(currencies, 'code').map(currency => (
      <Tag key={currency.code} title={currency.code} />
    ))
  }

  votes = (votes: Object) => {
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

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress && this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.information}>
            <View style={styles.tags}>
              {this.props.currencies && this.tags(this.props.currencies)}
              {this.props.votes && this.votes(this.props.votes)}
            </View>
            <Text style={styles.date}>{this.props.published}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default NewsCell
