import React, { useState } from 'react'

const GiphSearch = (props) => {

  const [query, setQuery] = useState('')

  const onChange = event => {
    setQuery(event.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    props.handleSearch(query)
  }
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <label>Search for Giphs:</label>
        <input name="query" type="text" onChange={ onChange } value={ query }  />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default GiphSearch
