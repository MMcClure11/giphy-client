import React from 'react'
import GiphCard from './GiphCard'

const GiphList = (props) => {
  
  return (
    <div>
      <h2>Gifs from Giphy!</h2>
      { props.giphs.data && props.giphs.data.map( giph => <GiphCard key={giph.id} giph={ giph } handleFavorite={ props.handleFavorite }/>)}
    </div>
  )
}

export default GiphList
