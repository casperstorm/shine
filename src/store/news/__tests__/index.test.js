import _ from 'lodash'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import reducer, { initialState } from '../reducer'
import { Greetings } from '../../../utils/greetings'
import * as selectors from '../../selectors'
import { actionTypes, itemsFetch, refreshDate, greetings } from '../actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(reducer(undefined, { type: 'NOT_EXISTING' })).toEqual(initialState)
  })

  it(`should respond to itemsFetch action`, () => {
    const action = { type: actionTypes.NEWS_FETCH, value: [] }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      items: [],
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

  it(`should respond to greetings action`, () => {
    const action = greetings()
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      greetings: Greetings,
    })
  })
})

describe('actions', () => {
  it(`should fetch items correctly`, async () => {
    const items = [{ title: 'foobar' }]
    const store = mockStore({ items: [] })
    fetch.mockResponse(JSON.stringify({ results: items }))

    store.dispatch(itemsFetch()).then(() => {
      expect(store.getActions()).toEqual({
        type: actionTypes.NEWS_FETCH,
        value: items,
      })
    })
  })

  it(`should add new date`, () => {
    const date = new Date()
    expect(refreshDate(date)).toEqual({
      type: actionTypes.NEWS_DATE,
      value: date,
    })
  })

  it(`should have all greetings`, () => {
    const data = Greetings
    expect(greetings()).toEqual({
      type: actionTypes.NEWS_GREETINGS,
      value: data,
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

  it('should return items', () => {
    expect(selectors.sortedNewsItems(state)).toEqual(items)
  })

  it('should return date', () => {
    expect(selectors.newsUpdatedDate(state)).toEqual(date)
  })

  it('should return greeting', () => {
    expect(selectors.selectRandomGreetings(state)).toEqual(_.first(greetings))
  })
})
