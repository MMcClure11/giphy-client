const BASE_URL = 'http://localhost:3000/api/v1'
const GIPH_URL = `${BASE_URL}/giphs`

export const newFavGiph = (obj) => {
  return fetch(GIPH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  .then(res => res.json())
}

export const searchGiphs = (query) => {
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
    .then(res => res.json())
}