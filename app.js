const express = require('express')
const app = express()

app.get('/hello/:name', function (req, res) {
  let name = req.params.name;
  res.send(`Hello there, ${ name }!`)
})


app.get('/goodbye', function (req, res) {
  res.send('See you later!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
