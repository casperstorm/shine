/* @flow */
import React from 'react'

import { Animated } from 'react-native'

export type Props = {
  onFadeComplete?: Function,
  duration?: number,
  children: Array<any>,
  style?: number | Object,
}

export type State = {
  opacity: Animated.Value,
}

class FadeView extends React.Component<Props, State> {
  constructor() {
    super()

    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  props: Props

  componentDidMount() {
    const { opacity } = this.state
    const { onFadeComplete, duration = 500 } = this.props

    Animated.timing(opacity, {
      toValue: 1,
      duration,
    }).start(onFadeComplete || (() => {}))
  }

  render() {
    const { opacity } = this.state
    const { style } = this.props

    return (
      <Animated.View style={[{ opacity: opacity }].concat(style || [])}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadeView
