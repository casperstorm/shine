import renderer from 'react-test-renderer'
import React from 'react'

import Tag from '../index'

describe('tag', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Tag title={'foo'} />)
    expect(tree).toMatchSnapshot()
  })
})
