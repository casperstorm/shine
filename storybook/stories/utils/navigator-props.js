/* @flow */
import { action } from '@storybook/addon-actions'
import type { Navigator } from '../../../src/types'

export const initialNavigatorProps: Navigator = {
  push: action('navigator.push'),
  pop: action('navigator.pop'),
  popToRoot: action('navigator.popToRoot'),
  showModal: action('navigator.showModal'),
  dismissModal: action('navigator.dismissModal'),
  dismissAllModals: action('navigator.dismissAllModals'),
  toggleNavBar: action('navigator.toggleNavBar'),
  setStyle: action('navigator.setStyle'),
}
