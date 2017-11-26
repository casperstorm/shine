import * as Types from './types'

const sort = (a, b) =>
  new Date(b.published_at).getTime() - new Date(a.published_at).getTime()

const load = () => (dispatch, getState) =>
  fetch('https://us-central1-cryptohack-9614a.cloudfunctions.net/app/api/getnews')
    .then(response => response.json())
    .then(dispatch(updated(new Date())))
    .then(json => {
      dispatch({ type: Types.NEWS_LOAD, data: json.news.sort(sort) })
    })

const updated = date => (dispatch, getState) =>
  dispatch({ type: Types.NEWS_UPDATED, data: date })

export { load, updated }
