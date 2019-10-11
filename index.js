var express = require('express')
var app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('you are now listening at port ', port);
})