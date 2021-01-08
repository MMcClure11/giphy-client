import React, { useState } from 'react'

const GiphSearch = () => {

  const [query, setQuery] = useState('')

  const onChange = event => {
    setQuery(event.target.value)
  }
console.log(query)
  return (
    <div>
      <form>
        <label>Search for Giphs:</label>
        <input name="query" type="text" onChange={ onChange } value={ query }  />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default GiphSearch
