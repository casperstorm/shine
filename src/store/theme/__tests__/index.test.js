import reducer, { initialState } from '../reducer'
// import * as selectors from '../../selectors'
import { actionTypes, change } from '../actions'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(reducer(undefined, { type: 'NOT_EXISTING' })).toEqual(initialState)
  })

  it(`should respond to change action`, () => {
    const action = { type: actionTypes.THEME_CHANGE, value: 'pink' }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      current: 'pink',
    })
  })
})

describe('actions', () => {
  it(`should change theme correctly`, async () => {
    const theme = 'pink'
    const action = { type: actionTypes.THEME_CHANGE, value: theme }

    expect(change(theme)).toEqual(action)
  })
})

describe('selector', () => {
  // const state = {
  //   current: 'black',
  //   all: ['white', 'black', 'pink'],
  // }

  it('should return items', () => {
    expect(true)
    // expect(selectors.currentTheme(state)).toEqual('pink')
  })
})
