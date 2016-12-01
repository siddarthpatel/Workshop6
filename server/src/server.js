var reverseString = require('./util.js');

var bodyParser = require('body-parser');

var express = require('express');

var app = express();

app.use(bodyParser.text());

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});

app.post('/reverse', function(req, res){

  if (typeof(req.body) === 'string'){
    var reversed = reverseString(req.body);
    res.send(reversed);
  }else{
    res.status(400).end()
  }
});
