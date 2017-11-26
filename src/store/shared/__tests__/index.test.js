import { WELCOME_MESSAGE } from '../types'
import reducer, { initialState } from '../reducer'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { welcome: null })).toEqual(initialState)
  })

  it(`should respond to action with type '${WELCOME_MESSAGE}'`, () => {
    const welcome = 'foobaz'
    const action = { type: WELCOME_MESSAGE, data: welcome }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      welcome: welcome,
    })
  })
})
