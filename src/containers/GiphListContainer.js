import React, { useState } from 'react'
import GiphList from '../components/GiphList'
import GiphSearch from '../components/GiphSearch'
import UserList from '../components/UserList'

const GiphListContainer = () => {

  const [giphs, setGiphs] = useState([])
  const [users, setUsers] = useState([])

  const BASE_URL = 'http://localhost:3000/api/v1/'
  const FAVORITE_URL = `${BASE_URL}/favorites`

  const handleSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
    .then(res => res.json())
    .then(data => setGiphs(data))
  }

  const handleFavorite = (obj) => {
    setUsers([...users, obj])
    // return fetch(FAVORITE_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(obj),
    // })
    // .then(res => res.json())
    // .then(favorite => {
    //   console.log(favorite)
    // })
    // .catch((error) => {
    //   console.erorr('Error:', error)
    // })
  }

  return (
    <div>
      <UserList users={users} />
      <GiphSearch handleSearch={ handleSearch } />
      <GiphList giphs={ giphs } handleFavorite={ handleFavorite }/>
    </div>
  )
}

export default GiphListContainer
