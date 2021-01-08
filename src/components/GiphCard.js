import React from 'react'

const GiphCard = (props) => {
  
  return (
    <div>
      <h3>{ props.giph.title }</h3>
      <img src={ props.giph.images.original.url} alt={ props.giph.title} />
    </div>
  )
}

export default GiphCard
