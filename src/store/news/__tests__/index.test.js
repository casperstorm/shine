import { NEWS_UPDATED } from '../types'
import reducer, { initialState } from '../reducer'

it('should return initial state', () => {
  expect(reducer(undefined, { data: [], updated: null })).toEqual(initialState)
})

it(`should respond to action with type '${NEWS_UPDATED}'`, () => {
  const date = new Date()
  const action = { type: NEWS_UPDATED, data: date }
  expect(reducer(undefined, action)).toEqual({
    ...initialState,
    updated: date,
  })
})
