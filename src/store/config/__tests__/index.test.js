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

  it(`should respond to [ setNewsToken ] action`, () => {
    const action = { type: actionTypes.CONFIG_SET_NEWS_TOKEN, value: '123' }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      tokens: {
        news: '123',
      },
    })
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

// describe('actions', () => {
//   it(`should change theme correctly`, async () => {
//     const theme = 'pink'
//     const action = { type: actionTypes.THEME_CHANGE, value: theme }

//     expect(change(theme)).toEqual(action)
//   })
// })

// describe('selector', () => {
//   // const state = {
//   //   current: 'black',
//   //   all: ['white', 'black', 'pink'],
//   // }

//   it('should return items', () => {
//     expect(true)
//     // expect(selectors.currentTheme(state)).toEqual('pink')
//   })
// })
