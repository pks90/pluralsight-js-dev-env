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