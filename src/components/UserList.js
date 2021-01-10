import React from 'react'

const UserList = (props) => {
  console.log(props)
  return (
    <div>
      <h4>User Favorites</h4>
      {props.users && props.users.map(user => <li key={ user.username }>{user.username}: { user.title }</li>)}
    </div>
  )
}

export default UserList
