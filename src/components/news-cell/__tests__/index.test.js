import renderer from 'react-test-renderer'
import React from 'react'

import NewsCell from '../index'

describe('news-cell', () => {
  const title = 'foo'
  const published = '2m'
  const currencies = [
    { code: 'BTC', title: 'BTC' },
    { code: 'VTC', title: 'VTC' },
    { code: 'GRS', title: 'GRS' },
  ]
  const votes = { important: 1, negative: 2, positive: 3 }

  it('should render correctly with all props', () => {
    const tree = renderer.create(
      <NewsCell
        title={title}
        published={published}
        currencies={currencies}
        votes={votes}
        onPress={() => {}}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
