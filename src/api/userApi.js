import 'whatwg-fetch'

export function getUsers () {
  return get('users')
}

function get (url) {
  return fetch(url).then(onSuccess, onError) //eslint-disable-line
}

function onSuccess (response) {
  return response.json()
}

function onError (error) {
  console.log(error)
}
