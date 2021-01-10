import React from 'react'

function UserFavorites(props) {
  const id = props.match.params.id
  return (
    <div>
      <h2>User with id of { id } and their favorite gifs</h2>
    </div>
  )
}

export default UserFavorites
