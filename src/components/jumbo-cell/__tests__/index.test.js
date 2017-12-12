import renderer from 'react-test-renderer'
import React from 'react'

import JumboCell from '../index'

describe('jumbo-cell', () => {
  const title = 'foo'
  const description = 'bar'

  it('should render correctly with all props', () => {
    const tree = renderer.create(
      <JumboCell title={title} description={description} onPress={() => {}} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly without props', () => {
    const tree = renderer.create(<JumboCell />)
    expect(tree).toMatchSnapshot()
  })
})
