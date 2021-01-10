import React, { Component } from 'react'

export default class UserFavorites extends Component {

  state = {
    username: '',
    giphs: []
  }

  componentDidMount() {
    return fetch(`http://localhost:3000/api/v1/users/${this.props.match.params.id}`)
    .then( res => res.json())
    .then( data => this.setState(data))
  }
  render() {
    
    return (
      <div>
        <h2>{this.state.username}'s Favorites</h2>
        {this.state.giphs.map( giph =>  
          <div key={ giph.id }>
            <h3>{ giph.title }</h3>
            <img src={ giph.url} alt={ giph.title} />
          </div>)}
      </div>
    )
  }
}


// import React, { useState, useEffect } from 'react'

// const UserFavorites = (props) => {
//   console.log(props)

//   const [user, setUser] = useState({})

//   useEffect(()=> {
//     return fetch('http://localhost:3000/api/v1/users')
//     .then( res => res.json())
//     .then( data => setUser(data))
//   })
// console.log(user)
//   const id = props.match.params.id

//   return (
//     <div>
//       <h2>User with id of { id } and their favorite gifs</h2>
//     </div>
//   )
// }

// export default UserFavorites
