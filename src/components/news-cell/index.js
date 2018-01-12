/* @flow */
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import _ from 'lodash'

import type { Theme } from '../../store/types'
import Vote from '../../components/vote-tag'
import Currency from '../../components/currency-tag'

import styles from './styles'
import themes from './styles.themes'

export type Props = {
  theme: Theme,
  title: string,
  published: string,
  onPress: Function,
  currencies: Array<Object>,
  votes: Object,
}

class NewsCell extends React.Component<Props> {
  themeStyle = (name: 'title' | 'subtitle' | 'separator') => {
    switch (this.props.theme) {
      case 'black':
        return themes.black[name]
      case 'white':
        return themes.white[name]
      case 'pink':
        return themes.pink[name]
    }
  }

  tags = (currencies: Array<Object>, votes: Object) => {
    const tags = []

    if (votes.important > 0)
      tags.push(
        <Vote
          theme={this.props.theme}
          key={'important'}
          type={'important'}
          title={votes.important.toString()}
        />
      )
    if (votes.positive > 0)
      tags.push(
        <Vote
          theme={this.props.theme}
          key={'positive'}
          type={'positive'}
          title={votes.positive.toString()}
        />
      )
    if (votes.negative > 0)
      tags.push(
        <Vote
          theme={this.props.theme}
          key={'negative'}
          type={'negative'}
          title={votes.negative.toString()}
        />
      )

    _.uniqBy(currencies, 'code').map(currency =>
      tags.push(<Currency key={currency.code} title={currency.code} />)
    )

    return [...tags.slice(0, 5)].reverse()
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={null}
        onPress={this.props.onPress && this.props.onPress}
      >
        <View style={styles.container}>
          <Text style={[styles.title, this.themeStyle('title')]}>
            {[this.props.title]}
          </Text>
          <View style={styles.information}>
            <View style={styles.tags}>
              {this.tags(this.props.currencies, this.props.votes)}
            </View>
            <Text style={[styles.subtitle, this.themeStyle('subtitle')]}>
              {this.props.published}
            </Text>
          </View>
          <View style={[styles.separator, this.themeStyle('separator')]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default NewsCell
