/* eslint-disable global-require */
import React, { Component } from 'react'
import { getStorybookUI, configure } from '@storybook/react-native'
import { Navigation } from 'react-native-navigation'

// import stories
configure(() => {
  require('./stories/components/news-cell.stories')
  require('./stories/components/jumbo-cell.stories')
  require('./stories/components/token-cell.stories')
  require('./stories/components/theme-cell.stories')
  require('./stories/components/intro-view.stories')
  require('./stories/screens/settings.stories')
}, module)

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007 })

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />
  }
}

Navigation.registerComponent('shine', () => StorybookUIHMRRoot)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'shine',
    title: 'Storybook',
  },
})

export default StorybookUIHMRRoot
