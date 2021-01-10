import React from 'react'
import { NavLink } from 'react-router-dom'

const UserList = (props) => {

  console.log(props)
  
  return (
    <div>
      <h4>User Favorites</h4>
      {props.users && props.users.map(user => <li key={ user.username }><NavLink to={`/users/${user.id}`} >{user.username}</NavLink></li>)}
    </div>
  )
}

export default UserList
