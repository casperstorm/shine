import reducer, { initialState } from '../reducer'
// import * as selectors from '../../selectors'
import { actionTypes } from '../actions'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(reducer(undefined, { type: 'NOT_EXISTING' })).toEqual(initialState)
  })

  it(`should respond to [ setTheme ] action`, () => {
    const action = { type: actionTypes.CONFIG_SET_THEME, value: 'black' }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      theme: {
        current: 'black',
      },
    })
  })
})
