import reducer, { initialState } from '../reducer'
import * as selectors from '../../selectors'
import { actionTypes } from '../actions'

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
})

describe('actions', () => {
  // TODO:
  // it(`should fetch items correctly`, async () => {
  //   const items = [{ title: 'foobar' }]
  //   const store = mockStore({ items: [] })
  //   fetch.mockResponse(JSON.stringify({ results: items }))
  //   store.dispatch(itemsFetch()).then(() => {
  //     expect(store.getActions()).toEqual({
  //       type: actionTypes.NEWS_FETCH,
  //       value: items,
  //     })
  //   })
  // })
})

describe('selector', () => {
  const date = new Date()
  const items = [{ foo: 'bar' }]
  const state = {
    news: {
      date: date,
      items: items,
    },
  }

  it('should return items', () => {
    expect(selectors.sortedNewsItems(state)).toEqual(items)
  })
})
