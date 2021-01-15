import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import GiphSearch from './GiphSearch'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('GiphSearch', () => {
  const giphSearch = shallow(<GiphSearch />)

  it('renders properly', () => {
    expect(giphSearch).toMatchSnapshot()
  })
})