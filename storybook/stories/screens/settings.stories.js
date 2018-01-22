/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { SettingsScreen } from '../../../src/screens/settings'
import { initialNavigatorProps } from '../utils/navigator-props'

const initialProps = {
  navigator: initialNavigatorProps,
  randomTheme: 'pink',
  theme: 'white',
  token: '123',
  dispatch: action('changeTheme'),
}

type ComponentState = {}

class WrappedSettingsScreen extends React.Component<{}, ComponentState> {
  state = {}

  changeTheme = () => {
    return new Promise(action('changeTheme'))
  }

  render() {
    return <SettingsScreen {...initialProps} dispatch={this.changeTheme} />
  }
}

storiesOf('Settings', module).add('default', () => <WrappedSettingsScreen />)
