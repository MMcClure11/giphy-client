import React, { useState } from 'react'

const GiphCard = (props) => {

  const [username, setUsername] = useState('')

  const onChange = event => {
    setUsername(event.target.value)
  }
  console.log(username)
  return (
    <>
      <h3>{ props.giph.title }</h3>
      <img src={ props.giph.images.original.url} alt={ props.giph.title} />
      <form >
        <label>Username:</label>
        <input name="username" type="text" onChange={ onChange } value={ username }  />
        <button type="submit">Favorite</button>
      </form>
    </>
  )
}

export default GiphCard
