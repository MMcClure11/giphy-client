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

  // describe('when typing into the search input', () => {
  //   const query = 'puppies'

  //   beforeEach(() => {
  //     giphSearch.find('.input-query').simulate('change', { target: { value: query } })
  //   })

  //   it('updates the person in `state`', () => {
  //     expect(giphSearch.state().query).toEqual(query)
  //   })
  // })
  //Turns out you cannot call .state() on a shallow render for anything other than a class component
  //Stack Overflows say that you shouldn't really be worried about testing state
  //but focused on its render effects
})