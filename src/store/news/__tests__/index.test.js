import reducer, { initialState } from '../reducer'
import { newsGreetings, newsDate } from '../actions'
import { Greetings } from '../../../utils/greetings'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  // it(`should respond to newsFetch action`, () => {
  //   const action1 = newsFetch()
  //   expect(reducer(undefined, action1)).toEqual({
  //     ...initialState,
  //     data: [{ foo: 'bar' }],
  //   })
  // })

  it(`should respond to newsGreetings action`, () => {
    const action = newsGreetings()
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      greetings: Greetings,
    })
  })

  it(`should respond to newsDate action`, () => {
    const date = new Date()
    const action3 = newsDate(date)
    expect(reducer(undefined, action3)).toEqual({
      ...initialState,
      date: date,
    })
  })
})
