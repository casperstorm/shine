/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import _ from 'lodash'

import Vote from '../../components/vote-tag'
import Currency from '../../components/currency-tag'

import styles from './styles'

export type Props = {
  title: string,
  published: string,
  onPress: Function,
  currencies: Array<Object>,
  votes: Object,
}

class NewsCell extends React.Component<Props> {
  tags = (currencies: Array<Object>, votes: Object) => {
    const tags = []

    if (votes.important > 0)
      tags.push(
        <Vote key={'important'} type={'important'} title={votes.important.toString()} />
      )
    if (votes.positive > 0)
      tags.push(
        <Vote key={'positive'} type={'positive'} title={votes.important.toString()} />
      )
    if (votes.negative > 0)
      tags.push(
        <Vote key={'negative'} type={'negative'} title={votes.important.toString()} />
      )

    _.uniqBy(currencies, 'code').map(currency =>
      tags.push(<Currency key={currency.code} title={currency.code} />)
    )

    return [...tags.slice(0, 5)].reverse()
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress && this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.information}>
            <View style={styles.tags}>
              {this.tags(this.props.currencies, this.props.votes)}
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
