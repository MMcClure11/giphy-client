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