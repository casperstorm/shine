/* @flow */
export type Theme = 'white' | 'black' | 'pink'

type NavigatorParams = { screen: 'Shine.Newsn' } | { screen: 'Shine.Settings' }

export type NavigatorEvent = {
  id: string,
  type: string,
}

export type Navigator = {
  push: NavigatorParams => void,
  pop: () => void,
  popToRoot: () => void,
  showModal: NavigatorParams => void,
  dismissModal: () => void,
  dismissAllModals: () => void,
  toggleNavBar: ({ to: 'hidden' | 'shown', animated?: boolean }) => void,
  setStyle: Object => void,
}
