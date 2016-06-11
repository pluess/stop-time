var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT ? process.env.PORT : 80;
console.log(port);

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
