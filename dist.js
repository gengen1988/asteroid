var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(1337, function () {
  console.log('please visit http://127.0.0.1:1337');
});