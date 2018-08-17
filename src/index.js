/* eslint-disable */  // --> OFF

import './index.css'
import {getUsers} from './api/userApi'

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = ''

  result.forEach(element => {
    usersBody+= `<tr>
    <td><a href='#' data-id='${element.id}' class='deleteUser'>Delete</a></td>
    <td>${element.id}</td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    </tr>` //eslint-disable-line
  })

  global.document.getElementById('users').innerHTML = usersBody
})
