/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, Text, SectionList, TouchableHighlight } from 'react-native'
import * as Animatable from 'react-native-animatable'

import type { Dispatch, State, Theme } from '../../store/types'
import * as animationDefinitions from './animations'
import Asset from '../../components/asset'

import { change } from '../../store/theme/actions'
import * as selectors from '../../store/selectors'

import styles, { navigatorStyle } from './styles'

Animatable.initializeRegistryWithDefinitions(animationDefinitions)

type Props = {
  navigator: Object,
  dispatch: Dispatch,
  currentTheme: Theme,
  randomTheme: Theme,
}

type ComponentState = {
  animationState: AnimationState,
  animating: boolean,
}
type AnimationState = Theme

class SettingsScreen extends React.Component<Props, ComponentState> {
  themeView: any
  static navigatorStyle = navigatorStyle

  state = {
    animationState: 'white',
    animating: false,
  }

  componentDidMount() {
    this.animateTo(this.props.currentTheme, 1)
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.randomTheme &&
      nextProps.randomTheme != nextProps.currentTheme &&
      !this.animating
    ) {
      this.animateTo(nextProps.currentTheme, 500)
    }
  }

  animateTo = (state: AnimationState, duration: number) => {
    if (this.state.animating) Promise.reject()

    const formerState = this.state.animationState
    const animations = []

    if (formerState === 'white' && state === 'black') {
      animations.push(() => this.themeView.themeWhiteBlack(duration))
    }

    if (formerState === 'white' && state === 'pink') {
      animations.push(() => this.themeView.themeWhitePink(duration))
    }

    if (formerState === 'black' && state === 'white') {
      animations.push(() => this.themeView.themeBlackWhite(duration))
    }

    if (formerState === 'black' && state === 'pink') {
      animations.push(() => this.themeView.themeBlackPink(duration))
    }

    if (formerState === 'pink' && state === 'white') {
      animations.push(() => this.themeView.themePinkWhite(duration))
    }

    if (formerState === 'pink' && state === 'black') {
      animations.push(() => this.themeView.themePinkBlack(duration))
    }

    this.setState({ animating: true })
    return Promise.all(animations.map(f => f.call())).then(() =>
      this.setState({ animating: false, animationState: state })
    )
  }

  sections = () => {
    return [
      {
        data: [
          {
            key: 'theme',
            title: 'this is theme row',
          },
        ],
        renderItem: this.renderThemeCell,
      },
    ]
  }

  keyExtractor = (item: Object) => {
    return item.key
  }

  renderThemeCell = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.dispatch(change(this.props.randomTheme))
        }}
      >
        <Text>{item.title}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          ref={container => {
            this.themeView = container
          }}
          style={styles.theme}
        />
        <View style={styles.close}>
          <Asset.Button.CrossDark
            onPress={() => {
              this.props.navigator.dismissModal()
            }}
          />
        </View>
        <SectionList
          renderItem={() => null}
          sections={this.sections()}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: State) => ({
  currentTheme: selectors.currentTheme(state),
  randomTheme: selectors.randomTheme(state),
})

export default connect(mapStateToProps)(SettingsScreen)
