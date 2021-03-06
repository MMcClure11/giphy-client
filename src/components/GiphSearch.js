import React, { useState } from 'react'

const GiphSearch = (props) => {

  const [query, setQuery] = useState('')

  const onChange = event => {
    setQuery(event.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    props.handleSearch(query)
    setQuery('')
  }
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <label>Search for Giphs:</label>
        <input className='input-query' name="query" type="text" onChange={ onChange } value={ query }  />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default GiphSearch
