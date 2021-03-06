/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { View, SectionList } from 'react-native'
import * as Animatable from 'react-native-animatable'

import type { Theme, Navigator } from '../../types'
import type { Dispatch, State } from '../../store/types'
import ThemeCell from '../../components/theme-cell'
import Asset from '../../components/asset'
import * as animationDefinitions from './animations'

import { setTheme } from '../../store/config/actions'
import { itemsFetch } from '../../store/news/actions'
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
}

type Props = OwnProps & ReduxProps

type ComponentState = {
  animating: boolean,
}

export class SettingsScreen extends React.Component<Props, ComponentState> {
  static navigatorStyle = navigatorStyle

  /* TODO:
     ThemeView shouldn't be typed to 'any', however react-native-animatble does not work that well with Flow.
     Is there any solution? */
  themeView: any

  state = {
    animating: false,
  }

  themeStyle = (type: ThemeTypes) => themes.style(this.props.theme, type)

  componentDidMount = () => {
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
    } else if (formerTheme === 'white' && theme === 'blue') {
      animations.push(() => this.themeView.themeWhiteBlue(duration))
    } else if (formerTheme === 'black' && theme === 'white') {
      animations.push(() => this.themeView.themeBlackWhite(duration))
    } else if (formerTheme === 'black' && theme === 'pink') {
      animations.push(() => this.themeView.themeBlackPink(duration))
    } else if (formerTheme === 'black' && theme === 'blue') {
      animations.push(() => this.themeView.themeBlackBlue(duration))
    } else if (formerTheme === 'pink' && theme === 'white') {
      animations.push(() => this.themeView.themePinkWhite(duration))
    } else if (formerTheme === 'pink' && theme === 'black') {
      animations.push(() => this.themeView.themePinkBlack(duration))
    } else if (formerTheme === 'pink' && theme === 'blue') {
      animations.push(() => this.themeView.themePinkBlue(duration))
    } else if (formerTheme === 'blue' && theme === 'white') {
      animations.push(() => this.themeView.themeBlueWhite(duration))
    } else if (formerTheme === 'blue' && theme === 'black') {
      animations.push(() => this.themeView.themeBlueBlack(duration))
    } else if (formerTheme === 'blue' && theme === 'pink') {
      animations.push(() => this.themeView.themeBluePink(duration))
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
    ]
  }

  keyExtractor = (item: Object) => {
    return item.key
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
              this.props.dispatch(itemsFetch())
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
