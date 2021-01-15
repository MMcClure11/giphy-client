import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import GiphListContainer from './GiphListContainer'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('GiphListContainer', () => {
  const giphListContainer = shallow(<GiphListContainer />)

  it('renders correctly', () => {
    expect(giphListContainer).toMatchSnapshot()
  })

  it('initializes the `state` with an empty list of giphs', () => {
    expect(giphListContainer.state().giphs).toEqual([])
  })
})