var express = require('express');
var path = require('path');
var app = express();

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'www')));

app.listen(1337, function () {
  console.log('please visit http://127.0.0.1:1337');
});