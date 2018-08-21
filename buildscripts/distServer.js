import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

/* elint-disable no-console */
const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

// sample api call data
app.get('/users', function (req, res) {
  // Hard coded for simplicity
  res.json([
    { 'id': 1, 'firstName': 'P', 'lastName': 'K' },
    { 'id': 2, 'firstName': 'M', 'lastName': 'K' },
    { 'id': 3, 'firstName': 'S', 'lastName': 'K' }
  ])
})

// set up routing
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// set up listening
app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
