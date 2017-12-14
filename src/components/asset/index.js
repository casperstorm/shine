import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

class Asset {}
class Icon extends Image {}

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pressed: false,
    }
  }

  renderImage() {
    let icon = this.props.icon
    let iconPressed = this.props.iconPressed ? this.props.iconPressed : icon

    if (this.props.iconDisabled && this.props.disabled) return this.props.iconDisabled
    return this.state.pressed ? iconPressed : icon
  }

  render() {
    let onPressOut = () => {
      this.setState({ pressed: false })
    }

    return (
      <TouchableOpacity
        {...this.props}
        activeOpacity={this.props.iconPressed ? 1 : 0.2}
        onPressIn={() => {
          this.setState({ pressed: true })
        }}
        onPressOut={onPressOut}
      >
        {this.renderImage()}
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  iconPressed: PropTypes.node,
  iconDisabled: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}

/*
  When a function returns JSX it is treated as a stateless function component.
  This will result in a warning from eslint, which is why we have disabled that rule in the following chunk.

  More about it here: https://github.com/yannickcr/eslint-plugin-react/issues/512
*/
/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
Icon.LogoDark = () => <Icon source={require('../../../assets/images/icLogoDark.png')} />
Icon.Shadow = () => <Icon source={require('../../../assets/images/bottom_gradient.png')} style={ styles.shadow } />
Icon.Negative = () => <Icon source={require('../../../assets/images/icSkull.png')} />
Icon.Positive = () => <Icon source={require('../../../assets/images/icHeart.png')} />
Icon.Important = () => <Icon source={require('../../../assets/images/icImportant.png')} />
/* eslint-enable prettier/prettier */

Button.LogoDark = props => <Button {...props} icon={<Icon.LogoDark />} />

/* eslint-enable react/display-name */

Asset.Icon = Icon
Asset.Button = Button

export default Asset
