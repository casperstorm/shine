/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList } from 'react-native'
import * as Animatable from 'react-native-animatable'

import type { Theme } from '../../types'
import type { Dispatch, State } from '../../store/types'
import ThemeCell from '../../components/theme-cell'
import APICell from '../../components/api-cell'
import Asset from '../../components/asset'
import * as animationDefinitions from './animations'

import { setTheme } from '../../store/config/actions'
import * as selectors from '../../store/selectors'

import styles, { navigatorStyle } from './styles'
import themes from './styles.themes'

Animatable.initializeRegistryWithDefinitions(animationDefinitions)

type OwnProps = {
  navigator: Object, // TODO type this
}

type ReduxProps = {
  dispatch: Dispatch,
  theme: Theme,
}

type Props = OwnProps & ReduxProps

type ComponentState = {
  animationState: AnimationState,
  animating: boolean,
}
type AnimationState = Theme

export class SettingsScreen extends React.Component<Props, ComponentState> {
  themeView: any
  static navigatorStyle = navigatorStyle

  state = {
    animationState: 'white',
    animating: false,
  }

  componentDidMount() {
    this.animateTo(this.props.theme, 1)
  }

  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.theme) {
      this.props.navigator.setStyle({
        ...themes.statusBar(nextProps.theme),
      })
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
      {
        data: [
          {
            key: 'api',
            title: 'this is api row',
          },
        ],
        renderItem: this.renderAPICell,
      },
    ]
  }

  keyExtractor = (item: Object) => {
    return item.key
  }

  apiTextInputChange = (text: string) => {
    console.log(text)
  }

  renderAPICell = ({ item }: Object) => (
    <APICell
      onPress={() => {}}
      onTextInputChange={text => this.apiTextInputChange(text)}
    />
  )

  renderThemeCell = ({ item }: Object) => (
    <ThemeCell
      onPress={() => {
        const theme = 'pink'
        this.props.dispatch(setTheme(theme))
        this.animateTo(theme, 500)
      }}
    />
  )

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
  theme: selectors.currentTheme(state),
})

export default connect(mapStateToProps)(SettingsScreen)
