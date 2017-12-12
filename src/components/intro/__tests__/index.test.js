import renderer from 'react-test-renderer'
import React from 'react'

import Intro from '../index'

describe('intro', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Intro onEnd={() => {}} />)
    expect(tree).toMatchSnapshot()
  })
})
