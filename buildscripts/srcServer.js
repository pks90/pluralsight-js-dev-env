import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

// use tells express other things we want to use
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

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
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

// set up listening
app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
