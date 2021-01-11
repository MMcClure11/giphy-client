const BASE_URL = 'http://localhost:3000/api/v1'
const USER_URL = `${BASE_URL}/users`

export const  getUsers = () => {
  return fetch(USER_URL)
  .then( res => res.json())
}