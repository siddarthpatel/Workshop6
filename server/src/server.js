var reverseString = require('./util.js');

var bodyParser = require('body-parser');

var express = require('express');

var app = express();

app.use(bodyParser.text());

app.use(express.static('../client/build'));

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
