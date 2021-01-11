import React, { Component } from 'react'
import GiphList from '../components/GiphList'
import GiphSearch from '../components/GiphSearch'
import UserList from '../components/UserList'
import { newFavGiph } from '../services/giph'


export default class GiphListContainer extends Component {

  state = {
    giphs: [],
    users: []
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    return fetch('http://localhost:3000/api/v1/users')
    .then( res => res.json())
    .then( users => this.setState({users: users}))
  }

  handleSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
    .then(res => res.json())
    .then(data => this.setState({giphs: data}))
  }

  handleFavorite = (obj) => {
    newFavGiph(obj)
    .then(user => {
      this.getUsers()
    })
    .catch((error) => {
      console.log('Error:', error)
    })
    }

  render() {
    return (
      <div>
        <UserList users={ this.state.users } />
        <GiphSearch handleSearch={ this.handleSearch } />
        <GiphList giphs={ this.state.giphs } handleFavorite={ this.handleFavorite }/>
      </div>
    )
  }
}


// import React, { useState, useEffect } from 'react'
// import GiphList from '../components/GiphList'
// import GiphSearch from '../components/GiphSearch'
// import UserList from '../components/UserList'

// const GiphListContainer = () => {

//   const [giphs, setGiphs] = useState([])
//   const [users, setUsers] = useState([])

//   const BASE_URL = 'http://localhost:3000/api/v1/'
//   const FAVORITE_URL = `${BASE_URL}/favorites`

//   useEffect(() => {
//     return fetch('http://localhost:3000/api/v1/users')
//     .then( res => res.json())
//     .then( users => setUsers(users))
//   })

//   const handleSearch = (query) => {
//     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
//     .then(res => res.json())
//     .then(data => setGiphs(data))
//   }

//   const handleFavorite = (obj) => {
//     setUsers([...users, obj])
//     // return fetch(FAVORITE_URL, {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(obj),
//     // })
//     // .then(res => res.json())
//     // .then(favorite => {
//     //   console.log(favorite)
//     // })
//     // .catch((error) => {
//     //   console.erorr('Error:', error)
//     // })
//   }

//   return (
//     <div>
//       <UserList users={ users } />
//       <GiphSearch handleSearch={ handleSearch } />
//       <GiphList giphs={ giphs } handleFavorite={ handleFavorite }/>
//     </div>
//   )
// }

// export default GiphListContainer
