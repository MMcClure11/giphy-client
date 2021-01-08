import React, { useState } from 'react'
import GiphList from '../components/GiphList'
import GiphSearch from '../components/GiphSearch'

const GiphListContainer = () => {

  const [giphs, setGiphs] = useState([])

  const handleSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
    .then(res => res.json())
    .then(data => setGiphs(data))
  }

  return (
    <div>
      <GiphSearch handleSearch={ handleSearch } />
      <GiphList giphs={ giphs } />
    </div>
  )
}

export default GiphListContainer
