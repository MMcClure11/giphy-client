import React, { useState } from 'react'

const GiphCard = (props) => {

  const [username, setUsername] = useState('')

  const onChange = event => {
    setUsername(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    props.handleFavorite({username: username, title: props.giph.title, url: props.giph.images.original.url})
    setUsername('')
  }

  return (
    <>
      <h3>{ props.giph.title }</h3>
      <img src={ props.giph.images.original.url} alt={ props.giph.title} />
      <form onSubmit={ onSubmit }>
        <label>Username:</label>
        <input name="username" type="text" onChange={ onChange } value={ username }  />
        <button type="submit">Favorite</button>
      </form>
    </>
  )
}

export default GiphCard
