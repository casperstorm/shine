/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList, Linking } from 'react-native'
import * as Animatable from 'react-native-animatable'

import type { Theme, Navigator } from '../../types'
import type { Dispatch, State } from '../../store/types'
import ThemeCell from '../../components/theme-cell'
import TokenCell from '../../components/token-cell'
import Asset from '../../components/asset'
import * as animationDefinitions from './animations'

import { setTheme, setNewsToken } from '../../store/config/actions'
import * as selectors from '../../store/selectors'

import type { ThemeTypes } from './styles.themes'
import styles, { navigatorStyle } from './styles'
import themes from './styles.themes'

Animatable.initializeRegistryWithDefinitions(animationDefinitions)

type OwnProps = {
  navigator: Navigator,
}

type ReduxProps = {
  dispatch: Dispatch,
  theme: Theme,
  token: string,
}

type Props = OwnProps & ReduxProps

type ComponentState = {
  animating: boolean,
  token: string | null,
}

export class SettingsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  /* TODO:
     ThemeView shouldn't be typed to 'any', however react-native-animatble does not work that well with Flow.
     Is there any solution? */
  themeView: any

  state = {
    animating: false,
    token: null,
  }

  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  componentDidMount = () => {
    this.setState({ token: this.props.token })
    this.statusBarTheme(this.props.theme)
  }

  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.theme) {
      this.statusBarTheme(nextProps.theme)
    }
  }

  statusBarTheme = (theme: Theme) =>
    this.props.navigator.setStyle({
      ...themes.statusBar(theme),
    })

  animateTo = (theme: Theme, duration: number) => {
    if (this.state.animating) Promise.reject()

    const formerTheme = this.props.theme
    const animations = []

    if (formerTheme === 'white' && theme === 'black') {
      animations.push(() => this.themeView.themeWhiteBlack(duration))
    } else if (formerTheme === 'white' && theme === 'pink') {
      animations.push(() => this.themeView.themeWhitePink(duration))
    } else if (formerTheme === 'black' && theme === 'white') {
      animations.push(() => this.themeView.themeBlackWhite(duration))
    } else if (formerTheme === 'black' && theme === 'pink') {
      animations.push(() => this.themeView.themeBlackPink(duration))
    } else if (formerTheme === 'pink' && theme === 'white') {
      animations.push(() => this.themeView.themePinkWhite(duration))
    } else if (formerTheme === 'pink' && theme === 'black') {
      animations.push(() => this.themeView.themePinkBlack(duration))
    }

    this.setState({ animating: true })
    return Promise.all(animations.map(f => f.call())).then(() =>
      this.setState({ animating: false })
    )
  }

  sections = () => {
    return [
      {
        data: [{ key: 'theme' }],
        renderItem: this.renderThemeCell,
      },
      {
        data: [{ key: 'api' }],
        renderItem: this.renderAPICell,
      },
    ]
  }

  keyExtractor = (item: Object) => {
    return item.key
  }

  renderAPICell = ({ item }: Object) => {
    return (
      <TokenCell
        theme={this.props.theme}
        value={this.state.token}
        onPress={() => {
          Linking.openURL('https://cryptopanic.com/about/api/')
        }}
        onTextInputChange={text => this.setState({ token: text })}
      />
    )
  }

  renderThemeCell = ({ item }: Object) => (
    <ThemeCell
      theme={this.props.theme}
      onPress={theme => {
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
          style={[styles.theme, this.themeStyle('container')]}
        />
        <View style={styles.close}>
          <Asset.Button.CrossDark
            iconStyle={this.themeStyle('close')}
            onPress={() => {
              var token = null
              if (this.state.token && this.state.token.length > 0) {
                token = this.state.token
              }
              this.props.dispatch(setNewsToken(token))
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
  token: selectors.currentNewsToken(state),
})

export default connect(mapStateToProps)(SettingsScreen)
