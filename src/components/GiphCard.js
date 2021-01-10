import React from 'react'

const GiphCard = (props) => {
  
  return (
    <>
      <h3>{ props.giph.title }</h3>
      <img src={ props.giph.images.original.url} alt={ props.giph.title} />
      <form >
        <label>Username:</label>
        <input name="username" type="text"   />
        <button type="submit">Favorite</button>
      </form>
    </>
  )
}

export default GiphCard
