import reducer, { initialState } from '../reducer'
import { greetings, updatedDate } from '../actions'
import { Greetings } from '../../../utils/greetings'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it(`should respond to greetings action`, () => {
    const action = greetings()
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      greetings: Greetings,
    })
  })

  it(`should respond to updatedDate action`, () => {
    const date = new Date()
    const action = updatedDate(date)
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      date: date,
    })
  })
})
