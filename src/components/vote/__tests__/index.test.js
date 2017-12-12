import renderer from 'react-test-renderer'
import React from 'react'

import Vote from '../index'

describe('vote', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Vote title={'foo'} type={'positive'} />)
    expect(tree).toMatchSnapshot()
  })
})
