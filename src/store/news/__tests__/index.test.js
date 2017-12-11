import _ from 'lodash'

import reducer, { initialState } from '../reducer'
import { greetings, refreshDate } from '../actions'
import { Greetings } from '../../../utils/greetings'
import * as selectors from '../../selectors'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(reducer(undefined, { type: 'NOT_EXISTING' })).toEqual(initialState)
  })

  it(`should respond to greetings action`, () => {
    const action = greetings()
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      greetings: Greetings,
    })
  })

  it(`should respond to refreshDate action`, () => {
    const date = new Date()
    const action = refreshDate(date)
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      date: date,
    })
  })
})

describe('selector', () => {
  const date = new Date()
  const items = [{ foo: 'bar' }]
  const greetings = ['foobar']
  const state = {
    news: {
      date: date,
      items: items,
      greetings: greetings,
    },
  }

  it('should return greeting', () => {
    expect(selectors.selectRandomGreetings(state)).toEqual(_.first(greetings))
  })

  it('should return date', () => {
    expect(selectors.newsUpdatedDate(state)).toEqual(date)
  })

  it('should return items', () => {
    expect(selectors.sortedNewsItems(state)).toEqual(items)
  })
})
