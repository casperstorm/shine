import renderer from 'react-test-renderer'
import React from 'react'

import FadeView from '../index'

describe('fade-view', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<FadeView />)
    expect(tree).toMatchSnapshot()
  })
})
