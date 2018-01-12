/* @flow */
/* eslint-disable import/named */
import type { Store as ReduxStore } from 'redux'

import type { State as _State } from './reducers'
import type { Action as ActionNews } from './news/actions'
import type { Action as ActionTheme } from './theme/actions'

export type State = _State
export type Action = ActionNews | ActionTheme
export type Store = ReduxStore<State, Action>

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
export type GetState = () => State
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => mixed
export type PromiseAction = Promise<Action>
export type ThunkActionCreator<Args> = Args => ThunkAction

export type Theme = 'white' | 'black' | 'pink'
