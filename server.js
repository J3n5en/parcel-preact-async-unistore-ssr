const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use('/public', express.static(__dirname + '/public'))

const orignHTML = fs.readFileSync(__dirname + '/public/index.html').toString()
const ssr = require('./src/ssr')
app.get('/', (req, res) => {
  const initData = { count: 0 }
  const ssrData = ssr(req.path, initData)
  const result = orignHTML
    .replace('<div id="app"></div>', ssrData.html)
    .replace('"${ STATE };"', JSON.stringify(ssrData.state).replace(/<|>/g, ''))
  res.send(result)
})

app.get('/users', (req, res) => {
  const initData = { count: 0 }
  const ssrData = ssr(req.path, initData)
  const result = orignHTML
    .replace('<div id="app"></div>', ssrData.html)
    .replace('"${ STATE };"', JSON.stringify(ssrData.state).replace(/<|>/g, ''))
  res.send(result)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Preact Server start on ${PORT}`)
})
